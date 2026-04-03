---
title: 颜色 - Angular
description: 了解如何在 Angular 应用程序中使用 `color` 输入或通过父元素的文本颜色值来调整图标的颜色。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackAngular.vue'
</script>

# 颜色

默认情况下，所有图标的颜色值为：`currentColor`。此关键字使用元素的计算文本 `color` 值来表示图标颜色。

在 MDN 上阅读更多关于 [ `currentColor` 的信息](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword)。

## 使用 `color` 输入调整颜色

可以通过绑定元素的 `color` 输入来调整颜色。

::: sandpack {template=angular showTabs=false editorHeight=400 editorWidthPercentage=60 dependencies="@lucide/angular"}

```ts /src/app/app.component.ts [active]
import { Component, ViewEncapsulation } from "@angular/core";
import { LucideSmile } from "@lucide/angular";

@Component({
  selector: 'app',
  imports: [LucideSmile],
  template: `<svg lucideSmile color="#3e9392" />`,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
}
```
:::

## 使用父元素的文本颜色值

由于 lucide 图标的颜色使用 `currentColor`，图标的颜色取决于元素的计算 `color`，或者从其父元素继承。

例如，如果父元素的颜色值为 `#fff` 且其中一个子元素是 lucide 图标，则图标的颜色将呈现为 `#fff`。这是浏览器的原生行为。

::: sandpack {template=angular showTabs=false editorHeight=400 editorWidthPercentage=60 dependencies="@lucide/angular"}

```ts /src/app/app.component.ts [active]
import { Component, ViewEncapsulation } from "@angular/core";
import { LucideThumbsUp } from "@lucide/angular";

@Component({
  selector: 'app',
  imports: [LucideThumbsUp],
  template: `
    <button style="color:#fff">
      <svg lucideThumbsUp></svg>
      Like
    </button>
  `,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
}
```
:::
