---
title: 描边宽度 - Vue
description: 了解如何在 Vue 应用中使用 `strokeWidth` prop 调整图标的描边宽度，或使用 `nonScalingStroke` prop 调整 strokeWidth 的外观
---

<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackVue.vue'
</script>

# 描边宽度

所有图标都是使用描边设计的 SVG 元素。
它们的默认描边宽度为 `2px`。

可以调整 `strokeWidth` 来创建不同的图标外观。

## 使用 `strokeWidth` prop 调整描边宽度

::: sandpack {template=vue showTabs=false editorHeight=300 editorWidthPercentage=60 dependencies="@lucide/vue"}

```vue src/App.vue [active]
<script setup>
import { FolderLock } from '@lucide/vue';
</script>

<template>
  <FolderLock :strokeWidth="1" />
</template>
```

:::

## 非缩放描边

调整 `size` prop 时，描边宽度的大小将相对于图标的大小，这是 SVG 的默认行为。引入 `nonScalingStroke` prop 可以调整此行为，使描边宽度无论图标大小如何都保持不变。

这意味着，当启用 `nonScalingStroke` 且图标的 `size` 设置为 `48px` 时，屏幕上的 `strokeWidth` 仍将为 `2px`。

注意 `2px` 是 Lucide 图标的默认描边宽度，它可以调整为任意大小。

<!--@include: ../../../images/non-scaling-stroke-compare.svg -->

### 使用 `nonScalingStroke` prop 调整描边宽度

将 `nonScalingStroke` 设置为 `true` 将使描边宽度不随尺寸缩放。

::: sandpack {template=vue showTabs=false editorHeight=320 editorWidthPercentage=60 dependencies="@lucide/vue"}

```vue src/App.vue [active]
<script setup>
import { RollerCoaster } from '@lucide/vue';
</script>

<template>
  <RollerCoaster
    :size="96"
    nonScalingStroke
  />
</template>
```

:::
