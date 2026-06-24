import fs from "node:fs";
import path from "node:path";

const ROOT_DIR = process.cwd();
const TEXT_EXTENSIONS = new Set([
  ".cjs",
  ".js",
  ".jsx",
  ".json",
  ".md",
  ".mjs",
  ".ts",
  ".tsx",
  ".txt",
]);

const oldDeploymentDomains = [
  "norway-umber.vercel.app",
  "norway-git-main-olaitechs-projects.vercel.app",
];

const aiReadableFiles = [
  { label: "llms.txt", candidates: ["llms.txt", "public/llms.txt"] },
  { label: "llms-full.txt", candidates: ["llms-full.txt", "public/llms-full.txt"] },
];

const aeoPageChecks = [
  {
    file: "app/guides/norway-ferry-guide-for-tourists/page.tsx",
    canonicalPath: '/guides/norway-ferry-guide-for-tourists',
  },
  {
    file: "app/guides/how-to-see-the-northern-lights-in-norway/page.tsx",
    canonicalPath: '/guides/how-to-see-the-northern-lights-in-norway',
  },
  {
    file: "app/guides/how-to-travel-northern-norway-without-a-car/page.tsx",
    canonicalPath: '/guides/how-to-travel-northern-norway-without-a-car',
  },
];

const faqHookChecks = [
  {
    file: "src/components/guides/GuideArticleLayout.tsx",
    patterns: ["createFaqJsonLd", "faqItems"],
  },
  {
    file: "src/lib/seo/jsonLd.tsx",
    patterns: ["createFaqJsonLd", '"FAQPage"'],
  },
];

const coreAeoPages = [
  "app/routes/page.tsx",
  "app/guides/page.tsx",
  "app/northern-lights-norway/page.tsx",
  "app/best-time-to-visit-norway/page.tsx",
  "app/responsible-travel/page.tsx",
  "app/map/page.tsx",
];

const placeholderPattern = /placeholder|TODO|lorem|replace this/i;

let errors = 0;
let warnings = 0;

function ok(message) {
  console.log(`[ok] ${message}`);
}

function warn(message) {
  warnings += 1;
  console.warn(`[warn] ${message}`);
}

function error(message) {
  errors += 1;
  console.error(`[error] ${message}`);
}

function resolvePath(relativePath) {
  return path.join(ROOT_DIR, relativePath);
}

function readTextFile(relativePath) {
  const absolutePath = resolvePath(relativePath);
  return fs.existsSync(absolutePath) ? fs.readFileSync(absolutePath, "utf8") : null;
}

function findExistingPath(candidates) {
  return candidates.find((candidate) => fs.existsSync(resolvePath(candidate))) ?? null;
}

function assertFileExists(relativePath) {
  if (fs.existsSync(resolvePath(relativePath))) {
    ok(`${relativePath} exists`);
  } else {
    error(`${relativePath} is missing`);
  }
}

function assertContains(relativePath, patterns) {
  const source = readTextFile(relativePath);
  if (source === null) {
    error(`${relativePath} is missing`);
    return;
  }

  for (const pattern of patterns) {
    if (!source.includes(pattern)) {
      error(`${relativePath} is missing required text: ${pattern}`);
    } else {
      ok(`${relativePath} contains ${pattern}`);
    }
  }
}

function assertFileHasPlaceholderFreeCopy(relativePath) {
  const source = readTextFile(relativePath);
  if (source === null) {
    error(`${relativePath} is missing`);
    return;
  }

  const match = source.match(placeholderPattern);
  if (match) {
    error(`${relativePath} still contains placeholder-style copy: ${match[0]}`);
  } else {
    ok(`${relativePath} has no placeholder-style copy`);
  }
}

function collectTextFiles(relativeDir, results = []) {
  const absoluteDir = resolvePath(relativeDir);
  if (!fs.existsSync(absoluteDir)) {
    return results;
  }

  for (const entry of fs.readdirSync(absoluteDir, { withFileTypes: true })) {
    const nextRelativePath = path.join(relativeDir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === ".git" || entry.name === ".next" || entry.name === "node_modules") {
        continue;
      }

      collectTextFiles(nextRelativePath, results);
      continue;
    }

    if (TEXT_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      results.push(nextRelativePath);
    }
  }

  return results;
}

function scanForOldDomains() {
  const scannedFiles = [
    ...collectTextFiles("app"),
    ...collectTextFiles("src"),
    ...collectTextFiles("public"),
    ...["llms.txt", "llms-full.txt"].filter((file) => fs.existsSync(resolvePath(file))),
  ];

  const uniqueFiles = [...new Set(scannedFiles)];

  for (const relativePath of uniqueFiles) {
    const source = readTextFile(relativePath);
    if (source === null) {
      continue;
    }

    for (const oldDomain of oldDeploymentDomains) {
      if (source.includes(oldDomain)) {
        error(`${relativePath} still contains old deployment domain: ${oldDomain}`);
      }
    }
  }

  if (errors === 0) {
    ok("No old deployment domains found in live source files");
  }
}

console.log("AEO foundation check\n");

console.log("AI-readable files");
for (const entry of aiReadableFiles) {
  const found = findExistingPath(entry.candidates);
  if (found) {
    ok(`${entry.label} exists at ${found}`);
    if (found.startsWith("public/")) {
      warn(`${entry.label} is only present in public/`);
    } else if (found.startsWith("llms")) {
      warn(`${entry.label} is only present at the project root`);
    }
  } else {
    error(`${entry.label} is missing from root or public`);
  }
}

console.log("\nPriority guide AEO elements");
for (const check of aeoPageChecks) {
  assertContains(check.file, [
    "AnswerBlock",
    "TrustBox",
    "faqItems",
    `canonicalPath="${check.canonicalPath}"`,
  ]);
}

for (const check of faqHookChecks) {
  assertContains(check.file, check.patterns);
}

console.log("\nCore AEO pages");
for (const file of coreAeoPages) {
  assertFileExists(file);
}

console.log("\nPlaceholder safety");
for (const file of ["src/data/seo-pages.ts", "src/data/journal-articles.ts"]) {
  assertFileHasPlaceholderFreeCopy(file);
}

console.log("\nOld domain safety");
scanForOldDomains();

console.log("\nSummary");
console.log(`Warnings: ${warnings}`);
console.log(`Errors: ${errors}`);

if (errors > 0) {
  process.exitCode = 1;
}
