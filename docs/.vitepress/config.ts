import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitepress';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';
import sidebar from './sidebar';
import snackPlayer from './markdown/snackPlayer';
import sandpackPlugin from './markdown/sandpack';
import { readFile } from 'node:fs/promises';
import { resourcesSidebar } from './sidebar/resources';
import getStructuredData from './getStructuredData';
import { createGeneralOGImage, createIconOGImage } from './createOGImage';
import llmstxt from 'vitepress-plugin-llms';

const defaultSandpackCSS = await readFile(
  fileURLToPath(new URL('./theme/sandpack-default.css', import.meta.url)),
  'utf-8',
);

const title = 'Lucide 中文文档';
const socialTitle = 'Lucide 图标';
const description = '由社区打造的精美且一致的图标工具包。';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title,
  titleTemplate: ':title \u2013 Lucide 中文文档',
  description,
  cleanUrls: true,
  outDir: '.vercel/output/static',
  srcExclude: ['**/README.md'],
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
      md.use(snackPlayer);
      md.use(sandpackPlugin, {
        defaultFiles: {
          '/styles.css': {
            code: defaultSandpackCSS,
            hidden: true,
          },
        },
      });
    },
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPIconAlignLeft\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/overrides/VPIconAlignLeft.vue', import.meta.url),
          ),
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/overrides/VPFooter.vue', import.meta.url),
          ),
        },
        {
          find: '~/.vitepress',
          replacement: fileURLToPath(new URL('./', import.meta.url)),
        },
      ],
    },
    plugins: [
      groupIconVitePlugin(),
      llmstxt({
        ignoreFiles: [
          'code-of-conduct.md',
          'index.md',
          'packages.md',
          'showcase.md',
          'brand-logo-statement.md',
          'icons/**', // Not working, need investigation
        ],
      }),
    ],
  },
  head: [
    ['script', { async: '', src: 'https://www.zhcndoc.com/js/common.js' }],
    [
      'meta',
      {
        property: 'og:locale',
        content: 'zh_CN',
      },
    ],
    [
      'meta',
      {
        property: 'og:type',
        content: 'website',
      },
    ],
    [
      'meta',
      {
        property: 'og:site_name',
        content: title,
      },
    ],
    [
      'meta',
      {
        property: 'og:title',
        content: socialTitle,
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: description,
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://lucide.dev',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://lucide.dev/og.png',
      },
    ],
    [
      'meta',
      {
        property: 'og:image:width',
        content: '1200',
      },
    ],
    [
      'meta',
      {
        property: 'og:image:height',
        content: '630',
      },
    ],
    [
      'meta',
      {
        property: 'og:image:type',
        content: 'image/png',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:title',
        content: socialTitle,
      },
    ],
    [
      'meta',
      {
        property: 'twitter:description',
        content: description,
      },
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: 'https://lucide.dev/og.png',
      },
    ],
  ],
  async transformPageData(pageData) {
    pageData.frontmatter.head ??= [];
    if (
      pageData.relativePath.startsWith('icons/') &&
      !pageData.relativePath.startsWith('icons/lab/') &&
      pageData.params?.name
    ) {
      const iconName = pageData.params.name;
      pageData.title = `${iconName} 图标详情`;

      const taggedAs = pageData.params?.tags?.length
        ? `标签：${pageData.params.tags.join(', ')}。`
        : '';
      const categorizedIn = pageData.params?.category?.length
        ? `分类：${pageData.params.category.join(', ')}。`
        : '';

      pageData.description =
        `${iconName} 图标的详细信息和相关图标。${taggedAs} ${categorizedIn}`.trim();

      const structuredData = await getStructuredData(iconName, pageData);

      const ogPath = await createIconOGImage(iconName, pageData.params?.tags || []);

      if (ogPath) {
        const content = `https://lucide.dev${ogPath}`;
        pageData.frontmatter.head.push(
          [
            'meta',
            {
              property: 'og:image',
              content,
            },
          ],
          [
            'meta',
            {
              property: 'twitter:image',
              content,
            },
          ],
        );
      }

      pageData.frontmatter.head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(structuredData),
      ]);
    }

    if (pageData.relativePath.startsWith('guide/')) {
      const ogPath = await createGeneralOGImage(pageData);

      if (ogPath) {
        const content = `https://lucide.dev${ogPath}`;
        pageData.frontmatter.head.push(
          [
            'meta',
            {
              property: 'og:image',
              content,
            },
          ],
          [
            'meta',
            {
              property: 'twitter:image',
              content,
            },
          ],
        );
      }
    }
  },
  themeConfig: {
    logo: {
      light: '/logo.light.svg',
      dark: '/logo.dark.svg',
    },
    nav: [
      { text: '图标', link: '/icons/' },
      { text: '指南', link: '/guide/' },
      {
        text: '资源',
        items: [
          ...resourcesSidebar[0].items,
          { text: '图标设计指南', link: '/contribute/icon-design-guide' },
        ],
      },
      { text: '软件包', link: '/packages' },
      { text: '展示', link: '/showcase' },
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lucide-icons/lucide' },
      { icon: 'discord', link: 'https://discord.gg/EH6nSts' },
    ],
    footer: {
      message: `<a style="text-decoration: none;" target="_blank" href="https://www.zhcndoc.com">简中文档</a> | <a style="text-decoration: none;" rel="nofollow" target="_blank" href="https://beian.miit.gov.cn">沪ICP备2024070610号-3</a>`,
      copyright: `Copyright © ${new Date().getFullYear()} Lucide Contributors. Released under the ISC License.`,
    },
    editLink: {
      pattern: 'https://github.com/zhcndoc/lucide/edit/main/docs/:path',
    },
    // carbonAds: {
    //   code: 'CWYIC53U',
    //   placement: 'lucidedev',
    // },
  },
  sitemap: {
    hostname: 'https://lucide.zhcndoc.com',
  },
});
