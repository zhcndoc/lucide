---
title: 描边宽度 - Preact
description: 了解如何在 Preact 应用中使用 `strokeWidth` 属性调整图标的描边宽度，或使用 `nonScalingStroke` 属性调整 strokeWidth 的显示效果。
---

<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackPreact.vue'
</script>

# 描边宽度

所有图标都是使用带有描边的 SVG 元素设计的。
它们的默认描边宽度为 `2px`。

可以调整 `strokeWidth` 来创建不同的图标外观。

## 使用 `strokeWidth` prop 调整描边宽度

::: sandpack {showTabs=false editorHeight=320 editorWidthPercentage=60 dependencies="lucide-preact"}

```jsx App.js [active]
import { h } from 'preact';
import { FolderLock } from 'lucide-preact';

function App() {
  return (
    <div className="app">
      <FolderLock strokeWidth={1} />
    </div>
  );
}

export default App;
```

:::

## 非缩放描边

调整 `size` 属性时，描边宽度的大小将相对于图标的大小，这是 SVG 的默认行为。引入 `nonScalingStroke` 属性是为了调整此行为，使描边宽度无论图标大小如何都保持不变。

这意味着，当启用 `nonScalingStroke` 且图标的 `size` 设置为 `48px` 时，屏幕上的 `strokeWidth` 仍将为 `2px`。

注意 `2px` 是 Lucide 图标的默认描边宽度，此宽度可调整为任意大小。

<!--@include: ../../../images/non-scaling-stroke-compare.svg -->

### 使用 `nonScalingStroke` 属性调整描边宽度

将 `nonScalingStroke` 设置为 `true` 会使描边宽度不随图标缩放。

::: sandpack {showTabs=false editorHeight=340 editorWidthPercentage=60 dependencies="lucide-preact"}

```jsx App.js [active]
import { h } from 'preact';
import { RollerCoaster } from 'lucide-preact';

function App() {
  return (
    <div className="app">
      <RollerCoaster
        size={96}
        nonScalingStroke
      />
    </div>
  );
}

export default App;
```

:::
