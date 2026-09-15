---
title: 无障碍
description: 了解如何让你的图标对所有用户都更易于访问，包括残障用户
---

<script setup>
import {
  menu,
  pawPrint,
  shirt,
  umbrella,
  userRoundCog,
} from '~/.vitepress/data/iconNodes';
import LucideIcon from '~/.vitepress/theme/components/base/LucideIcon.vue';
</script>

# 深入了解无障碍

图标是不使用文字来传达含义的图像

它们可以帮助人们浏览界面、识别操作并快速了解状态

并不是所有人都能轻松理解图标。在向界面中添加图标时，请遵循以下无障碍规则

::: tip
默认情况下，Lucide 图标会通过 `aria-hidden="true"` 对屏幕阅读器隐藏

当图标承载含义或充当控件时，请添加无障碍标签
:::

## 提供可见标签

图标可以提升浏览效率，但不能替代文本

相比单独使用图标，文本能更可靠地帮助人们理解操作和导航

:::: example
::: do <span aria-hidden="true">在此页面 <LucideIcon name="menu" :iconNode="menu" /></span>
为交互元素提供文字说明
:::
::: dont <LucideIcon name="menu" :iconNode="menu" />
不要仅依赖图标来传达元素的作用
:::
::::

## 提供足够的对比度

确保图标与背景之间具有足够的对比度。低对比度会让低视力用户或色觉障碍用户更难看清图标

当对比度要求适用时，请遵循 [WCAG 2.1 SC 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)

:::: example
::: do ../images/a11y/contrast_do.svg?raw=true
使用至少为 4.5:1 的对比度
:::
::: dont ../images/a11y/contrast_dont.svg?raw=true
不要使用低对比度
:::
::::

## 不要仅依赖颜色

使用形状、阴影或文本等非颜色线索来标记状态、状态信息和有效性。颜色可以辅助传达含义，但不能成为唯一线索

:::: example
::: do ../images/a11y/state_do.svg?raw=true
同时使用非颜色视觉线索标记状态
:::
::: dont ../images/a11y/state_dont.svg?raw=true
不要仅使用颜色标记状态
:::
::::

## 让交互式图标可聚焦

将交互式图标包装在语义化元素中。执行操作的图标需要支持键盘访问，并在激活时提供清晰的反馈

:::: example
::: do ../images/a11y/interactive_icons_do.svg?raw=true
将交互式图标包装在按钮等语义化元素中，使其可聚焦
:::
::: dont ../images/a11y/interactive_icons_dont.svg?raw=true
不要让交互式图标无法获得焦点
:::
::::

## 使用足够大的目标尺寸

为交互式图标控件使用足够大的目标尺寸。较小的目标可能难以点击或轻触

:::: example
::: do ../images/a11y/target_size_do.svg?raw=true
将目标尺寸保持在至少 44×44 像素
:::
::: dont ../images/a11y/target_size_dont.svg?raw=true
不要让目标尺寸小于 44×44 像素
:::
::::

图标本身不需要是 44×44 像素。交互式包装元素需要满足目标尺寸要求

## 尽可能选择通用符号

选择在你的使用场景中得到广泛认可的图标。避免使用只有少数用户群体才能理解的图标

:::: example
::: do <span aria-hidden="true"><LucideIcon name="shirt" :iconNode="shirt" /> 服装</span>
选择在你的使用场景中代表通用含义的图标
:::
::: dont <span aria-hidden="true"><LucideIcon name="umbrella" :iconNode="umbrella" /> 服装</span>
不要选择在你的使用场景中无法被普遍识别的图标
:::
::::

## 避免文化或语言捷径

选择与概念有清晰联系的图标。双关语、习语和特定文化的引用可能难以理解或翻译

:::: example
::: do <span aria-hidden="true"><LucideIcon name="user-round-cog" :iconNode="userRoundCog" /> 角色承担者</span>
选择与你想表达的概念有清晰联系的图标
:::
::: dont <span aria-hidden="true"><LucideIcon name="paw-print" :iconNode="pawPrint" /> 角色承担者</span>
不要基于双关语或其他文化或语言线索选择图标
:::
::::

## 为不同含义使用不同图标

为不同含义使用不同图标。对不相关的概念重复使用同一个图标，会让界面更难学习

:::: example
::: do ../images/a11y/distinct_use_case_do.svg?raw=true
为不同的用途或含义使用不同图标
:::
::: dont ../images/a11y/distinct_use_case_dont.svg?raw=true
不要为多个不同的用途或含义使用同一个图标，尤其是在同一上下文中
:::
::::

## 对相同含义使用相同图标

对相同含义使用相同图标。统一使用图标有助于人们在界面中识别熟悉的操作

:::: example
::: do ../images/a11y/same_use_case_do.svg?raw=true
对相同的用途或功能使用相同图标
:::
::: dont ../images/a11y/same_use_case_dont.svg?raw=true
不要为相同的用途或功能使用不同图标
:::
::::

## 对辅助技术隐藏装饰性图标

对屏幕阅读器隐藏装饰性图标。装饰性图标会重复附近的文本，或添加视觉样式，但不会增加含义

:::: example
::: do ../images/a11y/decorative_icons_do.svg?raw=true
不要为装饰性图标设置 `aria-label`
:::
::: dont ../images/a11y/decorative_icons_dont.svg?raw=true
不要为装饰性图标提供无障碍标签
:::
::::

## 谨慎标记独立的功能性图标

尽可能避免使用独立的功能性图标。如果图标在附近没有文本或交互式包装元素，却承载了含义，请为该图标提供无障碍标签

:::: example
::: do ../images/a11y/functional_icons_do.svg?raw=true
为功能性图标提供无障碍标签，但尽可能避免使用独立的功能性图标
:::
::: dont ../images/a11y/functional_icons_dont.svg?raw=true
不要为纯装饰性图标提供无障碍标签
:::
::::

在许多情况下，可以添加可见文本，将图标放入徽章或按钮中，或者改为在有意义的包装元素上添加工具提示

## 在图标按钮上标记按钮

为图标按钮提供无障碍名称。将名称放在按钮上，或放在按钮内的视觉隐藏文本中，而不是放在图标上

:::: example
::: do ../images/a11y/icon_button_do.svg?raw=true
为图标按钮本身提供无障碍标签
:::
::: dont ../images/a11y/icon_button_dont.svg?raw=true
不要为图标按钮中的图标提供无障碍标签
:::
::::

::: details 代码示例

```tsx
// Don't do this
<button className="btn-icon">
  <House />
</button>

// Don't do this either
<button className="btn-icon">
  <House aria-label="Home icon" />
</button>

// This works, but visually hidden text is usually more reliable
<button aria-label="Go to home" className="btn-icon">
  <House />
</button>

// Prefer this
<button className="btn-icon">
  <House />
  <span className="visually-hidden">Go to home</span>
</button>
```

:::

## 关于 `aria-label` 的说明

你可以使用 `aria-label` 提供无障碍标签，但视觉隐藏文本通常更可靠

阅读 [为什么 `aria-label` 可能不是最佳解决方案](https://gomakethings.com/revisting-aria-label-versus-a-visually-hidden-class/) 以了解更多背景信息

### Radix UI

使用 [Radix UI 内置的无障碍图标实用组件](https://www.radix-ui.com/primitives/docs/utilities/accessible-icon)

```tsx
import { ArrowRightIcon } from 'lucide-react';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';

<AccessibleIcon label="Next item">
  <ArrowRightIcon />
</AccessibleIcon>;
```

### Bootstrap

```html
<div>
  <i data-lucide="phone" aria-hidden="true"></i>
  <span class="visually-hidden">Phone number</span>
</div>
```

### Tailwind CSS

```html
<div>
  <i data-lucide="phone" aria-hidden="true"></i>
  <span class="sr-only">Phone number</span>
</div>
```

如果你不确定该使用哪种隐藏技术，请阅读[如何隐藏内容](https://www.a11yproject.com/posts/how-to-hide-content/)

## 更多资源

使用以下无障碍资源：

- [Web 内容无障碍指南（WCAG）2.1](https://www.w3.org/TR/WCAG21/)
- [Web 无障碍倡议（WAI）](https://www.w3.org/WAI/)
- [在 web.dev 上学习无障碍](https://web.dev/learn/accessibility)
- [Inclusive Components](https://inclusive-components.design/)
- [A11yTalks](https://www.a11ytalks.com/)
- [A11y automation tracker](https://a11y-automation.dev/)
- [The A11Y Project](https://www.a11yproject.com/)
