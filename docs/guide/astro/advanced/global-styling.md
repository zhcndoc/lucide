---
title: 全局样式 - Astro
description: 学习如何使用 CSS 在 Astro 应用程序中为 Lucide 图标应用全局样式。
---

# 全局样式

调整图标可以通过使用 [颜色](../basics/color.md)、[大小](../basics/sizing.md) 和 [描边宽度](../basics/stroke-width.md) 来完成。
要全局样式化所有图标，你可以使用 CSS。

## 使用 CSS 进行样式化

使用 CSS 可以轻松实现图标样式化。

每个图标都应用了一个名为 `lucide` 的 class 属性。这个类名可以在 CSS 文件中用于定位应用中所有正在使用的图标。

- 图标的 **颜色** 可以使用 [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) CSS 属性来更改。
- 图标的 **大小** 可以使用 [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) CSS 属性来更改。
- 图标的 **描边宽度** 可以使用 [`stroke-width`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width) CSS 属性来更改。

```css
.lucide {
  color: #ffadff;
  width: 56px;
  height: 56px;
  stroke-width: 1px;
}
```

### 绝对描边宽度

对于全局绝对描边宽度样式，可以将 `vector-effect: non-scaling-stroke` CSS 属性应用于子元素。无论图标大小如何，这将保持描边宽度不变。请参阅 [absolute-stroke-width](../basics/stroke-width.md#absolute-stroke-width) 获取更多信息。

```css
.lucide {
  width: 48px;
  height: 48px;
  stroke-width: 1.5;
}

.lucide * {
  vector-effect: non-scaling-stroke;
}
```
