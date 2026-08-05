---
title: 优化 - React Native
description: 了解如何通过对 Lucide 图标进行摇树优化，来优化 React Native 和 Expo 网页导出的包大小。
---

# 优化

默认情况下，你会从 `lucide-react-native` 入口点导入图标：

```jsx
import { Camera } from 'lucide-react-native';
```

这种方式很方便，但它依赖打包器对入口点进行_摇树优化_（一个重新导出所有图标的“总入口”文件），这样最终打包结果中才只会包含你实际使用的图标。

在原生平台上，这通常没有问题。但在**网页导出**中可能会出现问题，因为 Metro 打包器目前对总入口导入的摇树优化支持不太理想，可能会将**所有**图标都包含在最终的包中。

## Metro 的 tree-shaking 限制

当你使用 Expo 为 Web 构建（`expo export --platform web`）时，Metro 会被用来打包 JavaScript。Metro 按需打包模块，并且默认不会从 barrel 文件中移除未使用的导出。

这意味着，下面这样的导入可能会引入整个图标集，即使实际只渲染了一个图标：

```jsx
// 可能会在 Web 导出中打包所有 Lucide 图标
import { Camera } from 'lucide-react-native';
```

Expo 为 [React Native Web 导入](https://docs.expo.dev/guides/tree-shaking/#react-native-web-imports) 以及[移除未使用的导入和导出](https://docs.expo.dev/guides/tree-shaking/#remove-unused-imports-and-exports)记录了一项实验性优化。实际上，目前这项 tree-shaking 对 `lucide-react-native` 的 barrel 导入并不能可靠地工作，因此未使用的图标不会从 Web 导出中移除。

## 推荐：单独导入图标

为了确保只打包使用的图标——无论打包工具具备怎样的摇树优化能力——请直接从各自的模块中导入每个图标：

```jsx
import Camera from 'lucide-react-native/icons/camera';

// 用法
const App = () => {
  return <Camera />;
};

export default App;
```

由于每个图标都位于独立文件中，打包工具只会包含你明确导入的图标。这样无需依赖 Metro 的实验性摇树优化，也能让 Web 导出文件保持较小。

图标模块名称是图标名称的 [kebab-case](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case) 版本。例如，`ArrowRight` 图标应从 `lucide-react-native/icons/arrow-right` 导入：

```jsx
import ArrowRight from 'lucide-react-native/icons/arrow-right';
```

::: tip
单独导入图标在原生平台和 Web 平台上的工作方式完全相同，因此你可以放心地在整个项目中采用这种方式，尽可能缩小每个平台上的打包文件。
:::
