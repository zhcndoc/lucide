---
title: 使用 Lucide Lab 或自定义图标 - Lucide
description: 学习如何在原生 JavaScript 应用程序中使用 Lucide Lab 或自定义图标。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue'
</script>

# 使用 Lucide Lab 或自定义图标

[Lucide Lab](https://github.com/lucide-icons/lucide-lab) 是不属于 Lucide 主库的图标集合。

可以通过将 `@lucide/lab` 包添加到你的项目中来使用它们。
所有像常规 lucide 图标一样的属性都可以传递以调整图标外观。

## 使用 Lucide Lab 图标

这将基于传递的 iconNode 创建单个图标并渲染一个 Lucide 图标组件。

::: sandpack {template=vanilla editorHeight=295 editorWidthPercentage=60 dependencies="lucide,@lucide/lab"}

```html /index.html [active]
<!DOCTYPE html>
<html>
  <body>
    <i data-lucide="avocado"></i>

    <script src="index.js"></script>
  </body>
</html>
```

```js /index.js
import "./styles.css";

import { createIcons, Smile } from 'lucide/dist/cjs/lucide';
import { avocado as Avocado } from '@lucide/lab';

createIcons({
  icons: {
    Avocado,
  }
});

```

:::
