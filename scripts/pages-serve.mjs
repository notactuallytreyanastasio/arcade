// The built site served the way GitHub Pages serves a project site: under a
// path prefix, with nothing outside it.
//   node scripts/pages-serve.mjs <dir> <port> [prefix]   (prefix default /arcade/)
//   node scripts/pages-serve.mjs --check <dir>           check the site's references, serve nothing
// Like Pages: a directory's URL without its slash redirects to the one with
// it (301), a directory serves its index.html, anything else missing is a
// 404. A URL outside the prefix is a 404 too, so a page that names a file by
// an absolute path fails here as it would when deployed. `/` alone redirects
// to the prefix, for convenience; Pages would not.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, normalize, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const types = {
  ".html": "text/html; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".map": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

export function serve(dir, port, prefix = "/arcade/") {
  const root = resolve(dir);
  const server = createServer(async (req, res) => {
    const path = decodeURIComponent(new URL(req.url, "http://x").pathname);
    const gone = () => res.writeHead(404, { "Content-Type": "text/plain" }).end("not found: " + path);
    if (path === "/") { res.writeHead(302, { Location: prefix }).end(); return; }
    if (path + "/" === prefix) { res.writeHead(301, { Location: prefix }).end(); return; }
    if (!path.startsWith(prefix)) { gone(); return; }
    const rel = path.slice(prefix.length);
    let file = normalize(join(root, rel));
    if (file !== root && !file.startsWith(root + "/")) { res.writeHead(403).end(); return; }
    try {
      if ((await stat(file)).isDirectory()) {
        if (!path.endsWith("/")) { res.writeHead(301, { Location: path + "/" }).end(); return; }
        file = join(file, "index.html");
      }
      const body = await readFile(file);
      res.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream", "Cache-Control": "no-store" });
      res.end(body);
    } catch {
      gone();
    }
  });
  return new Promise((ok, fail) => {
    server.once("error", fail);
    server.listen(port, "127.0.0.1", () => ok(server));
  });
}

// Every file an HTML page, a stylesheet or a module of the site names must
// be in the site, by a relative path. Returns the problems found.
export function check(dir) {
  const root = resolve(dir);
  const problems = [];
  const walk = (d) => readdirSync(d).flatMap((n) => {
    const p = join(d, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
  const external = /^(https?:|data:|mailto:|#)/;
  for (const file of walk(root)) {
    const ext = extname(file);
    if (![".html", ".css", ".mjs"].includes(ext)) continue;
    const text = readFileSync(file, "utf8");
    const refs = [];
    if (ext === ".html") {
      for (const m of text.matchAll(/<(?:a|link|script|img|source)\b[^>]*?\b(?:href|src)="([^"]*)"/g)) refs.push(m[1]);
    } else if (ext === ".css") {
      for (const m of text.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) refs.push(m[1]);
    } else {
      for (const m of text.matchAll(/^\s*(?:import|export)\b[^"'\n]*?from\s*["']([^"']+)["']/gm)) refs.push(m[1]);
      for (const m of text.matchAll(/^\s*import\s*["']([^"']+)["']/gm)) refs.push(m[1]);
    }
    for (const ref of refs) {
      const where = relative(root, file);
      if (external.test(ref)) continue;
      if (ref.startsWith("/")) { problems.push(`${where}: "${ref}" is an absolute path; the site is served under a prefix`); continue; }
      if (ext === ".mjs" && !ref.startsWith(".")) { problems.push(`${where}: imports the bare module "${ref}", which a browser cannot resolve`); continue; }
      const clean = ref.split(/[?#]/)[0];
      let target = resolve(dirname(file), clean);
      if (target !== root && !target.startsWith(root + "/")) { problems.push(`${where}: "${ref}" points outside the site`); continue; }
      if (existsSync(target) && statSync(target).isDirectory()) target = join(target, "index.html");
      if (!existsSync(target)) problems.push(`${where}: "${ref}" is not in the site`);
    }
  }
  return problems;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  if (process.argv[2] === "--check") {
    const problems = check(process.argv[3] || ".forge/site");
    for (const p of problems) console.error("pages: " + p);
    process.exit(problems.length ? 1 : 0);
  }
  const dir = process.argv[2] || ".forge/site";
  const port = Number(process.argv[3] || 8341);
  const prefix = process.argv[4] || "/arcade/";
  await serve(dir, port, prefix);
  console.log(`serving ${resolve(dir)} at http://127.0.0.1:${port}${prefix}  (demo: http://127.0.0.1:${port}${prefix}putt/)`);
}
