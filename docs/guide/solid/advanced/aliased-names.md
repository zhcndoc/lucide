---
title: 别名 - Solid
description: 了解 Solid 项目中 Lucide 图标可用的不同导入名称样式，以及如何选择最适合您需求的一种。
---

# 别名

某些图标有多个名称。这是因为我们有时会选择重命名它们，使其与其余图标集保持一致，或者原名不够通用。例如，`edit-2` 图标被重命名为 `pen`，以使名称更通用，因为它只是一个钢笔图标。

除了这些别名之外，Lucide 还包括带前缀和后缀的名称，以便在您的项目中使用。这是为了防止与其他库或您自己的代码发生导入名称冲突。

```tsx
// 这些都是同一个图标
import {
  House,
  HouseIcon,
  LucideHouse,
} from "lucide-solid";
```

### 在 IDE 中关闭自动完成

```json [.vscode/settings.json]
{
  "js/ts.preferences.autoImportFileExcludePatterns": [
    "lucide-solid",
  ]
}
```
