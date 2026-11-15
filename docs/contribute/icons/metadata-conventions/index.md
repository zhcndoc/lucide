---
description: 了解如何为 Lucide 图标编写清晰且一致的元数据。
---

<script setup>
import OverviewLink from '../../../.vitepress/theme/components/base/OverviewLink.vue';
import OverviewLinkGrid from '../../../.vitepress/theme/components/base/OverviewLinkGrid.vue';
</script>

# 元数据规范

每个 Lucide 图标都有对应的 JSON 元数据文件。元数据用于标注贡献者、对图标进行分组、改善搜索，并说明图标的适用场景。

添加新图标或审查现有元数据时，请使用本指南。

## 元数据文件位置

每个图标的元数据文件必须与其 SVG 文件一起存放在 `icons` 目录中。

JSON 文件必须使用与 SVG 文件相同的基本名称：

- `home.svg` -> `home.json`
- `arrow-up.svg` -> `arrow-up.json`
- `square-letter-p.svg` -> `square-letter-p.json`

所有图标元数据文件都必须通过 `icon.schema.json` 的验证。

## 必填字段

每个图标元数据文件都必须包含：

- `$schema`
- `contributors`
- `use-cases`
- `tags`
- `categories`

最小元数据文件如下所示：

```json
{
  "$schema": "../icon.schema.json",
  "contributors": ["github-username", "another-github-username"],
  "use-cases": ["Representing example items in an interface"],
  "tags": ["foo", "bar"],
  "categories": ["devices"]
}
```

## 贡献者

`contributors` 字段列出创建图标或对图标进行实质性修改的人员的 GitHub 用户名。

### 贡献者规则

1. 如果你基于现有图标创建新图标，请添加所有基础图标的贡献者。
2. 当某人对图标设计进行了重大修改时，添加其用户名。
3. 不要因为较小的审查意见、仅涉及元数据的编辑或无关讨论而添加人员。

## 使用场景

`use-cases` 字段说明某人在界面中何时以及为何使用该图标。

使用场景应为简短短语，而不是完整句子。以 `-ing` 动词开头，例如：

- 表示 [概念]
- 指示 [状态]
- 标记 [项目]
- 显示 [信息]
- 切换 [设置]

### 使用场景规则

- 每个使用场景只围绕一个想法
- 保持条目简洁且具体
- 从界面的角度进行描述
- 描述实际用法，而不是图标名称或外观
- 在有助于明确含义时添加上下文
- 不要以标点符号结尾
- 不要添加 Markdown 或表情符号
- 不要添加实现细节或拉取请求引用

<OverviewLinkGrid>
  <OverviewLink href="./use-case-guide.md" title="使用场景指南" desc="了解编写使用场景的最佳实践"/>
</OverviewLinkGrid>

## 标签

`tags` 字段是该图标的搜索词列表。

标签应描述概念、同义词、相关术语和常见上下文。

添加新标签前，请检查现有标签。这有助于保持搜索一致并避免重复。

### 标签规则

- 使用小写标签。
- 尽可能优先使用单个单词。
- 当多词标签更清晰时可以使用，例如 `magnifying glass`。
- 不要将图标名称作为标签。
- 不要添加 `icon` 等通用标签。
- 不要仅为了扩大搜索范围而添加不相关的概念。

例如，`mail-search` 可以使用 `email`、`message`、`letter`、`find` 和 `filter` 等标签，但不能使用 `mail`、`search` 或 `mail search`。

<OverviewLinkGrid>
  <OverviewLink href="./tag-guide.md" title="标签指南" desc="了解编写标签的最佳实践"/>
</OverviewLinkGrid>

## 分类

`categories` 字段根据广泛用途对图标进行分组。

分类必须来自 `icon.schema.json` 中的允许分类列表。

根据图标所表示的内容以及人们使用图标的场景选择分类。请先检查相似图标。

### 分类规则

- 仅使用 `icon.schema.json` 允许的分类。
- 使用小写分类名称。
- 不要在图标元数据中创建新分类。
- 仅选择相关分类。

## 变体和相关图标

相关图标应具有相关元数据，但不要盲目复制使用场景。

请针对具体变体编写元数据：

- `battery-low` -> 表示电池电量较低
- `battery-full` -> 表示电池电量已满
- `square-arrow-right-enter` -> 登录、进入或加入场景
- `square-arrow-right-exit` -> 登出、退出或导出场景

当一个请求涉及多个图标时，只将每个使用场景分配给它所描述的图标。不要将元数据复制到它未描述的图标上。

## 重用元数据：`$extends:` 和 `$group:`

变体图标不必重复与其他图标相同的元数据。构建时会解析两个内联标记，并在原位置替换为对应的值。

`$extends:<icon-name>` 表示“基于什么”。它会引入变体所基于图标中已解析的 `tags`、`categories` 或 `contributors`。

`$group:<group-name>` 表示“执行什么操作”。它会引入 `groups/<group-name>.json` 中的标签。这些标签是可复用的小集合，用于描述图标变体的后缀（`plus`、`minus`、`check`、`off` 等）；该标记只能用于 `tags`。

`file-minus` 是一个文件图标，其 `-minus` 变体表示“移除”：

```json
{
  "tags": ["$extends:file", "$group:minus", "erase"],
  "categories": ["$extends:file"]
}
```

解析后：

```json
{
  "tags": ["document", "remove", "delete", "erase"],
  "categories": ["files"]
}
```

`$extends:` 只用于**基础图标**，也就是说明这个图标本身是什么。不要扩展 `plus`、`minus`、`x` 或 `check` 等修饰图标：这些图标的标签描述的是它们自身的图形（例如 `minus` 带有 `divider`、`hr`、`markdown` 等标签），用于文件或闹钟就不合适。此时应使用变体对应的分组（如 `$group:minus`），其中的标签描述的是变体的含义，而不是图形本身。

条目顺序应为：基础图标、分组、图标自身的标签。不要重复标记已经提供的值，否则 `pnpm checkIcons` 会失败。

## 别名

某些图标可以包含可选的 `aliases` 字段，用于表示其他名称。

只有当图标从不符合规范的名称重命名而来时，才添加别名。

## 验证

提交元数据更改前，请验证图标 JSON 文件：

```sh
pnpm run lint:json:icons
```

`$extends:`、`$group:` 标记及分组文件也会单独检查：

```sh
pnpm checkIcons
```

你也可以使用 Prettier 格式化已更改的文件：

```sh
pnpm exec prettier "icons/*.json" --check
```

## 检查清单

创建拉取请求前，请确认：

- JSON 文件名与 SVG 文件名一致。
- 文件包含所有必填字段。
- 贡献者是 GitHub 用户名。
- 使用场景描述真实的界面用法。
- 标签为小写，并且有助于搜索。
- 分类符合 `icon.schema.json` 的要求。
- 元数据针对具体图标及其变体。
- 重用元数据时，基础图标使用 `$extends:`，修饰含义使用 `$group:`，且不重复已有值。
- `pnpm run lint:json:icons` 和 `pnpm checkIcons` 均已通过。
