.PHONY: make-dirs normalize all clean twemoji chartjs leaflet

all: clean make-dirs normalize twemoji chartjs leaflet

make-dirs:
	mkdir -p assets/css/vendor
	mkdir -p assets/js/vendor
	mkdir -p content/vendor

normalize:
	wget https://necolas.github.io/normalize.css/8.0.1/normalize.css -O assets/css/vendor/normalize.css

twemoji:
	wget https://twemoji.maxcdn.com/v/latest/twemoji.min.js -O assets/js/vendor/twemoji.min.js

chartjs:
	wget https://cdn.jsdelivr.net/npm/chart.js -O content/vendor/chart.js

leaflet:
	wget https://leafletjs-cdn.s3.amazonaws.com/content/leaflet/v1.9.2/leaflet.zip -O leaflet.zip
	unzip leaflet.zip -d content/vendor/leaflet
	rm leaflet.zip

clean:
	rm -rf assets/css/vendor
	rm -rf assets/js/vendor
	rm -rf content/vendor
