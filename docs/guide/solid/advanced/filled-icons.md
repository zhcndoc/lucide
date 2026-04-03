---
title: 填充图标 - Solid
description: 了解如何在 Solid 应用程序中使用 Lucide 图标的填充效果，以及使用 Lucide 图标填充效果的限制。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue'
</script>

# 填充图标

官方不支持填充效果。
但是，所有图标均提供所有 SVG 属性。
填充仍然可以使用，并且在某些图标上效果良好。

星星示例：

::: sandpack {template=vite-solid editorHeight=580 editorWidthPercentage=60 dependencies="lucide-solid"}

```tsx App.tsx [active]
import Star from 'lucide-solid/icons/star';
import StarHalf from 'lucide-solid/icons/star-half';

import "./icon.css";

function App() {
  return (
    <div class="app">
      <div class="star-rating">
        <div class="stars">
          { Array.from({ length: 5 }, () => (
              <Star fill="#111" strokeWidth={0} />
          ))}
        </div>
        <div class="stars rating">
          <Star fill="yellow" strokeWidth={0} />
          <Star fill="yellow" strokeWidth={0} />
          <StarHalf fill="yellow" strokeWidth={0} />
        </div>
      </div>
    </div>
  );
}

export default App;
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
