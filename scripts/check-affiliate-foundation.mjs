import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
const require = createRequire(import.meta.url);
// Isolated development fixtures only. Reserved .invalid URLs cannot be live EPN links.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

// Compile the actual source with the installed TypeScript; no test dependencies or routes.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const resolveFilename = Module._resolveFilename;
Module._resolveFilename = function (request, ...args) {
  return resolveFilename.call(this, request.startsWith("@/") ? path.join(root, request.slice(2)) : request, ...args);
};
for (const extension of [".ts", ".tsx"]) {
  require.extensions[extension] = function (module, filename) {
    const { outputText } = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
    });
    module._compile(outputText, filename);
  };
}
const { AffiliateProductCard } = require("../src/components/affiliate/AffiliateProductCard.tsx");
const { AffiliateCollectionCard } = require("../src/components/affiliate/AffiliateCollectionCard.tsx");
const { AffiliateDisclosure } = require("../src/components/affiliate/AffiliateDisclosure.tsx");
const { affiliateItems, getAffiliateItemsByCollection } = require("../src/data/partners/affiliate.ts");
const product = {
  id: "mock-product", type: "product", name: "Development product", description: "Development copy only.",
  affiliateUrl: "https://affiliate.invalid/item?customid=mock%2Ftracking&campid=mock",
  customId: "mock/tracking", collections: ["road-trip", "outdoors"], status: "active",
};
const collection = { ...product, id: "mock-collection", type: "collection", name: "Development selection" };
const render = (Component, props) => renderToStaticMarkup(React.createElement(Component, props));
const html = render(AffiliateProductCard, { item: product });
assert.ok(html.includes('href="https://affiliate.invalid/item?customid=mock%2Ftracking&amp;campid=mock"'));
assert.ok(html.includes('rel="sponsored nofollow noopener noreferrer"'));
assert.ok(html.includes('target="_blank"'));
assert.ok(html.includes("opens in a new tab"));
assert.ok(html.includes("Affiliate link"));
assert.ok(!html.includes("<img"));
assert.equal(render(AffiliateProductCard, { item: { ...product, status: "disabled" } }), "");
assert.equal(render(AffiliateCollectionCard, { item: { ...collection, status: "disabled" } }), "");
assert.ok(render(AffiliateCollectionCard, { item: collection }).includes("Browse a selection on eBay."));
assert.ok(!render(AffiliateProductCard, { item: product, showDisclosure: false }).includes("Affiliate link"));
assert.ok(render(AffiliateDisclosure, {}).includes("no extra cost"));
assert.ok(render(AffiliateProductCard, { item: { ...product, disclosure: "Custom disclosure", ctaLabel: "Custom CTA", hook: "Editorial hook", badge: "Alternative" }, headingLevel: 2 }).includes("<h2"));
assert.ok(render(AffiliateProductCard, { item: { ...product, imageUrl: "/development-only.png", imageAlt: "Development image" } }).includes('alt="Development image"'));
assert.deepEqual(affiliateItems, []);
const records = [product, collection, { ...product, status: "disabled" }];
assert.equal(getAffiliateItemsByCollection("road-trip", records).length, 2);
assert.equal(getAffiliateItemsByCollection("outdoors", records).length, 2);
assert.equal(getAffiliateItemsByCollection("unknown", records).length, 0);
console.log("Affiliate foundation: isolated rendering, tracking, disclosure, images and filtering passed.");

