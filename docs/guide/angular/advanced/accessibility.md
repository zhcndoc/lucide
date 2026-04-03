---
title: 无障碍 - Angular
description: 在 Angular 应用程序中使用无障碍图标的最佳实践。
---

<script setup>
import OverviewLink from '~/.vitepress/theme/components/base/OverviewLink.vue'
</script>

# 无障碍

Lucide 图标默认带有 `aria-hidden="true"`。在几乎所有情况下，这正是你想要的。

## 图标应该具备无障碍性吗？

大多数时候，图标纯粹用于装饰或视觉强化。将装饰性图标暴露给辅助技术会给屏幕阅读器用户带来不必要的噪音。

关于这方面的更广泛解释，以及如何在应用程序中以无障碍方式使用图标的其他最佳实践，请参阅我们关于无障碍性的详细指南：

<OverviewLink href="/guide/accessibility" title="无障碍图标" desc="在应用程序中使用无障碍图标的最佳实践。"/>

只有当图标**本身传达基本含义**时，才应使其具备无障碍性。下面的部分解释了如何在 Angular 中做到这一点。

## 使图标具备无障碍性

要将图标暴露给辅助技术，请通过绑定图标组件的 `title` 输入来提供一个无障碍名称。

这将移除 `aria-hidden` 属性并使图标对屏幕阅读器可见。

```angular-html
<svg lucideHouse title="这是我的房子" />
```

选择一个能清楚描述图标含义或其在你应用程序上下文中所代表操作的标签。

## 无障碍图标按钮

当图标在按钮内部使用时，无障碍标签通常应应用于按钮本身，而不是图标。

```angular-html
<button aria-label="前往首页">
  <svg lucideHouse></svg>
</button>
```

这确保了辅助技术描述的是交互元素，而不是其内部的装饰性图形。
