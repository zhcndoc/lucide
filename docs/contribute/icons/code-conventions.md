---
description: 了解允许使用的 SVG 元素和属性、优化方式及其他代码规范。
---

# SVG 规范

在向 Lucide 添加图标之前，请确保其 SVG 具有良好的可读性并经过优化。

## 全局属性

每个图标都会使用以下根 SVG 属性：

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
  <!-- SVGElements -->
</svg>
```

## 缩小路径

路径数据可能会变得很大。将其缩小，以保持 SVG 文件较小。

使用 [Lucide Studio](https://studio.lucide.dev/?utm_source=lucide.dev&utm_medium=design-guide) 将路径整理到小数点后三位。

## 允许使用的元素

SVG 文件只能包含简单的路径和形状元素。这些元素只能使用尺寸和位置属性。

仅允许使用以下元素和属性：

- `<path d>`
- `<line x1 y1 x2 y2>`
- `<polygon points>`
- `<polyline points>`
- `<circle cx cy r>`
- `<ellipse cx cy rx ry>`
- `<rect x y width height rx>`

不要使用变换、滤镜、填充或显式描边颜色。

永远不要使用 [`<use>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use)。虽然它可以减小文件大小，但在 SVG 嵌入 HTML 时，被引用的 ID 可能会发生冲突。

## 元数据文件

每个图标还必须有一个匹配的 JSON 文件，其中包含贡献者、使用场景、标签和类别。

详情请参阅[元数据规范](./metadata-conventions/)。

## 验证

提交 SVG 更改之前，请格式化并验证图标文件：

```sh
pnpm run lint:icons
```

你可以使用 Prettier 自动格式化 SVG 文件：

```sh
pnpm run lint:icons-fix
```

要同时检查图标名称、类别、元数据和 SVG 结构，请运行：

```sh
pnpm run lint:icons:all
```

## 检查清单

在创建拉取请求之前，请确认：

- SVG 使用标准的 `24 × 24` viewBox。
- SVG 使用 `fill="none"` 和 `stroke="currentColor"`。
- 描边宽度、线帽和线连接方式与 Lucide 的默认设置一致。
- 路径整洁，并使用适当的数字精度。
- SVG 仅使用允许的元素和属性。
- SVG 不使用变换、滤镜、填充、显式描边或 `<use>`。
- 图标具有匹配的 JSON 元数据文件。
- `pnpm run lint:icons` 已通过。
- `pnpm run lint:json:icons` 已通过。
