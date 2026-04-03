---
title: 尺寸调整 - Svelte
description: 学习如何使用 `size` prop 或通过 CSS 调整 Svelte 应用程序中图标的大小。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackSvelte.vue'
</script>

# 尺寸调整

默认情况下，所有图标的大小为 `24px` 乘 `24px`。可以使用 `size` prop 和 CSS 调整大小。

## 使用 `size` prop 调整图标大小

::: sandpack {template=vite-svelte showTabs=false editorHeight=240 editorWidthPercentage=60}

```svelte src/App.svelte [active]
<script>
import Landmark from '@lucide/svelte/icons/landmark';
</script>

<Landmark size={64} />
```
:::

## 通过 CSS 调整图标大小

可以使用 CSS 属性 `width` 和 `height` 来调整图标大小。

::: sandpack {template=vite-svelte editorHeight=240 editorWidthPercentage=60}

```css src/icon.css [active]
.my-beer-icon {
  /* 修改这里！ */
  width: 64px;
  height: 64px;
}
```

```svelte src/App.svelte
<script>
import Beer from "@lucide/svelte/icons/beer";
import './icon.css'
</script>

<Beer class="my-beer-icon" />
```

:::

### 根据字体大小动态更改图标大小

可以根据字体大小调整图标大小。这可以通过使用 `em` 单位来实现。有关 `em` 单位的更多信息，请参阅这篇 [MDN 文章](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#ems)。

::: sandpack {template=vite-svelte editorHeight=300}

```css src/icon.css [active]
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

```svelte src/App.svelte
<script>
import Star from "@lucide/svelte/icons/star";
import "./icon.css";
</script>

<div class="text-wrapper">
  <Star class="my-icon" />
  <div>Yes</div>
</div>
```
:::

### 使用 Tailwind 调整大小

可以使用 `size-*` 工具类来调整图标的大小。有关 `size-*` 工具类的更多信息，请参阅 [Tailwind 文档](https://tailwindcss.com/docs/width#setting-both-width-and-height)。

::: sandpack {template=vite-svelte showTabs=false editorHeight=240 editorWidthPercentage=60}

```svelte src/App.svelte [active]
<script>
import PartyPopper from "@lucide/svelte/icons/party-popper";
</script>

<PartyPopper class="size-24" />
```

```html /index.html [hidden]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```
:::
