/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Branding',
      items: [
        'branding/index',
        'branding/colors',
        'branding/typography',
        'branding/icons',
        'branding/logo-and-favicon',
        'branding/approach-to-ai',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        'components/index',
        'components/buttons',
        'components/cards',
        'components/tabs',
        'components/breadcrumbs',
        'components/milestones',
        'components/more-less-link',
        'components/confirmation-dialog',
      ],
    },
    {
      type: 'category',
      label: 'Patterns',
      items: [
        'patterns/index',
        'patterns/banners',
        'patterns/charts',
        'patterns/notifications',
        'patterns/calendar-widget',
        'patterns/comment-thread',
        'patterns/document-cards',
        'patterns/document-summary',
        'patterns/inline-dialog',
        'patterns/key-performance-indicators',
        'patterns/pick-list',
      ],
    },
    {
      type: 'category',
      label: 'Layouts',
      items: [
        'layouts/index',
        'layouts/dashboards',
        'layouts/forms',
        'layouts/grids',
        'layouts/empty-states',
        'layouts/landing-pages',
        'layouts/messaging-module',
        'layouts/pane-layouts',
        'layouts/record-views',
      ],
    },
    {
      type: 'category',
      label: 'Content Style Guide',
      items: [
        'content-style-guide/index',
        'content-style-guide/voice-and-tone',
      ],
    },
    {
      type: 'category',
      label: 'Accessibility',
      items: [
        'accessibility/index',
        'accessibility/checklist',
      ],
    },
    'CONTRIBUTING',
    'AGENTS',
    'SAIL_CODING_GUIDE',
  ],
};

module.exports = sidebars;