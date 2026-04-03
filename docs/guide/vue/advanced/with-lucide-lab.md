---
title: 使用 Lucide Lab 或自定义图标 - Vue
description: 学习如何使用 Icon 组件在 Vue 应用中使用 Lucide Lab 或自定义图标。
---
# 使用 Lucide Lab 或自定义图标

[Lucide Lab](https://github.com/lucide-icons/lucide-lab) 是不属于 Lucide 主库的图标集合。

它们可以通过 `Icon` 组件来使用。
所有常规 Lucide 图标的 props 都可以传递，以调整图标外观。

## 使用 `Icon` 组件

这将基于传入的 iconNode 创建单个图标并渲染一个 Lucide 图标组件。

```vue
<script setup>
import { Icon } from '@lucide/vue';
import { baseball } from '@lucide/lab';
</script>

<template>
  <Icon :iconNode="baseball" />
</template>
```
