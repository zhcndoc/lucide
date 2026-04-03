---
title: 概览
nextPage:
  - getting-started
---

<script setup>
import OverviewLink from '../../.vitepress/theme/components/base/OverviewLink.vue'
import OverviewLinkGrid from '../../.vitepress/theme/components/base/OverviewLinkGrid.vue'
import { lucideStaticSidebar } from '../../.vitepress/sidebar/static'
</script>

<!--@include: ../../../docs/images/package-logos/lucide.svg -->

# Lucide 静态资源

适用于 Lucide 图标的静态资源和工具，无需 JavaScript 框架即可使用。此包提供多种格式，包括独立的 SVG 文件、SVG 雪碧图、图标字体，以及用于服务器端渲染和静态站点生成的 Node.js 工具。

**您可以实现的功能：**

- 将独立的 SVG 文件用作图片或 CSS 背景图片
- 为基于 CSS 的图标系统实现图标字体
- 创建 SVG 雪碧图以便在静态站点中高效加载图标
- 在 Node.js 应用程序和服务器端渲染中导入 SVG 字符串
- 构建无需 JavaScript 框架依赖的静态网站和应用程序

此包包含以下 Lucide 图标的实现：

- 独立的 SVG 文件
- SVG 雪碧图
- 图标字体文件
- 导出 SVG 字符串的 JavaScript 库

## 概览

<OverviewLinkGrid>
  <OverviewLink v-for="item in lucideStaticSidebar[0].items.slice(1)" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

### SVG 文件与雪碧图
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in lucideStaticSidebar[1].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid >

### 图标字体
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in lucideStaticSidebar[2].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid >

### JavaScript 模块
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in lucideStaticSidebar[3].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid >

### 资源
{{''}}

<OverviewLinkGrid>
  <OverviewLink v-for="item in lucideStaticSidebar[4].items" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid >
