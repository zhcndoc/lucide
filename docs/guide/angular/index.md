---
title: 适用于 Angular 的 Lucide
description: 一个独立的、基于 Signal 且无 Zone 的实现，让您轻松将图标集成到 Angular 项目中。
nextPage:
  - getting-started
---

<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
import { angularSidebar } from '../../.vitepress/sidebar/angular'
</script>

<!--@include: ../../../docs/images/package-logos/lucide-angular.svg -->

# 适用于 Angular 的 Lucide

一个独立的、基于 Signal 且无 Zone 的实现，让您轻松将图标集成到 Angular 项目中。

功能列表：

- **易于使用**：将图标作为独立的 Angular 组件使用，并提供完整的依赖注入支持。
- **可定制**：通过 input 属性或全局 Angular provider 调整大小、颜色和其他属性。
- **支持 Tree-shaking**：只有您使用的图标才会包含在最终的 bundle 中。
- **TypeScript 支持**：完全类型化的组件，提供更佳的开发者体验。

## 概述

<OverviewLinkGrid>
  <OverviewLink v-for="item in angularSidebar[0].items.slice(1)" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 基础
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in angularSidebar[1].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 高级
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in angularSidebar[2].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>
