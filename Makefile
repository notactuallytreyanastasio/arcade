# The arcade engine's own gate. A game that builds on the engine includes
# arcade.mk instead (see README.md).
#   make check    forge check + lint of the three packages, march --check of
#                 the suites, and the publish check on staged copies
#   make test     the engine's suites, native and JS
#   make format   format every .march file, refusing a result that lost code
#   make package  stage the three packages for publishing into OUT (default
#                 .forge/publish)
#   make site     build the Pages site (the landing page in site/ and the
#                 putt demo) into SITE_OUT (default .forge/site)
#   make serve-site   build it and serve it at http://127.0.0.1:$(PORT)/arcade/
#   make deploy-site  build it and push it to the gh-pages branch
#                 (scripts/pages.sh; there is no March toolchain in CI)

ARCADE := .
include $(ARCADE)/arcade.mk

OUT ?= .forge/publish
SITE_OUT ?= .forge/site

.PHONY: check test format package site serve-site deploy-site clean
.DEFAULT_GOAL := check

check: check-arcade

test: test-arcade

format:
	scripts/format.sh

package:
	rm -rf $(OUT)
	scripts/package.sh $(OUT)

site:
	scripts/pages.sh build $(SITE_OUT)

serve-site:
	scripts/pages.sh serve $(SITE_OUT)

deploy-site:
	scripts/pages.sh deploy $(SITE_OUT)

clean:
	rm -rf .march .forge physics/.forge physics/.march testkit/.forge testkit/.march
