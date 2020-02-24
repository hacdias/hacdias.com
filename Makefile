.PHONY: make-dirs pinata normalize katex all clean

all: clean make-dirs pinata normalize katex

make-dirs:
	mkdir -p assets/css/vendor
	mkdir -p assets/js/vendor

pinata:
	get-pinata-pins > data/ipfs.json

normalize:
	wget https://necolas.github.io/normalize.css/8.0.1/normalize.css -O assets/css/vendor/normalize.css

katex:
	wget https://github.com/KaTeX/KaTeX/releases/download/v0.11.1/katex.tar.gz
	tar xvf katex.tar.gz
	mv katex/katex.min.css assets/css/vendor/katex.min.css
	mv katex/katex.min.js assets/js/vendor/katex.min.js
	mv katex/contrib/auto-render.min.js assets/js/vendor/auto-render.min.js
	mkdir -p static/css/vendor
	mv katex/fonts static/css/vendor/fonts
	rm katex.tar.gz
	rm -rf katex

clean:
	rm -rf assets/css/vendor
	rm -rf assets/js/vendor
	rm -rf static/css/vendor

watch:
	hugo server --watch --navigateToChanged --minify
