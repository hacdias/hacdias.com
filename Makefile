.PHONY: make-dirs normalize all clean twemoji chartjs

all: clean make-dirs normalize twemoji chartjs

make-dirs:
	mkdir -p assets/css/vendor
	mkdir -p assets/js/vendor

normalize:
	wget https://necolas.github.io/normalize.css/8.0.1/normalize.css -O assets/css/vendor/normalize.css

twemoji:
	wget https://twemoji.maxcdn.com/v/latest/twemoji.min.js -O assets/js/vendor/twemoji.min.js

chartjs:
	wget https://cdn.jsdelivr.net/npm/chart.js -O content/chart.js

clean:
	rm -rf assets/css/vendor
	rm -rf assets/js/vendor
	rm -rf content/chart.js
