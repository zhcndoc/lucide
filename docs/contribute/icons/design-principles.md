---
description: 了解使 Lucide 图标保持一致且易于识别的视觉原则。
---

# Lucide 设计语言

Lucide 是一套一致的图标集，而不是一组互不相关的图标。每个图标都应该让人感觉它属于整个图标库。

本指南介绍 Lucide 图标背后的视觉规则，以及设计新图标时如何使用这些规则。

完整规则列表请参阅[图标设计规范](./specification)

## 1. 使用 24 × 24 像素的画布

图标**必须**在 24 × 24 像素的画布上设计。

:::: example
::: do ../../images/24px-24px.svg?raw=true
使用 **24 × 24 像素**的画布。
:::
::: dont ../../images/24px-24px-violation.svg?raw=true
不要使用更大、更小或非正方形的画布。
:::
::::

## 2. 保持 1 像素的安全区域

图标的描边与画布边缘之间**必须**至少有 1 像素的内边距。

:::: example
::: do ../../images/1px-padding.svg?raw=true
在图标周围保留至少 **1 像素的内边距**。
:::
::: dont ../../images/1px-padding-violation.svg?raw=true
不要将描边放在画布边缘。它们可能会被裁剪。
:::
::::

## 3. 使用 2 像素的描边

描边**必须**为 2 像素宽。

:::: example
::: do ../../images/2px-stroke.svg?raw=true
使用 **2 像素的描边宽度**。
:::
::: dont ../../images/2px-stroke-violation.svg?raw=true
不要使用**更粗或更细**的描边，也不要**混用不同的描边宽度**。
:::
::::

## 4. 使用圆角线连接

描边**必须**使用圆角线连接。

:::: example
::: do ../../images/round-joints.svg?raw=true
使用**圆角线连接**。
:::
::: dont ../../images/round-joints-violation.svg?raw=true
不要使用**斜接或斜角**线连接。
:::
::::

::: tip
圆角连接不能替代圆角处理。大多数尖角仍然需要设置半径。
:::

## 5. 使用圆角线帽

开放路径**必须**使用圆角线帽。

:::: example
::: do ../../images/round-caps.svg?raw=true
在开放路径上使用**圆角线帽**。
:::
::: dont ../../images/round-caps-violation.svg?raw=true
不要使用**平头或方头**线帽。
:::
::::

## 6. 使用居中描边

描边**必须**以路径为中心。

:::: example
::: do ../../images/centered-strokes.svg?raw=true
让描边以路径为**中心**。
:::
::: dont ../../images/centered-strokes-violation.svg?raw=true
不要使用**内描边或外描边**。它们会改变线连接的显示方式，从而产生尖锐的内角。
:::
::::

## 7. 使用一致的圆角半径

几乎所有尖角**都应该**进行圆角处理。

:::: example
::: do ../../images/border-radius-correct.svg?raw=true
使用**圆角**。
:::
::: dont ../../images/border-radius-violation.svg?raw=true
不要使用**尖角**。
:::
::::

圆角半径取决于元素的大小和角度。对于 90° 角：

:::: example
::: do ../../images/2px-border-radius.svg?raw=true
对于宽度或高度至少为 8 像素的形状，使用 **2 像素的圆角半径**。
:::
::: do ../../images/1px-border-radius.svg?raw=true
对于小于 8 像素的形状，使用 **1 像素的圆角半径**。
:::
::::

也有例外：

:::: example
::: do ../../images/border-radius-90deg.svg?raw=true
以直角相交的对角线通常需要 **2.41 像素**的半径（1+√2），才能与网格保持对齐。
:::
::: do ../../images/border-radius-arbitrary.svg?raw=true
即使是**非常尖锐的角**，通常也需要进行少量圆角处理。具体数值取决于形状。
:::
::::

避免在**多条线相交的位置**进行圆角处理。

:::: example
::: do ../../images/border-radius-line-join.svg?raw=true
在多条线相交的位置保持尖角，以便图标能够良好缩放。
:::
::: dont ../../images/border-radius-line-join-violation.svg?raw=true
不要在三条以上的线相交的位置进行圆角处理。这会导致图标缩放效果不佳。
:::
::::

## 8. 元素之间至少保持 2 像素的间距

不同元素之间**必须**至少有 2 像素的视觉间距。

:::: example
::: do ../../images/2px-element-spacing.svg?raw=true
不同元素之间保持 **2 像素的间距**。
:::
::: dont ../../images/1px-element-spacing.svg?raw=true
不同元素之间不要使用小于 **2 像素**的间隙。
:::
::::

这同样适用于形状内部。大多数内部间隙**应该**至少为 2 像素宽。

:::: example
::: do ../../images/2px-inner-spacing.svg?raw=true
在形状内部保持至少 **2 像素的间距**。
:::
::: dont ../../images/1px-inner-spacing.svg?raw=true
不要使用小于 **2 像素**的内部间隙。
:::
::::

你可以将一个**宽度为 2 像素的圆**放在形状内部，以此进行测试。

:::: example
::: do ../../images/2px-inner-gap.svg?raw=true
如果一个宽度为 2 像素的圆能够**在不重叠的情况下**放入，说明间隙**足够宽**。
:::
::: dont ../../images/1px-inner-gap.svg?raw=true
如果圆与形状发生**重叠**，则间隙应该**更宽**。
:::
::::

当元素在视觉上连接或相交时，同样适用 2 像素的间距。

:::: example
::: dont ../../images/2px-element-spacing-connected.svg?raw=true
不要在未保持 **2 像素间距**的情况下连接元素。
:::
::: dont ../../images/2px-element-spacing-abrupt-cut.svg?raw=true
不要在一个元素与另一个元素相接的位置使用**突然截断**。
:::
::::

## 9. 力求一致的视觉重量

图标并排查看时，应具有相近的视觉重量。

:::: example

::: do ../../images/visual-weight-consistent.svg?raw=true
匹配 `circle` 和 `square` 的视觉重量。
:::

::: dont ../../images/visual-weight-uneven.svg?raw=true
第一个图标**太大**，最后一个图标**太小**。
:::

::::

::: tip
描边的数量和位置会影响图标看起来的厚重程度。即使描边宽度相同，包含许多紧密描边的图标也可能比更简单的图标看起来更厚重。

将你的图标放在 `circle` 或 `square` 旁边，然后同时将两个图标进行模糊处理。你的图标不应比参考图标明显更轻或更重。
:::

## 10. 在视觉上平衡图标

图标在画布中应看起来居中且平衡。

:::: example
::: do ../../images/visually-centered-do.svg?raw=true
让图标在视觉上居中。
:::
::: dont ../../images/visually-centered-dont.svg?raw=true
这个图标感觉偏向左上方。
:::
::::

:::: example
::: do ../../images/visually-centered-symmetrical-do.svg?raw=true
对称图标应保持几何居中。
:::
::: dont ../../images/visually-centered-symmetrical-dont.svg?raw=true
不要毫无理由地将对称图标放置在偏离中心的位置。
:::
::::

::: tip
几何居中并不总是看起来居中。不对称的形状可能需要进行小幅调整。

将你的图标与 `circle` 或 `square` 并排比较，同时进行垂直堆叠比较。如果看起来发生了偏移，就进行调整。
:::

## 11. 保持低密度

Lucide 图标应具有相近的细节程度。

:::: example
::: do ../../images/density-optimal.svg?raw=true
简化复杂的对象，但保留使其易于识别的特征。
:::
::: dont ../../images/density-too-dense.svg?raw=true
不要添加让设计显得拥挤的额外细节。
:::
::::

::: tip

密集区域和紧密的描边会让图标看起来比附近的图标更厚重。

以图标的预期尺寸查看它，并进行模糊处理。变暗的区域可能包含过多细节。

:::

## 12. 使用平滑、简单的曲线

曲线应尽可能平滑且简单。

:::: example
::: do ../../images/curvature-smooth.svg?raw=true
尽可能优先使用**简单弧线**和**二次曲线**。
:::
::: dont ../../images/curvature-uneven.svg?raw=true
不要使用**不均匀或不必要地复杂**的曲线。
:::
::::

::: tip
需要使用三次 Bézier 曲线时，请对齐控制点，以避免出现明显的凸起。

避免使用多余的控制点。它们会使形状更难编辑，并可能产生细小的瑕疵。
:::

## 13. 针对像素网格进行设计

Lucide 图标在小尺寸下也应保持清晰，包括在低密度显示屏上。

:::: example
::: do ../../images/pixel-perfection-ideal.svg?raw=true
尽可能将坐标、弧线中心和其他几何元素与像素网格对齐。
:::
::: dont ../../images/pixel-perfection-bad.svg?raw=true
不要毫无视觉理由地将几何元素放置在像素网格之外。
:::
::::

:::: example
::: do ../../images/pixel-perfection-subelement-do.svg?raw=true
同时将**子元素与像素网格对齐**。
:::
::: dont ../../images/pixel-perfection-subelement-dont.svg?raw=true
不要将子元素放置在网格之外。它们在低密度显示屏上可能会变得模糊。
:::
::::

:::: example
::: do ../../images/pixel-perfection-diagonals-do.svg?raw=true
通常应尽量将**每条对角线与像素网格对齐**。
:::
::: dont ../../images/pixel-perfection-diagonals-dont.svg?raw=true
避免将对角线放置在网格之外。在低密度显示屏上，它们会显得模糊且在视觉上更宽。
:::
::::

::: tip
像素对齐应当服务于图标。不要让它损害形状识别、平滑曲线或视觉平衡。
:::

## 14. 重用已建立的形状

创建变体时，除非新想法需要改变，否则应保留基础图标的几何结构。

:::: example
::: do ../../images/established-shapes-base-do.svg?raw=true
**完全按照现有基础图标的样子**重用它们。
:::
::: dont ../../images/established-shapes-base-dont.svg?raw=true
不要改变基础形状的**几何结构、位置或方向**。
:::
::::

相关图标应尽可能共享形状和视觉模式。

:::: example
::: do ../../images/established-shapes-sub-do.svg?raw=true
**不加改动地**重用现有图标中的元素。
:::
::: dont ../../images/established-shapes-sub-dont.svg?raw=true
不要重新设计**现有元素**。
:::
::::

常见的修饰元素和组成元素在整个图标库中应保持一致。

:::: example
::: do ../../images/established-shapes-consistency-do.svg?raw=true
保持附加元素在**位置和大小**上的一致性。
:::
::: dont ../../images/established-shapes-consistency-dont.svg?raw=true
不要相较于现有图标使用**不规则的位置或大小**。
:::
::::

::: tip
保留基础形状可以让相关图标在用户切换使用时表现得更好。

与现有图标保持一致不应凌驾于清晰度、平衡性或可读性之上。必要时调整形状。
:::

## 总结

设计 Lucide 图标时：

1. 使用带有至少 **1 像素安全区域**的 **24 × 24 像素画布**。
2. 使用带有**圆角线帽和线连接**的 **2 像素居中描边**。
3. 使用与大小和几何结构相匹配的一致半径，为尖角添加圆角。
4. 不同元素之间，以及在形状内部可能的情况下，保持至少 **2 像素的间距**。
5. 匹配 `circle` 和 `square` 的视觉重量。
6. 考虑视觉重量，让图标在视觉上居中。
7. 保持较低的视觉密度，移除不必要的细节。
8. 使用平滑、简单的曲线，避免不必要的控制点。
9. 尽可能将几何结构与像素网格对齐。
10. 重用现有 Lucide 图标中已建立的形状。

当这些指南发生冲突时，应优先考虑与 Lucide 其余部分的**清晰度、视觉平衡和一致性**。
