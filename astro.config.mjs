import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cassidyscookies.com', // must match src/data/site.js `url`
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
