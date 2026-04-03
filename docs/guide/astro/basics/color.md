---
title: 颜色 - Astro
description: 了解如何使用 color 属性和 CSS 在 Astro 应用程序中自定义 Lucide 图标的颜色。
---

# 颜色

默认情况下，所有图标的颜色值为：`currentColor`。此关键字使用元素的计算文本 `color` 值来表示图标颜色。

在 MDN 上阅读更多关于 [`currentColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword) 的信息。

## 使用 `color` 属性调整颜色

可以通过将 color 属性传递给元素来调整颜色。

```astro /src/pages/index.astro
---
import Smile from '@lucide/astro/icons/smile';
---

<Smile color="#3e9392" />
```

## 使用父元素的文本颜色值

由于 Lucide 图标的颜色使用 `currentColor`，图标的颜色取决于元素的计算 `color`，或者从其父元素继承。

例如，如果父元素的颜色值为 `#fff` 且其中一个子元素是 Lucide 图标，则图标的颜色将渲染为 `#fff`。这是浏览器的原生行为。

```astro /src/pages/index.astro
---
import ThumbsUp from '@lucide/astro/icons/thumbs-up';
---

<button style="color:#fff">
  <ThumbsUp />
  Like
</button>
```
