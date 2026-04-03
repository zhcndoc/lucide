---
title: TypeScript 支持 - Svelte
description: 了解 `@lucide/svelte` 包导出的不同类型以及如何在你的 Svelte 应用程序中使用它们。
---
# TypeScript 支持

@lucide/svelte 包导出的类型列表。
当在 TypeScript Svelte 项目中使用 Lucide 图标时，这些类型可用于为你的组件指定类型。

## `LucideProps`

导出所有可以传递给图标组件的 props 以及任何其他 SVG 属性，参见：[MDN 上的 SVG 展示属性](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation)。

```ts
interface LucideProps extends SVGAttributes<SVGSVGElement> {
  name?: string;
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
  children?: Snippet;
  [key: string]: any; // 任何其他 SVG 属性
}
```

### 使用 `LucideProps`
你可以使用 `LucideProps` 接口为你的自定义图标组件的 props 指定类型。

::: code-group
```svelte [IconWrapper.svelte]
<script lang="ts">
import { Camera, type LucideProps } from '@lucide/svelte';

let props: LucideProps = $props();
</script>

<template>
  <div>
    <Camera {...props} />
  </div>
</template>
```
:::

## `LucideIcon`

单个图标组件的类型，当你想要为持有图标组件的变量或 prop 指定类型时，这非常有用。

```ts
import type { Component } from 'svelte';

type LucideIcon = Component<LucideProps>
```

### 使用 `LucideIcon`

当你需要直接使用图标组件时，可以使用 `LucideIcon` 类型。

::: code-group

```svelte [Svelte 5]
<script lang="ts">
  import { Home, Library, Cog, type LucideIcon } from '@lucide/svelte';

  type MenuItem = {
    name: string;
    href: string;
    icon: LucideIcon;
  };

  const menuItems: MenuItem[] = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: Library
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: Cog
    }
  ];
</script>

{#each menuItems as item}
  {@const Icon = item.icon}
  <a href={item.href}>
    <Icon />
    <span>{item.name}</span>
  </a>
{/each}
```

```svelte [Svelte 4]
<script lang="ts">
  import { Home, Library, Cog, type Icon } from 'lucide-svelte';
  import type { ComponentType } from 'svelte';

  type MenuItem = {
    name: string;
    href: string;
    icon: ComponentType<Icon>;
  };

  const menuItems: MenuItem[] = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: Library
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: Cog
    }
  ];
</script>

{#each menuItems as item}
  {@const Icon = item.icon}
  <a href={item.href}>
    <Icon />
    <span>{item.name}</span>
  </a>
{/each}

```
:::

## `IconNode`

图标原始 SVG 结构的类型。这是一个用于渲染图标的 SVG 元素及其属性的数组。
通常不直接在应用程序代码中使用。但对于高级用例可能很有用，例如使用自定义图标或与 Lucide Lab 一起使用。

```ts
type IconNode = [
  elementName: 'circle' | 'ellipse'| 'g' | 'line' | 'path' | 'polygon' | 'polyline' | 'rect',
  attrs: SVGAttributes<SVGSVGElement>
][];
```

### 使用 `IconNode`
当你需要处理图标的原始 SVG 结构时，可以使用 `IconNode` 类型。

::: code-group
```svelte [CustomIcon.svelte]
<script lang="ts">
import { type IconNode, Icon } from '@lucide/svelte';

const customIcon: IconNode = [
  ['circle', { cx: 12, cy: 12, r: 10 }],
  ['line', { x1: 12, y1: 8, x2: 12, y2: 12 }],
  ['line', { x1: 12, y1: 16, x2: 12, y2: 16 }],
];
</script>

<Icon iconNode={customIcon} size="24" color="blue" />
```
:::
