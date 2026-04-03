---
title: 内容模板元素 - Lucide
description: 了解如何使用 inTemplates 选项在 HTML 模板元素中包含 Lucide 图标。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue'
</script>

# 内容模板元素

默认情况下，`<template>` 标签内的图标不会被添加。
通过将 `inTemplates` 选项设置为 `true`，模板内的图标也会被替换。

更多关于 [MDN 上的内容模板元素](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/template)。

## 使用 `createIcons` 函数配合 `template` 元素的示例

::: sandpack {template=vanilla editorHeight=420 editorWidthPercentage=60 dependencies="lucide"}

```js /index.js [active]
import { createIcons, Backpack } from 'lucide/dist/cjs/lucide';
import "./styles.css";

createIcons({
  icons: {
    Backpack,
  },
  inTemplates: true
});

const container = document.getElementById("container");
const template = document.getElementById("template");

const firstClone = document.importNode(template.content, true);
container.appendChild(firstClone);

const secondClone = document.importNode(template.content, true);
container.appendChild(secondClone);
```

```html /index.html
<!DOCTYPE html>
<html>
  <body>
    <template id="template">
      <i data-lucide="backpack"></i>
    </template>

    <div id="container"></div>

    <script src="index.js">
    </script>
  </body>
</html>
```

:::
