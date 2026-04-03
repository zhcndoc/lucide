# @lucide/icons

`@lucide/icons` 是一个辅助库，它以可树摇的格式导出 Lucide **图标数据**，并提供动态导入图标的工具函数。

它特意**不包含真实的渲染逻辑或组件** —— 其他包（例如 [`@lucide/angular`](http://npmjs.com/package/@lucide/angular)）可以使用这些数据在各自的框架中渲染图标。你也可以使用此包为我们尚未支持的框架构建第三方集成。

## 安装

::: code-group

```sh [pnpm]
pnpm add @lucide/icons
```

```sh [yarn]
yarn add @lucide/icons
```

```sh [npm]
npm install @lucide/icons
```

```sh [bun]
bun add @lucide/icons
```

:::

## 图标数据格式

每个图标都由以下接口描述：

```typescript
export type LucideIconData = {
  name: string;
  node: LucideIconNode[];
} & (
  | { size: number }
  | { width: number; height: number; }
);
```

| 名称                         | 类型               | 描述                                                        |
|------------------------------|--------------------|--------------------------------------------------------------------|
| `name`                       | `string`           | 图标的名称。                                              |
| `node`                       | `LucideIconNode[]` | SVG 子节点，格式为 `[tagName, attributes]` 元组。                 |
| `size` 或 `width` & `height` | `number`           | 图标的尺寸（`size` 是正方形图标的简写）。 |

## 如何使用

图标可以单独导入。只有你导入的图标才会被你的应用代码引用 —— 其余的将通过树摇被消除。

```ts
import { House } from '@lucide/icons';
// House 是图标数据（不是渲染后的组件）。
```

## 构建图标

`@lucide/icons` 提供了一些小型辅助函数，可将 Lucide 图标数据转换为不同的可渲染输出。
所有构建器都接受相同的 `params` 对象（`LucideBuildParams`）来自定义生成的 SVG。

### 构建参数

支持以下参数（名称反映当前实现）：

| 参数                 | 类型                     | 效果                                                                             |
|-----------------------|--------------------------|------------------------------------------------------------------------------------|
| `color`               | `string`                 | 设置 `stroke`（默认为 `currentColor`）。                                        |
| `size`                | `number`                 | 同时设置 `width` 和 `height`（默认为 24）。                                   |
| `width`               | `number`                 | 仅设置 `width`。                                                                 |
| `height`              | `number`                 | 仅设置 `height`。                                                                |
| `strokeWidth`         | `number`                 | 设置 `stroke-width`（默认为 2）。                                               |
| `absoluteStrokeWidth` | `boolean`                | 为子元素添加 [`vector-effect="non-scaling-stroke"`](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/vector-effect)。                   |
| `className`           | `string`                 | 附加到生成的 `class` 属性。                                       |
| `attributes`          | `Record<string, string>` | 添加或覆盖任何生成的 SVG 属性（包括 `class`、`viewBox` 等）。 |

::: info
构建器生成的 SVG 属性包括默认的 Lucide 设置（`xmlns`、`viewBox`、`fill="none"`、`stroke="currentColor"`、`stroke-width="2"`、`stroke-linecap="round"`、`stroke-linejoin="round"`），以及形式为 `lucide lucide-{iconName}` 的 class 字符串。
:::

### `buildLucideIconNode`

创建类似 svgson 格式的根 SVG 节点：

```ts
import { buildLucideIconNode } from '@lucide/icons/builders';
import { House } from '@lucide/icons';

const node = buildLucideIconNode(House, {
  size: 32,
  strokeWidth: 1.5,
  className: 'my-icon',
});

// -> ['svg', 属性，子节点]
```

如果你想将 Lucide 图标插入到自己的渲染器、模板系统或框架集成中，这很有用。

### `buildLucideSvg`

创建 SVG 字符串：

```ts
import { buildLucideSvg } from '@lucide/icons/builders';
import { House } from '@lucide/icons';

const svg = buildLucideSvg(House, { size: 24, color: '#111' });
```

### `buildLucideIconElement`

在提供的文档中创建实际的 DOM 元素（SVG）：

```ts
import { buildLucideIconElement } from '@lucide/icons/builders';
import { House } from '@lucide/icons';

const el = buildLucideIconElement(document, House, { size: 24 });
document.body.appendChild(el);
```

### `buildLucideDataUri`

从 Lucide 图标对象创建 base64 编码的 SVG 数据 URI。

此辅助函数在浏览器和 Node.js 中均可使用：
- 在浏览器中它使用 `btoa`（具有正确的 UTF-8 处理）
- 在 Node.js 中它回退到 `Buffer`

```ts
import { buildLucideDataUri } from '@lucide/icons/builders';
import { House } from '@lucide/icons';

const uri = buildLucideDataUri(House, { size: 24 });
```

返回值可以直接用于以下地方：
- `<img src="...">`
- CSS `background-image`
- Canvas 绘图
- HTML 或 SVG 中的内联数据 URL

::: tip 环境说明
- SVG 在 base64 转换之前被编码为 UTF-8，以确保正确处理非 ASCII 字符。
- 不需要运行时配置 —— 函数会自动选择合适的编码策略。
- 如果 `btoa` 和 `Buffer` 都不可用，则会抛出错误。
:::

## 动态导入

当你只在运行时才知道图标名称时，动态导入很有用（例如，存储在数据库或 CMS 中的图标名称）。对于纯静态用例，首选直接导入以获得最佳的树摇效果。

::: tip
在索引映射之前验证 `iconName`（并提供后备图标）以避免运行时错误。
:::
## 动态导入

当图标名称仅在运行时已知时，动态导入很有用（例如，存储在 CMS 或数据库中的图标名称）。对于纯静态用法，首选直接导入以实现最大程度的树摇。

```ts
import { lucideDynamicIconImports } from '@lucide/icons/dynamic';

const name = 'house';
const icon = await lucideDynamicIconImports[name]?.();

if (!icon) {
  // 处理未知的图标名称（后备）
}
```
