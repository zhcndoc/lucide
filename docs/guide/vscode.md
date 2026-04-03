---
title: VS Code
description: 学习如何在 VS Code 中使用 Lucide 图标，包括关闭自动补全、查看 JS 文档和图标预览的技巧，以及探索第三方插件以增强功能。
---
# VS Code

VS Code 是一款流行的代码编辑器，提供广泛的功能和扩展以增强您的开发体验。

## 在 IDE 中关闭自动补全

所有图标都是从主模块导出的。这会在您的 IDE 的自动补全建议中产生大量干扰。
您可以通过将以下设置添加到 VS Code 设置中来关闭此功能。

```json [.vscode/settings.json]
{
  "js/ts.preferences.autoImportFileExcludePatterns": [
    "lucide-react", // 或
    "lucide-preact", // 或
    "lucide-react-native", // 或
    "@lucide/vue",
  ]
}
```

## JS 文档和图标预览

每个图标都提供了 JS 文档。在 VS Code 中，您可以将鼠标悬停在图标组件上以查看 JS 文档。

同时还会显示一个小的图标预览。

![VS Code JS 文档](./images/vscode-hover.png)

## 第三方插件

有几个适用于 VS Code 的第三方插件，可为使用 Lucide 图标提供额外功能。

查看  [VSCode 市场](https://marketplace.visualstudio.com/search?term=lucide&target=VSCode&category=All%20categories&sortBy=Relevance) 以获取可用的扩展。
