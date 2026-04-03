import { DefaultTheme } from 'vitepress';

export const vueSidebar = [
  {
    items: [
      {
        text: '概览',
        link: '/guide/vue/',
      },
      {
        text: '开始使用',
        link: '/guide/vue/getting-started',
        desc: '了解如何开始使用 Vue 版 Lucide。',
      },
      {
        text: '从 v0 迁移',
        link: '/guide/vue/migration',
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
        link: '/guide/vue/basics/color',
      },
      {
        text: '尺寸',
        desc: '调整图标尺寸',
        link: '/guide/vue/basics/sizing',
      },
      {
        text: '描边宽度',
        desc: '调整图标的描边宽度',
        link: '/guide/vue/basics/stroke-width',
      },
    ],
  },
  {
    text: '进阶',
    items: [
      {
        text: 'TypeScript',
        link: '/guide/vue/advanced/typescript',
        desc: '所有导出类型及其用法',
      },
      {
        text: '无障碍',
        link: '/guide/vue/advanced/accessibility',
        desc: '让你的图标更易访问',
      },
      {
        text: '全局样式',
        link: '/guide/vue/advanced/global-styling',
        desc: '为所有图标应用全局样式',
      },
      {
        text: '使用 Lucide Lab',
        link: '/guide/vue/advanced/with-lucide-lab',
        desc: '将 lucide-lab 与 @lucide/vue 一起使用',
      },
      {
        text: '填充图标',
        link: '/guide/vue/advanced/filled-icons',
        desc: '在 @lucide/vue 中使用填充图标',
      },
      {
        text: '别名名称',
        link: '/guide/vue/advanced/aliased-names',
        desc: '使用别名图标名称',
      },

      {
        text: '组合图标',
        link: '/guide/vue/advanced/combining-icons',
        desc: '将多个图标组合成一个',
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
