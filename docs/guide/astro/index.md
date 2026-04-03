---
title: 适用于 Astro 的 Lucide
description: 通过我们的综合指南，学习如何在 Astro 应用程序中使用 Lucide 图标。
nextPage:
  - getting-started
---

<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
import { astroSidebar } from '../../.vitepress/sidebar/astro'
</script>

<!--@include: ../../../docs/images/package-logos/lucide-astro.svg -->

# 适用于 Astro 的 Lucide

专为 Lucide 图标打造的 Astro 组件，完美契合 Astro 的岛屿架构和多框架支持。每个图标都是一个 Astro 组件，渲染为内联 SVG，为静态站点和服务器端渲染场景提供卓越的性能。

功能列表：

- **易于使用**：将图标作为 Astro 组件导入，并在您的 Astro 应用程序中直接使用。
- **可定制**：通过 props 调整大小、颜色和其他属性。
- **支持 Tree-shaking**：与 Astro 的组件岛屿和部分水合无缝集成
- **TypeScript 支持**：完全类型化的组件，提供更好的开发者体验。

## 概述

<OverviewLinkGrid>
  <OverviewLink v-for="item in astroSidebar[0].items.slice(1)" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 基础
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in astroSidebar[1].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 高级
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in astroSidebar[2].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>
