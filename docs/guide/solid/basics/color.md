---
title: 颜色 - Solid
description: 了解如何在 Solid 应用程序中使用 `color` prop 或通过父元素的文本颜色值来调整图标的颜色。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue'
</script>

# 颜色

默认情况下，所有图标的颜色值为：`currentColor`。此关键字使用元素的计算文本 `color` 值来表示图标颜色。

在 [MDN 上阅读更多关于 `currentColor` 的信息](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword)。

## 使用 `color` prop 调整颜色

可以通过将 color prop 传递给元素来调整颜色。

::: sandpack {template=vite-solid showTabs=false editorHeight=295 editorWidthPercentage=60 dependencies="lucide-solid"}

```tsx ./App.tsx [active]
import Smile from 'lucide-solid/icons/smile';

function App() {
  return (
    <div class="app">
      <Smile color="#3e9392" />
    </div>
  );
}

export default App;
```
:::

## 使用父元素的文本颜色值

由于 lucide 图标的颜色使用 `currentColor`，图标的颜色取决于元素的计算 `color`，或者从其父元素继承。

例如，如果父元素的颜色值为 `#fff` 且其中一个子元素是 lucide 图标，则图标的颜色将渲染为 `#fff`。这是浏览器的原生行为。

::: sandpack {template=vite-solid editorHeight=320 editorWidthPercentage=60 dependencies="lucide-solid"}

```tsx ./Button.tsx [active]
import ThumbsUp from 'lucide-solid/icons/thumbs-up';

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

```tsx ./App.tsx
import Button from "./Button";

export default function App() {
  return <Button />;
}
```
:::
