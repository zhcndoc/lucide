---
title: 适用于 Solid 的 Lucide
description: Lucide 提供了一个 Solid 图标组件库，使得在 Solid 应用中集成图标变得简单。每个图标都可作为独立的 Solid 组件使用，从而实现无缝集成和定制。
nextPage:
  - getting-started
---

<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
import { solidSidebar } from '../../.vitepress/sidebar/solid'
</script>

<!--@include: ../../../docs/images/package-logos/lucide-solid.svg -->


# 适用于 Solid 的 Lucide

Lucide 提供了一个 Solid 图标组件库，使得在 Solid 应用中集成图标变得简单。
每个图标都可作为独立的 Solid 组件使用，从而实现无缝集成和定制。

功能列表：
- **易于使用**：将图标作为 Solid 组件导入，并在你的 Solid 组件中通过 JSX 直接使用它们。
- **可定制**：通过 props 调整大小、颜色和其他属性。
- **支持摇树优化**：只有你使用的图标才会包含在最终打包文件中
- **TypeScript 支持**：完全类型化的组件，提供更好的开发者体验。

## 概述

<OverviewLinkGrid>
  <OverviewLink v-for="item in solidSidebar[0].items.slice(1)" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 基础
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in solidSidebar[1].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 高级
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in solidSidebar[2].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 资源
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in solidSidebar[3].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>
