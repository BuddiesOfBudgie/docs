// @ts-check
/** biome-ignore-all lint/style/noCommonJs: CommonJS is required for Docusaurus */
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github
const darkCodeTheme = require('prism-react-renderer').themes.dracula

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Buddies of Budgie Docs',
  tagline: '',
  favicon: 'img/logo.svg',
  url: 'https://docs.buddiesofbudgie.org',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  future: {
    experimental_faster: true,
    v4: true,
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/Poppins-Regular.ttf',
        as: 'font',
        type: 'font/ttf',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/Poppins-Bold.ttf',
        as: 'font',
        type: 'font/ttf',
        crossorigin: 'anonymous',
      },
    },
  ],

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
          lastVersion: 'current',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          versions: {
            current: {label: 'Next (Budgie 11)', path: '/', banner: 'unreleased' },
            '10.10': {label: 'Current (Wayland): Budgie 10.10', banner: 'none', path: '10.10' },
            '10.9.x': {label: 'Legacy (X11): 10.9.x', banner: 'unmaintained', path: '10.9.x' },
          },
        },
        blog: {
          showReadingTime: true,
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
      algolia: {
        appId: 'NN5QDDPH70',
        apiKey: '5cd6cd12d7cdde2c131ce17ad6e2d342',
        indexName: 'buddiesofbudgie',
        externalUrlRegex: 'blog\\.buddiesofbudgie\\.org',
        replaceSearchResultPathname: {
          from: '/docs/',
          to: '/',
        },
      },
      navbar: {
        title: 'Buddies of Budgie',
        logo: {
          alt: 'Buddgie Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_darktheme.svg',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            versions: ['10.10', 'current', '10.9.x']
          },
          {
            type: 'doc',
            docId: 'developer/intro',
            position: 'left',
            label: 'Developer',
          },
          {
            to: '/10.10/user/intro',
            position: 'left',
            label: 'User',
          },
          {
            href: '/10.10/organization/intro',
            position: 'left',
            label: 'Organization',
          },
          {
            label: 'Other',
            items: [
              {
                href: 'https://buddiesofbudgie.org',
                label: 'Website',
              },
              {
                label: 'Donate',
                href: 'https://opencollective.com/buddies-of-budgie',
              },
              {
                href: 'https://github.com/BuddiesOfBudgie',
                label: 'GitHub',
                rel: 'me',
              },
              {
                label: 'Mastodon',
                href: 'https://floss.social/@BuddiesOfBudgie',
                rel: 'me',
              },
              {
                label: 'Matrix',
                href: 'https://matrix.to/#/#buddies-of-budgie:matrix.org',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/BuddiesOfBudgie',
                rel: 'me',
              },
            ],
            type: 'dropdown',
            position: 'left',
          },
          {
            className: 'GetBudgieButton button button--primary',
            href: '/10.10/user/getting-budgie',
            label: 'Get Budgie',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Developer',
                to: '/developer/intro',
              },
              {
                label: 'Organization',
                to: '/10.10/organization/intro',
              },
              {
                label: 'User',
                to: '/10.10/user/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Mastodon',
                href: 'https://floss.social/@BuddiesOfBudgie',
              },
              {
                label: 'Matrix',
                href: 'https://matrix.to/#/#buddies-of-budgie:matrix.org',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/BuddiesOfBudgie',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                to: 'https://buddiesofbudgie.org',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/BuddiesOfBudgie',
              },
              {
                label: 'Donate',
                href: 'https://opencollective.com/buddies-of-budgie',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Buddies of Budgie. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
