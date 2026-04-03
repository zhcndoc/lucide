---
title: 填充图标 - Angular
description: 填充效果并非官方支持，但仍可使用标准 SVG 属性应用。在某些情况下，这可能会产生可接受的结果。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackAngular.vue'
</script>

# 填充图标

Lucide 官方不支持填充效果。

然而，由于图标是标准的 SVG 元素，仍然可以应用诸如 `fill` 之类的 SVG 属性。根据图标的不同，这可能会产生可接受的结果。

## 星星示例：

::: sandpack {template=angular editorHeight=580 editorWidthPercentage=60 dependencies="@lucide/angular"}

```css /src/app/icon.css
.star-rating {
  position: relative;
}

.stars {
  display: flex;
  gap: 4px;
}

.rating {
  position: absolute;
  top: 0;
}
```

```ts /src/app/app.component.ts [active]
import { Component, ViewEncapsulation } from "@angular/core";
import { LucideStar, LucideStarHalf } from "@lucide/angular";

@Component({
  selector: 'app',
  imports: [LucideStar, LucideStarHalf],
  template: `
<div class="star-rating">
  <div class="stars">
    <svg lucideStar fill="#111" strokeWidth="0" />
    <svg lucideStar fill="#111" strokeWidth="0" />
    <svg lucideStar fill="#111" strokeWidth="0" />
    <svg lucideStar fill="#111" strokeWidth="0" />
    <svg lucideStar fill="#111" strokeWidth="0" />
  </div>
  <div class="stars rating">
    <svg lucideStar fill="yellow" strokeWidth="0" />
    <svg lucideStar fill="yellow" strokeWidth="0" />
    <svg lucideStarHalf fill="yellow" strokeWidth="0" />
  </div>
</div>
`,
  styleUrls: ['./app.component.css', './icon.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
}
```

:::
