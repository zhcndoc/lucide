import { fileURLToPath, URL } from 'node:url';
import { defineConfig, UserConfig } from 'vitepress';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';
import sidebar from './sidebar';
import snackPlayer from './markdown/snackPlayer';
import sandpackPlugin from './markdown/sandpack';
import examplePlugin from './markdown/example';
import { readFile } from 'node:fs/promises';
import { resourcesSidebar } from './sidebar/resources';
import llmstxt from 'vitepress-plugin-llms';
import { transformPageData } from './transformPageData';
import getHeadConfig from './getHeadConfig';

const defaultSandpackCSS = await readFile(
  fileURLToPath(new URL('./theme/sandpack-default.css', import.meta.url)),
  'utf-8',
);

const title = 'Lucide 中文文档';
const socialTitle = 'Lucide 图标';
const description = '由社区打造的精美且一致的图标工具包。';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title,
  titleTemplate: ':title - Lucide 中文文档',
  description,
  cleanUrls: true,
  outDir: '.vercel/output/static',
  srcExclude: ['**/README.md'],
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
      md.use(snackPlayer);
      md.use(examplePlugin);
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
          find: /^.*\/VPCarbonAds\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/overrides/VPCarbonAds.vue', import.meta.url),
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
      }) as unknown as UserConfig['vite']['plugins'][0],
    ],
  },
  head: getHeadConfig({ title, description, socialTitle }),
  transformPageData,
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
          { text: '如何使用图标', link: '/how-to/' },
          { text: '贡献图标', link: '/contribute/icons/' },
        ],
      },
      { text: '软件包', link: '/packages' },
      { text: '展示', link: '/showcase' },
      { text: '商品', link: 'https://merch.lucide.dev/' },
      {
        text: '简中文档',
        link: 'https://www.zhcndoc.com',
        target: '_blank',
      },
    ],
    outline: {
      label: '本页内容',
    },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色主题',
    darkModeSwitchTitle: '切换到深色主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '切换语言',
    skipToContentLabel: '跳转到内容',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索',
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '重置搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到与以下内容匹配的结果：',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '导航',
              navigateUpKeyAriaLabel: '向上箭头',
              navigateDownKeyAriaLabel: '向下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: '退出',
            },
          },
        },
      },
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lucide-icons/lucide' },
      { icon: 'discord', link: 'https://discord.gg/EH6nSts' },
    ],
    footer: {
      message: `<a style="text-decoration: none;" target="_blank" href="https://www.zhcndoc.com">简中文档</a> | <a style="text-decoration: none;" rel="nofollow" target="_blank" href="https://beian.miit.gov.cn">沪ICP备2024070610号-3</a>`,
      copyright: `Copyright © ${new Date().getFullYear()} Lucide Icons.`,
    },
    editLink: {
      pattern: 'https://github.com/zhcndoc/lucide/edit/main/docs/:path',
      text: '编辑此页',
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
