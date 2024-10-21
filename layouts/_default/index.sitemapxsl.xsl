<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="{{ .Site.Language }}">
      <head>
        <title>Sitemap</title>
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
              <h1>Sitemap</h1>
            </header>
            <ul class='tb'>
              <xsl:for-each select="/sitemap:urlset/sitemap:url">
                <li class='h-entry'>
                  <a class='nl lh p-name u-url'>
                    <xsl:attribute name="href">
                      <xsl:value-of select="sitemap:loc"/>
                    </xsl:attribute>
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                  <span class='tab lg small dt-published'>
                    <xsl:value-of select="substring(sitemap:lastmod, 0, 11)" />
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
