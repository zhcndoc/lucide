---
title: 全局样式 - Vue
description: 学习如何使用 CSS 或 Lucide 上下文提供者在您的 Vue 应用程序中全局样式化所有 Lucide 图标。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackVue.vue'
</script>

# 全局样式

调整图标可以通过使用 [颜色](../basics/color.md)、[大小](../basics/sizing.md) 和 [描边宽度](../basics/stroke-width.md) 来完成。
要全局样式化所有图标，您可以使用 CSS，或使用上下文提供者。

我们建议使用 CSS 进行全局样式化，因为这是实现此目的最直接的方式。
但是使用 CSS 会阻止您在单个图标上使用诸如 `size`、`color` 和 `strokeWidth` 这样的属性，因为 CSS 特异性将覆盖这些属性，为了能够在单个图标上使用这些属性，您需要使用 Lucide 上下文提供者。

## 上下文提供者

Lucide Vue 提供了一个名为 `setLucideProps` 的上下文 API，允许您为应用程序中的所有 Lucide 图标设置全局默认属性。
如果您希望所有图标默认共享相同的大小、颜色或描边宽度，这很有用。

### 设置全局默认值

您可以在主入口文件或顶层组件中调用 `setLucideProps` 来设置所有图标的默认属性。

```js
import { setLucideProps } from '@lucide/vue';

setLucideProps({
  size: 32,
  color: '#4f46e5',
  strokeWidth: 1.5,
});
```

## 使用 CSS 进行样式化

使用 CSS 可以轻松完成图标样式化。

每个图标都有一个名为 `lucide` 的类属性。此类名可用于 CSS 文件中，以定位应用中正在使用的所有图标。

- 图标的 **颜色** 可以使用 [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) CSS 属性进行更改。
- 图标的 **大小** 可以使用 [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) CSS 属性进行更改。
- 图标的 **描边宽度** 可以使用 [`stroke-width`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width) CSS 属性进行更改。

::: sandpack {template=vue editorHeight=300 editorWidthPercentage=55 dependencies="@lucide/vue"}

```css src/icon.css [active]
.lucide {
  /* 修改这里！ */
  color: #ffadff;
  width: 56px;
  height: 56px;
  stroke-width: 1px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 6px;
}
```

```vue src/App.vue
<script setup>
import {
  CakeSlice,
  Candy,
  Apple,
  Cookie,
  Martini,
  IceCream2,
  Sandwich,
  Wine,
  Dessert,
} from "@lucide/vue";

import "./icon.css";
</script>

<template>
  <div class="grid">
    <CakeSlice />
    <Candy />
    <Apple />
    <Cookie />
    <Martini />
    <IceCream2 />
    <Sandwich />
    <Wine />
    <Dessert />
  </div>
</template>
```
:::

### 绝对描边宽度

对于全局绝对描边宽度样式化，`vector-effect: non-scaling-stroke` CSS 属性可以应用于子元素。这将保持描边宽度大小不变，无论图标大小如何。请参阅 [absolute-stroke-width](../basics/stroke-width.md#absolute-stroke-width) 获取更多信息。

::: sandpack {template=vue editorHeight=300 editorWidthPercentage=55 dependencies="@lucide/vue"}

```css src/icon.css [active]
.lucide {
  width: 48px;
  height: 48px;
  stroke-width: 1.5;
}

.lucide * {
  vector-effect: non-scaling-stroke;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 6px;
}
```

```vue src/App.vue
<script setup>
import {
  TentTree,
  Caravan,
  FlameKindling,
  MountainSnow,
  Trees,
  Axe,
  Map,
  CloudMoon,
  Sparkles,
} from "@lucide/vue";

import "./icon.css";
</script>

<template>
  <div class="grid">
    <TentTree />
    <Caravan />
    <FlameKindling />
    <MountainSnow />
    <Trees />
    <Axe />
    <Map />
    <CloudMoon />
    <Sparkles />
  </div>
</template>

```
:::
