---
description: 为 Lucide 图标库设计图标的指南和最佳实践。
---
# 图标设计指南

为 Lucide 图标库设计图标的指南和最佳实践。

## 图标设计原则

以下是为 Lucide 制作图标时应遵循的规则，以保持质量和一致性。

### 1. 图标必须在 **24 乘 24 像素** 的画布上设计。

![24 像素 -24 像素](../images/24px-24px.svg?raw=true "24 像素 -24 像素")

### 2. 图标在画布内必须至少有 **1 像素的内边距**。

![1 像素内边距](../images/1px-padding.svg?raw=true "1 像素内边距")

### 3. 图标必须具有 **2 像素的描边宽度**。

![2 像素描边](../images/2px-stroke.svg?raw=true "2 像素描边")

### 4. 图标必须使用 **圆角连接**。

![圆角连接](../images/round-joints.svg?raw=true "圆角连接")

### 5. 图标必须使用 **圆角端点**。

![圆角端点](../images/round-caps.svg?raw=true "圆角端点")

### 6. 图标必须使用 **居中描边**。

![居中描边](../images/centered-strokes.svg?raw=true "居中描边")

### 7. 形状（例如矩形）必须具有 **边框圆角半径**

#### A. 如果尺寸至少为 8 像素，则为 **2 像素**

![2 像素边框圆角](../images/2px-border-radius.svg?raw=true "2 像素边框圆角")

#### B. 如果尺寸小于 8 像素，则为 **1 像素**

![1 像素边框圆角](../images/1px-border-radius.svg?raw=true "1 像素边框圆角")

### 8. 不同元素之间必须有 **2 像素的间距**

![2 像素元素间距](../images/2px-element-spacing.svg?raw=true '2 像素元素间距')

![2 像素元素间距连接](../images/2px-element-spacing-connected.svg?raw=true '2 像素元素间距连接')

![2 像素元素间距突兀切断](../images/2px-element-spacing-abrupt-cut.svg?raw=true '2 像素元素间距突兀切断')

### 9. 图标应与 `circle` 和 `square` 具有相似的光学体积。

![光学体积理想](../images/optical-volume-ideal.svg?raw=true "光学体积理想")

![光学体积低](../images/optical-volume-low.svg?raw=true "光学体积低")

![光学体积高](../images/optical-volume-high.svg?raw=true "光学体积高")

**提示：** 将你的图标放在圆形或方形图标旁边并将两者模糊处理；你的图标看起来不应比基本形状暗太多。

### 10. 图标应根据其重心进行视觉居中。

![视觉居中](../images/visually-centered.svg?raw=true "视觉居中")

![视觉居中错误](../images/visually-centered-bad.svg?raw=true "视觉居中错误")

**提示：** 将你的图标放在方形或圆形图标的上方/下方和旁边，检查是否感觉偏离中心。对称图标应始终对齐到中心。

### 11. 图标应具有相似的视觉密度和细节水平。

![密度理想](../images/density-ideal.svg?raw=true "密度理想")

![密度高](../images/density-high.svg?raw=true "密度高")

**提示：** 尝试对密集元素进行抽象处理。模糊你的图标，模糊后不应感觉过暗。

### 12. 连续曲线应平滑连接。

![曲率平滑](../images/curvature-smooth.svg?raw=true "曲率平滑")

![曲率不均匀](../images/curvature-uneven.svg?raw=true "曲率不均匀")

**提示：** 确保使用圆弧或二次曲线。使用三次曲线时，控制点应具有镜像角度以实现平滑曲线。

### 13. 图标应力求像素完美，以便在低 DPI 显示屏上清晰锐利。

![像素完美理想](../images/pixel-perfection-ideal.svg?raw=true "像素完美理想")

![像素完美错误](../images/pixel-perfection-bad.svg?raw=true "像素完美错误")

**提示：** 尽可能将元素和圆弧中心对齐到网格。

### 14. 图标应共享常见形状

你应该尝试创建一致的组和变体，复用并尝试创建统一性。
组和变体内部的一致性优先级低于上述规则。

**示例：** 所有 `-off` 图标看起来应该相同，除非例如违反了光学体积规则。

**提示：** 尽量不要移动基本形状，以便在切换上下文中更好地使用。

## 命名约定

1. 图标名称使用小写短横线格式（kebab-case）。\
   例如：`arrow-up` 而不是 `Arrow Up`。

2. 图标名称使用国际英语名称，而不是本地变体。\
   例如：`color` 而不是 `colour`。

3. 图标应根据其描绘的内容命名，而不是其用例或代表的内容。\
   例如：`floppy-disk` 而不是 `save`，`circle-slash` 而不是 `ban`。

4. 属于组的图标命名为 `<group>-<variant>`。\
   例如：`badge-plus` 基于 `badge`。

5. 替代图标的名称应代表其独特之处，而不是编号。\
   例如：`send-horizontal` 而不是 `send-2`。

6. 不允许名称中包含数字，除非图标本身表示了该数字。\
   例如：`arrow-down-0-to-1` 包含两个数字。

7. 描绘多个不同大小元素（例如一个人和一个圆）的图标必须按大小递减顺序列出这些元素。\
   例如：如果圆更大，应为 `circle-person`，如果人更大，应为 `person-circle`。

8. 描绘多个大致相等大小元素（例如 `ruler` 和 `pencil`）的图标，如果一个元素在另一个元素前面，必须从前到后列出这些元素，否则按英语阅读顺序（从上到下，从左到右）。\
   例如：如果 `pencil` 在 `ruler` 的前面、上方或左侧，应为 `pencil-ruler`，否则应为 `ruler-pencil`。

9. 描绘元素某种变体的图标必须使用 `[element]-[modifier]` 命名方案，修饰符分别应用于每个元素。\
   例如：虚线圆必须命名为 `circle-dashed`，而不是 `dashed-circle`，并且配合之前的指南，包含破碎心形的虚线圆应命名为 `circle-dashed-heart-broken`，因为心形比圆小。

## 代码约定

在图标添加到库之前，我们希望拥有可读且优化的 SVG 代码。

### 全局属性

每个图标都应用这些属性，对应上述规则。

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <!-- SVG 元素 -->
</svg>
```

### 最小化路径

路径代码有时会变得相当庞大。为了减小文件大小，我们希望对代码进行压缩。
我们建议使用 [Lucide Studio](https://studio.lucide.dev/?utm_source=lucide.dev&utm_medium=design-guide) 将路径整理为精确到 3 位的小数。

### 允许的元素

SVG 文件只能包含简单的路径和形状元素，除了大小和间距外不得有任何其他属性。\
实际上只允许以下元素和属性：
* `<path d>`
* `<line x1 x2>`
* `<polygon points>`
* `<polyline points>`
* `<circle cx cy r>`
* `<ellipse cx cy rx ry>`
* `<rect x y width height rx>`

这也意味着不允许使用变换、滤镜、填充或显式描边。

切勿使用 [`<use>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use)。虽然有时它看起来是优化文件大小的好方法，但一旦 SVG 嵌入 HTML 文档，就无法确保引用的元素 ID 是唯一的。

## JSON 元数据描述符

每个添加的图标还必须附带一个匹配的 JSON 文件，列出图标的标签和类别。
请使用以下模板：

```json
{
  "$schema": "../icon.schema.json",
  "contributors": [
    "github-username",
    "another-github-username"
  ],
  "tags": [
    "foo",
    "bar"
  ],
  "categories": [
    "devices"
  ]
}
```
