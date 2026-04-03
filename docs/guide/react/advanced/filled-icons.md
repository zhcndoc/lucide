---
title: 填充图标 - React
description: 了解如何在 React 应用程序中使用 Lucide 图标的填充，以及使用 Lucide 图标填充的限制。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue'
</script>

# 填充图标

官方不支持填充。
但是，所有图标都可用所有 SVG 属性。
填充仍然可以使用，并且在某些图标上效果良好。

星星示例：

::: sandpack {template=react editorHeight=580 editorWidthPercentage=60 dependencies="lucide-react"}

```jsx App.js [active]
import { Star, StarHalf } from "lucide-react";
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
