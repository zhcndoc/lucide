---
title: 入门 - Vue
description: 本指南将帮助你在 Vue 项目中开始使用 Lucide。
---
<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
import { vueSidebar } from '../../.vitepress/sidebar/vue'
</script>

# 入门

本指南将帮助你在 Vue 项目中开始使用 Lucide。
确保你已经设置好了 Vue 环境。如果还没有，你可以使用 Vite 创建一个新的 Vue 项目，或者选择任何其他 Vue 样板项目。

## 安装

::: code-group

```sh [pnpm]
pnpm add @lucide/vue
```

```sh [yarn]
yarn add @lucide/vue
```

```sh [npm]
npm install @lucide/vue
```

```sh [bun]
bun add @lucide/vue
```

:::

## 导入你的第一个图标

Lucide 是基于 ES Modules 构建的，因此它完全支持 tree-shaking。

每个图标都可以作为 Vue 组件导入，它会渲染一个内联 SVG 元素。这样，只有导入到项目中的图标才会包含在最终打包文件中。其余的图标会被 tree-shaking 移除。

```vue
<script setup>
import { Camera } from '@lucide/vue';
</script>

<template>
  <Camera />
</template>
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

### 应用属性

因为图标渲染为 SVG 元素，所有标准的 SVG 属性也可以作为属性应用。请参阅 [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) 上的 SVG 表现属性列表。

```vue
<template>
  <Camera :size="48" color="red" :stroke-width="1" />
</template>
```

更多关于如何使用属性的示例和细节，请继续指南：

<OverviewLinkGrid>
  <OverviewLink v-for="item in vueSidebar[1].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>
