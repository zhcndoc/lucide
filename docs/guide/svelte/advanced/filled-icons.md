---
title: 填充图标 - Svelte
description: 了解如何在 Svelte 应用程序中使用 Lucide 图标的填充效果，以及使用 Lucide 图标填充效果的限制。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackSvelte.vue';
</script>

# 填充图标

官方不支持填充效果。
但是，所有图标上都可用所有 SVG 属性。
填充仍然可以使用，并且在某些图标上效果良好。

星星示例：

::: sandpack {template=vite-svelte showTabs=false editorHeight=480 editorWidthPercentage=60}

```svelte src/App.svelte [active]
<script>
import Star from '@lucide/svelte/icons/star';
import StarHalf from '@lucide/svelte/icons/star-half';
import "./icon.css";

const items = Array.from({ length: 5 })
</script>

<div class="app">
  <div class="star-rating">
    <div class="stars">
      {#each items as item}
        <Star
          fill="#111"
          strokeWidth="0"
        />
      {/each}
    </div>
    <div class="stars rating">
      <Star fill="yellow" strokeWidth="0" />
      <Star fill="yellow" strokeWidth="0" />
      <StarHalf fill="yellow" strokeWidth="0" />
    </div>
  </div>
</div>
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
