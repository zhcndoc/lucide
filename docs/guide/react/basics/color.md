---
title: 颜色 - React
description: 了解如何在 React 应用程序中使用 `color` 属性或通过父元素的文本颜色值来调整图标的颜色。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue'
</script>

# 颜色

默认情况下，所有图标的颜色值为：`currentColor`。此关键字使用元素的计算文本 `color` 值来表示图标颜色。

在 MDN 上阅读更多关于 [ `currentColor` 的信息](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword)。

## 使用 `color` 属性调整颜色

可以通过将 color 属性传递给元素来调整颜色。

::: sandpack {template=react showTabs=false editorHeight=295 editorWidthPercentage=60 dependencies="lucide-react"}

```js App.js [active]
import { Smile } from "lucide-react";

function App() {
  return (
    <div className="app">
      <Smile color="#3e9392" />
    </div>
  );
}

export default App;
```

:::


## 使用父元素的文本颜色值

因为 lucide 图标的颜色使用 `currentColor`，所以图标的颜色取决于元素的计算 `color`，或者从其父元素继承。

例如，如果父元素的颜色值为 `#fff` 且其中一个子元素是 lucide 图标，则图标的颜色将呈现为 `#fff`。这是浏览器的原生行为。

::: sandpack {template=react showTabs=false editorHeight=320 editorWidthPercentage=60 dependencies="lucide-react"}

```jsx Button.jsx [active]
import { ThumbsUp } from "lucide-react";

function LikeButton() {
  return (
    <button style={{ color: "#fff" }}>
      <ThumbsUp />
      Like
    </button>
  );
}

export default LikeButton;
```

```jsx App.js [hidden]
import Button from "./Button";

export default function App() {
  return <Button />;
}

```
:::
