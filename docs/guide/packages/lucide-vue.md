# 适用于 Vue 的 Lucide

用于 Lucide 图标的 Vue 2 组件，可与 Vue 的 Options API 和模板系统集成。每个图标都是一个 Vue 组件，渲染为内联 SVG，为仍在使用 Vue 2 的遗留应用提供熟悉的 Vue 开发模式。

**你可以实现的功能：**

- 使用图标作为 Vue 2 组件，并与 Options API 集成
- 使用现代图标组件维护传统的 Vue 2 应用
- 与 Vue 2 的模板系统和组件生命周期集成
- 使用 Vue 2 熟悉的语法和模式构建应用
- 在规划迁移到 Vue 3 的同时实现平滑过渡

## 安装

::: code-group

```sh [pnpm]
pnpm add @lucide/vue
```

```sh [yarn]
yarn add @lucide/vue
```

```sh [npm]
npm install @lucide/vue
```

```sh [bun]
bun add @lucide/vue
```

:::

## 使用方法

Lucide 基于 ES Modules 构建，因此完全支持树摇（tree-shakable）。

每个图标都可以作为 Vue 组件导入，它会渲染为一个内联 SVG 元素。这样只有导入到项目中的图标才会包含在最终打包文件中。其余图标会被树摇移除。

### 示例

你可以传递额外的 props 来调整图标。

```vue
<script setup>
import { Camera } from '@lucide/vue';
</script>

<template>
  <Camera
    color="red"
    :size="32"
  />
</template>
```

## 属性

| 名称                    | 类型        | 默认值        |
| ----------------------- | ----------- | ------------- |
| `size`                  | *number*    | 24            |
| `color`                 | *string*    | currentColor  |
| `stroke-width`          | *number*    | 2             |
| `absoluteStrokeWidth`   | *boolean*   | false         |
| `default-class`         | *string*    | lucide-icon   |

### 应用属性

要自定义图标的外观，你可以直接将自定义属性作为 props 传递给组件。组件接受所有 SVG 属性作为 props，这允许灵活地样式化 SVG 元素。请参阅 [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) 上的 SVG 展示属性列表。

```vue
<template>
  <Camera fill="red" />
</template>
```

## 使用 Lucide Lab 或自定义图标

[Lucide Lab](https://github.com/lucide-icons/lucide-lab) 是不属于 Lucide 主库的图标集合。

可以通过使用 `Icon` 组件来使用它们。
所有像常规 Lucide 图标一样的 props 都可以传递以调整图标外观。

### 使用 `Icon` 组件

这基于传入的 iconNode 创建单个图标并渲染为 Lucide 图标组件。

```vue
<script setup>
import { Icon } from '@lucide/vue';
import { baseball } from '@lucide/lab';
</script>

<template>
  <Icon :iconNode="baseball" />
</template>
```

## 一个通用图标组件

可以创建一个通用图标组件来加载图标，但不推荐这样做。

::: danger
下面的示例导入了所有 ES Modules，因此使用时请谨慎。导入所有图标将显著增加应用的构建大小，负面影响其性能。当使用 `Webpack`、`Rollup` 或 `Vite` 等打包工具时，这一点尤其重要。
:::

### 图标组件示例

```vue
<script setup>
import { computed } from 'vue';
import * as icons from "@lucide/vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: Number,
  color: String,
  strokeWidth: Number,
  defaultClass: String
})

const icon = computed(() => icons[props.name]);
</script>

<template>
  <component
    :is="icon"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth" :default-class="defaultClass"
  />
</template>
```

### 使用图标组件

上面列出的所有其他 props 也适用于 `Icon` 组件。

```vue
<template>
  <div id="app">
    <Icon name="Airplay" />
  </div>
</template>
```

## 无障碍访问

默认情况下，我们使用 `aria-hidden="true"` 对屏幕阅读器隐藏图标。

你可以使用 aria-labels 添加无障碍属性。

```vue
<script setup>
import { Check } from '@lucide/vue';
</script>

<template>
  <Check
    color="red"
    :size="32"
    aria-label="任务已完成"
  />
</template>
```

关于无障碍的最佳实践，请参阅我们的 [无障碍指南](../accessibility.md)。
