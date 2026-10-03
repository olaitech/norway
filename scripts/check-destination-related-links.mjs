import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import ts from "typescript";

function checkRelatedGuides(source, filename) {
  const file = ts.createSourceFile(filename, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const declarations = file.statements
    .filter(ts.isVariableStatement)
    .flatMap((statement) => [...statement.declarationList.declarations])
    .filter((declaration) => declaration.name.getText(file) === "relatedGuides");
  assert.equal(declarations.length, 1, `${filename}: expected one relatedGuides array`);
  let array = declarations[0].initializer;
  while (array && (ts.isAsExpression(array) || ts.isParenthesizedExpression(array) || ts.isSatisfiesExpression(array))) {
    array = array.expression;
  }
  assert.ok(array && ts.isArrayLiteralExpression(array), `${filename}: relatedGuides must be a literal array`);
  const hrefs = new Set();
  for (const item of array.elements) {
    assert.ok(ts.isObjectLiteralExpression(item), `${filename}: expected a literal related guide`);
    const properties = item.properties.filter((property) =>
      ts.isPropertyAssignment(property) && property.name.getText(file) === "href",
    );
    assert.equal(properties.length, 1, `${filename}: expected one literal href per guide`);
    const href = properties[0].initializer;
    assert.ok(ts.isStringLiteral(href) && href.text.length > 0, `${filename}: expected a nonempty literal href`);
    assert.ok(!hrefs.has(href.text), `${filename}: duplicate related-guide href ${href.text}`);
    hrefs.add(href.text);
  }
}

assert.doesNotThrow(() => checkRelatedGuides('const relatedGuides = [{ href: "/a" }, { href: "/b" }] as const;', "unique"));
assert.throws(() => checkRelatedGuides('const relatedGuides = [{ href: "/a" }, { href: "/a" }];', "duplicate"), /duplicate related-guide/);
assert.throws(() => checkRelatedGuides("const other = [];", "missing"), /expected one relatedGuides/);
assert.throws(() => checkRelatedGuides("const relatedGuides = getLinks();", "dynamic"), /literal array/);
assert.throws(() => checkRelatedGuides("const relatedGuides = [{ href: destination }];", "dynamic href"), /nonempty literal href/);
console.log("[ok] Validator self-tests");

for (const name of ["LofotenIslandsTravelGuide", "SenjaTravelGuide", "HelgelandCoastTravelGuide", "TromsoTravelGuide"]) {
  const path = `../src/components/sections/destinations/${name}.tsx`;
  try {
    checkRelatedGuides(readFileSync(new URL(path, import.meta.url), "utf8"), name);
    console.log(`[ok] ${name}: unique related-guide destinations`);
  } catch (error) {
    console.error(`[error] ${error.message}`);
    process.exitCode = 1;
  }
}
