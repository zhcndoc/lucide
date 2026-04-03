---
title: 开始使用 - React Native
description: 本指南将帮助你在 React Native 项目中开始使用 Lucide。
---
<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
import { reactNativeSidebar } from '../../.vitepress/sidebar/react-native'
</script>

# 开始使用

本指南将帮助你在 React Native 项目中开始使用 Lucide。
确保你已经设置好了 React Native 环境。如果你还没有，可以使用 React Native CLI、Expo 或任何其他你选择的 React Native 样板项目来创建一个新的 React Native 项目。

## 安装

首先，确保你已经安装了 `react-native-svg`（版本在 12 到 15 之间）。然后，安装该包：

::: code-group

```sh [pnpm]
pnpm add lucide-react-native
```

```sh [yarn]
yarn add lucide-react-native
```

```sh [npm]
npm install lucide-react-native
```

```sh [bun]
bun add lucide-react-native
```

:::

## 导入你的第一个图标

Lucide 是使用 ES 模块构建的。

每个图标都可以作为 React 组件导入，它会渲染一个 `react-native-svg` 元素。

```jsx
import { Camera } from 'lucide-react-native';

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

更多关于如何使用属性的示例和详情，请继续阅读指南：

<OverviewLinkGrid>
  <OverviewLink v-for="item in reactNativeSidebar[1].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>
