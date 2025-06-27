import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

import playformInline from '@playform/inline';
import purgecss from 'astro-purgecss';
import rlc from 'remark-link-card';
import remarkGemoji from 'remark-gemoji';
import remarkMath from 'remark-math';
import astroExpressiveCode from 'astro-expressive-code';

import rehypeExternalLinks from 'rehype-external-links';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://nrroute.github.io',
  integrations: [
    sitemap(),
    astroExpressiveCode({
      themes: ["github-dark-high-contrast", "github-light-high-contrast"],
      styleOverrides: {
        frames: {
          frameBoxShadowCssValue: "none",
        }
      }
    }),
    mdx(),
    playformInline(),
    purgecss({
      fontFace: true,
    }),
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
      rlc,
      remarkGemoji,
      remarkMath,
    ],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        },
      ],
      [
        rehypeKatex,
        {
          strict: false,
        }
      ]
    ],
  }
});
