.PHONY: make-dirs pinata normalize all clean build twemoji

all: clean make-dirs pinata normalize twemoji

make-dirs:
	mkdir -p assets/css/vendor
	mkdir -p assets/js/vendor

pinata:
	get-pinata-pins > data/ipfs.json

normalize:
	wget https://necolas.github.io/normalize.css/8.0.1/normalize.css -O assets/css/vendor/normalize.css

twemoji:
	wget https://twemoji.maxcdn.com/v/latest/twemoji.min.js -O assets/js/vendor/twemoji.min.js

clean:
	rm -rf assets/css/vendor
	rm -rf assets/js/vendor
	rm -rf static/css/vendor

build:
	hugo --gc --minify --cleanDestinationDir --path-warnings

watch:
	hugo server --watch --minify --buildFuture --buildDrafts --path-warnings
