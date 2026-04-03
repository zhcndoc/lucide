import { DefaultTheme } from 'vitepress';

export const lucideSidebar = [
  {
    items: [
      {
        text: '概览',
        link: '/guide/lucide/',
      },
      {
        text: '开始使用',
        link: '/guide/lucide/getting-started',
        desc: '了解如何开始使用 Lucide。',
      },
      {
        text: '从 v0 迁移',
        link: '/guide/lucide/migration',
        desc: '了解如何将 Lucide 从 v0 迁移到 v1。',
      },
    ],
  },
  {
    text: '基础',
    items: [
      {
        text: '颜色',
        desc: '调整图标颜色',
        link: '/guide/lucide/basics/color',
      },
      {
        text: '尺寸',
        desc: '调整图标尺寸',
        link: '/guide/lucide/basics/sizing',
      },
      {
        text: '描边宽度',
        desc: '调整图标的描边宽度',
        link: '/guide/lucide/basics/stroke-width',
      },
    ],
  },
  {
    text: '进阶',
    items: [
      {
        text: '全局样式',
        link: '/guide/lucide/advanced/global-styling',
        desc: '全局应用选项和样式',
      },
      {
        text: 'Shadow DOM',
        link: '/guide/lucide/advanced/shadow-dom',
        desc: '所有导出类型及其用法',
      },
      {
        text: '模板元素',
        link: '/guide/lucide/advanced/content-template-element',
        desc: '在 lucide 中使用内容模板元素',
      },
      {
        text: '无障碍',
        link: '/guide/lucide/advanced/accessibility',
        desc: '让你的图标更易访问',
      },
      {
        text: '使用 Lucide Lab',
        link: '/guide/lucide/advanced/with-lucide-lab',
        desc: '将 lucide-lab 与 lucide 一起使用',
      },
      {
        text: '填充图标',
        link: '/guide/lucide/advanced/filled-icons',
        desc: '在 lucide 中使用填充图标',
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
    ],
  },
] satisfies DefaultTheme.SidebarItem[] & { items: { desc?: string }[] }[];
