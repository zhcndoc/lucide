---
title: 适用于 Svelte 的 Lucide
description: Lucide 提供了一个 Svelte 图标组件库，使得将图标集成到您的 Svelte 应用程序中变得轻而易举。每个图标都作为一个独立的 Svelte 组件提供，允许无缝集成和定制。
nextPage:
  - getting-started
---

<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
import { svelteSidebar } from '../../.vitepress/sidebar/svelte'
</script>

<!--@include: ../../../docs/images/package-logos/lucide-svelte.svg -->

# 适用于 Svelte 的 Lucide

Lucide 提供了一个 Svelte 图标组件库，使得将图标集成到您的 Svelte 应用程序中变得轻而易举。
每个图标都作为一个独立的 Svelte 组件提供，允许无缝集成和定制。

功能列表：
- **易于使用**：将图标作为 Svelte 组件导入，并在您的 Svelte 组件中直接使用 JSX。
- **可定制**：通过 props 和全局上下文调整大小、颜色和其他属性。
- **支持 Tree-shaking**：只有您使用的图标才会包含在最终打包文件中
- **TypeScript 支持**：完全类型化的组件，提供更好的开发者体验。

## 概述

<OverviewLinkGrid>
  <OverviewLink v-for="item in svelteSidebar[0].items.slice(1)" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 基础
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in svelteSidebar[1].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 高级
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in svelteSidebar[2].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>
