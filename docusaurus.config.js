// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Octo Developer Zone',
  tagline: 'Allxon are cool',
  url: 'https://allxon.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'allxon', // Usually your GitHub org/user name.
  projectName: 'developer-zone', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        removeDefaultStopWordFilter: true,
        removeDefaultStemmer: true,
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: "/"
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v2.x.x',
            },
            '1.1.0': {
              label: 'v1.1.0',
            },
          },
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/allxon/developer-zone/edit/master/',
            
        },
        blog: { 
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/allxon/developer-zone',
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
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Allxon-Developer-light.png',
          srcDark: 'img/Allxon-Developer-dark.png',
          href: 'https://allxon.github.io/developer-zone'
        },
        items: [
          {
            type: 'doc',
            docId: 'Getting Started/Overview',
            position: 'left',
            label: 'Doc',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'api',
            label: 'API',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            // dropdownItemsAfter: [
            //   { to: 'https://ionicframework.com/docs/v4/components', label: 'v4', target: '_blank' },
            //   { to: 'https://ionicframework.com/docs/v3/', label: 'v3', target: '_blank' },
            // ],
            // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/allxon/developer-zone',
            // label: 'GitHub',
            className: 'header-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
       
        // logo: {
        //   alt: 'Allxon logo',
        //   src: 'img/Allxon_Logo_White-01.png',
        //   href: 'https://www.allxon.com/',
        // },
        links: [
          {
            // title: ' ',
            items: [
              {html: `
              <div class="footer_div">
                  <div class="logo_icons">
                    <a target="_blank" href="https://www.allxon.com/">
                        <img class="footer_logo" src="img/Allxon_Logo_White-01.png" alt="">
                    </a>
                    <div class="icon_links">
                        <a target="_blank" href="https://github.com/allxon"><img src="img/github.png" alt=""></a>
                        <a target="_blank" href="https://www.linkedin.com/company/allxoninc/"><img src="img/linkedin.png" alt=""></a>
                        <a target="_blank" href="https://www.facebook.com/AllxonInc/"><img src="img/facebook.png" alt=""></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCVyiQzhTiMOZg-XHlL5kFeA"><img src="img/youtube.png" alt=""></a>
                    </div>
                  </div>
                  <div class="link_links">
                    <a target="_blank" href="https://www.allxon.com/contact-allxon-octo">Contact Us</a>
                    <a target="_blank" href="https://www.allxon.com/privacy-policy?hsLang=en">Privacy Policy</a>
                    <a target="_blank" href="https://www.allxon.com/terms-of-service">Terms</a>
                  </div>
                  <p class="copyright">© 2022 Allxon. All rights reserved.</p>
              </div>
               `},
            ], 
          },
          // {
          //   title: ' ',
          //   items: [
          //     {
          //       label: 'Facebook',
          //       href: 'https://www.facebook.com/AllxonInc/',
          //     },
          //   ],
          // },
          // {
          //   title: ' ',
          //   items: [
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/wayneliu0512/octo-developer-zone_docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: ' ',
          //   items: [
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/wayneliu0512/octo-developer-zone_docusaurus',
          //     },
          //   ],
          // },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Allxon. All rights reserved. 
        // `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },  
    }),
};

module.exports = config;
