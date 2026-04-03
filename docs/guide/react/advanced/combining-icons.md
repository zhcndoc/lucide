---
title: 组合图标 - React
description: 学习如何在 React 应用中通过嵌套 SVG 元素将多个图标组合成一个图标。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue'
</script>

# 组合图标

你可以通过嵌套 SVG 元素将多个图标组合成一个图标。
如果你想通过组合现有图标来创建自定义图标，这很有用。

::: sandpack {template=react showTabs=false editorHeight=400 editorWidthPercentage=60 dependencies="lucide-react"}

```jsx App.js [active]
import { Scan, User } from "lucide-react";

function App() {
  return (
    <div className="app">
      <Scan size={48}>
        <User
          size={12}
          x={6}
          y={6}
          absoluteStrokeWidth
        />
      </Scan>
    </div>
  );
}

export default App;
```
:::

这是有效的，因为 [SVG 可以嵌套](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/svg#nested_svg_element)，并且图标支持所有 SVG 属性。
可以调整 `x` 和 `y` 坐标来按需定位图标。

::: info 限制
组合图标时，你需要确保 `x` 和 `y` 坐标在外层图标的 `viewBox` 范围内（24x24）。
:::

## 使用原生 SVG 元素

你也可以将 Lucide 图标与原生 SVG 元素组合，以构建自定义图标变体。

### 带通知徽章的示例

例如，你可以使用 `circle` SVG 元素向图标添加通知徽章。


::: sandpack {template=react showTabs=false editorHeight=580 editorWidthPercentage=60 dependencies="lucide-react"}

```jsx App.js [active]
import { Mail } from "lucide-react";

function App() {
  const hasUnreadMessages = true;

  return (
    <div className="app">
      <Mail size={48}>
        {hasUnreadMessages && (
          <circle
            r="3"
            cx="21"
            cy="5"
            stroke="none"
            fill="#F56565"
          />
        )}
      </Mail>
    </div>
  );
}

export default App;
```
:::

### 带文本元素的示例

你也可以使用 `text` SVG 元素向图标添加文本。

::: sandpack {template=react showTabs=false editorHeight=400 editorWidthPercentage=60 dependencies="lucide-react"}

```jsx App.js [active]
import { File } from "lucide-react";

function App() {
  return (
    <div className="app">
      <File size={48}>
        <text
          x={7.5}
          y={19}
          fontSize={8}
          fontFamily="Verdana,sans-serif"
          strokeWidth={1}
        >
          JS
        </text>
      </File>
    </div>
  );
}

export default App;
```
:::
