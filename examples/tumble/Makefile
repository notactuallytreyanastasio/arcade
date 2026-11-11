# Tumble, the arcade engine's third game: tilt the floor, roll to the gate,
# under three powers a slot machine deals each round. See README.md.
#   make check   forge check + lint of lib/, march --check of the suites and shell/
#   make test    the suites, native and JS (HARNESS PASS on both)
#   make web     the browser build: a static site in dist/
#   make serve   serve dist/ at http://127.0.0.1:$(PORT)/
#   make playtest  rounds played in headless Chrome against dist/ on $(PORT)

ARCADE := ../..
include $(ARCADE)/arcade.mk

.PHONY: check test test-native test-js clean

check:
	scripts/check.sh

test: test-native test-js

test-native:
	scripts/run-suite.sh tumble native

test-js:
	scripts/run-suite.sh tumble js

clean:
	rm -rf .march .forge dist
