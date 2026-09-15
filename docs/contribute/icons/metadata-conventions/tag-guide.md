---
description: 了解为 Lucide 图标编写标签的最佳实践
---

<script setup>
import { batteryLow, calendar, droplet, hospital, mail, mailSearch, search, type } from '~/.vitepress/data/iconNodes';
import LucideIcon from '~/.vitepress/theme/components/base/LucideIcon.vue';
</script>

# 标签指南

本指南介绍如何为 Lucide 图标编写有用的搜索标签。

标签可以帮助人们通过概念、同义词、上下文或常用措辞找到图标。

## 使用小写标签

标签应始终使用小写。

:::: example
::: do <LucideIcon name="mail" :iconNode="mail" /> 邮箱
小写标签**符合图标库中使用的样式**。
:::
::: dont <LucideIcon name="mail" :iconNode="mail" /> Email
大写标签会造成**元数据不一致**，却无法改善搜索效果。
:::
::::

## 优先使用简短标签

一个清晰的词语足够时，就使用一个词。只有短语更清晰时，才使用多词标签。

:::: example
::: do <LucideIcon name="search" :iconNode="search" /> 搜索
这**简短、常见且易于查找**。
:::
::: dont <LucideIcon name="search" :iconNode="search" /> 搜索文件和文件夹
这读起来像是一个**使用场景**，而不是标签。
:::
::::

## 必要时使用多词标签

有些概念只有用短语表达才清晰。但要保持短语简短。

:::: example
::: do <LucideIcon name="droplet" :iconNode="droplet" /> 血型
这个短语比单独使用其中任意一个词都**更清晰**。
:::
::: dont <LucideIcon name="droplet" :iconNode="droplet" /> 血型医疗标签
这将**多个搜索概念**组合成了一个很长的标签。
:::
::::

## 添加同义词和常用措辞

标签可以包含人们可能会搜索的词语，即使这些词不在图标名称中。

:::: example
::: do <LucideIcon name="mail" :iconNode="mail" /> 邮箱
这可以帮助用户使用**常见同义词**找到 `mail` 图标。
:::
::: dont <LucideIcon name="mail" :iconNode="mail" /> 电子邮政消息传递
这不太可能是用户搜索时使用的措辞，而且会**增加噪音**。
:::
::::

## 不要重复图标名称

图标名称本身已经可以搜索。标签应当增加其他查找方式。

:::: example
::: do <LucideIcon name="mail-search" :iconNode="mailSearch" /> 消息筛选
这为 `mail-search` 添加了一个**相关概念**，而没有重复名称。
:::
::: dont <LucideIcon name="mail-search" :iconNode="mailSearch" /> 邮箱搜索
这**重复了图标名称**，不会改善发现效果。
:::
::::

## 避免使用通用标签

标签应描述图标，而不是说明它是一个图标。

:::: example
::: do <LucideIcon name="calendar" :iconNode="calendar" /> 事件
这指向了用户可能会搜索的**具体概念**。
:::
::: dont <LucideIcon name="calendar" :iconNode="calendar" /> 图标
**每个条目都是图标**，因此这个标签无法帮助任何人找到正确的图标。
:::
::::

## 保持标签相关

不要只是为了让图标出现在更多搜索结果中，就添加不相关的词语。

:::: example
::: do <LucideIcon name="hospital" :iconNode="hospital" /> 急诊室
对于标记急诊室位置的图标来说，这个标签**相关**。
:::
::: dont <LucideIcon name="hospital" :iconNode="hospital" /> 医生护士药房
这些词可能是**相关概念**，但它们并不能全部描述同一个图标。
:::
::::

## 匹配具体变体

相关图标可以共享系列词语，但变体标签应描述它们之间的不同之处。

:::: example
::: do <LucideIcon name="battery-low" :iconNode="batteryLow" /> 电量耗尽
这可以将 `battery-low` 与**其他电池图标**区分开来。
:::
::: dont <LucideIcon name="battery-low" :iconNode="batteryLow" /> 已充电
这比起 `battery-low`，更适合描述 `battery-full`。
:::
::::

## 参考现有标签

添加新标签前，先检查相似图标。重复使用现有词语可以让搜索结果更符合预期。

:::: example
::: do <LucideIcon name="type" :iconNode="type" /> 排版
这与现有的文本格式图标相匹配，并让**相关图标**在搜索结果中归在一起。
:::
::: dont <LucideIcon name="type" :iconNode="type" /> 字体排版学
创造一个新词会让图标更难查找，也会降低与相关元数据的一致性。
:::
::::
