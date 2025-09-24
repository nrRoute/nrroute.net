import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

import purgecss from 'astro-purgecss';
import astroExpressiveCode from 'astro-expressive-code';
import linkCard from 'astro-link-card';

import remarkGemoji from 'remark-gemoji';
import remarkMath from 'remark-math';

import rehypeKatex from 'rehype-katex';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeMermaid from 'rehype-mermaid';

// https://astro.build/config
export default defineConfig({
  site: 'https://nrroute.net',
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
    linkCard({
      openInNewTab: true,
    }),
    purgecss({
      fontFace: true,
      keyframes: true,
      variables: true,
      content: [
        "./src/**/*.{astro,html,js,md,mdx,ts}",
      ],
      safelist: {
        greedy: [/expressive-code/],
      },
    }),
  ],
  build: {
    format: "file",
  },
  markdown: {
    syntaxHighlight: {
      type: "shiki",
      excludeLangs: ["mermaid"]
    },
    remarkRehype: {
      footnoteLabel: "脚注",
      footnoteLabelTagName: 'h1',
    },
    remarkPlugins: [
      remarkGemoji,
      remarkMath,
    ],
    rehypePlugins: [
      [
        rehypeKatex,
        {
          strict: false,
        }
      ],
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        }
      ],
      [
        rehypeMermaid,
        {
          strategy: "img-svg",
          dark: true,
        }
      ]
    ],
  }
});
