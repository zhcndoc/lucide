<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
</script>

# 入门指南

本指南将帮助你在项目中开始使用 Lucide Static。
确保你已经设置好了环境。如果还没有，你可以使用 Vite、Parcel 或任何其他你选择的样板文件创建一个新项目。

## `lucide-static` 适用于哪些用例？

`lucide-static` 适用于_非常特定的用例_，即你想在不依赖 JavaScript 框架或组件系统的情况下使用 Lucide 图标。它非常适合：

- 使用纯 CSS 或实用优先框架配合图标字体的项目
- 直接在 HTML 中嵌入原始 SVG 文件或雪碧图
- 将 SVG 用作 CSS 背景图像
- 将 SVG 字符串导入 Node.js 环境

::: danger 不推荐用于生产环境的高性能需求 {#production-warning}
SVG 雪碧图和图标字体包含**所有图标**，这会显著增加你的应用包大小和加载时间。

对于生产环境，我们建议使用支持 tree-shaking 的打包工具，仅包含你实际使用的图标。可以考虑使用特定框架的 [包](../../packages.md)。
:::

## 安装

### 包管理器

::: code-group

```sh [pnpm]
pnpm add lucide-static
```

```sh [yarn]
yarn add lucide-static
```

```sh [npm]
npm install lucide-static
```

```sh [bun]
bun add lucide-static
```

:::
