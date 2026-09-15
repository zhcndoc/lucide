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
- `square-parking.svg` -> `square-parking.json`

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

## 别名

某些图标可以包含可选的 `aliases` 字段，用于表示其他名称。

只有当图标从不符合规范的名称重命名而来时，才添加别名。

## 验证

提交元数据更改前，请验证图标 JSON 文件：

```sh
pnpm run lint:json:icons
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
- `pnpm run lint:json:icons` 已通过。
