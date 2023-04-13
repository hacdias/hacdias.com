---
description: Replied to a post on hacdias.com
date: 2020-02-16T14:32:39.871Z
noIndex: true
tags:
- meta
- hugo
- development
context:
  name: Henrique Dias
  url: https://hacdias.com/2020/02/16/updates
  content: So I just made a few changes to my website and I hope it didn’t break anything
    like feeds and such. Here’s a small changelog of the changes:Stopped using Hugo
    categories for post types (replies, notes, articles, etc) and started using sections,
    i.e., I know put a note under the /note path. So this also changed the URLs, hopefully
    for better and now it’s easier to restrict access or remove something if I want.
    I added about ~2000 redirect rules. Does anyone know if Caddy allows me to import
    the redirect rules from another file? My Caddyfile is getting huge. Started using
    partialCached in some places which improved the build time a tiny bit. Moved the
    Articles page from /blog to /articles which I already wanted to do for a while.
    Added a contact page. Updated the more page with more links! And… that’s it I
    think. I’d also love to use this website as a “knowledge base” so I’ll probably
    create a section for that later. I always want to organize the knowledge I get
    somehow but I just have tons of files from university and other stuff laying around
    without any organization. I really loved this braindump from Jethro.
  published: 2020-02-16T11:06:57Z
reply: https://hacdias.com/2020/02/16/updates
---

After publishing the post to which I'm replying to, [@jlelse](https://jlelse.blog/) contacted me and I noticed the [`import`](https://caddyserver.com/v1/docs/import) directive in Caddy can be used to import files:

> import allows you to use configuration from another file or a reusable snippet. It gets replaced with the contents of that file or snippet.

So I just decided to build the redirects file using Hugo itself. First of all, I needed to import a lot of redirects as aliases because I had them in a separate file, but this way it's much better. After that, I needed to add a new output type to Hugo's config:

```yaml
disableAliases: true

outputFormats:
  redir:
    mediaType: text/plain
    baseName: redirects
    isPlainText: true
    notAlternative: true

outputs:
  home:
    - redir
```

Then, I created a `layouts/index.redir.txt` file with the following content:

```html
{{- range $p := .Site.Pages -}}
{{ range .Aliases }}
{{  . | printf "%-70s" }}	{{ $p.RelPermalink -}}
{{ end -}}
{{- end -}}
```

This is mostly what you can see on this [commit](https://github.com/gohugoio/hugoDocs/commit/c1ab9894e8292e0a74c43bbca2263b1fb3840f9e) of the official hugo docs for their netlify redirects. With this, my Hugo website does not build any HTML aliases (`disableAliases`), but creates a file on the root called `redirects.txt`. I can just block the access through Caddy but there's no reason I should do so. Is there?

On Caddyland, I just added this snipped:

```txt
hacdias.com {
  root /the/public/path/

  redir 301 {
    import /the/public/path/redirects.txt
  }
}
```

And voilá! It works! But now you ask: what if we change the redirects file and we don't wanna have any downtime? Just configure your Micropub entrypoint or whatever software you're using on the backend to do a config hot reload by executing the following command:

```txt
pkill -USR1 caddy
```

There it is! 301 redirects working flawlessly!
