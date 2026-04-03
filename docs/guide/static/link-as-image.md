---
description: 了解如何在项目中将 Lucide 图标作为图片使用。
---

<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue'
</script>

# 作为图片链接

在某些情况下，你可能希望将 Lucide 图标作为图片使用，而不是内联 SVG。这对于性能原因很有用，或者当你想在不支持内联 SVG 的上下文中使用图标时。

## 在 HTML 中

你可以使用 `<img>` 标签在 HTML 中直接链接到 SVG 文件。SVG 文件的路径将取决于你如何设置项目。

::: code-group

```html [Vite]
<html>
  <body>
    <img src="node_modules/lucide-static/icons/smile.svg" alt="Smile Icon">
  </body>
</html>
```

```html [Webpack]
<html>
  <body>
    <img src="~/lucide-static/icons/smile.svg" alt="Smile Icon">
  </body>
</html>
```

```html [CDN]
<html>
  <body>
    <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/smile.svg" alt="Smile Icon">
  </body>
</html>
```

:::

::: warning 致 CDN 用户
图标名称可能会在未来的版本中更改。确保你在 URL 中设置明确的版本以避免破坏性变更。\
`https://cdn.jsdelivr.net/npm/lucide-static@{version}/icons/smile.svg`
:::

## 在 CSS 中

你也可以在 CSS 中将图标用作背景图片。这对于向按钮、链接或其他元素添加图标很有用。

::: code-group

```css [Vite]
.button {
  background-image: url('node_modules/lucide-static/icons/smile.svg');
}
```

```css [Webpack]
.button {
  background-image: url('~/lucide-static/icons/smile.svg');
}
```

```css [CDN]
.button {
  background-image: url('https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/smile.svg');
}
```

:::

::: warning 致 CDN 用户
图标名称可能会在未来的版本中更改。确保你在 URL 中设置明确的版本以避免破坏性变更。\
`https://cdn.jsdelivr.net/npm/lucide-static@{version}/icons/smile.svg`
:::

<style>
.vp-code-group + .warning{
  display: none;
}
/* TODO: 寻找一种更好的方法来选择此输入选择器 */
.vp-code-group:has(.tabs input:nth-child(5):checked) + .warning {
  display: block;
}
</style>
