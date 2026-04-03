---
title: TypeScript 支持 - Vue
description: 了解 \`@lucide/vue\` 包导出的不同类型以及如何在 Vue 应用程序中使用它们。
---
# TypeScript 支持

\`@lucide/vue\` 包导出的类型列表。
在 TypeScript Vue 项目中使用 Lucide 图标时，这些类型可用于为组件添加类型。

## \`LucideProps\`

导出所有可以传递给图标组件的 props 以及任何其他 SVG 属性，参见：[MDN 上的 SVG 展示属性](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation)。

```ts
interface LucideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
  [key: string]: any; // 任何其他 SVG 属性
}
```

### 使用 \`LucideProps\`
你可以使用 \`LucideProps\` 接口为你的自定义图标组件的 props 添加类型。

::: code-group
```vue [IconWrapper.vue]
<script lang="ts" setup>
import { type LucideProps } from '@lucide/vue';
import { Camera } from '@lucide/vue';

defineProps<LucideProps>();
</script>

<template>
  <div>
    <Camera v-bind="$props" />
  </div>
</template>
```
:::

## \`LucideIcon\`

单个图标组件的类型，当你想要为持有图标组件的变量或 prop 添加类型时，这非常有用。

```ts
type LucideIcon = React.FC<LucideProps>;
```

### 使用 \`LucideIcon\`

当你需要直接使用图标组件时，可以使用 \`LucideIcon\` 类型。

::: code-group
```vue [IconButton.vue]
<script lang="ts" setup>
import { type LucideProps } from '@lucide/vue';
import { Camera } from '@lucide/vue';

defineProps<{
  icon: LucideIcon;
  label: string;
}>();
</script>

<template>
  <button :aria-label="label">
    <component :is="icon" :size="16" />
  </button>
</template>
```
:::

## \`IconNode\`

图标原始 SVG 结构的类型。这是一个用于渲染图标的 SVG 元素及其属性的数组。
通常不直接在应用程序代码中使用。但对于高级用例可能很有用，例如使用自定义图标或与 Lucide Lab 一起使用。

```ts
type IconNode = [elementName: string, attrs: Record<string, string | number>][];
```

### 使用 \`IconNode\`
当你需要处理图标的原始 SVG 结构时，可以使用 \`IconNode\` 类型。

::: code-group
```vue [CustomIcon.vue]
<script lang="ts" setup>
import { type IconNode, Icon } from '@lucide/vue';

const customIcon: IconNode = [
  ['circle', { cx: 12, cy: 12, r: 10 }],
  ['line', { x1: 12, y1: 8, x2: 12, y2: 12 }],
  ['line', { x1: 12, y1: 16, x2: 12, y2: 16 }],
];
</script>

<template>
  <Icon :iconNode="customIcon" size="24" color="blue" />
</template>
```
:::
