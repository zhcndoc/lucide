---
title: 描边宽度 - Svelte
description: 学习如何在您的 Svelte 应用程序中使用 `strokeWidth` prop 调整图标的描边宽度，或使用 `absoluteStrokeWidth` prop 调整描边宽度的外观。
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

## 绝对描边宽度

当调整 `size` prop 时，描边宽度的大小将相对于图标的大小，这是默认的 SVG 行为。引入 `absoluteStrokeWidth` prop 是为了调整此行为，使描边宽度恒定，无论图标大小如何。

这意味着当启用 `absoluteStrokeWidth` 且图标的 `size` 设置为 `48px` 时，屏幕上的 `strokeWidth` 仍将保持为 `2px`。

注意 `2px` 是 Lucide 图标的默认描边宽度，它可以调整为所有尺寸。

![绝对描边宽度比较](../../../images/absolute-stroke-width-compare.png?raw=true "绝对描边宽度比较")

### 使用 `absoluteStrokeWidth` prop 调整描边宽度

将 `absoluteStrokeWidth` 设置为 `true` 将使描边宽度变为绝对值。

::: sandpack {template=vite-svelte editorHeight=240 editorWidthPercentage=60}

```svelte src/App.svelte
<script>
import RollerCoaster from "@lucide/svelte/icons/roller-coaster";
</script>

<RollerCoaster
  size={96}
  absoluteStrokeWidth
/>
```

:::
