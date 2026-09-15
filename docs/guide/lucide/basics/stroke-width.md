---
title: 描边宽度 - Lucide
description: 了解如何在 Vanilla JavaScript 应用中使用 strokeWidth 和 nonScalingStroke 属性自定义 Lucide 图标的描边宽度
---

<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue'
</script>

# 描边宽度

所有图标都是使用带有描边的 SVG 元素设计的。
它们的默认描边宽度为 `2px`。

可以调整 `strokeWidth` 来创建不同的图标外观。

## 使用 `strokeWidth` 属性调整描边宽度

::: sandpack {template=vanilla showTabs=false editorHeight=250 editorWidthPercentage=70 dependencies="lucide"}

```html /index.html [active]
<!doctype html>
<html>
  <body>
    <i
      data-lucide="folder-lock"
      stroke-width="1"
    ></i>

    <script src="index.js"></script>
  </body>
</html>
```

```js /index.js
import './styles.css';

import { createIcons, FolderLock } from 'lucide/dist/cjs/lucide';

createIcons({
  icons: {
    FolderLock,
  },
});
```

:::

<!-- ## 非缩放描边

调整 `size` 属性时，描边宽度的大小将相对于图标的大小，这是默认的 SVG 行为。引入 `nonScalingStroke` 属性是为了调整此行为，使描边宽度无论图标大小如何都保持不变。

这意味着，当启用 `nonScalingStroke` 且图标的 `size` 设置为 `48px` 时，屏幕上的 `strokeWidth` 仍将为 `2px`。

![绝对描边宽度比较](../../../images/absolute-stroke-width-compare.png?raw=true "绝对描边宽度比较")

[非缩放描边比较](../../../images/non-scaling-stroke-compare.svg)

### 使用 `nonScalingStroke` 属性调整描边宽度

将 `nonScalingStroke` 设置为 `true` 将使描边宽度不随图标缩放。

::: sandpack {template=vanilla showTabs=false editorHeight=250 editorWidthPercentage=70 dependencies="lucide"}

```html /index.html [active]
<!DOCTYPE html>
<html>
  <body>
    <i data-lucide="roller-coaster" stroke-width="96" non-scaling-stroke="true"></i>

    <script src="index.js"></script>
  </body>
</html>
```

```js /index.js
import "./styles.css";

import { createIcons, RollerCoaster } from 'lucide/dist/cjs/lucide';

createIcons({
  icons: {
    RollerCoaster,
  }
});

```

::: -->
