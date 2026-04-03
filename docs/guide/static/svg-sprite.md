---
description: 了解如何在项目中使用 Lucide 图标的 SVG 精灵，包括基本用法和内联选项。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue'
</script>
# 使用 SVG 精灵

了解如何在项目中使用 Lucide 图标的 SVG 精灵，包括基本用法和内联选项。

:::warning 不建议用于高流量的生产环境
SVG 精灵包含所有图标，这可能会显著增加您的应用包大小和加载时间。对于生产环境，我们建议使用支持 tree-shaking 的打包器，仅包含您实际使用的图标。考虑使用其中一个特定框架的 [包](../../packages.md)。
:::

SVG 精灵可以作为单独的图片加载，也可以与 `<use>` 元素一起内联使用。
您可能还需要一个额外的 SVG 加载器来处理项目中的 node_modules 导入。查看我们的 [codesandbox 示例](https://codesandbox.io/s/using-the-svg-sprite-lz1kk) 以获取工作示例。

## 基本精灵用法

SVG 精灵可以直接在 img 标签中导入，并使用 <br>`#{icon-name}` 语法选择图标：

```html
<img src="lucide-static/sprite.svg#house" />
```

## 内联用法

您也可以使用 `<use>` 元素内联使用精灵。这允许您直接将 CSS 样式应用于 SVG 元素。

::: sandpack {template=vanilla showTabs=false editorHeight=480 editorWidthPercentage=60 dependencies="lucide-static"}

```html /index.html [active]
<!DOCTYPE html>
<html>
  <body>
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <use href="#alarm-clock-check" />
    </svg>

    <div id="sprite" style="display: none;"></div>

    <script src="index.js"></script>
  </body>
</html>
```

```js /index.js
import "./styles.css";
import sprite from "lucide-static/sprite.svg";

document.getElementById('sprite').innerHTML = sprite;
```

:::

## 使用 CSS 辅助类内联

如果您愿意，可以使用 CSS 来保存您的基础 SVG 属性：

::: sandpack {template=vanilla editorHeight=320 editorWidthPercentage=60 dependencies="lucide-static"}

```css /icon.css [active]
.lucide-icon {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
```

```html /index.html
<!DOCTYPE html>
<html>
  <body>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="lucide-icon"
    >
      <use href="#alarm-clock-check" />
    </svg>

    <div id="sprite" style="display: none;"></div>

    <script src="index.js"></script>
  </body>
</html>
```

```js /index.js
import "./styles.css";
import "./icon.css";
import sprite from "lucide-static/sprite.svg";

document.getElementById('sprite').innerHTML = sprite;
```

:::
