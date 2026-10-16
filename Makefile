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

og:
	magick static/avatar/256.jpg \( -size 256x256 xc:black -fill white -draw "circle 127.5,127.5 127.5,0" \) \
		-alpha off -compose CopyOpacity -composite -resize 64x64 /tmp/og-avatar.png
	magick -size 1200x630 xc:"#fafaf9" -fill "#e4ded8" -draw "rectangle 80,479 1119,480" \
		/tmp/og-avatar.png -geometry +80+510 -composite \
		-fill "#6b6560" -font assets/fonts/JetBrainsMono-Regular.ttf -pointsize 24 \
		-annotate +162+552 "Author:" -annotate +482+552 "<hacdias.com>" \
		-fill "#1a1a1a" -font assets/fonts/Inter-SemiBold.ttf -pointsize 28 -annotate +277+552 "Henrique Dias" \
		-alpha off -depth 8 -strip assets/og/text.png
	magick -size 1200x630 xc:"#fafaf9" /tmp/og-avatar.png -geometry +1080+528 -composite -quality 95 -strip assets/og/photos.jpg
	magick -size 396x490 xc:"#00000080" -strip assets/og/shade.png
	magick -size 1200x630 xc:"#fafaf9" \
		\( static/avatar/2048.jpg -resize x630 -gravity center -crop 440x630+0+0 +repage \) +gravity -composite \
		-fill "#ae4829" -font assets/fonts/JetBrainsMono-Regular.ttf -pointsize 24 -annotate +512+121 "hacdias.com" \
		-fill "#1a1a1a" -font assets/fonts/Inter-ExtraBold.ttf -pointsize 74 -kerning -1.85 -annotate +512+248 "Henrique Dias" -kerning 0 \
		-fill "#6b6560" -font assets/fonts/Inter-Regular.ttf -pointsize 30 \
		-annotate +512+328 "Software engineer passionate about open" -annotate +512+376 "source, web technology, and user agency." \
		-fill "#2f9e442e" -draw "circle 520,544 520,530" -fill "#2f9e44" -draw "circle 520,544 520,536" \
		-font assets/fonts/Inter-Bold.ttf -pointsize 28 -annotate +542+554 "Open to Work" \
		-quality 95 -strip assets/og/home.jpg
	rm /tmp/og-avatar.png

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
