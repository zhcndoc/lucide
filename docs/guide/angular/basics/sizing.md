---
title: 尺寸调整 - Angular
description: 学习如何在 Angular 应用程序中使用 `size` 输入属性或通过 CSS 调整图标的大小。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackAngular.vue'
</script>

# 尺寸调整

默认情况下，所有图标的尺寸均为 `24px` 乘 `24px`。可以通过绑定 `size` 输入属性或使用 CSS 来调整大小。

## 使用 `size` 输入属性调整图标大小

::: sandpack {template=angular showTabs=false editorHeight=400 editorWidthPercentage=60 dependencies="@lucide/angular"}

```ts /src/app/app.component.ts [active]
import { Component, ViewEncapsulation } from "@angular/core";
import { LucideLandmark } from "@lucide/angular";

@Component({
  selector: 'app',
  imports: [LucideLandmark],
  template: `<svg lucideLandmark [size]="64" />`,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
}
```
:::

## 通过 CSS 调整图标大小

可以使用 CSS 属性 `width` 和 `height` 来调整图标大小。

::: sandpack {template=angular editorHeight=300 dependencies="@lucide/angular"}

```css /src/app/icon.css [active]
.my-beer-icon {
  /* 修改这里！ */
  width: 64px;
  height: 64px;
}
```

```ts /src/app/app.component.ts
import { Component, ViewEncapsulation } from "@angular/core";
import { LucideBeer } from "@lucide/angular";

@Component({
  selector: 'app',
  imports: [LucideBeer],
  template: `<svg lucideBeer class="my-beer-icon"></svg>`,
  styleUrls: ['./app.component.css', './icon.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
}
```

:::

### 根据字体大小动态更改图标大小

可以根据字体大小调整图标大小。这可以通过使用 `em` 单位来实现。有关 `em` 单位的更多信息，请参阅这篇 [MDN 文章](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#ems)。

::: sandpack {template=angular editorHeight=300 dependencies="@lucide/angular"}

```css /src/app/icon.css [active]
.my-icon {
  /* 图标大小将相对于 .text-wrapper 的 font-size */
  width: 1em;
  height: 1em;
}

.text-wrapper {
  /* 修改这里！ */
  font-size: 96px;

  /* 布局内容 */
  display: flex;
  gap: 0.25em;
  align-items: center;
}
```

```ts /src/app/app.component.ts
import { Component, ViewEncapsulation } from "@angular/core";
import { LucideStar } from "@lucide/angular";

@Component({
  selector: 'app',
  imports: [LucideStar],
  template: `<div class="text-wrapper">
  <svg lucideStar class="my-icon"></svg>
  <div>Yes</div>
</div>`,
  styleUrls: ['./app.component.css', './icon.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
}
```

:::

### 使用 Tailwind 调整大小

可以使用 `size-*` 工具类来调整图标的大小。有关 `size-*` 工具类的更多信息，请参阅 [Tailwind 文档](https://tailwindcss.com/docs/width#setting-both-width-and-height)。

```html [app.html]
<div>
  <svg lucidePartyPopper class="size-24"></svg>
</div>
```
