---
description: 为 Lucide 贡献图标的指南
---

<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue';
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue';
import { resourcesSidebar } from '../../.vitepress/sidebar/resources.ts';
</script>

# 为 Lucide 设计图标

每个图标都应该让人感觉它属于 Lucide 的整体风格

本指南介绍如何为 Lucide 设计和准备图标

## 本指南涵盖的内容

<OverviewLinkGrid>
  <OverviewLink v-for="item in resourcesSidebar[3].items.slice(1, -1)" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

## 使用你偏好的设计工具

你可以使用任何能够导出 SVG 的矢量编辑器来设计 Lucide 图标

以下是常用工具的分步指南：

<OverviewLinkGrid>
  <OverviewLink v-for="item in resourcesSidebar[2].items.at(-1).items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

这些指南介绍如何设置文档、遵循 Lucide 规则，以及导出可用的 SVG

无论你使用哪种工具，都需要遵循相同的设计和 SVG 要求。
