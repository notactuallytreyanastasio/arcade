#!/usr/bin/env bash
# The library's GitHub Pages site, built and deployed from this machine.
#
# There is no March toolchain in CI, so the demo cannot be built by a GitHub
# Action; this script is run locally by whoever has `march`, and pushes the
# built files to the `gh-pages` branch, which Pages serves at
#   https://notactuallytreyanastasio.github.io/arcade/
#
#   scripts/pages.sh build [OUT]   build examples/putt for the browser and
#                                  assemble the whole site in OUT (default
#                                  .forge/site); fails if any file the site
#                                  needs is missing
#   scripts/pages.sh serve [OUT]   build, then serve OUT the way Pages will,
#                                  at http://127.0.0.1:$PORT/arcade/ (PORT
#                                  defaults to 8341); nothing is served
#                                  outside the prefix, so a link that starts
#                                  with / is a 404 here as it would be there
#   scripts/pages.sh deploy [OUT]  build, commit OUT as the new tip of
#                                  gh-pages and push it to $PAGES_REMOTE
#                                  (default origin). Refuses a dirty tree.
#   scripts/pages.sh shot          build the demo, then retake site/putt.png
#                                  and site/card.png in headless Chrome on
#                                  $PORT; needs PLAYTEST_MODULES (a directory
#                                  whose node_modules holds puppeteer-core)
#   scripts/pages.sh snippet       rewrite the code example in
#                                  site/index.html from the shell's source
#
# The site:
#   OUT/index.html, style.css, putt.png, card.png   the landing page (site/)
#   OUT/putt/                                       examples/putt/dist
#   OUT/.nojekyll                                   Pages serves the files as they are
#
# The landing page's code example is not maintained by hand: build copies
# `fn hooks` and `fn main` out of examples/putt/shell/putt_shell.march into
# the page (scripts/pages-snippet.mjs), and fails if it cannot find them.
#
# deploy never checks out gh-pages and never touches the working tree, the
# index or a local branch: it writes the site's files as blobs, builds a tree
# on a temporary index, commits it on top of the remote's gh-pages (or as a
# root commit when the branch does not exist) and pushes that commit.
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"

cmd="${1:-}"
out="${2:-.forge/site}"
port="${PORT:-8341}"
prefix="/arcade/"
remote="${PAGES_REMOTE:-origin}"
branch="gh-pages"
putt="examples/putt"

die() { echo "pages: $*" >&2; exit 1; }

# Scratch files, removed on exit (globals: the EXIT trap runs outside any fn).
tmp=""
index=""
trap '[ -z "$tmp" ] || rm -rf "$tmp"; [ -z "$index" ] || rm -f "$index"' EXIT

# The landing page's own files, and what the demo must have beside the
# files march emits. Every local module the demo imports is checked as well.
landing_files="style.css putt.png card.png"
demo_files="index.html style.css putt.mjs putt_synth_worklet.mjs"

# examples/putt/dist, with the files the page and the shell name.
build_demo() {
  local f log
  # march prints refinement hints on every build; show its output only when
  # the build fails.
  log="$(make -C "$putt" web 2>&1)" || { echo "$log" >&2; die "make -C $putt web failed"; }
  for f in $demo_files; do
    [ -s "$putt/dist/$f" ] || die "the demo build has no $putt/dist/$f"
  done
}

build() {
  local f
  command -v node >/dev/null || die "node is not on PATH"
  for f in index.html $landing_files; do
    [ -s "site/$f" ] || die "missing site/$f"
  done

  # OUT is deleted and rebuilt. Refuse a directory this script did not make.
  if [ -e "$out" ] && [ ! -f "$out/.nojekyll" ] && [ -n "$(ls -A "$out" 2>/dev/null)" ]; then
    die "$out exists and is not a site this script built (no .nojekyll); refusing to delete it"
  fi

  build_demo

  rm -rf "$out"
  mkdir -p "$out/putt"
  node scripts/pages-snippet.mjs site/index.html "$putt/shell/putt_shell.march" "$out/index.html" \
    || die "could not write the code example into the landing page"
  for f in $landing_files; do cp "site/$f" "$out/$f"; done
  cp "$putt"/dist/* "$out/putt/"
  : > "$out/.nojekyll"

  verify
  echo "pages: built $out ($(find "$out" -type f | wc -l | tr -d ' ') files, $(du -sk "$out" | cut -f1) KiB)"
}

# Everything the pages name must be in OUT, and nothing may be named by an
# absolute path: the site is served under /arcade/, not at /.
verify() {
  local missing=0 f
  for f in .nojekyll index.html $landing_files; do
    [ -e "$out/$f" ] || { echo "pages: missing $out/$f" >&2; missing=1; }
  done
  for f in $demo_files; do
    [ -s "$out/putt/$f" ] || { echo "pages: missing $out/putt/$f" >&2; missing=1; }
  done
  node scripts/pages-serve.mjs --check "$out" || missing=1
  [ "$missing" = 0 ] || die "the site in $out is incomplete; nothing was deployed"
}

serve() {
  build
  exec node scripts/pages-serve.mjs "$out" "$port" "$prefix"
}

# The pictures are taken of the demo alone, served under the prefix from a
# scratch directory, so retaking them does not need the ones it replaces.
shot() {
  [ -n "${PLAYTEST_MODULES:-}" ] || die "shot: set PLAYTEST_MODULES to a directory whose node_modules has puppeteer-core"
  build_demo
  tmp="$(mktemp -d "${TMPDIR:-/tmp}/pages-shot.XXXXXX")"
  mkdir "$tmp/putt"
  cp "$putt"/dist/* "$tmp/putt/"
  node scripts/pages-shot.mjs "$tmp" "$port" "$PLAYTEST_MODULES" site || die "shot: the pictures were not retaken"
  echo "pages: retook site/putt.png and site/card.png"
}

deploy() {
  [ -z "$(git status --porcelain)" ] || die "deploy: the working tree has uncommitted changes; the site would not match any commit"
  build

  local src tip parent tree commit n_files n_tree f sha
  src="$(git rev-parse HEAD)"

  # The remote's gh-pages, if it has one, is the parent.
  parent=""
  if tip="$(git ls-remote --exit-code "$remote" "refs/heads/$branch" 2>/dev/null)"; then
    parent="${tip%%[[:space:]]*}"
    git fetch --quiet "$remote" "refs/heads/$branch" || die "deploy: could not fetch $branch from $remote"
  else
    git ls-remote "$remote" >/dev/null 2>&1 || die "deploy: cannot reach remote '$remote'"
  fi

  index="$(mktemp "${TMPDIR:-/tmp}/pages-index.XXXXXX")"
  rm -f "$index"
  n_files=0
  while IFS= read -r f; do
    sha="$(git hash-object -w -- "$out/$f")"
    GIT_INDEX_FILE="$index" git update-index --add --cacheinfo "100644,$sha,$f"
    n_files=$((n_files + 1))
  done < <(cd "$out" && find . -type f | sed 's|^\./||' | LC_ALL=C sort)
  tree="$(GIT_INDEX_FILE="$index" git write-tree)"
  n_tree="$(git ls-tree -r --name-only "$tree" | wc -l | tr -d ' ')"
  [ "$n_tree" = "$n_files" ] || die "deploy: the tree has $n_tree files, $out has $n_files"
  git cat-file -e "$tree:.nojekyll" || die "deploy: the tree has no .nojekyll"
  git cat-file -e "$tree:putt/putt.mjs" || die "deploy: the tree has no putt/putt.mjs"

  if [ -n "$parent" ] && [ "$(git rev-parse "$parent^{tree}")" = "$tree" ]; then
    echo "pages: $remote $branch (${parent:0:7}) already holds this site; nothing to push"
    return 0
  fi

  commit="$(git commit-tree "$tree" ${parent:+-p "$parent"} \
    -m "Site built from ${src:0:7}" \
    -m "scripts/pages.sh deploy: $n_files files, the landing page from site/ and examples/putt/dist under putt/, built from $src.")"
  git push "$remote" "$commit:refs/heads/$branch" || die "deploy: push to $remote $branch failed; nothing was deployed"
  echo "pages: pushed ${commit:0:7} to $remote $branch ($n_files files, from ${src:0:7})"
}

case "$cmd" in
  build) build ;;
  serve) serve ;;
  deploy) deploy ;;
  shot) shot ;;
  snippet)
    node scripts/pages-snippet.mjs site/index.html "$putt/shell/putt_shell.march" site/index.html
    echo "pages: site/index.html's code example is the shell's" ;;
  *)
    echo "usage: scripts/pages.sh build [OUT] | serve [OUT] | deploy [OUT] | shot | snippet" >&2
    exit 2 ;;
esac
