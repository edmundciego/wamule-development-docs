import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {siteConfig} from './src/config/site';

const config: Config = {
  title: siteConfig.productName,
  tagline: siteConfig.tagline,
  favicon: 'img/favicon-placeholder.svg',
  url: 'https://docs.wamuledevelopment.com',
  baseUrl: '/',
  organizationName: 'wamule-development',
  projectName: 'wamule-development-docs',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'en', locales: ['en']},
  markdown: {hooks: {onBrokenMarkdownLinks: 'warn'}},
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          breadcrumbs: true,
        },
        blog: false,
        pages: false,
        theme: {customCss: './src/css/custom.css'},
        sitemap: {changefreq: 'weekly', priority: 0.5},
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        language: ['en'],
        docsRouteBasePath: '/',
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
  themeConfig: {
    image: 'img/social-card-placeholder.svg',
    navbar: {
      title: siteConfig.productName,
      logo: {alt: `${siteConfig.companyName} logo placeholder`, src: 'img/logo-placeholder.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'operationsSidebar', position: 'left', label: 'Guide'},
        {to: '/getting-started/first-day-checklist', position: 'left', label: 'First day'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Operations', items: [{label: 'Daily operations', to: '/daily-operations/start-of-day'}]},
        {title: 'Support', items: [{label: 'Report an issue', to: '/troubleshooting-support/developer-feedback'}]},
      ],
      copyright: siteConfig.copyright,
    },
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: true},
    docs: {sidebar: {hideable: true, autoCollapseCategories: true}},
    prism: {additionalLanguages: ['json', 'bash']},
  } satisfies Preset.ThemeConfig,
};

export default config;
