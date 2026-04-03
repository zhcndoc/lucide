---
title: 尺寸调整 - Solid
description: 学习如何在 Solid 应用程序中使用 `size` 属性或 CSS 调整图标的大小。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue'
</script>

# 尺寸调整

默认情况下，所有图标的大小为 `24px` 乘 `24px`。可以使用 `size` 属性和 CSS 调整大小。

## 使用 `size` 属性调整图标大小

::: sandpack {template=vite-solid showTabs=false editorHeight=300 editorWidthPercentage=60 dependencies="lucide-solid"}

```tsx App.tsx [active]
import Landmark from 'lucide-solid/icons/landmark';

function App() {
  return (
    <div class="app">
      <Landmark size={64} />
    </div>
  );
}

export default App;
```
:::

## 通过 CSS 调整图标大小

可以使用 CSS 属性 `width` 和 `height` 来调整图标大小。

::: sandpack {template=vite-solid editorHeight=300 dependencies="lucide-solid"}

```css icon.css [active]
.my-beer-icon {
  /* 修改这里！ */
  width: 64px;
  height: 64px;
}
```

```tsx App.tsx
import Beer from 'lucide-solid/icons/beer';

import "./icon.css";

function App() {
  return (
    <div class="app">
      <Beer class="my-beer-icon" />
    </div>
  );
}

export default App;

```
:::

### 根据字体大小动态更改图标大小

可以根据字体大小调整图标大小。这可以通过使用 `em` 单位来实现。请参阅这篇 [MDN 文章](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#ems) 以获取有关 `em` 单位的更多信息。

::: sandpack {template=vite-solid editorHeight=300 dependencies="lucide-solid"}

```css icon.css [active]
.my-icon {
  /* 图标大小将相对于 .text-wrapper 的 font-size */
  width: 1em;
  height: 1em;
}

.text-wrapper {
  /* 修改这里！ */
  font-size: 96px;

  /* 布局内容 */
  display: flex;
  gap: 0.25em;
  align-items: center;
}
```

```tsx App.tsx
import Star from 'lucide-solid/icons/star';
import "./icon.css";

function App() {
  return (
    <div class="text-wrapper">
      <Star class="my-icon" />
      <div>Yes</div>
    </div>
  );
}

export default App;
```

:::

### 使用 Tailwind 调整大小

`size-*` 工具类可以用来调整图标的大小。请参阅 [Tailwind 文档](https://tailwindcss.com/docs/width#setting-both-width-and-height) 以获取有关 `size-*` 工具类的更多信息。

::: sandpack {template=vite-solid editorHeight=300 editorWidthPercentage=60 dependencies="lucide-solid" externalResources="https://cdn.tailwindcss.com"}

```tsx App.tsx [active]
import PartyPopper from 'lucide-solid/icons/party-popper';

function App() {
  return (
    <div>
      <PartyPopper class="size-24" />
    </div>
  );
}

export default App;
```
:::
