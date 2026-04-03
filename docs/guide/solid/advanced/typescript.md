---
title: TypeScript 支持 - Solid
description: 了解 `lucide-solid` 包导出的不同类型以及如何在你的 Solid 应用程序中使用它们。
---
# TypeScript 支持

来自 `lucide-solid` 包的导出类型列表。
当在 TypeScript Solid 项目中使用 Lucide 图标时，这些类型可用于为你的组件定义类型。

## `LucideProps`

导出所有可以传递给图标组件的 props 以及任何其他 SVG 属性，参见：[MDN 上的 SVG 展示属性](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation)。

```ts
interface LucideProps extends SVGAttributes {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
  [key: string]: any; // 任何其他 SVG 属性
}
```

### 使用 `LucideProps`
你可以使用 `LucideProps` 接口来为你的自定义图标组件定义类型，或者当你需要处理图标 props 时。

```tsx
import { type LucideProps } from 'lucide-solid';
import { Camera } from 'lucide-solid';

const WrapIcon = (props: LucideProps) => {
  return <Camera {...props} />;
};

export default WrapIcon;
```

## `LucideIcon`

单个图标组件的类型。

```ts
type LucideIcon = (props: LucideProps) => JSX.Element;
```

### 使用 `LucideIcon`

当你需要直接使用图标组件时，可以使用 `LucideIcon` 类型。

```tsx
import { type LucideIcon, Camera } from 'lucide-solid';

interface ButtonProps {
  icon: LucideIcon;
  label: string;
}

const IconButton = ({ icon: Icon, label }) => {
  return (
    <button aria-label={label}>
      <Icon size={16} />
    </button>
  );
};

export default IconButton;
```

## `IconNode`

图标原始 SVG 结构的类型。这是一个用于渲染图标的 SVG 元素及其属性的数组。
不常在应用程序代码中直接使用。但对于高级用例可能很有用，例如使用自定义图标或 [与 Lucide Lab 一起使用](./with-lucide-lab)。

```ts
type IconNode = [elementName: string, attrs: Record<string, string | number>][];
```

### 使用 `IconNode`
当你需要处理图标的原始 SVG 结构时，可以使用 `IconNode` 类型。

```tsx
import { type IconNode, Icon } from 'lucide-solid';

const customIcon: IconNode = [
  ['circle', { cx: 12, cy: 12, r: 10 }],
  ['line', { x1: 12, y1: 8, x2: 12, y2: 12 }],
  ['line', { x1: 12, y1: 16, x2: 12, y2: 16 }],
];

const MyCustomIcon = () => {
  return (
    <Icon iconNode={customIcon} size={24} color="blue" />
  );
};

export default MyCustomIcon;
```
