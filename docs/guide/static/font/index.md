---
description: 在您的项目中使用 Lucide 图标的 Web 字体版本。了解如何包含样式表并通过 CSS 类使用图标。
nextPage:
  - getting-started
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue'
</script>
# 图标字体

Lucide 图标也提供 Web 字体版本。该字体将所有图标作为字形包含在内，允许您通过 CSS 类在您的项目中使用它们。对于更喜欢使用图标字体的项目，这可能是一个方便的选择。

:::warning 不建议用于高流量的生产环境
图标字体包含所有图标，这会显著增加您的应用包大小和加载时间。对于生产环境，我们建议使用支持 tree-shaking 的打包工具，仅包含您实际使用的图标。考虑使用特定框架的 [包](../../../packages.md) 之一。
:::

## 使用 CSS 样式表

::: code-group

```css [Vite]
@import 'lucide-static/font/lucide.css';
```

```css [Webpack]
@import "~lucide-static/font/lucide.css";
```

```html [CDN]
<link rel="stylesheet" href="https://unpkg.com/lucide-static@latest/font/lucide.css" />
```

```html [Static asset]
<link rel="stylesheet" href="/your/path/to/lucide.css" />
```

:::

## 使用图标字体

包含样式表后，您可以通过应用适当的 CSS 类在 HTML 中使用图标。每个图标都有相应的类名，您可以使用它来显示图标。

例如，要显示 "home" 图标，您将使用以下 HTML：

```html
<div class="icon-house"></div>
```

## JavaScript 示例

<!-- TODO: 修复此示例 -->
::: sandpack {template=vanilla showTabs=false editorHeight=480 editorWidthPercentage=60 dependencies="lucide-static"}

```html /index.html [active]
<!DOCTYPE html>
<html>
  <body>
    <i class="icon-home"></i>

    <script src="index.js"></script>
  </body>
</html>
```

```js /index.js
import "./styles.css";
import "lucide-static/font/lucide.css";
```

:::
