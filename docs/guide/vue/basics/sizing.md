---
title: 尺寸调整 - Vue
description: 学习如何使用 `size` 属性或通过 CSS 调整 Vue 应用程序中图标的大小。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackVue.vue'
</script>

# 尺寸调整

默认情况下，所有图标的大小为 `24px` 乘 `24px`。可以使用 `size` 属性 和 CSS 调整大小。

## 使用 `size` 属性调整图标大小

::: sandpack {template=vue showTabs=false editorHeight=300 editorWidthPercentage=60 dependencies="@lucide/vue"}

```vue src/App.vue [active]
<script setup>
import { Landmark } from "@lucide/vue"
</script>

<template>
  <Landmark :size="64" />
</template>
```

:::


## 通过 CSS 调整图标大小

可以使用 CSS 属性 `width` 和 `height` 来调整图标大小。

::: sandpack {template=vue editorHeight=300 dependencies="@lucide/vue"}

```css src/icon.css [active]
.my-beer-icon {
  /* 修改这里！ */
  width: 64px;
  height: 64px;
}
```

```vue src/App.vue
<script setup>
import { Beer } from "@lucide/vue";
import './icon.css'
</script>

<template>
  <Beer class="my-beer-icon" />
</template>
```
:::

### 根据字体大小动态更改图标大小

可以根据字体大小调整图标大小。这可以通过使用 `em` 单位来实现。请参阅这篇 [MDN 文章](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#ems) 以获取有关 `em` 单位的更多信息。

::: sandpack {template=vue editorHeight=300 dependencies="@lucide/vue"}

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

```vue src/App.vue
<script setup>
import { Star } from "@lucide/vue";
import "./icon.css";
</script>

<template>
  <div className="text-wrapper">
    <Star class="my-icon" />
    <div>Yes</div>
  </div>
</template>

```
:::

### 使用 Tailwind 调整大小

`size-*` 工具类可用于调整图标的大小。请参阅 [Tailwind 文档](https://tailwindcss.com/docs/width#setting-both-width-and-height) 以获取有关 `size-*` 工具类的更多信息。

::: sandpack {template=vue editorHeight=300 editorWidthPercentage=60 dependencies="@lucide/vue" externalResources="https://cdn.tailwindcss.com"}

```vue src/App.vue [active]
<script setup>
import { PartyPopper } from "@lucide/vue";
</script>

<template>
  <div>
    <PartyPopper class="size-24" />
  </div>
</template>
```
:::
