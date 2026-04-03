---
title: 入门指南 - Preact
description: 本指南将帮助您在 Preact 项目中开始使用 Lucide。
---
<script setup lang="ts">
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
import { preactSidebar } from '../../.vitepress/sidebar/preact'
</script>

# 入门指南

本指南将帮助您在 Preact 项目中开始使用 Lucide。
确保您已设置好 Preact 环境。如果您还没有，可以使用 Create Preact App、Vite 或您选择的任何其他 Preact 样板项目来创建一个新的 Preact 项目。

## 安装

::: code-group

```sh [pnpm]
pnpm add lucide-preact
```

```sh [yarn]
yarn add lucide-preact
```

```sh [npm]
npm install lucide-preact
```

```sh [bun]
bun add lucide-preact
```

:::

## 导入您的第一个图标

Lucide 是基于 ES Modules 构建的，因此它完全支持树摇（tree-shakable）。

每个图标都可以作为 Preact 组件导入，它会渲染一个内联 SVG 元素。这样，只有导入到项目中的图标才会包含在最终打包文件中。其余的图标会被树摇优化掉。

```jsx
import { Camera } from 'lucide-preact';

// 用法
const App = () => {
  return <Camera />;
};

export default App;
```

## 属性

要自定义图标的外观，您可以使用以下属性：

| 名称                  | 类型      | 默认值       |
| --------------------- | --------- | ------------ |
| `size`                | *number*  | 24           |
| `color`               | *string*  | currentColor |
| `strokeWidth`         | *number*  | 2            |
| `absoluteStrokeWidth` | *boolean* | false        |

因为图标渲染为 SVG 元素，所有标准的 SVG 属性也可以作为属性应用。请参阅 [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) 上的 SVG 表现属性列表。

```jsx
// 用法
const App = () => {
  return <Camera size={48} color="red" strokeWidth={1} />;
};
```

更多关于如何使用属性的示例和详情，请继续阅读指南：

<OverviewLinkGrid>
  <OverviewLink v-for="item in preactSidebar[1].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>
