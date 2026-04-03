---
title: 尺寸 - Astro
description: 学习如何使用 size 属性和 CSS 在 Astro 应用中调整 Lucide 图标的大小。
---

# 尺寸

默认情况下，所有图标的大小为 `24px` 乘 `24px`。可以使用 `size` 属性和 CSS 调整大小。

## 使用 `size` 属性调整图标大小

```astro
---
import Landmark from '@lucide/astro/icons/landmark';
---

<Landmark size={64} />
```

## 通过 CSS 调整图标大小

可以使用 CSS 属性 `width` 和 `height` 来调整图标大小。

::: code-group

```css [icon.css]
.my-beer-icon {
  width: 64px;
  height: 64px;
}
```

```astro [page.astro]
---
import Beer from '@lucide/astro/icons/beer';
import './icon.css'
---

<Beer class="my-beer-icon" />
```
:::

### 根据字体大小动态更改图标大小

可以根据字体大小调整图标大小。这可以通过使用 `em` 单位来实现。有关 `em` 单位的更多信息，请参阅这篇 [MDN 文章](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#ems)。

::: code-group

```css [icon.css]
.my-icon {
  /* 图标大小将相对于 .text-wrapper 的字体大小 */
  width: 1em;
  height: 1em;
}

.text-wrapper {
  font-size: 96px;

  /* 布局内容 */
  display: flex;
  gap: 0.25em;
  align-items: center;
}
```

```astro [page.astro]
---
import Star from '@lucide/astro/icons/star';
import './icon.css'
---

<div class="text-wrapper">
  <Star class="my-icon" />
  <div>Yes</div>
</div>
```
:::

### 使用 Tailwind 调整大小

可以使用 `size-*` 工具类来调整图标的大小。有关 `size-*` 工具类的更多信息，请参阅 [Tailwind 文档](https://tailwindcss.com/docs/width#setting-both-width-and-height)。

```astro
---
import PartyPopper from '@lucide/astro/icons/party-popper';
---

<PartyPopper class="size-24" />
```
