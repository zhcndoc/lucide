---
title: TypeScript 支持 - Astro
description: 了解 @lucide/astro 包导出的 TypeScript 类型。
---

# TypeScript 支持

来自 `@lucide/astro` 包的导出类型列表。
当在 TypeScript Astro 项目中使用 Lucide 图标时，这些类型可用于为你的组件指定类型。

## `LucideProps`

导出所有可以传递给图标组件的 props 以及任何其他 SVG 属性，参见：[MDN 上的 SVG 展示属性](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation)。

```ts
interface LucideProps extends SVGAttributes<SVGSVGElement> {
  name?: string;
  color?: string;
  size?: number | string;
  'stroke-width'?: number | string;
  absoluteStrokeWidth?: boolean;
  [key: string]: any; // 任何其他 SVG 属性
}
```

### 使用 `IconProps`
<!-- 将此重命名为 LucideProps -->
你可以使用 `IconProps` 接口为你的自定义图标组件的 props 指定类型。

```astro
---
import { icons, type IconProps } from '@lucide/astro';

interface Props extends IconProps {
  name: keyof typeof icons;
}

const { name, ...restProps } = Astro.props;
const Icon = icons[name];
---

<Icon {...restProps} />
```

## `LucideIcon`

单个图标组件的类型，当你想要为持有图标组件的变量或 prop 指定类型时，这非常有用。

```ts
import type { Component } from 'astro/types';
import type { IconProps } from '@lucide/astro';

type LucideIcon = Component<IconProps>
```

### 使用 `LucideIcon`

当你需要直接使用图标组件时，可以使用 `LucideIcon` 类型。

```astro
---
import { House, Library, Cog, type Icon as IconType } from '@lucide/astro';

type MenuItem = {
  name: string;
  href: string;
  icon: typeof IconType;
};

const menuItems: MenuItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: House,
  },
  {
    name: 'Blog',
    href: '/blog',
    icon: Library,
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: Cog,
  },
];
---

{
  menuItems.map((item) => (
    <a href={item.href}>
      <item.icon />
      <span>{item.name}</span>
    </a>
  ))
}
```

## `IconNode`

图标原始 SVG 结构的类型。这是一个用于渲染图标的 SVG 元素及其属性的数组。
不常在应用代码中直接使用。但对于高级用例可能很有用，例如使用自定义图标或与 Lucide Lab 一起使用。

```ts
type IconNode = [
  elementName: 'circle' | 'ellipse'| 'g' | 'line' | 'path' | 'polygon' | 'polyline' | 'rect',
  attrs: HTMLAttributes<'svg'>
][];
```

### 使用 `IconNode`
当你需要处理图标的原始 SVG 结构时，可以使用 `IconNode` 类型。

```astro [CustomIcon.astro]
---
import { type IconNode, Icon } from '@lucide/astro';

const customIcon: IconNode = [
  ['circle', { cx: 12, cy: 12, r: 10 }],
  ['line', { x1: 12, y1: 8, x2: 12, y2: 12 }],
  ['line', { x1: 12, y1: 16, x2: 12, y2: 16 }],
];
---

<Icon iconNode={customIcon} size="24" color="blue" />
```
