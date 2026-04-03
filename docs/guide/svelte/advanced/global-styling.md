---
title: 全局样式 - Svelte
description: 学习如何使用 CSS 或 Lucide 上下文提供者在你的 Svelte 应用中全局样式化所有 Lucide 图标。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackSvelte.vue';
</script>

# 全局样式

调整图标可以通过使用 [颜色](../basics/color.md)、[大小](../basics/sizing.md) 和 [描边宽度](../basics/stroke-width.md) 来完成。
要全局样式化所有图标，你可以使用 CSS，或者使用上下文提供者。

我们推荐使用 CSS 进行全局样式化，因为这是实现这一点最直接的方式。
但是使用 CSS 会阻止你在单个图标上使用像 `size`、`color` 和 `strokeWidth` 这样的 props，因为 CSS 特异性会覆盖这些 props，为了能够在单个图标上使用这些 props，你需要使用 Lucide 上下文提供者。

## 上下文提供者

Lucide Svelte 提供了一个名为 `setLucideProps` 的上下文 API，允许你为应用中的所有 Lucide 图标设置全局默认属性。
如果你希望所有图标默认共享相同的大小、颜色或描边宽度，这很有用。

### 设置全局默认值

你可以在主入口文件或顶层组件中调用 `setLucideProps` 来为所有图标设置默认属性。

```js
import { setLucideProps } from '@lucide/svelte';

setLucideProps({
  size: 32,
  color: '#4f46e5',
  strokeWidth: 1.5,
});
```

## 使用 CSS 进行样式化

使用 CSS 轻松实现图标样式化。

每个图标都应用了一个名为 `lucide` 的类属性。这个类名可以在 CSS 文件中用于定位应用中所有被使用的图标。

- 图标的 **颜色** 可以使用 [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) CSS 属性来更改。
- 图标的 **大小** 可以使用 [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) CSS 属性来更改。
- 图标的 **描边宽度** 可以使用 [`stroke-width`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width) CSS 属性来更改。

::: sandpack {template=vite-svelte editorHeight=420 editorWidthPercentage=55}

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

```svelte src/App.svelte
<script>
import CakeSlice from '@lucide/svelte/icons/cake-slice';
import Candy from '@lucide/svelte/icons/candy';
import Apple from '@lucide/svelte/icons/apple';
import Cookie from '@lucide/svelte/icons/cookie';
import Martini from '@lucide/svelte/icons/martini';
import IceCream2 from '@lucide/svelte/icons/ice-cream-2';
import Sandwich from '@lucide/svelte/icons/sandwich';
import Wine from '@lucide/svelte/icons/wine';
import Dessert from '@lucide/svelte/icons/dessert';

import "./icon.css";
</script>

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
```
:::

### 绝对描边宽度

对于全局绝对描边宽度样式化，`vector-effect: non-scaling-stroke` CSS 属性可以应用于子元素。这将保持描边宽度大小不变，无论图标大小如何。参见 [absolute-stroke-width](../basics/stroke-width.md#absolute-stroke-width) 获取更多信息。

::: sandpack {template=vite-svelte editorHeight=420 editorWidthPercentage=55}

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

```svelte src/App.svelte
<script>
import TentTree from '@lucide/svelte/icons/tent-tree';
import Caravan from '@lucide/svelte/icons/caravan';
import FlameKindling from '@lucide/svelte/icons/flame-kindling';
import MountainSnow from '@lucide/svelte/icons/mountain-snow';
import Trees from '@lucide/svelte/icons/trees';
import Axe from '@lucide/svelte/icons/axe';
import Map from '@lucide/svelte/icons/map';
import CloudMoon from '@lucide/svelte/icons/cloud-moon';
import Sparkles from '@lucide/svelte/icons/sparkles';

import "./icon.css";
</script>

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
```
:::
