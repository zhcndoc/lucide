---
title: 适用于 Angular 的 Lucide Lab
description: 学习如何在您的 Angular 应用程序中使用 Lucide Lab 的图标。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackAngular.vue'
</script>

# 使用 Lucide Lab 或自定义图标

[Lucide Lab](https://github.com/lucide-icons/lucide-lab) 是不属于 Lucide 主库的图标集合。

虽然它们不作为独立组件提供，但仍可以像官方图标一样传递给 `LucideIcon` 组件：

::: info 限制
仅支持遵循 Lucide [代码规范](../../../contribute/icon-design-guide.md#code-conventions) 的自定义图标。
:::

### 直接作为 LucideIconData

::: sandpack {template=angular showTabs=false editorHeight=400 editorWidthPercentage=60 dependencies="@lucide/angular,@lucide/lab"}

```ts /src/app/app.component.ts [active]
import { Component, ViewEncapsulation, signal } from "@angular/core";
import { LucideDynamicIcon, lucideLegacyIcon } from '@lucide/angular';
import { coconut } from '@lucide/lab';

@Component({
  selector: 'app',
  template: `
    <svg [lucideIcon]="icon()"></svg>
  `,
  imports: [LucideDynamicIcon],
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
  readonly icon = signal(lucideLegacyIcon('coconut', coconut));
}
```

:::


### 作为按名称提供的图标

::: sandpack {template=angular editorHeight=400 editorWidthPercentage=60 dependencies="@lucide/angular,@lucide/lab"}

```ts /src/app/app.component.ts [active]
import { Component, ViewEncapsulation } from "@angular/core";
import { LucideDynamicIcon } from '@lucide/angular';

@Component({
  selector: 'app',
  template: `
    <svg lucideIcon="bat-ball"></svg>
  `,
  imports: [LucideDynamicIcon],
  styleUrls: ['./app/app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
}
```

```ts /src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { lucideLegacyIcon, provideLucideIcons } from '@lucide/angular';
import { batBall } from '@lucide/lab';

export const appConfig: ApplicationConfig = {
  providers: [
    provideLucideIcons(
      lucideLegacyIcon('bat-ball', batBall)
    )
  ]
};
```

:::

### 创建自定义图标组件

您也可以使用 `LucideIconBase` 创建自己的独立图标组件。

确保使用 SVG 元素选择器，例如 `svg[lucide{IconName}]`

::: sandpack {template=angular editorHeight=400 editorWidthPercentage=60 dependencies="@lucide/angular,@lucide/lab"}

```ts /src/icons/bottle-champagne.ts
import {
  LucideIconBase,
  lucideIconTemplate,
  lucideLegacyIcon
} from '@lucide/angular';
import { Component, signal } from '@angular/core';
import { bottleChampagne } from '@lucide/lab';

@Component({
  selector: 'svg[lucideBottleChampagne]',
  template: lucideIconTemplate,
  standalone: true,
})
export class LucideBottleChampagne extends LucideIconBase {
  static readonly icon = lucideLegacyIcon('bottle-champagne', bottleChampagne);
  protected override readonly icon = signal(LucideBottleChampagne.icon);
}
```

```ts /src/app/app.component.ts
import { Component, ViewEncapsulation, signal } from "@angular/core";
import { LucideDynamicIcon, lucideLegacyIcon } from '@lucide/angular';
import { LucideBottleChampagne } from "../icons/bottle-champagne";

@Component({
  selector: 'app',
  template: `<svg lucideBottleChampagne></svg>`,
  imports: [LucideBottleChampagne],
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
}
```

:::
