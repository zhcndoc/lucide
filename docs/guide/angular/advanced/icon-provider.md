---
title: 图标提供者 - Angular
description: 了解如何使用 provideLucideIcons 全局注册图标，包括自定义图标和遗留图标。
---

# 图标提供者

你可以使用 `LucideDynamicIcon` 组件通过名称渲染图标。要通过名称使用图标，你必须先使用 `provideLucideIcons` 注册它。

确保你熟悉 [Angular 中依赖注入的工作原理](https://angular.dev/guide/di)。

## 注册图标

在你的应用提供者中使用 `provideLucideIcons` 来注册图标。

```ts [app.config.ts]
import { ApplicationConfig } from '@angular/core';
import { provideLucideIcons, LucideSquareCheck, LucideCircleAlert } from '@lucide/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideLucideIcons(
      LucideSquareCheck,
      LucideCircleAlert,
    ),
  ],
};
```

然后你可以通过名称引用已注册的图标：

```html [app.html]
<svg lucideIcon="square-check"></svg>
<svg lucideIcon="circle-alert"></svg>
```

## 名称如何解析

每个注册的图标都以其图标名称存储。对于内置的 Lucide 图标，这通常是 kebab-case 格式的图标名称。

例如，注册 `LucideSquareCheck` 使其可用为：

```html
<svg lucideIcon="square-check"></svg>
```

如果图标定义了别名，这些别名也会自动注册。

## 注册自定义图标

`provideLucideIcons` 也可以注册自定义图标数据对象。

```ts [custom-icon.ts]
import { LucideIconData } from '@lucide/angular';

export const MyCustomIcon: LucideIconData = {
  name: 'my-custom-icon',
  node: [
    ['circle', { cx: 12, cy: 12, r: 8 }],
  ],
};
```

```ts [app.config.ts]
import { ApplicationConfig } from '@angular/core';
import { provideLucideIcons } from '@lucide/angular';
import { MyCustomIcon } from './custom-icon';

export const appConfig: ApplicationConfig = {
  providers: [
    provideLucideIcons(MyCustomIcon),
  ],
};
```

```html [app.html]
<svg lucideIcon="my-custom-icon"></svg>
```

## 使用遗留图标节点

如果你拥有遗留节点格式的图标，例如匹配 `lucide-angular` 或 `@lucide/lab` 的自定义图标，你可以使用 `lucideLegacyIcon` 转换它们。

```ts [app.config.ts]
import { ApplicationConfig } from '@angular/core';
import { provideLucideIcons, lucideLegacyIcon } from '@lucide/angular';
import { CirclePlayIcon } from 'lucide-angular';
import { burger } from '@lucide/lab';

export const appConfig: ApplicationConfig = {
  providers: [
    provideLucideIcons(
      lucideLegacyIcon('circle-play', CirclePlayIcon, ['play-circle']),
      lucideLegacyIcon('burger', burger, ['hamburger']),
    ),
  ],
};
```

然后你可以使用主名称和任何别名：

```html [app.html]
<svg lucideIcon="circle-play"></svg>
<svg lucideIcon="play-circle"></svg>
<svg lucideIcon="burger"></svg>
<svg lucideIcon="hamburger"></svg>
```

## 转换遗留图标映射

如果你已经拥有遗留图标节点的映射，使用 `lucideLegacyIconMap` 将它们转换为图标数据对象。

```ts [app.config.ts]
import { ApplicationConfig } from '@angular/core';
import { provideLucideIcons, lucideLegacyIconMap, Circle } from '@lucide/angular';
import { UserRoundX } from 'lucide-angular';
import { burger } from '@lucide/lab';

export const appConfig: ApplicationConfig = {
  providers: [
    provideLucideIcons(
      Circle,
      ...lucideLegacyIconMap({ UserRoundX, burger }),
    ),
  ],
};
```

这会将对象键转换为 kebab-case 格式的图标名称：

- `UserRoundX` → `user-round-x`
- `burger` → `burger`

原始对象键也会作为别名添加，因此以下两者都有效：

```html
<svg lucideIcon="UserRoundX"></svg>
<svg lucideIcon="user-round-x"></svg>
```
