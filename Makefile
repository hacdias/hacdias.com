.PHONY: make-dirs normalize all clean twemoji leaflet leaflet-markercluster

all: clean make-dirs normalize twemoji leaflet leaflet-markercluster

make-dirs:
	mkdir -p assets/css/vendor
	mkdir -p assets/js/vendor
	mkdir -p content/vendor

normalize:
	wget https://necolas.github.io/normalize.css/8.0.1/normalize.css -O assets/css/vendor/normalize.css

twemoji:
	wget https://twemoji.maxcdn.com/v/latest/twemoji.min.js -O assets/js/vendor/twemoji.min.js

leaflet:
	wget https://leafletjs-cdn.s3.amazonaws.com/content/leaflet/v1.9.3/leaflet.zip -O leaflet.zip
	unzip leaflet.zip -d content/vendor/leaflet
	rm leaflet.zip
	rm content/vendor/leaflet/*.esm*
	rm content/vendor/leaflet/*-src*

leaflet-markercluster:
	wget https://github.com/Leaflet/Leaflet.markercluster/archive/v1.4.1.zip -O leaflet.markercluster.zip
	unzip leaflet.markercluster.zip -d ./tmp-leaflet
	cp -r ./tmp-leaflet/Leaflet.markercluster-1.4.1/dist/ content/vendor/markercluster/
	rm -rf leaflet.markercluster.zip ./tmp-leaflet content/vendor/markercluster/*.txt content/vendor/markercluster/*-src*

clean:
	rm -rf assets/css/vendor
	rm -rf assets/js/vendor
	rm -rf content/vendor
