---
title: 入门指南 - Angular
description: 本指南将帮助您在 Angular 项目中开始使用 Lucide。
---
<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
import { angularSidebar } from '../../.vitepress/sidebar/angular'
</script>

# 入门指南

本指南将帮助您在 Angular 项目中开始使用 Lucide。
确保您已设置好 Angular 环境。如果您还没有，可以使用 `@angular/cli` [创建一个新的 Angular 项目](https://angular.dev/installation#create-a-new-project)。

## 前置条件

此包需要 Angular 17+ 版本，并使用独立组件、信号和无 Zone 变更检测。

## 安装

::: code-group

```sh [pnpm]
pnpm add @lucide/angular
```

```sh [yarn]
yarn add @lucide/angular
```

```sh [npm]
npm install @lucide/angular
```

```sh [bun]
bun add @lucide/angular
```

:::

## 导入您的第一个图标

此库使用独立组件构建，因此完全支持树摇（tree-shakable）。

每个图标都可以作为即开即用的独立组件导入，它会渲染一个内联 SVG 元素。这样，只有导入到项目中的图标才会包含在最终打包文件中。其余图标会被树摇移除。

### 独立图标

```ts
import { Component } from '@angular/core';
import { LucideFileText } from '@lucide/angular';

@Component({
  selector: 'app',
  template: '<svg lucideFileText></svg>',
  imports: [LucideFileText],
})
export class App { }
```

### 动态图标组件

当您需要动态渲染图标时（例如在菜单项列表中或基于布尔信号），您可以使用 `LucideDynamicIcon` 组件：

```ts
import { Component, computed, signal } from '@angular/core';
import { LucideDynamicIcon, LucideCircleCheck, LucideCircleX } from '@lucide/angular';

@Component({
  selector: 'app',
  template: `<svg [lucideIcon]="icon()"></svg>`,
  imports: [LucideDynamicIcon],
})
export class App {
  protected readonly model = signal<boolean>(true);
  protected readonly icon = computed(() => this.model() ? LucideCircleCheck : LucideCircleX);
}
```

## 组件输入

要自定义图标的外观，您可以使用以下输入属性：

|  名称                   |   类型    |  默认值     |
| ----------------------- | --------- | ------------ |
| `size`                  | *number*  | 24           |
| `color`                 | *string*  | currentColor |
| `strokeWidth`           | *number*  | 2            |
| `absoluteStrokeWidth`   | *boolean* | false        |
| `title`                 | *string*  | null         |

由于图标渲染为 SVG 元素，所有标准 SVG 属性也可以应用。请参阅 [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) 上的 SVG 表现属性列表。

```html
<svg lucideHouse [size]="48" color="red" [strokeWidth]="1" title="Home"></svg>
```

有关如何使用这些输入属性的更多示例和详细信息，请继续阅读指南：

<OverviewLinkGrid>
  <OverviewLink v-for="item in angularSidebar[1].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>
