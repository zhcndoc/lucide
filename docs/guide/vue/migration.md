# 从 v0 迁移

查看 v1 中的变更内容以及如何从适用于 Vue 的 Lucide 的 v0 迁移到 v1。有关 v1 的所有详细信息，请参阅 [Lucide V1](../version-1.md)

## 从 `lucide-vue-next` 到 `@lucide/vue`

Vue 的 Lucide 包在 v1 中已移至 `@lucide/vue`。

主要是将 `lucide-vue-next` 查找并替换为 `@lucide/vue`。API 相同，因此不需要其他更改。

## 移除的品牌图标

品牌图标在 v1 中已被移除。如果您使用了以下任何图标，则需要将其替换为自定义 SVG 或替代图标：

- Chromium
- Codepen
- Codesandbox
- Dribbble
- Facebook
- Figma
- Framer
- Github
- Gitlab
- Instagram
- LinkedIn
- Pocket
- RailSymbol（基于英国铁路标志）
- Slack

我们建议使用各品牌提供的官方 SVG 图标，大多数可以在其网站或品牌指南中找到。或者，您可以使用 [Simple Icons](https://simpleicons.org/) 中的图标，该网站提供了大量的品牌图标集合，同时也提供了指向官方品牌指南和 SVG 图标的链接。
