import { DefaultTheme } from 'vitepress';

export const reactSidebar = [
  {
    items: [
      {
        text: '概览',
        link: '/guide/react/',
      },
      {
        text: '开始使用',
        link: '/guide/react/getting-started',
        desc: '了解如何开始使用 React 版 Lucide。',
      },
      {
        text: '从 v0 迁移',
        link: '/guide/react/migration',
        desc: '了解如何将 Lucide 从 v0 迁移到 v1。',
      },
      {
        text: '从 React Feather 迁移',
        link: '/guide/react/migration-from-feather',
        desc: '了解如何从 `react-feather` 迁移到 `lucide-react`。',
      },
    ],
  },
  {
    text: '基础',
    items: [
      {
        text: '颜色',
        desc: '调整图标颜色',
        link: '/guide/react/basics/color',
      },
      {
        text: '尺寸',
        desc: '调整图标尺寸',
        link: '/guide/react/basics/sizing',
      },
      {
        text: '描边宽度',
        desc: '调整图标的描边宽度',
        link: '/guide/react/basics/stroke-width',
      },
    ],
  },
  {
    text: '进阶',
    items: [
      {
        text: 'TypeScript',
        link: '/guide/react/advanced/typescript',
        desc: '所有导出类型及其用法',
      },
      {
        text: '无障碍',
        link: '/guide/react/advanced/accessibility',
        desc: '让你的图标更易访问',
      },
      {
        text: '全局样式',
        link: '/guide/react/advanced/global-styling',
        desc: '为所有图标应用全局样式',
      },
      {
        text: '使用 Lucide Lab',
        link: '/guide/react/advanced/with-lucide-lab',
        desc: '将 lucide-lab 与 lucide-react 一起使用',
      },
      // {
      //   text: 'Animations',
      //   link: '/guide/react/advanced/animations',
      //   desc: 'Add animations to your icons',
      // },
      {
        text: '填充图标',
        link: '/guide/react/advanced/filled-icons',
        desc: '在 lucide-react 中使用填充图标',
      },
      {
        text: '别名名称',
        link: '/guide/react/advanced/aliased-names',
        desc: '使用别名图标名称',
      },

      {
        text: '组合图标',
        link: '/guide/react/advanced/combining-icons',
        desc: '将多个图标组合成一个',
      },
      {
        text: '动态图标组件',
        link: '/guide/react/advanced/dynamic-icon-component.md',
        desc: '按需动态导入图标',
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
