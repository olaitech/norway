const BASE_ORIGIN = process.env.CHECK_ROUTES_ORIGIN ?? "http://localhost:3000";
// Must stay aligned with src/config/site.ts.
const SITE_URL = "https://tripsnorway.com";
const CANONICAL_HOST = new URL(SITE_URL).hostname.toLowerCase();
const LEGACY_DEPLOYMENT_DOMAINS = [
  "norway-umber.vercel.app",
  "norway-git-main-olaitechs-projects.vercel.app",
];

const expectedPublicRoutes = [
  "/",
  "/destinations",
  "/destinations/lofoten-islands",
  "/destinations/senja",
  "/destinations/helgeland-coast",
  "/destinations/tromso",
  "/routes",
  "/routes/helgeland-coast-road-trip",
  "/routes/lofoten-road-trip",
  "/journal",
  "/map",
  "/about",
  "/responsible-travel",
  "/contact",
  "/privacy",
  "/privacy-settings",
  "/terms",
  "/best-time-to-visit-norway",
  "/northern-lights-norway",
  "/norway-road-trip-routes",
  "/norway-itinerary-7-days",
  "/norway-itinerary-10-days",
  "/fjords-of-norway",
  "/guides/best-hikes-in-senja",
];

const expectedRedirects = new Map([
  ["/norway-road-trip-routes", "/routes"],
  ["/norway-itinerary-7-days", "/routes/lofoten-road-trip"],
  ["/norway-itinerary-10-days", "/routes/helgeland-coast-road-trip"],
]);

const legacyRedirects = new Map([
  ["/lofoten", "/destinations/lofoten-islands"],
  ["/lofoten-travel-guide", "/destinations/lofoten-islands"],
]);

const requiredSitemapRoutes = [
  "/",
  "/destinations",
  "/destinations/lofoten-islands",
  "/destinations/senja",
  "/destinations/helgeland-coast",
  "/destinations/tromso",
  "/routes",
  "/routes/helgeland-coast-road-trip",
  "/routes/lofoten-road-trip",
  "/journal",
  "/map",
  "/about",
  "/responsible-travel",
  "/contact",
  "/privacy",
  "/privacy-settings",
  "/terms",
  "/best-time-to-visit-norway",
  "/northern-lights-norway",
  "/fjords-of-norway",
  "/guides/best-hikes-in-senja",
];

let errors = 0;
let checks = 0;

function ok(message) {
  checks += 1;
  console.log(`[ok] ${message}`);
}

function fail(message) {
  checks += 1;
  errors += 1;
  console.error(`[error] ${message}`);
}

function normalizeLocation(location) {
  if (!location) {
    return null;
  }

  try {
    const resolved = new URL(location, BASE_ORIGIN);
    return `${resolved.pathname}${resolved.search}`;
  } catch {
    return location;
  }
}

async function fetchRoute(route) {
  const url = new URL(route, BASE_ORIGIN);
  return fetch(url, {
    method: "GET",
    redirect: "manual",
    headers: {
      accept: "text/html,*/*",
    },
  });
}

function validateStatus(route, response, expectedRedirectTarget = null) {
  if (expectedRedirectTarget) {
    if (![307, 308].includes(response.status)) {
      fail(`${route} expected redirect but returned HTTP ${response.status}`);
      return;
    }

    const location = normalizeLocation(response.headers.get("location"));
    if (location !== expectedRedirectTarget) {
      fail(
        `${route} redirects to ${location ?? "<missing>"} instead of ${expectedRedirectTarget}`,
      );
      return;
    }

    ok(`${route} redirects (${response.status}) to ${expectedRedirectTarget}`);
    return;
  }

  if (response.status !== 200) {
    fail(`${route} expected HTTP 200 but returned ${response.status}`);
    return;
  }

  ok(`${route} returned HTTP 200`);
}

function validateSitemapDomains(sitemapXml) {
  const escapedSiteUrl = SITE_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const vercelUrlMatches = sitemapXml.match(/https:\/\/[a-z0-9-]+\.vercel\.app/gi) ?? [];

  for (const match of vercelUrlMatches) {
    if (new URL(match).hostname.toLowerCase() !== CANONICAL_HOST) {
      fail(`Sitemap contains non-canonical Vercel domain: ${match}`);
    }
  }

  if (!new RegExp(escapedSiteUrl, "i").test(sitemapXml)) {
    fail(`Sitemap does not contain canonical base URL: ${SITE_URL}`);
  } else {
    ok(`Sitemap contains canonical base URL: ${SITE_URL}`);
  }

  for (const legacyDomain of LEGACY_DEPLOYMENT_DOMAINS) {
    if (sitemapXml.includes(legacyDomain)) {
      fail(`Sitemap still contains legacy deployment domain ${legacyDomain}`);
    } else {
      ok(`Sitemap does not contain legacy deployment domain ${legacyDomain}`);
    }
  }
}

function validateSitemapRoutes(sitemapXml) {
  for (const route of requiredSitemapRoutes) {
    const absolute = `${SITE_URL}${route}`;
    if (!sitemapXml.includes(absolute)) {
      fail(`Sitemap is missing required route: ${absolute}`);
    } else {
      ok(`Sitemap contains ${absolute}`);
    }
  }
}

async function run() {
  console.log(`Checking public routes against ${BASE_ORIGIN}\n`);

  for (const route of expectedPublicRoutes) {
    const response = await fetchRoute(route);
    validateStatus(route, response, expectedRedirects.get(route) ?? null);
  }

  console.log("\nChecking legacy Lofoten redirects");
  for (const [route, destination] of legacyRedirects) {
    const response = await fetchRoute(route);
    validateStatus(route, response, destination);
  }

  console.log("\nChecking robots.txt");
  const robotsResponse = await fetchRoute("/robots.txt");
  if (robotsResponse.status !== 200) {
    fail(`/robots.txt expected HTTP 200 but returned ${robotsResponse.status}`);
  } else {
    ok("/robots.txt returned HTTP 200");
    const robotsText = await robotsResponse.text();
    const expectedSitemapLine = `${SITE_URL}/sitemap.xml`;
    if (!robotsText.includes(expectedSitemapLine)) {
      fail(`/robots.txt missing sitemap URL ${expectedSitemapLine}`);
    } else {
      ok(`/robots.txt contains sitemap URL ${expectedSitemapLine}`);
    }
  }

  console.log("\nChecking sitemap.xml");
  const sitemapResponse = await fetchRoute("/sitemap.xml");
  if (sitemapResponse.status !== 200) {
    fail(`/sitemap.xml expected HTTP 200 but returned ${sitemapResponse.status}`);
  } else {
    ok("/sitemap.xml returned HTTP 200");
    const sitemapXml = await sitemapResponse.text();
    validateSitemapDomains(sitemapXml);
    validateSitemapRoutes(sitemapXml);
  }

  console.log("\nSummary");
  console.log(`Checks: ${checks}`);
  console.log(`Errors: ${errors}`);

  if (errors > 0) {
    process.exitCode = 1;
  }
}

run().catch((error) => {
  console.error("[error] Route check failed with an unhandled error.");
  console.error(error);
  process.exitCode = 1;
});
