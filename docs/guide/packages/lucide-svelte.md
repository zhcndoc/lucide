# 适用于 Svelte 的 Lucide

适用于 Lucide 图标的 Svelte 组件，与 Svelte 4 和 Svelte 5 无缝协作。每个图标都是一个响应式 Svelte 组件，渲染为内联 SVG，提供卓越的性能以及与 Svelte 响应式系统和现代功能的集成。

**你可以实现的功能：**
- 将图标作为具有完整响应式和 TypeScript 支持的 Svelte 组件使用
- 将图标属性绑定到响应式变量和 stores
- 创建响应应用状态的动态图标系统
- 利用全面的 TypeScript 定义构建类型安全的界面
- 通过直接导入图标和树摇优化包大小

## 安装

::: code-group

```sh [pnpm]
pnpm add @lucide/svelte
```

```sh [yarn]
yarn add @lucide/svelte
```

```sh [npm]
npm install @lucide/svelte
```

```sh [bun]
bun add @lucide/svelte
```
:::
> `@lucide/svelte` 仅适用于 Svelte 5，对于 Svelte 4 请使用 `lucide-svelte` 包。

## 如何使用

Lucide 基于 ES Modules 构建，因此完全支持树摇（tree-shakable）。

每个图标都可以作为 Svelte 组件导入，该组件渲染一个内联 SVG 元素。这样，只有导入到项目中的图标才会包含在最终 bundle 中。其余图标会被树摇移除。

### 示例

默认用法：

```svelte
<script>
  import { Skull } from '@lucide/svelte';
</script>

<Skull />
```

可以传递额外的 props 来调整图标：

```svelte
<script>
  import { Camera } from '@lucide/svelte';
</script>

<Camera color="#ff3e98" />
```

为了更快的构建和加载时间，你可以直接从 `@lucide/svelte/icons` 目录导入图标：

```svelte
<script>
  import CircleAlert from '@lucide/svelte/icons/circle-alert';
</script>

<CircleAlert color="#ff3e98" />
```

## 属性

| 名称                  | 类型      | 默认值       |
| --------------------- | --------- | ------------ |
| `size`                | _number_  | 24           |
| `color`               | _string_  | currentColor |
| `strokeWidth`         | _number_  | 2            |
| `absoluteStrokeWidth` | _boolean_ | false        |

### 应用属性

要自定义图标的外观，你可以直接将自定义属性作为 props 传递给组件。组件接受所有 SVG 属性作为 props，这允许灵活地样式化 SVG 元素。请参阅 [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) 上的 SVG 呈现属性列表。

```svelte
<script>
  import { Phone } from '@lucide/svelte';
</script>

<Phone fill="#333" />
```

这将生成一个填充的电话图标。

## 类型

该包包含所有图标的类型定义。如果你想使用 `svelte:component` 指令动态加载图标，无论你是否使用 TypeScript 或 JSDoc，这都很有用。

### TypeScript 示例

::: code-group

```svelte [Svelte 5]
<script lang="ts">
  import { Home, Library, Cog, type Icon as IconType } from '@lucide/svelte';

  type MenuItem = {
    name: string;
    href: string;
    icon: typeof IconType;
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
  import { Home, Library, Cog, type Icon } from '@lucide/svelte';
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

### JSDoc 示例

::: code-group

```svelte [Svelte 5]
<script>
  import { Home, Library, Cog } from '@lucide/svelte';

  /**
   * @typedef {Object} MenuItem
   * @property {string} name
   * @property {string} href
   * @property {typeof import('@lucide/svelte').Icon} icon
   */

  /** @type {MenuItem[]} */
  const menuItems = [
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
<script>
  import { Home, Library, Cog } from '@lucide/svelte';

  /**
   * @typedef {Object} MenuItem
   * @property {string} name
   * @property {string} href
   * @property {import('svelte').ComponentType<import('@lucide/svelte').Icon>} icon
   */

  /** @type {MenuItem[]} */
  const menuItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
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

有关为 `svelte:component` 指令添加类型的更多详情，请参阅 [Svelte 文档](https://svelte.dev/docs/typescript#types-componenttype)。

## 使用 Lucide Lab 或自定义图标

[Lucide Lab](https://github.com/lucide-icons/lucide-lab) 是不属于 Lucide 主库的图标集合。

可以通过使用 `Icon` 组件来使用它们。
所有像常规 Lucide 图标一样的 props 都可以传递以调整图标外观。

### 使用 `Icon` 组件

这基于传入的 iconNode 创建单个图标并渲染一个 Lucide 图标组件。

```svelte
<script>
import { Icon } from '@lucide/svelte';
import { pear, sausage } from '@lucide/lab';
</script>

<Icon iconNode={pear} />
<Icon iconNode={sausage} color="red"/>
```

## 一个通用图标组件

可以创建一个通用图标组件来加载图标，但不推荐这样做。

::: danger
下面的示例导入了所有 ES 模块，因此使用时请谨慎。导入所有图标将显著增加应用程序的构建大小，对其性能产生负面影响。当使用 `Webpack`、`Rollup` 或 `Vite` 等 bundlers 时，这一点尤其重要。
:::

### 图标组件示例

::: code-group

```svelte [Svelte 5]
<script>
  import * as icons from '@lucide/svelte';
  let { name, ...props } = $props();

  const Icon = icons[name];
</script>

<Icon {...props} />
```

```svelte [Svelte 4]
<script>
  import * as icons from '@lucide/svelte';
  export let name;
</script>

<svelte:component this={icons[name]} {...$$props} />
```

:::

#### 使用图标组件

```svelte
<script>
  import LucideIcon from './LucideIcon';
</script>

<LucideIcon name="Menu" />
```

## 无障碍性

默认情况下，我们使用 `aria-hidden="true"` 向屏幕阅读器隐藏图标。

你可以使用 aria-label 添加无障碍属性。

```svelte
<script>
  import { Check } from '@lucide/svelte';
</script>

<Check aria-label="任务已完成" />
```

关于无障碍的最佳实践，请参阅我们的 [无障碍指南](../accessibility.md)。
