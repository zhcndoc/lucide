export const resourcesSidebar = [
  {
    text: '关于',
    items: [
      {
        text: '许可证',
        link: '/license',
      },
      {
        text: '社区',
        link: '/community',
      },
      {
        text: '行为准则',
        link: '/code-of-conduct',
      },
      {
        text: '品牌标志声明',
        link: '/brand-logo-statement',
      },
    ],
  },
  {
    text: '贡献',
    items: [
      {
        text: '贡献指南',
        link: '/contribute/',
      },
    ],
  },
  {
    text: '如何使用 Lucide 图标',
    items: [
      {
        text: '开始使用',
        link: '/how-to/',
      },
      {
        text: '无障碍指南',
        link: '/how-to/accessibility',
        desc: '了解如何让图标清晰易懂，并能与辅助技术配合使用。',
      },
      {
        text: '如何选择合适的图标',
        link: '/how-to/icon-guide',
        desc: '了解何时应在界面中使用图标，以及如何选择易于识别的符号。',
      },
    ],
  },
  {
    text: '贡献图标',
    items: [
      {
        text: '开始贡献',
        link: '/contribute/icons/',
      },
      {
        text: '设计语言',
        link: '/contribute/icons/design-principles',
        desc: '通过对照示例了解塑造 Lucide 图标的视觉原则。',
      },
      {
        text: '设计规范',
        link: '/contribute/icons/specification',
        desc: '了解每个 Lucide 图标都必须满足的技术要求。',
      },
      {
        text: '命名约定',
        link: '/contribute/icons/naming-conventions',
        desc: '了解如何为 Lucide 图标选择清晰、一致且可预测的名称。',
      },
      {
        text: '元数据约定',
        link: '/contribute/icons/metadata-conventions',
        desc: '了解如何编写使用场景、标签、分类、别名及其他图标元数据。',
        items: [
          {
            text: '使用场景指南',
            link: '/contribute/icons/metadata-conventions/use-case-guide',
            desc: '',
          },
          {
            text: '标签指南',
            link: '/contribute/icons/metadata-conventions/tag-guide',
            desc: '',
          },
        ],
      },
      {
        text: 'SVG 约定',
        link: '/contribute/icons/code-conventions',
        desc: '了解如何组织和编写 Lucide SVG 文件。',
      },
      {
        text: '设计软件指南',
        collapsed: false,
        desc: '了解如何使用常见的矢量工具设计和导出 Lucide 图标。',
        items: [
          {
            text: 'Adobe Illustrator',
            link: '/contribute/icons/illustrator-guide',
            desc: '',
          },
          {
            text: 'Inkscape',
            link: '/contribute/icons/inkscape-guide',
          },
          {
            text: 'Figma',
            link: '/contribute/icons/figma-guide',
          },
          {
            text: 'Affinity Designer',
            link: '/contribute/icons/affinity-designer-guide',
          },
        ],
      },
    ],
  },
];
