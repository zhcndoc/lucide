---
title: 组合图标 - Vue
description: 学习如何在 Vue 应用中通过嵌套 SVG 元素将多个图标组合成一个图标。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackVue.vue'
</script>

# 组合图标

你可以通过嵌套 SVG 元素将多个图标组合成一个图标。
如果你想通过组合现有图标来创建自定义图标，这很有用。

::: sandpack {template=vue showTabs=false editorHeight=400 editorWidthPercentage=60 dependencies="@lucide/vue"}

```vue src/App.vue [active]
<script setup>
import { Scan, User } from "@lucide/vue";
</script>

<template>
  <div class="app">
    <Scan :size="48">
      <User
        :size="12"
        x="6"
        y="6"
        absoluteStrokeWidth
      />
    </Scan>
  </div>
</template>

```

:::

这是有效的，因为 [SVG 可以嵌套](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/svg#nested_svg_element)，并且图标支持所有 SVG 属性。
可以调整 `x` 和 `y` 坐标来按需定位图标。

::: info 限制
组合图标时，你需要确保 `x` 和 `y` 坐标在外层图标的 `viewBox` 范围内（24x24）。
:::

## 使用原生 SVG 元素

你也可以将 Lucide 图标与原生 SVG 元素组合，以构建自定义图标变体。

### 带通知徽章的示例

例如，你可以使用 `circle` SVG 元素向图标添加通知徽章。

::: sandpack {template=vue showTabs=false editorHeight=480 editorWidthPercentage=60 dependencies="@lucide/vue"}

```vue src/App.vue [active]
<script setup>
import { Mail } from "@lucide/vue";

const hasUnreadMessages = true;
</script>

<template>
  <div class="app">
    <Mail :size="48">
      <circle
        v-if="hasUnreadMessages"
        r="3"
        cx="21"
        cy="5"
        stroke="none"
        fill="#F56565"
      />
    </Mail>
  </div>
</template>

```

:::

### 带文本元素的示例

你也可以使用 `text` SVG 元素向图标添加文本。

::: sandpack {template=vue showTabs=false editorHeight=400 editorWidthPercentage=60 dependencies="@lucide/vue"}

```vue src/App.vue [active]
<script setup>
import { File } from "@lucide/vue";
</script>

<template>
  <div class="app">
    <File :size="48">
      <text
        x="7.5"
        y="19"
        font-size="8"
        font-family="Verdana,sans-serif"
        :stroke-width="1"
      >
        JS
      </text>
    </File>
  </div>
</template>

```

:::
