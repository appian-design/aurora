// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkRemoveLeadingH1 from './src/remark-plugins/remove-leading-h1.mjs';

export default defineConfig({
  site: 'https://appian-design.github.io',
  base: '/aurora',
  markdown: {
    remarkPlugins: [remarkRemoveLeadingH1],
  },
  integrations: [
    starlight({
      title: 'Aurora Design System',
      description:
        "Patterns, design kits, and guidelines to build usable solutions using Appian's low-code automation platform.",
      logo: {
        src: './docs/assets/Appian_Digital_Logo_White.svg',
        replacesTitle: true,
      },
      favicon: '/favicon.ico',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/appian-design/aurora/issues/new/choose',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/appian-design/aurora/edit/main/',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'SAIL Coding Guide', link: '/sail_coding_guide/' },
        {
          label: 'Branding',
          items: [{ autogenerate: { directory: 'branding' } }],
        },
        {
          label: 'Patterns',
          items: [{ autogenerate: { directory: 'patterns' } }],
        },
        {
          label: 'Components',
          items: [{ autogenerate: { directory: 'components' } }],
        },
        {
          label: 'Layouts',
          items: [{ autogenerate: { directory: 'layouts' } }],
        },
        {
          label: 'Content Style Guide',
          items: [{ autogenerate: { directory: 'content-style-guide' } }],
        },
        {
          label: 'Accessibility',
          items: [{ autogenerate: { directory: 'accessibility' } }],
        },
      ],
    }),
  ],
});
