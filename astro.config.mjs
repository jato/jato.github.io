import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jato.github.io',
  integrations: [mdx(), sitemap()],
  prefetch: { prefetchAll: true },
});
