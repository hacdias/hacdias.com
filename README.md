# hacdias.com

> 🧙‍♂️ The source code of [hacdias.com](https://hacdias.com)

## Configuration

### Caddy: serve `humans.txt` when using `curl`

```caddy
@curl {
  path /
  header user-agent *curl*
}

rewrite @curl /humans.txt
```

## License

[MIT License](LICENSE) © [Henrique Dias](https://hacdias.com) [content not included]
