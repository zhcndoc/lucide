---
title: 入门指南 - React
description: 本指南将帮助你在 React 项目中开始使用 Lucide。
---
<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
import { reactSidebar } from '../../.vitepress/sidebar/react'
</script>

# 入门指南

本指南将帮助你在 React 项目中开始使用 Lucide。
确保你已经设置好了 React 环境。如果还没有，你可以使用 Create React App、Vite 或任何其他你选择的 React 样板项目来创建一个新的 React 项目。

## 安装

::: code-group

```sh [pnpm]
pnpm add lucide-react
```

```sh [yarn]
yarn add lucide-react
```

```sh [npm]
npm install lucide-react
```

```sh [bun]
bun add lucide-react
```

:::

## 导入你的第一个图标

Lucide 是基于 ES Modules 构建的，因此它完全支持 tree-shaking。

每个图标都可以作为 React 组件导入，它会渲染一个内联 SVG 元素。这样，只有导入到你项目中的图标才会包含在最终的打包文件中。其余的图标会被 tree-shaking 移除。

```jsx
import { Camera } from 'lucide-react';
// 用法
const App = () => {
  return <Camera />;
};
export default App;
```

## 属性

要自定义图标的外观，你可以使用以下属性：

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

更多关于如何使用属性的示例和细节，请继续阅读指南：

<OverviewLinkGrid>
  <OverviewLink v-for="item in reactSidebar[1].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>
