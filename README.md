# Stephan's website

A small static site built with [Astro](https://astro.build/) and React. It is
configured for deployment to GitHub Pages at
`https://stephan-mertin.de`.

## Local development

```sh
npm install
npm run dev
```

Run `npm run build` to type-check and create the production site in `dist/`.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site
and deploys it to GitHub Pages. In the repository settings, select
**Settings → Pages → Source → GitHub Actions** once before the first deploy.

The custom domain is configured in `astro.config.mjs` and `public/CNAME`.
GitHub Pages must also have `stephan-mertin.de` entered under
**Settings → Pages → Custom domain**.
