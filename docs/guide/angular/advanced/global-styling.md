---
title: 全局样式 - Angular
description: 学习如何使用 CSS 或 provideLucideConfig 提供者在 Angular 应用中全局样式化所有图标。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackAngular.vue'
</script>

# 全局样式

Lucide 图标可以使用 [颜色](../basics/color.md)、[大小](../basics/sizing.md) 和 [描边宽度](../basics/stroke-width.md) 输入进行自定义。

要全局样式化所有图标，您可以使用 CSS 或使用 `provideLucideConfig` 配置全局默认值。

我们建议使用 CSS 进行全局样式化，因为它是最直接的方法。但是，CSS 规则可能会覆盖单个图标上的 `size`、`color` 和 `strokeWidth` 输入。如果您需要保持这些输入在每个图标上可配置，请改用 `provideLucideConfig`。

## 配置全局默认值

Lucide Angular 提供了 `provideLucideConfig` 提供者来为所有图标设置默认属性。

您可以定义全局默认值（例如 `size`、`color` 或 `strokeWidth`），同时仍然允许单个图标通过输入覆盖它们。

在您的应用程序配置或顶层组件中注册提供者：

```ts
import { ApplicationConfig } from '@angular/core';
import { provideLucideConfig } from '@lucide/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideLucideConfig({
      strokeWidth: 1.5
    }),
  ]
};
```

## 使用 CSS 进行样式化

可以使用 CSS 完成图标的全局样式化。

所有 Lucide 图标都包含 `lucide` 类。您可以在样式中使用此类来定位应用中的每个图标。

- 图标的 **颜色** 可以使用 [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) 属性更改。
- 图标的 **大小** 可以使用 [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) 更改。
- 图标的 **描边宽度** 可以使用 [`stroke-width`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width) 更改。

::: sandpack {template=angular editorHeight=300 dependencies="@lucide/angular"}

```css /src/app/icon.css [active]
.lucide {
  /* 修改这里！ */
  color: #ffadff;
  width: 56px;
  height: 56px;
  stroke-width: 1px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 6px;
}
```

```ts /src/app/app.component.ts
import { Component, ViewEncapsulation } from "@angular/core";
import {
  LucideCakeSlice,
  LucideCandy,
  LucideApple,
  LucideCookie,
  LucideMartini,
  LucideIceCream2,
  LucideSandwich,
  LucideWine,
  LucideDessert,
} from "@lucide/angular";

@Component({
  selector: 'app',
  imports: [
    LucideCakeSlice,
    LucideCandy,
    LucideApple,
    LucideCookie,
    LucideMartini,
    LucideIceCream2,
    LucideSandwich,
    LucideWine,
    LucideDessert,
  ],
  template: `<div class="grid">
      <svg lucideCakeSlice />
      <svg lucideCandy />
      <svg lucideApple />
      <svg lucideCookie />
      <svg lucideMartini />
      <svg lucideIceCream2 />
      <svg lucideSandwich />
      <svg lucideWine />
      <svg lucideDessert />
    </div>`,
  styleUrls: ['./app.component.css', './icon.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
}
```

:::

### 绝对描边宽度

为了保持描边宽度恒定而不受图标大小影响，请将 `vector-effect: non-scaling-stroke` 应用于图标的子元素。请参阅 [absolute-stroke-width](../basics/stroke-width.md#absolute-stroke-width) 了解更多详情。

::: sandpack {template=angular editorHeight=300 dependencies="@lucide/angular"}

```css /src/app/icon.css [active]
.lucide {
  width: 48px;
  height: 48px;
  stroke-width: 1.5;
}

.lucide * {
  vector-effect: non-scaling-stroke;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 6px;
}
```

```ts /src/app/app.component.ts
import { Component, ViewEncapsulation } from "@angular/core";
import {
  LucideTentTree,
  LucideCaravan,
  LucideFlameKindling,
  LucideMountainSnow,
  LucideTrees,
  LucideAxe,
  LucideMap,
  LucideCloudMoon,
  LucideSparkles,
} from "@lucide/angular";

@Component({
  selector: 'app',
  imports: [
    LucideTentTree,
    LucideCaravan,
    LucideFlameKindling,
    LucideMountainSnow,
    LucideTrees,
    LucideAxe,
    LucideMap,
    LucideCloudMoon,
    LucideSparkles,
  ],
  template: `<div class="grid">
      <svg lucideTentTree />
      <svg lucideCaravan />
      <svg lucideFlameKindling />
      <svg lucideMountainSnow />
      <svg lucideTrees />
      <svg lucideAxe />
      <svg lucideMap />
      <svg lucideCloudMoon />
      <svg lucideSparkles />
    </div>`,
  styleUrls: ['./app.component.css', './icon.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
}
```

:::
