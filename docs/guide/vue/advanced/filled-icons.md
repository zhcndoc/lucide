---
title: 填充图标 - Vue
description: 了解如何在 Vue 应用程序中使用 Lucide 图标的填充，以及使用 Lucide 图标填充的限制。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackVue.vue'
</script>

# 填充图标

官方不支持填充。
但是，所有 SVG 属性都可用于所有图标。
填充仍然可以使用，并且在某些图标上效果良好。

星星示例：

::: sandpack {template=vue editorHeight=580 editorWidthPercentage=60 dependencies="@lucide/vue"}

```vue src/App.vue [active]
<script setup>
import { Star, StarHalf } from "@lucide/vue";
import "./icon.css";
</script>

<template>
  <div class="app">
    <div class="star-rating">
      <div class="stars">
        <Star
          v-for="i in 5"
          fill="#111"
          strokeWidth="0"
        />
      </div>
      <div class="stars rating">
        <Star fill="yellow" strokeWidth="0" />
        <Star fill="yellow" strokeWidth="0" />
        <StarHalf fill="yellow" strokeWidth="0" />
      </div>
    </div>
  </div>
</template>
```

```css src/icon.css
.star-rating {
  position: relative;
}

.stars {
  display: flex;
  gap: 4px;
}

.rating {
  position: absolute;
  top: 0;
}

```
:::
