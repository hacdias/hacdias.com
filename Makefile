.PHONY: make-dirs normalize all clean twemoji

all: clean make-dirs normalize twemoji

make-dirs:
	mkdir -p assets/css/vendor
	mkdir -p assets/js/vendor

normalize:
	wget https://necolas.github.io/normalize.css/8.0.1/normalize.css -O assets/css/vendor/normalize.css

twemoji:
	wget https://cdn.jsdelivr.net/npm/@twemoji/api@latest/dist/twemoji.min.js -O assets/js/vendor/twemoji.min.js

clean:
	rm -rf assets/css/vendor
	rm -rf assets/js/vendor

ENVIRONMENT ?= production

build:
	hugo --minify --environment $(ENVIRONMENT)

watch:
	hugo server --watch --minify --environment $(ENVIRONMENT)

watch-drafts:
	hugo server --watch --minify --buildDrafts --environment $(ENVIRONMENT)

watch-future:
	hugo server --watch --minify --buildFuture --environment $(ENVIRONMENT)

watch-all:
	hugo server --watch --minify --buildDrafts --buildFuture --environment $(ENVIRONMENT)

kind ?= article
new:
	hugo new --kind $(kind) content/posts/$(shell date +%Y)/$(shell date +%m)/$(shell date +%d)/$(name)/index.md
