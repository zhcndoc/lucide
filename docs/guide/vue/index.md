---
title: 适用于 Vue 的 Lucide
description: Lucide 提供了一个 Vue 图标组件库，使得将图标集成到您的 Vue 应用程序中变得简单易行。每个图标都作为独立的 Vue 组件提供，支持无缝集成和定制。
nextPage:
  - getting-started
---

<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
import { vueSidebar } from '../../.vitepress/sidebar/vue'
</script>

<!--@include: ../../../docs/images/package-logos/lucide-vue.svg -->

# 适用于 Vue 的 Lucide

Lucide 提供了一个 Vue 图标组件库，使得将图标集成到您的 Vue 应用程序中变得简单易行。
每个图标都作为独立的 Vue 组件提供，支持无缝集成和定制。

功能列表：
- **易于使用**：将图标作为 Vue 组件导入，并在您的 Vue 组件中结合 JSX 直接使用它们。
- **可定制**：通过 props 调整大小、颜色和其他属性。
- **支持 Tree-shaking**：只有您使用的图标才会包含在最终打包文件中
- **TypeScript 支持**：完全类型化的组件，提供更好的开发者体验。

## 概览

<OverviewLinkGrid>
  <OverviewLink v-for="item in vueSidebar[0].items.slice(1)" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 基础
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in vueSidebar[1].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 进阶
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in vueSidebar[2].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>
