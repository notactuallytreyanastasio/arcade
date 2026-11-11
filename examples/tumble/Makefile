# Tumble, the arcade engine's third game: tilt the floor, roll to the gate,
# under three powers a slot machine deals each round. See README.md.
#   make check   forge check + lint of lib/, march --check of the suites and shell/
#   make test    the suites, native and JS (HARNESS PASS on both)
#   make web     the browser build: a static site in dist/
#   make serve   serve dist/ at http://127.0.0.1:$(PORT)/
#   make playtest  rounds played in headless Chrome against dist/ on $(PORT)

ARCADE := ../..
include $(ARCADE)/arcade.mk

.PHONY: check test test-native test-js web serve playtest clean

check:
	scripts/check.sh

test: test-native test-js

test-native:
	scripts/run-suite.sh tumble native
	scripts/run-suite.sh tumble_app native

test-js:
	scripts/run-suite.sh tumble js
	scripts/run-suite.sh tumble_app js

# The browser build. march is called directly, as forge puts only lib/ and
# the deps on the module path and the shell's modules are in shell/. The
# engine's glue (arcade_*.mjs) is copied beside each build by march.
MARCH := $(HOME)/.march/bin/march
WEB_LIB := lib:$(ARCADE_LIB):$(ARCADE_PHYSICS_LIB):shell
PORT ?= 8238
# Where puppeteer-core is installed (its node_modules' parent). There is no
# default: `make playtest PLAYTEST_MODULES=/path/to/dir`.
PLAYTEST_MODULES ?=

# dist/: tumble.mjs (shell/tumble_shell.march), the audio worklet's own build
# tumble_synth_worklet.mjs (shell/tumble_worklet.march), March's runtime
# modules, the glue, index.html and style.css.
web:
	mkdir -p dist
	MARCH_LIB_PATH=$(WEB_LIB) $(MARCH) $(ARCADE_JS_FLAGS) -o dist/tumble.mjs shell/tumble_shell.march
	MARCH_LIB_PATH=$(WEB_LIB) $(MARCH) $(ARCADE_JS_FLAGS) -o dist/tumble_synth_worklet.mjs shell/tumble_worklet.march
	cp web/index.html web/style.css dist/
	@echo "web: dist/index.html"

serve: web
	node scripts/serve.mjs dist $(PORT)

playtest: web
	@test -n "$(PLAYTEST_MODULES)" || { echo "playtest: set PLAYTEST_MODULES to a directory whose node_modules has puppeteer-core"; exit 2; }
	node test/web/playtest.mjs dist $(PORT) $(PLAYTEST_MODULES)

clean:
	rm -rf .march .forge dist
