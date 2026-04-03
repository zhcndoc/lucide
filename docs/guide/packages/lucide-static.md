# Lucide 静态资源

用于 Lucide 图标的静态资源和工具，无需 JavaScript 框架即可工作。此包提供多种格式，包括独立的 SVG 文件、SVG sprite、图标字体，以及用于服务器端渲染和静态站点生成的 Node.js 工具。

**你可以实现的功能：**
- 将独立的 SVG 文件用作图片或 CSS 背景图片
- 实现基于 CSS 的图标系统的图标字体
- 创建 SVG sprite 以便在静态站点中高效加载图标
- 在 Node.js 应用程序和服务器端渲染中导入 SVG 字符串
- 构建无需 JavaScript 框架依赖的静态网站和应用程序

此包包含以下 Lucide 图标的实现：

- 独立的 SVG 文件
- SVG sprite
- 图标字体文件
- 导出 SVG 字符串的 JavaScript 库

## 适用对象

`lucide-static` 适用于_非常特定的用例_，即你想在不依赖 JavaScript 框架或组件系统的情况下使用 Lucide 图标。它非常适合：

- 使用纯 CSS 或 utility-first 框架的图标字体项目
- 直接在 HTML 中嵌入原始 SVG 文件或 sprite
- 将 SVG 用作 CSS 背景图片
- 将 SVG 字符串导入到 Node.js (CommonJS) 环境中

::: danger
### 不推荐用于生产环境 {#production-warning}

SVG sprite 和图标字体包含**所有图标**，这可能会显著增加你的应用包大小和加载时间。

对于生产环境，我们建议使用支持 tree-shaking 的打包器，仅包含你实际使用的图标。考虑使用其中一个特定框架的 [包](../../packages.md)。
:::

## 安装

::: code-group

```sh [pnpm]
pnpm add lucide-static
```

```sh [yarn]
yarn add lucide-static
```

```sh [npm]
npm install lucide-static
```

```sh [bun]
bun add lucide-static
```

:::

## SVG 文件

你可以通过多种方式使用独立的 SVG 文件或 SVG sprite。

查看我们的 [codesandbox 示例](https://codesandbox.io/s/using-the-svg-sprite-lz1kk)。

### 将 SVG 文件作为图片

#### 在 HTML 中：

::: code-group

```html [Webpack]
<!-- 单个图标的 SVG 文件 -->
<img src="~lucide-static/icons/house.svg" />
```

```html [CDN]
<!-- 单个图标的 SVG 文件 -->
<img src="https://unpkg.com/lucide-static@latest/icons/house.svg" />
```

:::

#### 在 CSS 中：

::: code-group

```css [Webpack]
.house-icon {
  background-image: url(~lucide-static/icons/house.svg);
}
```

```css [CDN]
.house-icon {
  background-image: url(https://unpkg.com/lucide-static@latest/icons/house.svg);
}
```

:::

确保你配置了正确的 Webpack loader，例如 [`url-loader`](https://v4.webpack.js.org/loaders/url-loader/)。

### 将 SVG 文件作为字符串

要导入 SVG 作为字符串（例如，用于模板）：

::: code-group

```js [Webpack]
import arrowRightIcon from 'lucide-static/icons/arrow-right';
```

```js [Vite]
import arrowRightIcon from 'lucide-static/icons/arrow-right.svg?raw';
```

:::

你需要一个 SVG loader，例如 [`svg-inline-loader`](https://v4.webpack.js.org/loaders/svg-inline-loader/)。


### 使用 SVG sprite

:::danger
[不适用于生产环境。](#production-warning)
:::

你可能还需要额外的 SVG loader 来处理这个。

#### 基本 sprite 用法（未针对生产优化）：

```html
<img src="lucide-static/sprite.svg#house" />
```

#### 内联用法：

```html
<svg
  width="24"
  height="24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <use href="#alert-triangle" />
</svg>

<!-- SVG sprite -->
<svg>...</svg>
```

#### 带 CSS 辅助类的内联用法

如果你愿意，你可以使用 CSS 来持有基础 SVG 属性：

```css
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

...并按如下方式更新 SVG：

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  class="lucide-icon"
>
  <use href="#triangle-alert" />
</svg>

<!-- SVG sprite -->
<svg>...</svg>
```

## 图标字体

:::danger
[不适用于生产环境。](#production-warning)
:::

Lucide 图标也可作为 web 字体使用。要使用它们，你首先需要包含相应的样式表：

::: code-group

```css [Vite]
@import 'lucide-static/font/lucide.css';
```

```css [Webpack]
@import ('~lucide-static/font/lucide.css');
```

```html [CDN]
<link rel="stylesheet" href="https://unpkg.com/lucide-static@latest/font/lucide.css" />
```

```html [Static asset]
<link rel="stylesheet" href="/your/path/to/lucide.css" />
```

:::

包含后，使用格式 `icon-{kebab-case-name}`。你可以从 [Lucide Icons 页面](https://lucide.zhcndoc.com/icons) 复制图标名称。

```html
<div class="icon-house"></div>
```

如果你不使用包管理器，你可以直接从 [最新发行版](https://github.com/lucide-icons/lucide/releases/latest) 下载字体文件。

## Node.js

你也可以在 Node.js 项目中导入 Lucide 图标：

::: code-group

```js [ESM]
import {MessageSquare} from 'lucide-static';
```

```js [CommonJs]
const {MessageSquare} = require('lucide-static');
```

:::

> 注意：每个图标名称均为 PascalCase（大驼峰命名）。

#### Node.js 中的 Express 应用示例

```js
import express from 'express';
import {MessageSquare} from 'lucide-static';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Page Title</title>
      </head>
      <body>
        <h1>Lucide Icons</h1>
        <p>This is a Lucide icon ${MessageSquare}</p>

      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```
