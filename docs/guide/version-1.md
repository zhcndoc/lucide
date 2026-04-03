---
title: Lucide V1 🚀
description: 经过多年的努力和奉献，Lucide V1 已正式发布！这一里程碑标志着我们在为开发者和设计师提供全面且多功能的图标库的旅程中取得了重大成就。
---
<script setup>
import OverviewLink from '../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../.vitepress/theme/components/base/OverviewLinkGrid.vue'
</script>

<!--@include: ../../docs/images/version-1.svg -->

# Lucide V1
经过多年的努力和奉献，Lucide V1 已正式**发布**！这一里程碑标志着我们在为开发者和设计师提供全面且多功能的图标库的旅程中取得了重大成就。

这是一段非凡的旅程——尤其是在过去的一年里。Lucide 每周下载量已超过 3000 万次，并被全球数百万个项目使用。此次发布证明了我们社区和贡献者的辛勤工作，他们帮助塑造了今天的 Lucide。

感谢一路上支持我们的每一个人。没有你们，我们无法做到这一点！

## Lucide V1 有什么新功能？简而言之

- 移除了品牌图标，详见我们的 [品牌标识声明](/brand-logo-statement)。
- 改进了文档，每个框架都有指南。
- 改进了无障碍功能，图标现在默认设置 `aria-hidden`。
- 移除了 UMD 构建，现在仅支持 ESM 和 CJS（[`lucide`](../guide/lucide/index.md) 包除外）。
- 包重命名，从 `lucide-vue-next` 改为 `@lucide/vue`。
- 现代化的 Angular 独立实现，`@lucide/angular`。
- 支持 React、Vue、Svelte 和 Solid 中的上下文提供者。
- Lucide 字体的稳定码点。
- `lucide` 包中支持 Shadow DOM。
- 许多错误修复和改进。

## 升级到 Lucide V1

查看我们的指南：

<OverviewLinkGrid>
  <OverviewLink href="/guide/lucide/migration" title="Lucide 原生 JavaScript 迁移指南" />
  <OverviewLink href="/guide/react/migration" title="Lucide React 迁移指南" />
  <OverviewLink href="/guide/vue/migration" title="Lucide Vue 迁移指南" />
  <OverviewLink href="/guide/svelte/migration" title="Lucide Svelte 迁移指南" />
  <OverviewLink href="/guide/solid/migration" title="Lucide Solid 迁移指南" />
  <OverviewLink href="/guide/angular/migration" title="Lucide Angular 迁移指南" />
  <OverviewLink href="/guide/preact/migration" title="Lucide Preact 迁移指南" />
  <OverviewLink href="/guide/astro/migration" title="Lucide Astro 迁移指南" />
  <OverviewLink href="/guide/static/migration" title="Lucide Static 迁移指南" />
</OverviewLinkGrid>

## 移除了所有品牌图标

作为我们致力于维护可持续且合法合规图标库的一部分，我们决定从 Lucide V1 中移除所有品牌图标。这一变化是为了应对日益增加的法律压力以及与商标品牌图标相关的复杂性。详见我们的 [品牌标识声明](/brand-logo-statement)。

我们理解品牌图标对许多用户很重要，我们想向您保证，这一决定并非轻率做出。我们的主要目标是确保 Lucide 仍然是社区可靠且合法的资源。

对于仍然需要品牌图标的用户，我们推荐 [Simple Icons](https://simpleicons.org/)，它提供了广泛且法律风险更低的品牌标识集合。

## 改进的文档，每个框架的指南

我们彻底改造了文档，为每个支持的框架提供更清晰、更全面的指南。无论您使用的是 React、Vue、Svelte、Solid、Angular、Astro 还是原生 JavaScript，您都会找到：分步说明、代码示例和最佳实践，帮助您将 Lucide 无缝集成到项目中。

此外，现在提供了 `llms.txt` 供大语言模型使用。

## 改进的无障碍功能

我们通过默认将 `aria-hidden` 设置为 `true` 改进了图标的无障碍功能。这一变化确保屏幕阅读器将忽略纯装饰性的图标，从而提高应用程序的整体无障碍性。如果您需要使图标可访问，可以提供适当的 `aria-label` 或向图标元素添加 `title` 属性。

查看我们的 [无障碍深入指南](/guide/accessibility) 以获取更多关于使图标可访问的详细信息和最佳实践。

## 移除了 UMD 构建，现在仅支持 ESM 和 CJS

为了简化构建过程并专注于现代 JavaScript 模块格式，我们从 Lucide V1 中移除了 UMD 构建。我们现在仅支持 ESM（ECMAScript Modules）和 CJS（CommonJS）格式。这使得 `lucide-react` 的大小减少了 32.3%（11.4 MB → 1 MB gzip 压缩后），鉴于其每周超过 2500 万的下载量，这对生态系统来说是一个巨大的节省。

## 包重命名：从 `lucide-vue-next` 到 `@lucide/vue`

`lucide-vue-next` 现在重命名为 `@lucide/vue`，以去掉"next"后缀，该后缀仅用于表示它是 Vue 包的下一个版本。这一变化是我们简化包命名工作的一部分，使其在所有框架中更加一致。

## 支持上下文提供者

我们在 React、Vue、Svelte 和 Solid 中添加了上下文提供者支持。这允许您为特定上下文中的所有图标设置默认属性，从而更容易管理整个应用程序中的图标样式和行为。

我们一直推荐使用 CSS，但有了这个，无法在特定图标上设置 `size` 或 `color` 等属性，因为 CSS 会覆盖它们。有了这个新功能，您现在可以轻松地为特定上下文中的所有图标设置默认属性，而无需在每个图标上手动定义它们。

::: code-group

```tsx [React]
import { LucideProvider, Home } from 'lucide-react';

const App = () => (
  <LucideProvider
    color="red"
    size={48}
    strokeWidth={2}
  >
    <Home />
  </LucideProvider>
);
```

```ts [Vue]
import { setLucideProps } from '@lucide/vue';

setLucideProps({
  size: 32,
  color: '#4f46e5',
  strokeWidth: 1.5,
});
```

```ts [Svelte]
import { setLucideProps } from '@lucide/svelte';

setLucideProps({
  size: 32,
  color: '#4f46e5',
  strokeWidth: 1.5,
});
```

```tsx [Solid]
import { LucideProvider, Home } from 'lucide-solid';

const App = () => (
  <LucideProvider
    color="red"
    size={48}
    strokeWidth={2}
  >
    <Home />
  </LucideProvider>
);
```

```ts [Angular]
import { ApplicationConfig } from '@angular/core';
import { provideLucideConfig } from '@lucide/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideLucideConfig({
      size: 32,
      color: '#4f46e5',
      strokeWidth: 1.5,
    }),
  ]
};
```

```tsx [Preact]
import { LucideProvider, Home } from 'lucide-preact';

const App = () => (
  <LucideProvider
    color="red"
    size={48}
    strokeWidth={2}
  >
    <Home />
  </LucideProvider>
);
```

```tsx [React Native]
import { LucideProvider, Home } from 'lucide-react-native';

const App = () => (
  <LucideProvider
    color="red"
    size={48}
    strokeWidth={2}
  >
    <Home />
  </LucideProvider>
);
```

:::

## Lucide 字体的稳定码点

我们为 Lucide 字体分配了稳定的码点，每个图标都有一个固定的码点，在未来的版本中不会改变。这确保如果您在项目中使用 Lucide 字体，您可以依赖码点保持一致，即使我们继续添加新图标并对库进行改进。

## Lucide 包中支持 Shadow DOM

Lucide 包支持 Shadow DOM，允许您在 Web 组件和其他使用 Shadow DOM 的上下文中使用 Lucide 图标。这确保您的图标将正确渲染并保持其样式，即使在 Shadow DOM 中使用。
