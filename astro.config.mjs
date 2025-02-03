import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

import playformInline from '@playform/inline';

import purgecss from 'astro-purgecss';

import rlc from 'remark-link-card';

// https://astro.build/config
export default defineConfig({
  site: 'https://nrroute.github.io',
  integrations: [
    sitemap(),
    mdx(),
    playformInline(),
    purgecss({
      fontFace: true,
    })
  ],
  build: {
    format: "file",
  },
  markdown: {
    remarkRehype: {
      footnoteLabel: "脚注",
      footnoteLabelTagName: 'h1',
    },
    remarkPlugins: [
      rlc
    ]
  }
});
