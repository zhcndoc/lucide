import { DefaultTheme } from 'vitepress';

export const astroSidebar = [
  {
    items: [
      {
        text: '概览',
        link: '/guide/astro/',
      },
      {
        text: '开始使用',
        link: '/guide/astro/getting-started',
        desc: '了解如何开始使用 Astro 版 Lucide。',
      },
      {
        text: '从 v0 迁移',
        link: '/guide/astro/migration',
        desc: '了解如何将 Lucide Astro 从 v0 迁移到 v1。',
      },
    ],
  },
  {
    text: '基础',
    items: [
      {
        text: '颜色',
        desc: '调整图标颜色',
        link: '/guide/astro/basics/color',
      },
      {
        text: '尺寸',
        desc: '调整图标尺寸',
        link: '/guide/astro/basics/sizing',
      },
      {
        text: '描边宽度',
        desc: '调整图标的描边宽度',
        link: '/guide/astro/basics/stroke-width',
      },
    ],
  },
  {
    text: '进阶',
    items: [
      {
        text: 'TypeScript',
        link: '/guide/astro/advanced/typescript',
        desc: '所有导出类型及其用法',
      },
      {
        text: '无障碍',
        link: '/guide/astro/advanced/accessibility',
        desc: '让你的图标更易访问',
      },
      {
        text: '全局样式',
        link: '/guide/astro/advanced/global-styling',
        desc: '为所有图标应用全局样式',
      },
      {
        text: '使用 Lucide Lab',
        link: '/guide/astro/advanced/with-lucide-lab',
        desc: '将 lucide-lab 与 @lucide/astro 一起使用',
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
