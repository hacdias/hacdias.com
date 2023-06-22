# [hacdias.com](https://hacdias.com)

The source 🧙‍♂️ of my website.

---

The license applies to the _source code_ used to build the website and **not**
to the _contents_ of the website itself.

## Serve `humans.txt` when using `curl`

```caddy
@curl {
  path /
  header user-agent *curl*
}

rewrite @curl /humans.txt
```
