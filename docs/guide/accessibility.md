---
title: 无障碍性
description: 了解如何使您的图标对所有用户（包括残障人士）都具备无障碍性。
---

# 深入理解无障碍性

图标是不使用文字即可表达含义的图片。它们非常有用，因为可以快速提供信息。

然而，并非所有人都能轻松理解它们。在使用图标时，非常重要的是要考虑以下无障碍性方面。

::: info
默认情况下，我们使用 `aria-hidden="true"` 向屏幕阅读器隐藏图标。您可以遵循以下指南自行使它们具备无障碍性。
:::

## 提供可见标签

图标是改善感知能力的有用工具，但它们不能替代文本。

在大多数情况下，最好也提供图标功能的文本表示。

<!--@include: ../../docs/images/a11y/visible-labels.svg -->

## 对比度

确保图标与其背景之间有足够的对比度，以便低视力或色觉缺陷人群可见。

我们建议遵循 [WCAG 2.1 SC 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)。

<!--@include: ../../docs/images/a11y/contrast.svg -->

## 颜色的使用

避免仅依靠颜色在图标中传达含义，因为某些用户可能有色盲。相反，请使用形状、阴影或文本等附加视觉线索。

<!--@include: ../../docs/images/a11y/use-of-color.svg -->

## 交互性

确保交互式图标可以通过键盘导航访问，并在激活时提供清晰的反馈。

<!--@include: ../../docs/images/a11y/interactivity.svg -->

在大多数情况下，只需将它们包裹在图标按钮中即可轻松完成。

## 最小目标尺寸

小目标可能难以点击或触摸，如果您的图标是可交互的，我们建议其最小目标尺寸应为 44×44 像素。

<!--@include: ../../docs/images/a11y/target-size.svg -->

实际上，这并不一定意味着图标本身应该这么大，只是其交互包装元素应该这么大。

## 意义明确

图标应以普遍可理解的方式代表概念或操作。避免使用可能使某些用户困惑的抽象、模糊或特定文化的符号。

<!--@include: ../../docs/images/a11y/meaningfulness.svg -->

## 一致性

在整个界面中保持图标设计和用法的一致性，以帮助用户更容易地学习和理解它们的含义。

<!--@include: ../../docs/images/a11y/consistency.svg -->

## 文本替代

您可能需要为图标提供文本标签或替代文本描述，特别是对于视障人士使用的屏幕阅读器。

但是：描述应仅提供给非纯装饰性的独立图标，因为为非功能性元素提供无障碍名称只会在使用屏幕阅读器时增加混乱。

### 关于独立图标

图标通常极不可能在没有语义化包装元素的情况下独立存在。在大多数情况下，它们将是徽章、按钮（包括图标按钮）、导航项或其他交互式 UI 元素的一部分。

::: warning
如果您的某些图标是独立的，并且它们具有非装饰性功能，请确保为它们提供适当的无障碍标签。
:::

<!--@include: ../../docs/images/a11y/alttext-standalone.svg -->

一般来说，尽量避免使用没有交互性的功能性图标，我们建议：

1) 要么在它们旁边添加可见描述，或者
2) 将它们放在徽章、标签或按钮上，并至少为它们添加工具提示。

在任何此类情况下，最好仅为这些交互式元素（徽章、按钮、导航项等）提供无障碍名称，而*不是*图标本身。

### 关于按钮

不要在按钮上使用的图标提供无障碍标签，因为此标签将被屏幕阅读器读出，导致文本无意义。

<!--@include: ../../docs/images/a11y/alttext-buttons.svg -->


::: details 代码示例

```tsx
// 不要这样做
<button>
  <Plus aria-label="加号图标"/>
  添加文档
</button>

// 这样做，保留原样即可
<button>
  <Plus/>
  添加文档
</button>
```

:::

### 关于图标按钮

图标按钮是指除了图标本身之外不包含任何可见文本的按钮（例如对话框的关闭按钮）。

如前所述，您应该在图标按钮本身上提供无障碍标签，而不是包含的图标。

<!--@include: ../../docs/images/a11y/alttext-iconbuttons.svg -->

::: details 代码示例

```tsx
// 不要这样做
<button class="btn-icon">
  <House/>
</button>

    <House aria-label="首页图标"/>
<button class="btn-icon">
  <House aria-label="首页图标"/>
</button>

    <House aria-label="首页图标"/>
<button aria-label="返回首页" class="btn-icon">
  <House/>
</button>
  <button aria-label="返回首页" class="btn-icon">
// 改为这样做
<button class="btn-icon">
  <House/>
  <span class="visually-hidden">返回首页</span>
</button>
```
    <span class="visually-hidden">返回首页</span>
:::

## 关于 `aria-label` 的说明

虽然您可以通过 `aria-label` 属性为元素提供无障碍标签，但我们通常建议避免这样做，而是建议您尽可能使用所选 CSS 框架的“视觉隐藏”实用程序。您可以 [阅读更多关于为什么 `aria-label` 可能不是最佳解决方案的信息](https://gomakethings.com/revisting-aria-label-versus-a-visually-hidden-class/)。

### 示例 - Radix UI

使用 [Radix UI 内置的无障碍图标实用程序组件](https://www.radix-ui.com/primitives/docs/utilities/accessible-icon)。

```tsx
import { ArrowRightIcon } from 'lucide-react';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';

<AccessibleIcon label="下一个项目">
  <ArrowRightIcon />
</AccessibleIcon>
```

### 示例 - Bootstrap

```html

<div>
  <i data-lucide="phone" aria-hidden="true"></i>
  <span class="visually-hidden">电话号码</span>
</div>
```

### 示例 - Tailwind CSS

```html

<div>
  <i data-lucide="phone" aria-hidden="true"></i>
  <span class="sr-only">电话号码</span>
</div>
```

如果您不确定，可以考虑了解更多关于 [如何隐藏内容。](https://www.a11yproject.com/posts/how-to-hide-content/)

## 更多资源

我们还建议查看以下关于无障碍性的资源：

- [Web 内容无障碍指南 (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)
- [Web 无障碍倡议 (WAI)](https://www.w3.org/WAI/)
- [在 web.dev 上学习无障碍性](https://web.dev/learn/accessibility)
- [包容性组件](https://inclusive-components.design/)
- [A11yTalks](https://www.a11ytalks.com/)
- [A11y 自动化跟踪器](https://a11y-automation.dev/)
- [A11Y 项目](https://www.a11yproject.com/)

<style>
svg.a11y-example {
  max-width: calc(100% + 48px);
  margin: 0 -24px;
}
@media (min-width: 480px) {
  svg.a11y-example {
    margin: 0;
    max-width: 100%;
  }
}
</style>
