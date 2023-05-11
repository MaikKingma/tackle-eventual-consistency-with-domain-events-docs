// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tackle Eventual Consistency with Domain Events',
  tagline: 'Devoxx UK - Mini Lab',
  url: 'https://www.the-experts.nl',
  baseUrl: '/tackle-eventual-consistency-with-domain-events-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'the/experts', // Usually your GitHub org/user name.
  projectName: 'tackle-eventual-consistency-with-domain-events-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/MaikKingma/tackle-eventual-consistency-with-domain-events-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true
    },
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    navbar: {
      title: 'Devoxx UK MiniLab',
      hideOnScroll: true,
      logo: {
        alt: 'the/experts.',
        src: 'img/theexperts_ZwartOranje.png',
        srcDark: 'img/theexperts_WitOranje.png',
        width: 130,
        height: 32,
      },
      items: [
        {
          href: 'https://github.com/MaikKingma/tackle-eventual-consistency-with-domain-events/tree/get-started',
          target: '_blank',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://docs.google.com/presentation/d/1_jv8KLRYHjY7-AefYU0StWXTiHKlNlzi6EGBSS4DCD0/edit?usp=sharing',
          target: '_blank',
          label: 'Slides',
          position: 'right',
        },
        {
          type: 'dropdown',
          label: 'About',
          position: 'right',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/maik-kingma/',
              target: '_blank',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/maikkingma',
              target: '_blank',
            },
            {
              label: 'Blog',
              href: 'https://maikkingma.medium.com/',
              target: '_blank',
            },
            {
              label: 'Company',
              href: 'https://www.the-experts.nl',
              target: '_blank',
            }
          ],
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Maik Kingma, the/experts.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/github'),
      additionalLanguages: ['java'],
      defaultLanguage: 'java',
    },
  },
};

module.exports = config;
