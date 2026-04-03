# `@lucide/angular`

::: warning
此文档适用于 `@lucide/angular`。

要了解我们旧的 Angular 包，请参阅 [`lucide-angular`](./lucide-angular)。
:::

一个用于 Angular 的独立、基于信号、无区域（zoneless）的 Lucide 图标实现。

**你可以实现的功能：**
- 将图标用作具有完整依赖注入支持的独立 Angular 组件
- 通过现代 Angular 提供者全局配置图标
- 与 Angular 的反应式表单和数据绑定集成
- 构建具有树摇图标和懒加载支持的可扩展应用程序

## 前提条件

此包需要 Angular 17+ 并使用独立组件、信号和无区域变更检测。

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

## 如何使用

### 独立图标

每个图标都可以作为即开即用的独立组件导入：

```html
<svg lucideFileText></svg>
```

```ts{2,7}
import { Component } from '@angular/core';
import { LucideFileText } from '@lucide/angular';

@Component({
  selector: 'app-foobar',
  templateUrl: './foobar.html',
  imports: [LucideFileText],
})
export class Foobar { }
```

::: tip
独立图标组件使用选择器 `svg[lucide{PascalCaseIconName}]`。

这确保了 DOM 的最小膨胀，并能够直接操作生成的 SVG 元素的所有属性。
:::

### 动态图标组件

你也可以使用动态 `LucideIcon` 组件来动态渲染图标。

#### 使用 Tree-shaken 导入

你可以直接将导入的图标传递给组件：

```html{3}
@for (item of items) {
  <a navbarItem [routerLink]="item.routerLink">
    <svg [lucideIcon]="item.icon"></svg>
    {{ item.title }}
  </a>
}
```

```ts{2,8,14,19}
import { Component } from '@angular/core';
import { LucideIcon, LucideHouse, LucideUsersRound } from '@lucide/angular';
import { NavbarItem, NavbarItemModel } from './navbar-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  imports: [LucideIcon, NavbarItem],
})
export class Navbar {
  readonly items: NavbarItemModel[] = [
    {
      title: '首页',
      icon: LucideHouse,
      routerLink: [''],
    },
    {
      title: '用户',
      icon: LucideUsersRound,
      routerLink: ['admin/users'],
    },
  ];
}
```

#### 使用通过依赖注入提供的图标

或者，该组件也接受字符串输入。

要以这种方式使用图标，首先，你必须通过 `provideLucideIcons` 提供图标：

:::code-group
```ts{7-10} [app.config.ts]
import { ApplicationConfig } from '@angular/core';
import { provideLucideIcons, LucideCircleCheck, LucideCircleX } from '@lucide/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    // ...
    provideLucideIcons(
      LucideCircleCheck,
      LucideCircleX,
    ),
  ]
};
```

```html [foobar.html]
<svg lucideIcon="circle-check"></svg>
```

```ts{7} [foobar.ts]
import { Component } from '@angular/core';
import { LucideIcon } from '@lucide/angular';

@Component({
  selector: 'app-foobar',
  templateUrl: './template-url',
  imports: [LucideIcon],
})
export class Foobar { }
```
:::

::: tip
为了获得最佳的包大小，请在应用程序中的最高适当级别提供图标。

在根级别提供所有图标可能会增加初始包大小，而在功能模块级别提供它们可以实现更好的代码分割。
:::

::: warning
虽然你可以在依赖注入树的任何级别提供图标，但请注意 [Angular 的 DI 系统是分层的](https://angular.dev/guide/di/defining-dependency-providers#injector-hierarchy-in-angular)：`LucideIcon` 只能访问树中离它最近提供的图标。
:::

## 无障碍标签

你可以使用 `title` 输入属性在 SVG 上设置 [无障碍名称元素](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/title)：

```html
<svg lucideIcon="house" title="前往仪表盘"></svg>
```

这将产生以下输出：

```html{2}
<svg class="lucide lucide-house" ...>
  <title>前往仪表盘</title>
  <!-- SVG paths -->
</svg>
```

## 属性

你可以传递额外的属性来调整图标外观。

| 名称                  | 类型      | 默认值       |
|-----------------------|-----------|--------------|
| `size`                | *number*  | 24           |
| `color`               | *string*  | currentColor |
| `strokeWidth`         | *number*  | 2            |
| `absoluteStrokeWidth` | *boolean* | false        |

```html
<svg lucideHouse size="48" color="red" strokeWidth="1"></svg>
```

## 全局配置

你可以使用 `provideLucideConfig` 来配置上述定义的默认属性值：

```ts{2,7-9}
import { ApplicationConfig } from '@angular/core';
import { provideLucideConfig } from '@lucide/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    // ...
    provideLucideConfig({
      strokeWidth: 1.5
    }),
  ]
};
```

## 通过 CSS 样式化

图标也可以通过使用自定义 CSS 类来样式化：

```html
<svg lucideHousePlus class="my-icon"></svg>
```

```css
svg.my-icon {
    width: 12px;
    height: 12px;
    stroke-width: 3;
}
```

## 使用 Lucide lab 或自定义图标

[Lucide lab](https://github.com/lucide-icons/lucide-lab) 是不属于 Lucide 主库的图标集合。

虽然它们不作为独立组件提供，但仍可以像官方图标一样传递给 `LucideIcon` 组件：

```html
<!-- 直接作为 LucideIconData：-->
<svg [lucideIcon]="CoconutIcon"></svg>

<!-- 作为按名称提供的图标：-->
<svg lucideIcon="coconut"></svg>
```

```ts{2,6-7,11-12}
import { provideLucideIcons } from '@lucide/angular';
import { coconut } from '@lucide/lab';

@Component({
  templateUrl: './foobar.html',
  // 用于通过提供者按名称使用：
  providers: [provideLucideIcons({ coconut })],
  imports: [LucideIcon]
})
export class Foobar {
  // 用于直接作为 LucideIconData 传递：
  readonly CoconutIcon = coconut;
}
```

## 故障排除

### 图标未显示
如果使用每图标组件：
1. 确保已导入图标组件，如果使用每图标组件
2. 检查图标名称是否完全匹配（区分大小写）

如果使用动态组件：
1. 如果使用字符串名称，确保图标已通过 `provideLucideIcons()` 提供
2. 验证图标是从 `@lucide/angular` 导入的，而不是旧包

### TypeScript 错误？
确保你从 `@lucide/angular` 导入，而不是 `lucide-angular`。

### 图标渲染默认值错误
确保 `provideLucideConfig()` 在正确的级别使用。

## 迁移指南
从 `lucide-angular` 迁移？阅读我们的 [综合迁移指南](https://github.com/lucide-icons/lucide/blob/main/packages/angular/MIGRATION.md)。
