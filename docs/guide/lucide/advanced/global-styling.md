---
title: 全局样式 - Lucide
description: 学习如何在 Vanilla JavaScript 应用程序中使用 CSS 或 createIcons 中的 attrs 选项为 Lucide 图标应用全局样式。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue';
</script>

## 全局样式

可以通过使用 [颜色](../basics/color.md)、[大小](../basics/sizing.md) 和 [描边宽度](../basics/stroke-width.md) 来调整图标。
要为所有图标应用全局样式，你可以使用 CSS，或者使用 `createIcons` 中的 `attrs` 选项。

我们建议使用 CSS 进行全局样式设置，因为这是实现此目的最直接的方式。
<!-- 本地覆盖不起作用 -->
<!-- 但是使用 CSS 会阻止你在单个图标上使用像 `size`、`color` 和 `strokeWidth` 这样的 props，因为 CSS 特异性会覆盖这些 props，为了能够在单个图标上使用这些 props，你需要使用 `createIcons` 中的 `attrs` 来调整全局样式。 -->

这会将 `color`、`size` 和 `strokeWidth` props 应用到所有图标。

### 通过在 `createIcons` 上使用 attrs 进行样式设置

你也可以通过向 `createIcons` 函数传递属性来应用全局样式。

::: sandpack {template=vanilla showTabs=false editorHeight=295 editorWidthPercentage=60 dependencies="lucide"}

```html /index.html [active]
<!DOCTYPE html>
<html>
  <body>
    <i data-lucide="building"></i>

    <script src="index.js"></script>
  </body>
</html>
```

```js /index.js
import "./styles.css";

import { createIcons, Building } from 'lucide/dist/cjs/lucide';

createIcons({
  attrs: {
    'stroke-width': 1,
    stroke: 'lightblue',
  },
  icons: {
    Building,
  }
});

```

:::

### 通过使用 CSS 进行样式设置

使用 CSS 可以轻松完成图标样式设置。

每个图标都应用了一个名为 `lucide` 的 class 属性。这个类名可以在 CSS 文件中用于定位应用中所有正在使用的图标。

- 图标的 **颜色** 可以使用 [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) CSS 属性来更改。
- 图标的 **大小** 可以使用 [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) CSS 属性来更改。
- 图标的 **描边宽度** 可以使用 [`stroke-width`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width) CSS 属性来更改。

::: sandpack {template=vanilla showTabs=false editorHeight=295 editorWidthPercentage=60 dependencies="lucide"}

```css icon.css [active]
.lucide {
  /* 修改这里！ */
  color: #ffadff;
  width: 48px;
  height: 48px;
  stroke-width: 1px;
}

.app {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 6px;
}
```

```html /index.html
<!DOCTYPE html>
<html>
  <body>
    <div class="app">
      <i data-lucide="cake-slice"></i>
      <i data-lucide="candy"></i>
      <i data-lucide="apple"></i>
      <i data-lucide="cookie"></i>
      <i data-lucide="martini"></i>
      <i data-lucide="ice-cream-2"></i>
      <i data-lucide="sandwich"></i>
      <i data-lucide="wine"></i>
      <i data-lucide="dessert"></i>
    </div>

    <script src="index.js"></script>
  </body>
</html>
```

```js /index.js
import "./styles.css";
import "./icon.css";

import {
  createIcons,
  CakeSlice,
  Candy,
  Apple,
  Cookie,
  Martini,
  IceCream2,
  Sandwich,
  Wine,
  Dessert
} from 'lucide/dist/cjs/lucide';

createIcons({
  icons: {
    CakeSlice,
    Candy,
    Apple,
    Cookie,
    Martini,
    IceCream2,
    Sandwich,
    Wine,
    Dessert,
  }
});

```

:::
