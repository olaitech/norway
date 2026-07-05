import crypto from "node:crypto";

const ORIGIN = "https://tripsnorway.com";
const TIMEOUT_MS = 20000;

const ROUTES = [
  "/",
  "/fjords-of-norway",
  "/destinations/lofoten-islands",
  "/northern-lights-norway",
  "/guides/how-to-see-the-northern-lights-in-norway",
  "/routes",
  "/map",
  "/privacy",
  "/cookies",
  "/accessibility",
];

const USER_AGENTS = {
  googlebot: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  browser: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36",
};

function decodeHtmlEntities(value) {
  if (!value) {
    return "";
  }

  return value.replace(/&(#x[0-9a-fA-F]+|#\d+|amp|lt|gt|quot|apos|nbsp);/g, (match, entity) => {
    switch (entity) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return "\"";
      case "apos":
        return "'";
      case "nbsp":
        return " ";
      default: {
        const numeric = entity.startsWith("#x")
          ? Number.parseInt(entity.slice(2), 16)
          : Number.parseInt(entity.slice(1), 10);

        if (!Number.isFinite(numeric)) {
          return match;
        }

        try {
          return String.fromCodePoint(numeric);
        } catch {
          return match;
        }
      }
    }
  });
}

function normalizeText(value) {
  return decodeHtmlEntities(value).replace(/\s+/g, " ").trim();
}

function normalizeAttr(value) {
  return decodeHtmlEntities(value).trim();
}

function parseAttributes(openTag) {
  const attrs = {};
  const inner = openTag.replace(/^<\s*[^\s/>]+/i, "").replace(/\/?\s*>$/i, "");
  const attrRegex = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^>\s"']+)))?/g;
  let match;

  while ((match = attrRegex.exec(inner)) !== null) {
    const name = match[1].toLowerCase();
    const value = match[2] ?? match[3] ?? match[4] ?? "";
    attrs[name] = value;
  }

  return attrs;
}

function findFirstTag(html, tagName, predicate) {
  const tagRegex = new RegExp(`<${tagName}\\b[^>]*>`, "gi");
  let match;

  while ((match = tagRegex.exec(html)) !== null) {
    const attrs = parseAttributes(match[0]);

    if (!predicate || predicate(attrs)) {
      return { tag: match[0], attrs };
    }
  }

  return null;
}

function resolveUrl(value, baseUrl) {
  const normalized = normalizeAttr(value);

  if (!normalized) {
    return "";
  }

  try {
    return new URL(normalized, baseUrl).href;
  } catch {
    return normalized;
  }
}

function extractTitle(html) {
  const match = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);

  return match ? normalizeText(match[1]) : "";
}

function extractMetaContent(html, matcher, { baseUrl, resolveAsUrl = false } = {}) {
  const found = findFirstTag(html, "meta", matcher);

  if (!found) {
    return "";
  }

  const content = found.attrs.content ?? "";

  if (resolveAsUrl) {
    return resolveUrl(content, baseUrl);
  }

  return normalizeText(content);
}

function extractCanonical(html, baseUrl) {
  const found = findFirstTag(html, "link", (attrs) => {
    const rel = normalizeAttr(attrs.rel).toLowerCase().split(/\s+/).filter(Boolean);
    return rel.includes("canonical") && Boolean(attrs.href);
  });

  return found ? resolveUrl(found.attrs.href, baseUrl) : "";
}

function countJsonLdScripts(html) {
  const regex = /<script\b(?=[^>]*\btype\s*=\s*(?:"application\/ld\+json"|'application\/ld\+json'|application\/ld\+json))[^>]*>/gi;
  const matches = html.match(regex);

  return matches ? matches.length : 0;
}

function formatValue(value) {
  return JSON.stringify(value ?? "");
}

function percentDelta(a, b) {
  const larger = Math.max(a, b);

  if (larger === 0) {
    return 0;
  }

  return (Math.abs(a - b) / larger) * 100;
}

async function fetchSnapshot(route, userAgent) {
  const url = new URL(route, ORIGIN).href;
  const response = await fetch(url, {
    method: "GET",
    redirect: "follow",
    headers: {
      "user-agent": userAgent,
      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });

  const bytes = Buffer.from(await response.arrayBuffer());
  const html = bytes.toString("utf8");

  return {
    status: response.status,
    title: extractTitle(html),
    description: extractMetaContent(html, (attrs) => {
      const name = normalizeAttr(attrs.name).toLowerCase();
      const property = normalizeAttr(attrs.property).toLowerCase();
      return name === "description" || property === "description";
    }),
    canonical: extractCanonical(html, response.url),
    ogTitle: extractMetaContent(html, (attrs) => normalizeAttr(attrs.property).toLowerCase() === "og:title"),
    ogDescription: extractMetaContent(html, (attrs) => normalizeAttr(attrs.property).toLowerCase() === "og:description"),
    ogImage: extractMetaContent(html, (attrs) => normalizeAttr(attrs.property).toLowerCase() === "og:image", {
      baseUrl: response.url,
      resolveAsUrl: true,
    }),
    jsonLdCount: countJsonLdScripts(html),
    htmlBytes: bytes.length,
    sha256: crypto.createHash("sha256").update(bytes).digest("hex"),
  };
}

function compareSnapshots(left, right) {
  const coreFields = ["status", "title", "description", "canonical", "jsonLdCount"];
  const coreMismatches = coreFields.filter((field) => left[field] !== right[field]);
  const exact = left.sha256 === right.sha256;
  const lengthDelta = percentDelta(left.htmlBytes, right.htmlBytes);
  const ogTitleMatch = left.ogTitle === right.ogTitle;
  const ogDescriptionMatch = left.ogDescription === right.ogDescription;
  const ogImageMatch = left.ogImage === right.ogImage;

  let result = "PASS";

  if (exact) {
    result = "PASS EXACT";
  } else if (coreMismatches.length > 0) {
    result = "FAIL";
  } else if (lengthDelta < 20) {
    result = "WARNING";
  }

  return {
    result,
    exact,
    lengthDelta,
    coreMismatches,
    ogTitleMatch,
    ogDescriptionMatch,
    ogImageMatch,
  };
}

function formatFetchLine(label, snapshot) {
  return [
    `${label}: status=${snapshot.status}`,
    `title=${formatValue(snapshot.title)}`,
    `description=${formatValue(snapshot.description)}`,
    `canonical=${formatValue(snapshot.canonical)}`,
    `og:title=${formatValue(snapshot.ogTitle)}`,
    `og:description=${formatValue(snapshot.ogDescription)}`,
    `og:image=${formatValue(snapshot.ogImage)}`,
    `ld+json=${snapshot.jsonLdCount}`,
    `bytes=${snapshot.htmlBytes}`,
    `sha256=${snapshot.sha256}`,
  ].join(" | ");
}

async function main() {
  console.log("Live crawlability check\n");

  const rows = await Promise.all(
    ROUTES.map(async (route) => {
      const [googlebot, browser] = await Promise.all([
        fetchSnapshot(route, USER_AGENTS.googlebot),
        fetchSnapshot(route, USER_AGENTS.browser),
      ]);

      return { route, googlebot, browser, comparison: compareSnapshots(googlebot, browser) };
    }),
  );

  let passExactCount = 0;
  let passCount = 0;
  let warningCount = 0;
  let failCount = 0;

  for (const row of rows) {
    const { route, googlebot, browser, comparison } = row;

    if (comparison.result === "PASS EXACT") {
      passExactCount += 1;
    } else if (comparison.result === "PASS") {
      passCount += 1;
    } else if (comparison.result === "WARNING") {
      warningCount += 1;
    } else {
      failCount += 1;
    }

    const coreLabel = comparison.coreMismatches.length > 0 ? comparison.coreMismatches.join(", ") : "match";

    console.log(route);
    console.log(`  ${formatFetchLine("googlebot", googlebot)}`);
    console.log(`  ${formatFetchLine("browser", browser)}`);
    console.log(
      `  compare: ${comparison.result}` +
        ` | core=${coreLabel}` +
        ` | og:title=${comparison.ogTitleMatch ? "match" : "diff"}` +
        ` | og:description=${comparison.ogDescriptionMatch ? "match" : "diff"}` +
        ` | og:image=${comparison.ogImageMatch ? "match" : "diff"}` +
        ` | length-delta=${comparison.lengthDelta.toFixed(2)}%` +
        ` | exact=${comparison.exact ? "yes" : "no"}`,
    );
    console.log("");
  }

  const overall = failCount > 0 ? "FAIL" : warningCount > 0 ? "WARNING" : passExactCount === ROUTES.length ? "PASS EXACT" : "PASS";

  console.log("Summary");
  console.log(`Overall: ${overall}`);
  console.log(`PASS EXACT: ${passExactCount}`);
  console.log(`PASS: ${passCount}`);
  console.log(`WARNING: ${warningCount}`);
  console.log(`FAIL: ${failCount}`);

  if (failCount > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error("Live crawlability check failed:");
  console.error(error instanceof Error ? error.stack || error.message : String(error));
  process.exitCode = 1;
});
