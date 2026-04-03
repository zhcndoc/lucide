---
title: 适用于 React Native 的 Lucide
description: Lucide 提供了一个 React Native 图标组件库，使得将图标集成到 React Native 应用程序中变得轻而易举。每个图标都可作为独立的 React Native 组件使用，从而实现无缝集成和定制。
nextPage:
  - getting-started
---

<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
import { reactNativeSidebar } from '../../.vitepress/sidebar/react-native'
</script>

<!--@include: ../../../docs/images/package-logos/lucide-react-native.svg -->

# 适用于 React Native 的 Lucide

Lucide 提供了一个 React Native 图标组件库，使得将图标集成到 React Native 应用程序中变得轻而易举。
每个图标都可作为独立的 React Native 组件使用，从而实现无缝集成和定制。

功能列表：

- **易于使用** – 导入图标并在 JSX 中直接使用。
- **可定制** – 通过 props 调整大小、颜色、描边宽度和其他属性。
- **支持 Tree-shaking** – 只有你导入的图标才会包含在最终打包文件中。
- **TypeScript 支持** – 完全类型化的组件，提供更好的开发者体验。

## 概述

<OverviewLinkGrid>
  <OverviewLink v-for="item in reactNativeSidebar[0].items.slice(1)" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### 基础
{{''}}

<OverviewLinkGrid>
  <OverviewLink
    v-for="item in reactNativeSidebar[1].items"
    :key="item.link"
    :href="item.link"
    :title="item.text"
    :desc="item.desc"
  />
</OverviewLinkGrid>

### 高级
{{''}}

<OverviewLinkGrid>
  <OverviewLink
    v-for="item in reactNativeSidebar[2].items"
    :key="item.link"
    :href="item.link"
    :title="item.text"
    :desc="item.desc"
  />
</OverviewLinkGrid>

### 资源
{{''}}

<OverviewLinkGrid>
  <OverviewLink
    v-for="item in reactNativeSidebar[3].items"
    :key="item.link"
    :href="item.link"
    :title="item.text"
    :desc="item.desc"
  />
</OverviewLinkGrid>
