.PHONY: make-dirs normalize all clean twemoji

all: clean make-dirs normalize twemoji

make-dirs:
	mkdir -p assets/css/vendor
	mkdir -p assets/js/vendor
	mkdir -p content/vendor

normalize:
	wget https://necolas.github.io/normalize.css/8.0.1/normalize.css -O assets/css/vendor/normalize.css

twemoji:
	wget https://twemoji.maxcdn.com/v/latest/twemoji.min.js -O assets/js/vendor/twemoji.min.js

clean:
	rm -rf assets/css/vendor
	rm -rf assets/js/vendor
	rm -rf content/vendor

watch:
	hugo serve --watch --minify

watch-drafts:
	hugo serve --watch --minify --buildDrafts

watch-future:
	hugo serve --watch --minify --buildFuture

watch-all:
	hugo serve --watch --minify --buildDrafts --buildFuture
