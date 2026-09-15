---
title: 描边宽度 - Svelte
description: 了解如何在 Svelte 应用中使用 `strokeWidth` prop 调整图标的描边宽度，或使用 `nonScalingStroke` prop 调整 strokeWidth 的外观
---

<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackSvelte.vue'
</script>

# 描边宽度

所有图标都是使用带有描边的 SVG 元素设计的。
它们的默认描边宽度为 `2px`。

可以调整 `strokeWidth` 来创建不同的图标外观。

## 使用 `strokeWidth` prop 调整描边宽度

::: sandpack {template=vite-svelte editorHeight=240 editorWidthPercentage=60}

```svelte src/App.svelte
<script >
import FolderLock from "@lucide/svelte/icons/folder-lock";
</script>

<FolderLock strokeWidth={1} />
```

:::

## 非缩放描边

调整 `size` prop 时，描边宽度的大小将相对于图标的大小，这是 SVG 的默认行为。引入 `nonScalingStroke` prop 可以调整此行为，使描边宽度不受图标大小影响而保持不变。

这意味着，当启用 `nonScalingStroke` 且图标的 `size` 设置为 `48px` 时，屏幕上的 `strokeWidth` 仍将为 `2px`。

注意 `2px` 是 Lucide 图标的默认描边宽度，它可以调整为所有尺寸。

<!--@include: ../../../images/non-scaling-stroke-compare.svg -->

### 使用 `nonScalingStroke` prop 调整描边宽度

将 `nonScalingStroke` 设置为 `true` 会使描边宽度不随图标缩放。

::: sandpack {template=vite-svelte editorHeight=240 editorWidthPercentage=60}

```svelte src/App.svelte
<script>
import RollerCoaster from "@lucide/svelte/icons/roller-coaster";
</script>

<RollerCoaster
  size={96}
  nonScalingStroke
/>
```

:::
