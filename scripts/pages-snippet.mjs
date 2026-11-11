// The landing page's code example, copied from the shell that builds the
// demo, so the page cannot show an API the repository no longer has.
//   node scripts/pages-snippet.mjs <page.html> <shell.march> <out.html>
// Replaces what is between <!-- snippet:shell --> and <!-- /snippet:shell -->
// in the page with `fn hooks` and `fn main` of the shell module, HTML-escaped
// and with the module's two-space indent removed. Exits 1, naming what it
// did not find, if a marker or either fn is missing.
import { readFileSync, writeFileSync } from "node:fs";

const [pagePath, shellPath, outPath] = process.argv.slice(2);
if (!pagePath || !shellPath || !outPath) {
  console.error("usage: pages-snippet.mjs <page.html> <shell.march> <out.html>");
  process.exit(2);
}
const fail = (msg) => { console.error("pages-snippet: " + msg); process.exit(1); };

const open = "<!-- snippet:shell -->", close = "<!-- /snippet:shell -->";
const page = readFileSync(pagePath, "utf8");
const a = page.indexOf(open), b = page.indexOf(close);
if (a < 0 || b < a) fail(`${pagePath} has no ${open} ... ${close} block`);

// A top-level fn of the module: from `  fn name(` to the next line that is
// exactly `  end`.
const lines = readFileSync(shellPath, "utf8").split("\n");
function fnText(name) {
  const from = lines.findIndex((l) => l.startsWith(`  fn ${name}(`));
  if (from < 0) fail(`${shellPath} has no top-level \`fn ${name}\``);
  const len = lines.slice(from).findIndex((l) => l === "  end");
  if (len < 0) fail(`${shellPath}: \`fn ${name}\` has no closing \`end\``);
  return lines.slice(from, from + len + 1).map((l) => l.replace(/^ {2}/, "")).join("\n");
}

const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const code = escape(fnText("hooks") + "\n\n" + fnText("main"));
writeFileSync(outPath, page.slice(0, a + open.length) + code + page.slice(b));
