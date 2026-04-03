---
title: 颜色 - Lucide
description: 学习如何使用 color 属性和 CSS 在原生 JavaScript 应用中自定义 Lucide 图标的颜色。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue'
</script>

# 颜色

默认情况下，所有图标的颜色值为：`currentColor`。此关键字使用元素的计算文本 `color` 值来表示图标颜色。

在 [MDN 上阅读更多关于 `currentColor` 的信息](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword)。

## 使用 `color` 属性调整颜色

可以通过将 color 属性传递给元素来调整颜色。

::: sandpack {template=vanilla showTabs=false editorHeight=295 editorWidthPercentage=60 dependencies="lucide"}

```html /index.html [active]
<!DOCTYPE html>
<html>
  <body>
    <i data-lucide="smile" color="#3e9392"></i>

    <script src="index.js"></script>
  </body>
</html>
```

```js /index.js
import "./styles.css";

import { createIcons, Smile } from 'lucide/dist/cjs/lucide';

createIcons({
  icons: {
    Smile,
  }
});

```

:::

## 使用父元素的文本颜色值

因为 Lucide 图标的颜色使用 `currentColor`，图标的颜色取决于元素的计算 `color`，或者从其父元素继承。

例如，如果父元素的颜色值为 `#fff` 且其中一个子元素是 Lucide 图标，则图标的颜色将渲染为 `#fff`。这是浏览器的原生行为。

::: sandpack {template=vanilla showTabs=false editorHeight=300 editorWidthPercentage=60 dependencies="lucide"}

```html /index.html [active]
<!DOCTYPE html>
<html>
  <body>
    <button style="color: white">
      <i data-lucide="thumbs-up"></i>
      Like
    </button>

    <script src="index.js"></script>
  </body>
</html>
```

```js /index.js [hidden]
import "./styles.css";

import { createIcons, ThumbsUp } from 'lucide/dist/cjs/lucide';

createIcons({
  icons: {
    ThumbsUp,
  }
});

```
:::
