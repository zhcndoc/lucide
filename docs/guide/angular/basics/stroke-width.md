---
title: 描边宽度 - Angular
description: 学习如何在 Angular 应用程序中使用 `strokeWidth` 输入调整图标的描边宽度，或使用 `absoluteStrokeWidth` 输入调整描边宽度的外观。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackAngular.vue'
</script>

# 描边宽度

所有图标都是使用带有描边的 SVG 元素设计的。
它们的默认描边宽度为 `2px`。

可以调整 `strokeWidth` 以创建不同的图标外观。

## 使用 `strokeWidth` 输入调整描边宽度

::: sandpack {template=angular showTabs=false editorHeight=400 editorWidthPercentage=60 dependencies="@lucide/angular"}

```ts /src/app/app.component.ts [active]
import { Component, ViewEncapsulation } from "@angular/core";
import { LucideFolderLock } from "@lucide/angular";

@Component({
  selector: 'app',
  imports: [LucideFolderLock],
  template: `<svg lucideFolderLock [strokeWidth]="1" />`,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
}
```
:::

## 绝对描边宽度

当绑定 `size` 输入时，图标的描边宽度将相对于其大小，这是默认的 SVG 行为。引入 `absoluteStrokeWidth` 输入是为了调整此行为，使描边宽度恒定，无论图标大小如何。

这意味着当启用 `absoluteStrokeWidth` 且图标的 `size` 设置为 `48px` 时，屏幕上的 `strokeWidth` 仍将保持为 `2px`。

注意 `2px` 是 Lucide 图标的默认描边宽度，它可以调整为任意大小。

![绝对描边宽度比较](../../../images/absolute-stroke-width-compare.png?raw=true "绝对描边宽度比较")

### 使用 `absoluteStrokeWidth` 输入调整描边宽度

将 `absoluteStrokeWidth` 设置为 `true` 将使描边宽度变为绝对值。

::: sandpack {template=angular showTabs=false editorHeight=400 editorWidthPercentage=60 dependencies="@lucide/angular"}

```ts /src/app/app.component.ts [active]
import { Component, ViewEncapsulation } from "@angular/core";
import { LucideRollerCoaster } from "@lucide/angular";

@Component({
  selector: 'app',
  imports: [LucideRollerCoaster],
  template: `
  <svg
      lucideRollerCoaster
      [size]="96"
      [absoluteStrokeWidth]="true"
    ></svg>
`,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
}
```
:::
