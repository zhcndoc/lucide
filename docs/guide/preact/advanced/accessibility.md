---
title: 无障碍性 - Preact
description: 在 Preact 应用中实现无障碍图标的最佳实践。
---

<script setup>
import OverviewLink from '~/.vitepress/theme/components/base/OverviewLink.vue'
</script>

# 无障碍性

Lucide 图标默认带有 `aria-hidden="true"`。在几乎所有情况下，这正是你想要的。

## 图标应该具有无障碍性吗？

大多数时候，图标纯粹用于装饰或视觉强化。将装饰性图标暴露给辅助技术可能会为屏幕阅读器用户制造不必要的噪音。

关于这方面的更广泛解释，以及如何在应用中无障碍地使用图标的其他最佳实践，请参阅我们关于无障碍性的详细指南：

<OverviewLink href="/guide/accessibility" title="无障碍图标" desc="在应用中实现无障碍图标的最佳实践。"/>

只有当图标**本身传达基本含义**时，才应使其具有无障碍性。下面的部分解释了如何在 Preact 中做到这一点。

## 使图标具有无障碍性

要将图标暴露给辅助技术，请通过传递 `title` 元素作为子元素或将 `aria-label` 属性传递给图标组件来提供无障碍名称。

这会移除 `aria-hidden` 属性并使图标对屏幕阅读器可见。

```tsx
<House>
  <title>This is my house</title>
</House>

// 或

<House aria-label="This is my house" />
```

选择一个能清晰描述图标含义或其在你应用上下文中所代表操作的标签。

## 无障碍图标按钮

当图标在按钮内部使用时，无障碍标签通常应应用于按钮本身，而不是图标。

```tsx
<button aria-label="Go to home">
  <House />
</button>
```

这确保了辅助技术描述的是交互元素，而不是其内部的装饰性图形。
