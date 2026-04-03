---
title: 适用于 Preact 的 Lucide
---

# 适用于 Preact 的 Lucide

用于 Lucide 图标的 Preact 组件，提供类似 React 的开发体验，但占用空间更小。每个图标都是一个轻量级的 Preact 组件，渲染为内联 SVG，非常适合需要 React 兼容性且包大小最小的应用程序。

**你可以实现的功能：**
- 使用具有类似 React 语法和模式的图标作为 Preact 组件
- 利用 Preact 更小的运行时构建轻量级应用程序
- 以最小的 JavaScript 开销创建快速、响应式的界面
- 在减小包大小的同时保持 React 兼容性
- 与现有的 Preact 应用程序和组件库集成

## 安装

::: code-group

```sh [pnpm]
pnpm add lucide-preact
```

```sh [yarn]
yarn add lucide-preact
```

```sh [npm]
npm install lucide-preact
```

```sh [bun]
bun add lucide-preact
```

:::

## 如何使用

Lucide 是使用 ES Modules 构建的，因此完全支持 tree-shaking。

每个图标都可以作为 Preact 组件导入，它会渲染一个内联 SVG 元素。这样，只有导入到项目中的图标才会包含在最终的包中。其余的图标会被 tree-shaking 移除。

### 示例

可以传递额外的 props 来调整图标：

```jsx
import { Camera } from 'lucide-preact';

// 用法
const App = () => {
  return <Camera color="red" size={48} />;
};

export default App;
```

## 属性

| 名称                  | 类型      | 默认值      |
| --------------------- | --------- | ------------ |
| `size`                | *number*  | 24           |
| `color`               | *string*  | currentColor |
| `strokeWidth`         | *number*  | 2            |
| `absoluteStrokeWidth` | *boolean* | false        |

### 应用属性

要自定义图标的外观，你可以直接将自定义属性作为 props 传递给组件。组件接受所有 SVG 属性作为 props，这允许灵活地设置 SVG 元素的样式。请参阅 [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) 上的 SVG 表现属性列表。

```jsx
// 用法
const App = () => {
  return <Camera fill="red" stroke-linejoin="bevel" />;
};
```

> Preact 中的 SVG 属性不会被转换，所以如果你想更改例如 `stroke-linejoin`，你需要以 kebab-case 形式传递它。基本上就是 SVG 规范希望你编写的方式。请参阅 [Preact 文档](https://preactjs.com/guide/v10/differences-to-react/#svg-inside-jsx) 中的此主题。

## 使用 Lucide Lab 或自定义图标

[Lucide Lab](https://github.com/lucide-icons/lucide-lab) 是不属于 Lucide 主库的图标集合。

可以通过使用 `Icon` 组件来使用它们。
所有像常规 Lucide 图标一样的 props 都可以传递以调整图标外观。

### 使用 Icon 组件

这会根据传入的 iconNode 创建单个图标并渲染一个 Lucide 图标组件。

```jsx
import { Icon } from 'lucide-preact';
import { coconut } from '@lucide/lab';

const App = () => (
  <Icon iconNode={coconut} />
);
```

## 一个通用图标组件

可以创建一个通用图标组件来加载图标，但不推荐这样做。

::: danger
下面的示例导入了所有 ES Modules，所以使用时要小心。导入所有图标将显著增加应用程序的构建大小，对其性能产生负面影响。当使用 `Webpack`、`Rollup` 或 `Vite` 等打包工具时，这一点尤其重要。
:::

### 图标组件示例

```jsx
import { icons } from 'lucide-preact';

const Icon = ({ name, color, size }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
```

#### 使用图标组件

```jsx
import Icon from './Icon';

const App = () => {
  return <Icon name="house" />;
};

export default App;
```

## 无障碍性

默认情况下，我们使用 `aria-hidden="true"` 对屏幕阅读器隐藏图标。

你可以使用 aria-labels 添加无障碍属性。

```jsx
import { Check } from 'lucide-preact';

const App = () => {
  return <Check aria-label="任务已完成" />;
};
```

有关无障碍性的最佳实践，请参阅我们的 [无障碍指南](../accessibility.md)。
