.PHONY: make-dirs normalize all clean build twemoji mermaid

all: clean make-dirs normalize twemoji mermaid

make-dirs:
	mkdir -p assets/css/vendor
	mkdir -p assets/js/vendor

normalize:
	wget https://necolas.github.io/normalize.css/8.0.1/normalize.css -O assets/css/vendor/normalize.css

twemoji:
	wget https://twemoji.maxcdn.com/v/latest/twemoji.min.js -O assets/js/vendor/twemoji.min.js

mermaid:
	wget https://unpkg.com/mermaid@8.8.2/dist/mermaid.min.js -O assets/js/vendor/mermaid.min.js

clean:
	rm -rf assets/css/vendor
	rm -rf assets/js/vendor

build:
	hugo --gc --minify --cleanDestinationDir --path-warnings

watch:
	hugo server --watch --minify --path-warnings

watch-future:
	hugo server --watch --minify --buildFuture --buildDrafts --path-warnings
