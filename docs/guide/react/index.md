---
title: 适用于 React 的 Lucide
description: Lucide 提供了一个 React 图标组件库，可轻松将图标集成到您的 React 应用程序中。每个图标都可作为独立的 React 组件使用，从而实现无缝集成和自定义。
nextPage:
  - getting-started
---

<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
import { reactSidebar } from '../../.vitepress/sidebar/react'
</script>

<!--@include: ../../../docs/images/package-logos/lucide-react.svg -->

# 适用于 React 的 Lucide

Lucide 提供了一个 React 组件库，用于在应用程序中使用图标。每个图标都可作为独立组件使用，渲染优化后的内联 SVG。

功能列表：

- **易于使用** – 导入图标并直接在 JSX 中使用。
- **可自定义** – 通过 props 调整大小、颜色、描边宽度和其他属性。
- **支持 Tree-shaking** – 只有您导入的图标才会包含在最终打包文件中。
- **TypeScript 支持** – 完全类型化的组件，提供更好的开发者体验。

## 概述

<OverviewLinkGrid>
  <OverviewLink v-for="item in reactSidebar[0].items.slice(1)" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 基础
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in reactSidebar[1].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 高级
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in reactSidebar[2].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 资源
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in reactSidebar[3].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>
