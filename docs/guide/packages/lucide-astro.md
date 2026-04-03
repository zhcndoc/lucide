# 适用于 Astro 的 Lucide

适用于 Lucide 图标的 Astro 组件，完美契合 Astro 的岛屿架构和多框架支持。每个图标都是一个 Astro 组件，渲染为内联 SVG，为静态站点和服务端渲染场景提供卓越的性能。

**你可以实现的功能：**
- 将图标作为 Astro 组件使用，零 JavaScript 运行时开销
- 构建带有优化 SVG 图标的快速静态网站
- 与 Astro 的组件岛屿和部分水合无缝集成
- 创建多框架应用程序，图标可在不同的 UI 库之间工作
- 通过直接导入图标和构建时渲染优化性能

## 安装

::: code-group

```sh [pnpm]
pnpm add @lucide/astro
```

```sh [yarn]
yarn add @lucide/astro
```

```sh [npm]
npm install @lucide/astro
```

```sh [bun]
bun add @lucide/astro
```

:::

## 如何使用

Lucide 基于 ES Modules 构建，因此完全支持树摇（tree-shakable）。

每个图标都可以作为 Astro 组件导入，它会渲染一个内联 SVG 元素。这样，只有导入到项目中的图标才会包含在最终打包文件中。其余图标会被树摇移除。

### 示例

默认用法：

```astro
---
import { Skull } from '@lucide/astro';
---

<Skull />
```

可以传递额外的属性来调整图标：

```astro
---
import { Camera } from '@lucide/astro';
---

<Camera color="#ff3e98" />
```

为了更快的构建和加载时间，你可以直接从 `@lucide/astro/icons` 目录导入图标：

```astro
---
import CircleAlert from '@lucide/astro/icons/circle-alert';
---

<CircleAlert color="#ff3e98" />
```

## 属性

| 名称                  | 类型      | 默认值       |
| --------------------- | --------- | ------------ |
| `size`                | _数字_    | 24           |
| `color`               | _字符串_  | currentColor |
| `stroke-width`        | _数字_    | 2            |
| `absoluteStrokeWidth` | _布尔值_  | false        |

### 应用属性

要自定义图标的外观，你可以将自定义属性作为 props 直接传递给组件。组件接受所有 SVG 属性作为 props，这允许灵活地样式化 SVG 元素。请参阅 [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) 上的 SVG 表现属性列表。

```astro
---
import { Phone } from '@lucide/astro';
---

<Phone fill="#333" />
```

这将生成一个填充的电话图标。

## 类型

该包包含所有图标的类型定义。如果你想动态渲染图标，这很有用。

### 示例

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

## 使用 Lucide Lab 或自定义图标

[Lucide Lab](https://github.com/lucide-icons/lucide-lab) 是不属于 Lucide 主库的图标集合。

可以通过使用 `Icon` 组件来使用它们。
常规 Lucide 图标的所有属性都可以传递以调整图标外观。

### 使用 `Icon` 组件

这会根据传入的 iconNode 创建单个图标并渲染一个 Lucide 图标组件。

```astro
---
import { Icon } from '@lucide/astro';
import { burger, sausage } from '@lucide/lab';
---

<Icon iconNode={burger} />
<Icon iconNode={sausage} color="red"/>
```

## 一个通用图标组件

可以创建一个通用图标组件来加载图标，但不推荐这样做。

::: danger
下面的示例导入了所有 ES Modules，因此使用时请谨慎。导入所有图标将显著增加应用程序的构建大小。如果你在服务端环境中进行 SSG 和 SSR，这可能是可以接受的。但是，如果你在无服务器环境中进行 SSR，它可能会对你的应用性能产生负面影响，因为更大的打包大小将导致冷启动时间增加。
:::

### 图标组件示例

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

### 使用图标组件

```astro
---
import LucideIcon from './LucideIcon.astro';
---

<LucideIcon name="Menu" />
```

## 无障碍性

默认情况下，我们使用 `aria-hidden="true"` 隐藏图标以免被屏幕阅读器读取。

你可以使用 aria-label 添加无障碍属性。

```jsx
---
import { Check } from '@lucide/astro';
---

<Check aria-label="任务已完成" />
```

关于无障碍性的最佳实践，请参阅我们的 [无障碍指南](../accessibility.md)。
