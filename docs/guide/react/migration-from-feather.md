# 迁移指南：react-feather → lucide-react

`react-feather` 与 `lucide-react` 相似，该包灵感来源于 `react-feather`。API 几乎相同，因此迁移很简单。

## 1. 安装新包

```sh
npm install lucide-react
npm uninstall react-feather
```

## 2. 更新导入

将所有 `react-feather` 导入替换为 `lucide-react`：

```diff
- import { Home, User } from 'react-feather'
+ import { Home, User } from 'lucide-react'
```

你可以在整个代码库中使用查找和替换来完成此操作：

- 查找：`from 'react-feather'`
- 替换：`from 'lucide-react'`

## 3. 重命名的图标

四个图标已被重命名。更新这些图标的任何用法：

| react-feather | lucide-react |
| ------------- | ------------ |
| `GitHub`      | `Github`     |
| `Grid`        | `LayoutGrid` |
| `Table`       | `Table2`     |
| `Tool`        | `Wrench`     |

### 示例

```diff
- import { GitHub, Grid, Table, Tool } from 'react-feather'
+ import { Github, LayoutGrid, Table2, Wrench } from 'lucide-react'

- <GitHub />
+ <Github />

- <Grid />
+ <LayoutGrid />

- <Table />
+ <Table2 />

- <Tool />
+ <Wrench />
```

## 4. 所有其他图标

所有剩余图标保持相同的名称，并可作为直接替代品使用。无需对 props 或用法进行其他更改。
