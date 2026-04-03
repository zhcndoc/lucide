---
title: Shadow DOM - Lucide
description: 学习如何在原生 JavaScript 应用程序的 shadow DOM 中使用 Lucide 图标。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue'
</script>

# Shadow DOM

可以在 shadow DOM 中使用 Lucide 图标。

## 使用 `createElement` 函数的示例

使用 `createElement` 函数创建单个图标并将其附加到 shadow DOM。

::: sandpack {template=vanilla editorHeight=300 editorWidthPercentage=60 dependencies="lucide"}

```html /index.html
<!DOCTYPE html>
<html>
  <body>
    <div id="container"></div>

    <script src="index.js"></script>
  </body>
</html>
```

```js /index.js [active]
import "./styles.css";
import { Home, createElement } from 'lucide/dist/cjs/lucide';

const container = document.getElementById('container');
const shadowRoot = container.attachShadow({ mode: 'open' });

const iconElement = createElement(Home)
shadowRoot.appendChild(iconElement);
```

:::


## 使用 `createIcons` 函数的示例

如果想在 shadow DOM 中创建多个图标，可以使用 `createIcons` 函数。
通过 `root` 选项，您可以指定 shadow root 作为渲染图标的根元素。

::: sandpack {template=vanilla editorHeight=420 editorWidthPercentage=60 dependencies="lucide"}

```html /index.html
<!DOCTYPE html>
<html>
  <body>
    <div id="container"></div>

    <script src="index.js"></script>
  </body>
</html>
```

```js /index.js [active]
import "./styles.css";
import { TreePalm, Volleyball, Waves, createIcons } from 'lucide/dist/cjs/lucide';

const container = document.getElementById('container');
const shadowRoot = container.attachShadow({ mode: 'open' });

const iconWrapper = document.createElement('div');
iconWrapper.innerHTML = `
<i data-lucide="tree-palm"></i>
<i data-lucide="volleyball"></i>
<i data-lucide="waves"></i>
`;
shadowRoot.appendChild(iconWrapper);

createIcons({
  root: shadowRoot,
  icons: {
    TreePalm,
    Volleyball,
    Waves,
  }
})
```

:::
