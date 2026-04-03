---
title: 使用 Lucide Lab 或自定义图标 - Solid
description: 学习如何通过 Icon 组件在 Solid 应用程序中使用 Lucide Lab 或自定义图标。
---
# 使用 Lucide Lab 或自定义图标

[Lucide Lab](https://github.com/lucide-icons/lucide-lab) 是不属于 Lucide 主库的图标集合。

可以通过 `Icon` 组件来使用它们。
所有与常规 lucide 图标相同的 props 都可以传递，以调整图标外观。

## 使用 `Icon` 组件

这会根据传递的 iconNode 创建单个图标，并渲染一个 Lucide 图标组件。

```tsx
import { Icon } from 'lucide-solid';
import { coconut } from '@lucide/lab';

const App = () => (
  <Icon iconNode={coconut} />
);
```
