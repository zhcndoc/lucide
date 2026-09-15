---
description: 了解为 Lucide 图标编写用例的最佳实践
---

<script setup>
import { batteryLow, creditCard, crop, handshake, heading2, microchip, search, squareParking, triangleAlert, wifiOff } from '~/.vitepress/data/iconNodes';
import LucideIcon from '~/.vitepress/theme/components/base/LucideIcon.vue';
</script>

# 用例指南

本指南介绍如何为 Lucide 图标编写清晰的用例。

## 从界面的角度进行描述

描述界面向用户传达的信息。不要从贡献者的角度进行描述。

:::: example
::: do <LucideIcon name="wifi-off" :iconNode="wifiOff" /> 表示设备处于离线或无法访问状态
这描述了**图标在界面中所扮演的角色**。
:::
::: dont <LucideIcon name="wifi-off" :iconNode="wifiOff" /> 我需要一个用于离线设备页面的图标
这解释的是**贡献者的情况**，而不是图标的用途。
:::
::::

## 描述实际用途，而不是图标名称

用例应解释图标在上下文中的含义。不要重复图标名称，也不要只描述图形。

:::: example
::: do <LucideIcon name="microchip" :iconNode="microchip" /> 表示处理器、芯片或嵌入式硬件
这在**不重复名称的情况下**解释了 `microchip`。
:::
::: dont <LucideIcon name="microchip" :iconNode="microchip" /> 这是一个微芯片图标
这**重复了图标名称**，也没有解释图标会在哪里使用。
:::
::::

## 在有助于明确含义时添加上下文

有些图标的含义很广泛。在能让用例更清晰时添加上下文。

:::: example
::: do <LucideIcon name="heading-2" :iconNode="heading2" /> 在文本编辑器中应用二级标题
这句话同时解释了**操作和产品领域**。
:::
::: dont <LucideIcon name="heading-2" :iconNode="heading2" /> 应用标题
这不够有用，因为它**省略了级别和上下文**。
:::
::::

## 让每个用例聚焦

每个条目都应涵盖一个明确的想法。将不同含义拆分为单独的条目。

:::: example
::: do <LucideIcon name="square-parking" :iconNode="squareParking" /> 在地图上标记停车位置
这句话**简短、清晰，并聚焦于一个界面功能**。
:::
::: dont <LucideIcon name="square-parking" :iconNode="squareParking" /> 标记停车、交通、地图、汽车、车库和地点
这读起来像一个**标签列表**，并且**混合了多个想法**。
:::
::::

## 编写针对变体的用例

对于相关图标，描述每个变体的不同之处。

:::: example
::: do <LucideIcon name="battery-low" :iconNode="batteryLow" /> 表示电池电量较低
这针对 `battery-low`，并且**将其与其他电池图标区分开来**。
:::
::: dont <LucideIcon name="battery-low" :iconNode="batteryLow" /> 表示电池状态
这**过于笼统**，可能适用于**所有电池变体**。
:::
::::

## 避免引用拉取请求

拉取请求合并后，用例仍应具有合理的含义。

:::: example
::: do <LucideIcon name="handshake" :iconNode="handshake" /> 表示交易、协议或合作关系
这样既保留了**有用的含义**，又不依赖**外部上下文**。
:::
::: dont <LucideIcon name="handshake" :iconNode="handshake" /> 与上方 #1234 中的内容相同
这**依赖于一段讨论**，而读者**可能永远看不到这段讨论**。
:::
::::

## 保持条目简洁

用例通常应包含 4 到 12 个词。优先使用简短的短语，而不是冗长的解释。

:::: example
::: do <LucideIcon name="search" :iconNode="search" /> 按名称或内容搜索文件
这句话**足够简短**，便于浏览，也**足够具体**，容易理解。
:::
::: dont <LucideIcon name="search" :iconNode="search" /> 当用户想要搜索所有文件和文件夹以查找某些内容时，可以使用此图标
这句话**太长**，读起来像是**产品文案，而不是元数据**。
:::
::::

## 不要以标点符号结尾

用例是元数据短语，而不是完整句子。

:::: example
::: do <LucideIcon name="credit-card" :iconNode="creditCard" /> 确认付款成功
这符合图标元数据中使用的**短语风格**。
:::
::: dont <LucideIcon name="credit-card" :iconNode="creditCard" /> 确认付款成功。
句号添加了**不必要的标点**，并导致条目不一致。
:::
::::

## 避免使用 Markdown 和表情符号

仅使用纯文本。格式应放在文档中，而不是元数据值中。

:::: example
::: do <LucideIcon name="triangle-alert" :iconNode="triangleAlert" /> 警告用户某项操作具有破坏性
这适用于搜索、生成的页面以及其他使用元数据的地方。
:::
::: dont <LucideIcon name="triangle-alert" :iconNode="triangleAlert" /> <span>**警告**用户某项操作具有破坏性 ⚠️</span>
Markdown 和表情符号可能会**显示在生成的界面中**，使元数据**更难复用**。
:::
::::

## 避免实现细节

用例应描述含义，而不是 SVG 的制作方式。

:::: example
::: do <LucideIcon name="crop" :iconNode="crop" /> 表示已裁剪或修剪的内容
这解释了图标的**界面含义**。
:::
::: dont <LucideIcon name="crop" :iconNode="crop" /> 显示一个带有两处路径裁剪和经过调整的贝塞尔控制柄的矩形
这描述的是**构造细节**，无助于人们查找或理解图标。
:::
::::
