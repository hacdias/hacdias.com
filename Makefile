.PHONY: make-dirs pinata normalize all clean

all: clean make-dirs pinata normalize

make-dirs:
	mkdir -p assets/css/vendor
	mkdir -p assets/js/vendor

pinata:
	get-pinata-pins > data/ipfs.json

normalize:
	wget https://necolas.github.io/normalize.css/8.0.1/normalize.css -O assets/css/vendor/normalize.css

clean:
	rm -rf assets/css/vendor
	rm -rf assets/js/vendor
	rm -rf static/css/vendor

watch:
	hugo server --watch --minify --buildDrafts
