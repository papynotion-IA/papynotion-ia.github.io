import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://papynotion-ia.github.io',
  output: 'static',
  integrations: [sitemap()],
});
