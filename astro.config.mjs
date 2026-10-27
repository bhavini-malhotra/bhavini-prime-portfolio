// @ts-check
import { existsSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';

// The site's own domain lives in public/CNAME (it also tells anyone reading the repo where the
// site is). With it the site is served from the root of https://<that domain>/; without it,
// GitHub Pages serves it from /<repo>/ and the deploy workflow sets BASE_PATH and SITE_URL.
// Internal links go through src/lib/url.ts, so either way works.
const cname = existsSync('public/CNAME') ? readFileSync('public/CNAME', 'utf8').trim() : '';

export default defineConfig({
  site: process.env.SITE_URL ?? (cname ? `https://${cname}` : 'https://bhavini-malhotra.github.io'),
  base: process.env.BASE_PATH ?? '/',
  output: 'static',
  trailingSlash: 'always',
});
