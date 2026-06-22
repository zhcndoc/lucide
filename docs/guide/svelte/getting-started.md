---
title: 入门指南 - Svelte
description: 本指南将帮助你在 Svelte 项目中开始使用 Lucide。
---
<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
import { svelteSidebar } from '../../.vitepress/sidebar/svelte'
</script>

# 入门指南

本指南将帮助你在 Svelte 项目中开始使用 Lucide。
确保你已经设置好了 Svelte 环境。如果你还没有，可以使用 Vite 创建一个新的 Svelte 项目，或者选择任何其他你喜欢的 Svelte 样板项目。

## 安装

::: code-group

```sh [pnpm]
pnpm install @lucide/svelte
```

```sh [yarn]
yarn add @lucide/svelte
```

```sh [npm]
npm install @lucide/svelte
```

```sh [bun]
bun add @lucide/svelte
```

:::

## 导入你的第一个图标

Lucide 是基于 ES Modules 构建的，因此它完全支持 tree-shaking。

每个图标都可以作为 Svelte 组件导入，它会渲染一个内联 SVG 元素。这样，只有导入到项目中的图标才会包含在最终打包文件中。其余的图标会被 tree-shaking 移除。

```svelte
<script>
  import Camera from '@lucide/svelte/icons/camera';
</script>

<Camera />
```

## 属性

要自定义图标的外观，你可以使用以下属性：

|  名称                   |   类型    |  默认值     |
| ----------------------- | --------- | ------------ |
| `size`                  | *number*  | 24           |
| `color`                 | *string*  | currentColor |
| `stroke-width`          | *number*  | 2            |
| `absoluteStrokeWidth`   | *boolean* | false        |
| `default-class`         | *string*  | lucide-icon  |

因为图标渲染为 SVG 元素，所有标准的 SVG 属性也可以作为属性应用。请参阅 [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) 上的 SVG 表现属性列表。

```svelte
<script>
  import Camera from '@lucide/svelte/icons/camera';
</script>

<Camera size={48} color="red" strokeWidth={1} />
```

更多关于如何使用属性的示例和详情，请继续阅读指南：

<OverviewLinkGrid>
  <OverviewLink v-for="item in svelteSidebar[1].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>
