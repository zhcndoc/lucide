---
title: 描边宽度 - Astro
description: 学习如何在 Astro 应用程序中使用 strokeWidth 和 absoluteStrokeWidth 属性自定义 Lucide 图标的描边宽度。
---

# 描边宽度

所有图标都是使用带有描边的 SVG 元素设计的。
它们的默认描边宽度为 `2px`。

可以调整 `strokeWidth` 来创建不同的图标外观。

## 使用 `strokeWidth` 属性调整描边宽度

```astro
---
import FolderLock from '@lucide/astro/icons/folder-lock';
---

<FolderLock strokeWidth={1} />
```

## 绝对描边宽度

当调整 `size` 属性时，描边宽度的大小将相对于图标的大小，这是默认的 SVG 行为。引入 `absoluteStrokeWidth` 属性是为了调整这种行为，使描边宽度恒定，无论图标大小如何。

这意味着当启用 `absoluteStrokeWidth` 且图标的 `size` 设置为 `48px` 时，屏幕上的 `strokeWidth` 仍将保持为 `2px`。

注意 `2px` 是 Lucide 图标的默认描边宽度，它可以调整为任意大小。

![绝对描边宽度对比](../../../images/absolute-stroke-width-compare.png?raw=true "绝对描边宽度对比")

### 使用 `absoluteStrokeWidth` 属性调整描边宽度

将 `absoluteStrokeWidth` 设置为 `true` 将使描边宽度变为绝对值。

```astro
---
import RollerCoaster from '@lucide/astro/icons/roller-coaster';
---

<RollerCoaster
  size={96}
  absoluteStrokeWidth
/>
```
