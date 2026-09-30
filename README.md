# Maestro Deck docs

Source of the documentation published at https://maestrodeck.cloud/docs.

## Preview

Requires Node 20+ and pnpm 10.

```bash
make preview
```

Then open http://localhost:3000. Pages reload as you edit them.

`make build` builds every page and fails on broken MDX or `meta.json`, run it before opening a pull request.

## Layout

- `content/docs/`: pages (`.mdx`) and sidebar order (`meta.json`), rendered with [Fumadocs](https://fumadocs.dev).
- `public/docs/`: images, referenced from pages as `/docs/...`.
- `app/`, `lib/`: the preview app. The published site uses the same Fumadocs setup, so what you see locally is what ships.

## Publishing

The site pulls `content/docs/` and `public/docs/` from `main` at build time, so merged changes go live on its next deploy.
