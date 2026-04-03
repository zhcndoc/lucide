---
title: 开始使用 - Lucide
description: 本指南将帮助你在原生 JavaScript 项目中开始使用 Lucide。
---
<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
import { reactSidebar } from '../../.vitepress/sidebar/react'
</script>

# 开始使用

本指南将帮助你在原生 JavaScript 项目中开始使用 Lucide。
确保你已经设置好了环境。如果还没有，你可以使用 Vite、Parcel 或任何你选择的其他样板项目创建一个新项目。

## 安装

### 包管理器

::: code-group

```sh [pnpm]
pnpm add lucide
```

```sh [yarn]
yarn add lucide
```

```sh [npm]
npm install lucide
```

```sh [bun]
bun add lucide
```

:::

### CDN

```html
<!-- 开发版本 -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>

<!-- 生产版本 -->
<script src="https://unpkg.com/lucide@latest"></script>
```

我们强烈建议你锁定到一个特定版本，例如 `https://unpkg.com/lucide@x.xxx.x/dist/umd/lucide.min.js`，而不是使用 `@latest`。这是因为最新版本可能会引入破坏性变更，从而潜在地破坏你的应用程序。通过锁定到特定版本，你可以确保你的应用程序保持稳定和功能正常，即使将来库有更新。

## 导入你的第一个图标

Lucide 是使用 ES Modules 构建的，所以它完全支持 Tree-shaking。

`createIcons` 函数将搜索具有 `data-lucide` 属性的 HTML 元素，并将其替换为给定图标名称的 SVG。

### 示例

```html
<!-- 你的 HTML 文件 -->
<i data-lucide="menu"></i>
```

```js
import { createIcons, icons } from 'lucide';

// 注意，这将导入所有图标并将它们打包。
createIcons({ icons });

// 推荐的方式，仅包含你需要的图标。
import { createIcons, Menu, ArrowRight, Globe } from 'lucide';

createIcons({
  icons: {
    Menu,
    ArrowRight,
    Globe
  }
});
```

## 高级用法

### 额外选项

在 `createIcons` 函数中，你可以传递一些额外的参数：

- 你可以传递 `nameAttr` 来调整用于替换图标的属性名（默认是 `data-lucide`）。
- 你可以传递 `attrs` 来传递额外的自定义属性，例如 CSS 类或描边选项。
- 你可以传递 `root` 来提供一个自定义的 DOM 元素，图标将在其中被替换（当操作大型 DOM 的小部分或 Shadow DOM 中的元素时很有用）
- 你可以传递 `inTemplates: true` 来同时替换 `<template>` 标签内的图标。

这是一个完整的示例：

```js
import { createIcons } from 'lucide';

createIcons({
  attrs: {
    class: ['my-custom-class', 'icon'],
    'stroke-width': 1,
    stroke: '#333'
  },
  nameAttr: 'data-lucide', // 图标名称的属性。
  root: element, // 用于替换图标的 DOM 元素。
  inTemplates: true // 同时替换 <template> 标签内的图标。
});
```

### 使用 CDN 的示例

```html
<!DOCTYPE html>
<body>
  <i data-lucide="volume-2" class="my-class"></i>
  <i data-lucide="x"></i>
  <i data-lucide="menu"></i>

  <script src="https://unpkg.com/lucide@latest"></script>
  <script>
    lucide.createIcons();
  </script>
</body>
```

