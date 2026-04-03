---
title: 填充图标 - Lucide
description: Lucide 官方不支持填充，但你仍然可以在某些图标上使用 fill 属性来创建填充版本。
---

<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue'
</script>

# 填充图标

官方不支持填充。
但是，所有 SVG 属性都可用于所有图标。
fill 仍然可以使用，并且在某些图标上效果良好。

星星示例：

::: sandpack {template=vanilla editorHeight=480 editorWidthPercentage=60 dependencies="lucide"}

```html /index.html [active]
<!DOCTYPE html>
<html>
  <body>
    <div class="app">
      <div class="star-rating">
        <div class="stars">
          <i data-lucide="star" fill="#111" stroke-width="0"></i>
          <i data-lucide="star" fill="#111" stroke-width="0"></i>
          <i data-lucide="star" fill="#111" stroke-width="0"></i>
          <i data-lucide="star" fill="#111" stroke-width="0"></i>
          <i data-lucide="star" fill="#111" stroke-width="0"></i>
        </div>
        <div class="stars rating">
          <i data-lucide="star" fill="yellow" stroke-width="0"></i>
          <i data-lucide="star" fill="yellow" stroke-width="0"></i>
          <i data-lucide="star-half" fill="yellow" stroke-width="0"></i>
        </div>
      </div>
    </div>

    <script src="index.js">
    </script>
  </body>
</html>
```

```js /index.js
import { createIcons, Star, StarHalf } from 'lucide/dist/cjs/lucide';
import "./styles.css";
import "./icon.css";

createIcons({
  icons: {
    Star,
    StarHalf,
  }
});
```

```css icon.css
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
