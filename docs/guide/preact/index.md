---
title: 适用于 Preact 的 Lucide
description: Lucide 提供了一个 Preact 图标组件库，使得将图标集成到您的 Preact 应用程序中变得轻而易举。每个图标都可作为独立的 Preact 组件使用，从而实现无缝集成和定制。
nextPage:
  - getting-started
---

<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
import { preactSidebar } from '../../.vitepress/sidebar/preact'
</script>

<!--@include: ../../../docs/images/package-logos/lucide-preact.svg -->


# 适用于 Preact 的 Lucide

Lucide 提供了一个 Preact 图标组件库，使得将图标集成到您的 Preact 应用程序中变得轻而易举。
每个图标都可作为独立的 Preact 组件使用，从而实现无缝集成和定制。

功能列表：
- **易于使用**：将图标作为 Preact 组件导入，并在您的 Preact 组件中通过 JSX 直接使用。
- **可定制**：通过 props 调整大小、颜色和其他属性。
- **支持 Tree-shaking**：只有您使用的图标才会包含在最终打包文件中
- **TypeScript 支持**：完全类型化的组件，提供更好的开发者体验。

## 概览

<OverviewLinkGrid>
  <OverviewLink v-for="item in preactSidebar[0].items.slice(1)" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 基础
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in preactSidebar[1].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 高级
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in preactSidebar[2].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 资源
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in preactSidebar[3].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>
