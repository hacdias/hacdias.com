<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="{{ .Site.Language }}">
      <head>
        <title><xsl:value-of select="/atom:feed/atom:title" /></title>
        <meta charset="utf-8" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {{ partialCached "assets/css.html" . }}
        <style>
          .tb li {
            grid-template-columns: auto min-content;
          }

          #styled {
            background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #f9a825, #ff5722);
            background-clip: text;
            color: transparent;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        {{ partialCached "assets/js.html" . }}
        <div class='container'>
          {{ partial "base/header" . }}
          <main>
            <header>
              <h1>RSS Feed Preview</h1>
            </header>
            <p>
              This is a <span id="styled">styled preview</span> of my RSS feed. You can subscribe to it by copying the URL in the address bar into your newsreader. Personally, I use Miniflux and NetNewsWire, but there's hundreds of alternatives. Just visit <a href="https://aboutfeeds.com/">About Feeds</a> to learn more and get started.
            </p>
            <h2>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="icon" viewBox="0 0 256 256">
                <rect width="256" height="256" rx="55" ry="55" x="0" y="0" fill="#FF7C33"></rect>
                <circle cx="68" cy="189" r="24" fill="#FFF"></circle>
                <path d="M160 213h-34a82 82 0 0 0 -82 -82v-34a116 116 0 0 1 116 116z" fill="#FFF"></path>
                <path d="M184 213A140 140 0 0 0 44 73 V 38a175 175 0 0 1 175 175z" fill="#FFF"></path>
              </svg>
              Latest Posts
            </h2>
            <ul class='tb'>
              <xsl:for-each select="/atom:feed/atom:entry">
                <li class='h-entry'>
                  <a class='nl lh p-name u-url'>
                    <xsl:attribute name="href">
                      <xsl:value-of select="atom:link/@href" />
                    </xsl:attribute>
                    <xsl:value-of select="atom:title" />
                  </a>
                  <span class='tab lg small dt-published'>
                    <xsl:value-of select="substring(atom:published, 0, 11)" />
                  </span>
                </li>
              </xsl:for-each>
            </ul>
          </main>
          {{ partial "base/footer" . }}
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
