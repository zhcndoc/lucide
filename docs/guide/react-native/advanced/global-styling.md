---
title: 全局样式 - React Native
description: 学习如何使用 CSS 或 Lucide 上下文提供者在你的 React Native 应用中全局设置所有 Lucide 图标的样式。
---
# 全局样式

可以通过使用 [颜色](../basics/color.md)、[大小](../basics/sizing.md) 和 [描边宽度](../basics/stroke-width.md) 来调整图标。
要全局设置所有图标的样式，你可以使用上下文提供者。

## 上下文提供者

对于使用上下文提供者进行全局样式设置，你可以使用由 `lucide-react-native` 包提供的 `LucideProvider` 组件。

```tsx
import { LucideProvider, Home } from 'lucide-react-native';

const App = () => (
  <LucideProvider
    color="red"
    size={48}
    strokeWidth={2}
  >
    <Home />
  </LucideProvider>
);
```

这会将 `color`、`size` 和 `strokeWidth` 属性应用于 `LucideProvider` 的所有子图标。
