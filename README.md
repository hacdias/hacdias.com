# hacdias.com

> 🧙‍♂️ The source code of [hacdias.com](https://hacdias.com)

## Configuration

There are some peculiarities with my website's Hugo configuration. I use this section
of the README for future documentation for others, or if I myself forget.

### Pages

I have struggled with Hugo's way of dealing with pages, especially sections. I could
never create a nested page without having to create a section, and therefore a listing.
I designed my website and templates such that:

- A section is nothing more than a signal to Hugo to build nested pages.
- Section templates are treated as single page templates.
- Only taxonomy term pages are presented as lists. Archive pages are exceptions.

Other important notes:

- The taxonomy "category" is a root-level taxonomy, e.g., `/writings/`.
- The page `/categories/` does not get rendered.
- Pages inside a category's folder are built under it, e.g., `/writings/archive/`.
- All posts go into the `/posts/` section, which does not get rendered.
- All posts are built to `/yyyy/mm/dd/title/` URL.
- The `/logs/` section does not get rendered either, only its pages, e.g., `/logs/movies/`.

## License

Codebase licensed with [MIT License](LICENSE) © [Henrique Dias](https://hacdias.com).
Anything other than source code (e.g., content, images, photos) is copyrighted.
