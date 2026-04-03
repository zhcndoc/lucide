---
title: 填充图标 - Preact
description: 了解如何在 Preact 应用程序中使用 Lucide 图标的填充效果，以及使用 Lucide 图标填充的限制。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackPreact.vue'
</script>

# 填充图标

官方不支持填充效果。
但是，所有 SVG 属性都可用于所有图标。
填充仍然可以使用，并且在某些图标上效果良好。

星星示例：

::: sandpack { editorHeight=580 editorWidthPercentage=60 dependencies="lucide-preact"}

```jsx App.js [active]
import { Star, StarHalf } from "lucide-preact";
import { h } from "preact";
import "./icon.css";

function App() {
  return (
    <div className="app">
      <div className="star-rating">
        <div className="stars">
          { Array.from({ length: 5 }, () => (
              <Star fill="#111" strokeWidth={0} />
          ))}
        </div>
        <div className="stars rating">
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
