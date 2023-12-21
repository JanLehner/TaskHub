// @ts-nocheck
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

export default {
  url: 'https://taskhub0120.netlify.app',
  baseUrl: '/',
  projectName: 'TaskHub',
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TaskHub',
  tagline: 'Manage deine Tasks',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RelxOff/TaskHub', // Usually your GitHub org/user name.
  projectName: 'TaskHub', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/RelxOff/TaskHub/tree/master/doc/docs/Dokumentation.md', //wrong doc link
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'TaskHub',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/docs/Dokumentation', label: 'Dokumentation', position: 'left' },
          {
            href: 'https://github.com/RelxOff/TaskHub',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Projektdokumentation',
                to: '/docs/Dokumentation',
              },
            ],
          },
          {
            title: 'Autoren',
            items: [
              {
                label: 'sanqro',
                href: 'https://github.com/sanqro/',
              },
              {
                label: 'RelxOff',
                href: 'https://github.com/relxoff',
              },
              {
                label: 'JanLehner',
                href: 'https://github.com/JanLehner',
              },
              {
                label: 'niels-brunokowski',
                href: 'https://github.com/niels-brunokowski',
              },
            ],
          },
          {
            title: 'Mehr',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/janLehner/TaskHub',
              },
              {
                label: 'Website',
                href: 'https://google.com', //wrong website link
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RelxOff/TaskHub`,
            },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;