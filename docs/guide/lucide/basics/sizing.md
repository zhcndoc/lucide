---
title: 尺寸调整 - Lucide
description: 学习如何在 Vanilla JavaScript 应用程序中使用 width 和 height 属性以及 CSS 调整 Lucide 图标的大小。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue'
</script>

# 尺寸调整

默认情况下，所有图标的大小为 `24px` 乘 `24px`。可以使用 `width` 和 `height` 属性或通过 CSS 调整大小。

## 使用 `width` 和 `height` 属性调整图标大小

::: sandpack {template=vanilla showTabs=false editorHeight=295 editorWidthPercentage=60 dependencies="lucide"}

```html /index.html [active]
<!DOCTYPE html>
<html>
  <body>
    <i data-lucide="landmark" width="64" height="64"></i>

    <script src="index.js">
    </script>
  </body>
</html>
```

```js /index.js
import "./styles.css";

import { createIcons, Landmark } from 'lucide/dist/cjs/lucide';

createIcons({
  icons: {
    Landmark,
  }
});
```

:::

## 通过 CSS 调整图标大小

CSS 属性 `width` 和 `height` 可用于调整图标大小。

::: sandpack {template=vanilla editorHeight=300 editorWidthPercentage=60 dependencies="lucide"}

```css icon.css [active]
.my-beer-icon {
  /* 修改这里！ */
  width: 64px;
  height: 64px;
}
```

```html /index.html
<!DOCTYPE html>
<html>
  <body>
    <i data-lucide="beer" class="my-beer-icon"></i>

    <script src="index.js">
    </script>
  </body>
</html>
```

```js /index.js
import { createIcons, Beer } from 'lucide/dist/cjs/lucide';
import "./styles.css";
import "./icon.css";

createIcons({
  icons: {
    Beer,
  }
});
```
:::

### 根据字体大小动态更改图标大小

可以根据字体大小调整图标大小。这可以通过使用 `em` 单位来实现。请参阅这篇 [MDN 文章](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#ems) 以获取有关 `em` 单位的更多信息。

::: sandpack {template=vanilla editorHeight=320  dependencies="lucide"}

```css icon.css [active]
.my-icon {
  /* 图标大小将相对于 .text-wrapper 的 font-size */
  width: 1em;
  height: 1em;
}

.text-wrapper {
  /* 修改这里！ */
  font-size: 96px;

  /* 布局内容 */
  display: flex;
  gap: 0.25em;
  align-items: center;
}
```

```js /index.js
import { createIcons, Star } from 'lucide/dist/cjs/lucide';
import "./styles.css";
import "./icon.css";

createIcons({
  icons: {
    Star,
  }
});
```

```html /index.html
<!DOCTYPE html>
<html>
  <body>
    <div class="text-wrapper">
      <i data-lucide="star" class="my-icon"></i>
      <div>是</div>
    </div>

    <script src="index.js">
    </script>
  </body>
</html>
```

:::

### 使用 Tailwind 调整大小

`size-*` 工具类可用于调整图标的大小。请参阅 [Tailwind 文档](https://tailwindcss.com/docs/width#setting-both-width-and-height) 以获取有关 `size-*` 工具类的更多信息。

::: sandpack {template=vanilla editorHeight=300 editorWidthPercentage=60 dependencies="lucide" externalResources="https://cdn.tailwindcss.com"}

```html /index.html
<!DOCTYPE html>
<html>
  <body>
    <i data-lucide="party-popper" class="size-24"></i>

    <script src="index.js">
    </script>
  </body>
</html>
```

```js /index.js [hidden]
import { createIcons, PartyPopper } from 'lucide/dist/cjs/lucide';
import "./styles.css";

createIcons({
  icons: {
    PartyPopper,
  }
});
```

:::
