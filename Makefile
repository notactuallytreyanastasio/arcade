# The arcade engine's own gate. A game that builds on the engine includes
# arcade.mk instead (see README.md).
#   make check    forge check + lint of the three packages, march --check of
#                 the suites, and the publish check on staged copies
#   make test     the engine's suites, native and JS
#   make format   format every .march file, refusing a result that lost code
#   make package  stage the three packages for publishing into OUT (default
#                 .forge/publish)

ARCADE := .
include $(ARCADE)/arcade.mk

OUT ?= .forge/publish

.PHONY: check test format package clean
.DEFAULT_GOAL := check

check: check-arcade

test: test-arcade

format:
	scripts/format.sh

package:
	rm -rf $(OUT)
	scripts/package.sh $(OUT)

clean:
	rm -rf .march .forge physics/.forge physics/.march testkit/.forge testkit/.march
