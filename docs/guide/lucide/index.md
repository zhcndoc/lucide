---
title: 适用于原生 JavaScript 的 Lucide
description: 适用于原生 JavaScript 应用程序的核心 Lucide 包。学习如何在无需框架依赖的情况下，将可缩放矢量图标添加到任何 Web 项目中。
nextPage:
  - getting-started
---

<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
import { lucideSidebar } from '../../.vitepress/sidebar/lucide'
</script>

<!--@include: ../../../docs/images/package-logos/lucide.svg -->

# 适用于原生 JavaScript 的 Lucide

适用于原生 JavaScript 应用程序的核心 Lucide 包。此包允许您轻松地将可缩放矢量图标添加到任何 Web 项目中，而无需框架依赖。非常适合静态网站、遗留应用程序，或者当您需要在最大浏览器兼容性下进行轻量级图标集成时。

**您可以实现的功能：**

- 使用简单的 data 属性将图标添加到 HTML
- 使用 JavaScript 动态创建和插入 SVG 图标
- 使用 CSS 类和内联样式自定义图标外观
- 摇树优化未使用的图标以保持打包体积最小
- 在原生 JS 与 HTML 中使用图标

Lucide 旨在轻量且易于使用，使其成为需要图标但无需完整框架集成开销的项目的绝佳选择。

## 概述

<OverviewLinkGrid>
  <OverviewLink v-for="item in lucideSidebar[0].items.slice(1)" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 基础
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in lucideSidebar[1].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 高级
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in lucideSidebar[2].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 资源
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in lucideSidebar[3].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>
