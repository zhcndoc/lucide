---
title: 使用 Lucide Lab 或自定义图标 - Astro
description: 学习如何使用 Icon 组件在 Astro 应用程序中使用 Lucide Lab 或自定义图标。
---

# 使用 Lucide Lab 或自定义图标

[Lucide Lab](https://github.com/lucide-icons/lucide-lab) 是不属于 Lucide 主库的图标集合。

可以通过使用 `Icon` 组件来使用它们。
所有与常规 Lucide 图标相同的 props 都可以传递，以调整图标外观。

## 使用 `Icon` 组件

这将基于传递的 iconNode 创建单个图标并渲染一个 Lucide 图标组件。

```astro
---
import { Icon } from '@lucide/astro';
import { burger, sausage } from '@lucide/lab';
---

<Icon iconNode={burger} />
<Icon iconNode={sausage} color="red"/>
```
