import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

import playformInline from '@playform/inline';

// https://astro.build/config
export default defineConfig({
  site: 'https://nrroute.github.io',
  integrations: [sitemap(), mdx(), playformInline()]
});
