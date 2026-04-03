---
title: Illustrator 模板指南
---

# Illustrator 模板指南

本指南解释了如何正确使用 Lucide 的 Adobe Illustrator 模板。

> 注意：尽管模板不太可能过时或不完全准确。但在开始使用模板之前，请检查图标设计指南，以确保与 Lucide 图标包的一致性。

## 一般工作流程

Illustrator 模板是根据 [图标设计指南](icon-design-guide.md) 中的指南创建的。

**工作流程：**

1. 下载并打开 [Illustrator 模板](https://github.com/lucide-icons/lucide/blob/main/docs/public/templates/illustrator_template.ai)。

2. 现在您可以从示例徽标层（"Draw"）中移除内容并开始创作。

3. 验证您是否遵循了 [图标设计指南](icon-design-guide.md)。

4. 在将文件导出为 SVG 之前，请确保检查您是否遵循了指南，并移除所有不必要的层（尤其是 "Padding" 和 "Grid"）。

5. 通过导出菜单导出文件：`Export > Export As..`，然后将文件保存为 SVG。在 SVG 选项对话框中选择以下选项：

![Illustrator 中的 SVG 导出选项](../images/illustrator-svg-options.png?raw=true "设置页面大小")

之后，再次检查 [代码规范和 SVG 全局属性](icon-design-guide.md#code-conventions) 是否正确。

7. 使用 [SVGOMG](https://jakearchibald.github.io/svgomg/) 最小化路径。
