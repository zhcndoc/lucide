---
title: Affinity Designer 模板指南
---

# Affinity Designer 模板指南

本指南描述了如何使用用于 Lucide 的 Affinity Designer 模板。

## 一般工作流程

>注意：默认情况下，Affinity Designer 将描边单位设置为点（points）。请确保将其设置为像素（pixel）。为此，打开 `偏好设置 > 用户界面`。在 `单位类型的小数位数` 下，取消勾选 `以点显示线条`。

1. 下载并打开 [Affinity Designer 模板](https://github.com/lucide-icons/lucide/blob/main/docs/public/templates/affinity_designer.aftemplate)。
2. 使用模板时遵循 [图标设计原则](icon-design-guide.md)（以确保与 Lucide 图标包的一致性）。
3. 将文件导出为 SVG（`文件 > 导出`）。确保 _栅格化_ 设置为 _无_，勾选 _将文本导出为曲线_（希望你不需要这个），勾选 _使用十六进制颜色_，并勾选 _扁平化变换_。

	 ![Affinity Designer 中的 SVG 导出选项](../images/affinity-designer-export-options.png?raw=true)
4. 使用 [SVGOMG](https://jakearchibald.github.io/svgomg/) 或 [`svgo`](https://github.com/svg/svgo) 进一步优化导出的 SVG 文件（使用 `svgo --multipass exported_icon.svg`）。
