---
title: 别名 - React
description: 了解 React 项目中 Lucide 图标可用的不同导入名称样式，以及如何选择最适合你需求的样式。
---
# 别名

有些图标有多个名称。这是因为我们有时会选择重命名它们，使其与图标集的其余部分保持一致，或者原来的名称不够通用。例如，`edit-2` 图标被重命名为 `pen`，以使名称更通用，因为它只是一个钢笔图标。

除了这些别名之外，Lucide 还包含前缀和后缀名称，以便在你的项目中使用。这是为了防止与其他库或你自己的代码发生导入名称冲突。

```tsx
// 这些都是同一个图标
import {
  House,
  HouseIcon,
  LucideHouse,
} from "lucide-react";
```

## 选择导入名称样式

如果你希望整个项目中的导入保持一致，或者想要更改 IDE 中 Lucide 图标的自动完成功能，有一个选项可以选择你偏好的导入名称样式。

这可以通过创建自定义模块声明文件来覆盖 Lucide 导入，并在 IDE 中关闭自动完成来实现。

### 在 IDE 中关闭自动完成

```json [.vscode/settings.json]
{
  "js/ts.preferences.autoImportFileExcludePatterns": [
    "lucide-react",
  ]
}
```

### 创建自定义模块声明文件

创建一个自定义 TypeScript 声明文件，重新导出首选的命名样式：

```ts [lucide-react.d.ts]
declare module "lucide-react" {
  // 前缀导入名称
  export * from "lucide-react/dist/lucide-react.prefixed";
  // 或
  // 后缀导入名称
  export * from "lucide-react/dist/lucide-react.suffixed";
}
```

将此文件放在项目根目录或 TypeScript 配置中包含的目录中。
一种常见的方法是创建一个 `@types` 文件夹，并将文件命名为 `lucide-react.d.ts`。

### 导入名称样式

| 导入样式 | 可用导入 | 声明文件导入 |
| ------------- | --------------------------- | ----------------------- |
| 默认 | Home, HomeIcon, LucideHome  |                         |
| 前缀 | LucideHome                  | lucide-react.prefixed   |
| 后缀 | HomeIcon                    | lucide-react.suffixed   |
