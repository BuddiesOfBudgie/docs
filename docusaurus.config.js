// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Buddies of Budgie Docs",
  tagline: "",
  favicon: "img/logo.svg",
  url: "https://docs.buddiesofbudgie.org",
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Buddies of Budgie",
        logo: {
          alt: "Buddgie Logo",
          src: "img/logo.svg",
          srcDark: "img/logo_darktheme.svg",
        },
        items: [
          {
            type: "doc",
            docId: "developer/intro",
            position: "left",
            label: "Developer",
          },
          {
            type: "doc",
            docId: "user/intro",
            position: "left",
            label: "User",
          },
          {
            type: "doc",
            docId: "organization/intro",
            position: "left",
            label: "Organization",
          },
          /*           { -- Awaiting Algolia approval
            type: "search",
            position: "right",
          }, */
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Developer",
                to: "/developer/intro",
              },
              {
                label: "Organization",
                to: "/organization/intro",
              },
              {
                label: "User",
                to: "/user/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Mastodon",
                href: "https://fosstodon.org/@BuddiesOfBudgie",
              },
              {
                label: "Matrix",
                href: "https://matrix.to/#/#buddies-of-budgie:matrix.org",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/BuddiesOfBudgie",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "https://blog.buddiesofbudgie.org",
              },
              {
                label: "GitHub",
                href: "https://github.com/BuddiesOfBudgie",
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
};

module.exports = config;
