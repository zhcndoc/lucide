---
title: 组合图标 - Angular
description: 学习如何在 Angular 应用中通过嵌套 SVG 元素将多个图标组合成一个图标。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackAngular.vue'
</script>

# 组合图标

你可以通过在 SVG 中使用 SVG 将多个图标组合成一个图标。
如果你想发挥创意，通过组合现有图标来制作自己的自定义图标，这非常有用。

::: sandpack {template=angular showTabs=false editorHeight=400 editorWidthPercentage=60 dependencies="@lucide/angular"}

```ts /src/app/app.component.ts [active]
import { Component, ViewEncapsulation } from "@angular/core";
import { LucideScan, LucideUser } from "@lucide/angular";

@Component({
  selector: 'app',
  imports: [LucideScan, LucideUser],
  template: `
      <svg lucideScan [size]="48">
        <svg lucideUser
          [size]="12"
          x="6"
          y="6"
          [strokeWidth]="4"
          [absoluteStrokeWidth]="true"
        />
      </svg>`,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
}
```
:::

这是有效的 SVG，图标支持所有 SVG 属性。
可以调整 `x` 和 `y` 坐标来按需定位图标。

::: info 限制
组合图标时，你需要确保 `x` 和 `y` 坐标在外层图标的 `viewBox` 范围内（24x24）。
:::

## 使用自定义 SVG 元素

你也可以使用 SVG 元素来创建自己的图标。

### 带通知徽章的示例

例如，你可以使用 `circle` SVG 元素向图标添加通知徽章。


::: sandpack {template=angular showTabs=false editorHeight=400 editorWidthPercentage=60 dependencies="@lucide/angular"}

```ts /src/app/app.component.ts [active]
import { Component, ViewEncapsulation, signal } from "@angular/core";
import { LucideMail } from "@lucide/angular";

@Component({
  selector: 'app',
  imports: [LucideMail],
  template: `
      <svg lucideMail [size]="48">
        @if (hasUnreadMessages()) {
          <circle
            r="3"
            cx="21"
            cy="5"
            stroke="none"
            fill="#F56565"
          />
        }
      </svg>`,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
  protected readonly hasUnreadMessages = signal<boolean>(true);
}
```
:::

### 带文本元素的示例

你也可以使用 `text` SVG 元素向图标添加文本。


::: sandpack {template=angular showTabs=false editorHeight=400 editorWidthPercentage=60 dependencies="@lucide/angular"}

```ts /src/app/app.component.ts [active]
import { Component, ViewEncapsulation } from "@angular/core";
import { LucideFile } from "@lucide/angular";

@Component({
  selector: 'app',
  imports: [LucideFile],
  template: `
      <svg lucideFile [size]="48">
        <text
          x="7.5"
          y="19"
          font-size="8"
          font-family="Verdana,sans-serif"
          stroke-width="1"
        >
          JS
        </text>
      </svg>`,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
}
```
:::
