import { DefaultTheme } from 'vitepress';

export const lucideStaticSidebar = [
  {
    items: [
      {
        text: '概览',
        desc: '在项目中将 Lucide 图标作为静态资源使用的概览',
        link: '/guide/static/',
      },
      {
        text: '开始使用',
        link: '/guide/static/getting-started',
        desc: '了解如何开始使用 Lucide 静态资源。',
      },
      {
        text: '从 v0 迁移',
        link: '/guide/static/migration',
        desc: '了解如何将 Lucide 静态资源从 v0 迁移到 v1。',
      },
    ],
  },
  {
    text: 'SVG 文件与精灵图',
    items: [
      {
        text: '将 SVG 文件作为图片导入',
        desc: '在项目中将图标作为图片使用',
        link: '/guide/static/link-as-image',
      },
      {
        text: 'SVG 精灵图',
        desc: '在项目中使用 SVG 精灵图',
        link: '/guide/static/svg-sprite',
      },
    ],
  },
  {
    text: '图标字体',
    items: [
      {
        text: '作为字体导入',
        desc: '在项目中将图标作为 Web 字体使用',
        link: '/guide/static/font/',
      },
      {
        text: '颜色',
        desc: '调整图标颜色',
        link: '/guide/static/font/color',
      },
      {
        text: '尺寸',
        desc: '调整图标尺寸',
        link: '/guide/static/font/sizing',
      },
    ],
  },
  {
    text: 'SVG 字符串 JS 模块',
    items: [
      {
        text: '在 Node.js 中使用',
        desc: '在 Node.js 项目中使用 Lucide',
        link: '/guide/static/js-modules/node',
      },
      {
        text: '在 JS 项目中使用',
        desc: '在 JavaScript 项目中使用 Lucide',
        link: '/guide/static/js-modules/web',
      },
    ],
  },
  {
    text: '资源',
    items: [
      {
        text: '深入了解无障碍',
        link: '/guide/accessibility',
        desc: '无障碍最佳实践',
      },
      {
        text: 'VS Code',
        link: '/guide/vscode',
        desc: 'VS Code 与 Lucide',
      },
    ],
  },
] satisfies DefaultTheme.SidebarItem[] & { items: { desc?: string }[] }[];
