---
title: 如何使用 Lucide 图标
description: 了解如何以无障碍且用户友好的方式使用图标
---

<script setup>
import OverviewLink from '../.vitepress/theme/components/base/OverviewLink.vue';
import OverviewLinkGrid from '../.vitepress/theme/components/base/OverviewLinkGrid.vue';
import { resourcesSidebar } from '../.vitepress/sidebar/resources.ts';
</script>

# 如何使用 Lucide 图标

图标可以让界面更易于浏览，但只有在含义清晰时才能发挥作用。这些指南将解释如何选择支持界面的图标、何时应将图标与文本搭配使用，以及何时最佳选择其实是不使用图标。

使用无障碍指南，让图标对辅助技术而言清晰、易懂且可用。使用图标指南来决定界面中何时应使用图标，以及如何选择人们可能识别的符号。

## 本指南涵盖的内容

<OverviewLinkGrid>
  <OverviewLink v-for="item in resourcesSidebar[2].items.slice(1)" :key="item.link" :href="item.link" :title="item.text" :desc="item.desc"/>
</OverviewLinkGrid>

## 更多资源

- [图标设计与使用的直白指南](https://erik-engheim.medium.com/the-no-bullshit-guide-to-icon-design-and-usage-40948878dbbb)，作者：Erik Engheim
- [关于图标](https://ia.net/topics/on-icons/)，作者：iA
- [如何在 UI 和 UX 设计中使用图标](https://blog.thenounproject.com/how-to-use-icons-in-ui-and-ux-design-best-practices/)，作者：The Noun Project
- [UX 误区：图标能提升可用性](https://uxmyths.com/post/715009009/myth-icons-enhance-usability)，作者：UX Myths
