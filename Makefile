.PHONY: make-dirs normalize all clean twemoji

all: clean make-dirs normalize twemoji

make-dirs:
	mkdir -p assets/css/vendor
	mkdir -p assets/js/vendor

normalize:
	wget https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/3.0.1/modern-normalize.css -O assets/css/vendor/normalize.css

twemoji:
	wget https://cdn.jsdelivr.net/npm/@twemoji/api@latest/dist/twemoji.min.js -O assets/js/vendor/twemoji.min.js

clean:
	rm -rf assets/css/vendor
	rm -rf assets/js/vendor

favicon:
	magick static/favicon.png -bordercolor white -border 0 \
		\( -clone 0 -resize 16x16 \) \
		\( -clone 0 -resize 32x32 \) \
		\( -clone 0 -resize 48x48 \) \
		\( -clone 0 -resize 64x64 \) \
		-delete 0 -alpha off -colors 256 static/favicon.ico

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
