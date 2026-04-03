# 从 `lucide-angular` 迁移到 `@lucide/angular`

## 变更内容

`@lucide/angular` 从基于模块 + 单个组件的 API 迁移到更现代的 Angular 方法：

- 库定义了现代的基于 signal 的独立组件，不基于 zone.js 进行变更检测。
- 图标作为独立导入使用（每个图标一个组件）。
- 动态图标注册通过 `provideLucideIcons()` 完成，不使用 `NgModule`。
- 静态图标使用每个图标独立的组件以实现更好的树摇（tree-shaking）。
- 动态图标仍然使用单个动态组件（`svg[lucideIcon]`）。
- 全局默认值通过 `provideLucideConfig()` 配置。
- 品牌图标已被移除，见下一节。

---

## 步骤 1 – 更新依赖

移除 `lucide-angular`，并添加 `@lucide/angular`，参见：\
[入门指南 # 安装](/guide/angular/getting-started.md#installation)

---

## 步骤 2 – 将 `LucideAngularModule.pick(...)` 替换为 `provideLucideIcons(...)`

> 注意：
> - 来自 `lucide-angular` 的旧导入如 `AirVentIcon` / `AlarmClock` 应替换为新的每图标导出 `LucideAirVent` 和 `LucideAlarmClock`。
> - 如果您主要使用静态图标，可能根本**不需要**提供它们，请参考步骤 3。

### 之前

#### 基于 NgModule
```ts
import { BrowserModule, NgModule } from '@angular/core';
import { LucideAngularModule, AirVent, AlarmClock } from 'lucide-angular';

@NgModule({
  imports: [
    BrowserModule,
    LucideAngularModule.pick({ AirVent, AlarmClock }),
  ],
})
export class AppModule {}
```

#### 独立组件 (Standalone)

```ts
import { ApplicationConfig } from '@angular/core';
import { LucideAngularModule, AirVent, AlarmClock } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    // ...
    importProvidersFrom(LucideAngularModule.pick({ AirVent, AlarmClock })),
  ]
};
```

### 之后
```ts
import { ApplicationConfig } from '@angular/core';
import { provideLucideIcons, LucideAirVent, LucideAlarmClock } from '@lucide/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    // ...
    provideLucideIcons(
      LucideAirVent,
      LucideAlarmClock,
    ),
  ]
};
```

---

## 步骤 3 – 替换 `<lucide-angular>` / `<lucide-icon>` / `<i-lucide>` / `<span-lucide>`

旧版包通过单个组件渲染所有内容。所有这些选择器都必须迁移到 `<svg>` 用法。

### A. 按名称的静态图标

如果图标在构建时已知，只需使用静态导入：

#### 之前
```html
<lucide-angular name="circle-check"></lucide-angular>
```

#### 之后
```html
<svg lucideCircleCheck></svg>
```

### B. 带图标数据绑定的静态图标

#### 之前
```ts
import { CircleCheck } from 'lucide-angular';
```

```html
<lucide-icon [img]="CircleCheck"></lucide-icon>
```

#### 之后

```ts
import { LucideCircleCheck } from '@lucide/angular';
```

```html
<svg lucideCircleCheck></svg>
```

...并从 `@lucide/angular` 导入 `LucideCircleCheck`。

---

### C. 动态图标

如果图标在运行时变化，使用动态组件：

#### 之前
```html
<lucide-icon [name]="item.icon"></lucide-icon>
```

#### 之后
```html
<svg [lucideIcon]="item.icon"></svg>
```

---

## 步骤 4 – 将 `LucideIconConfig` 替换为 `provideLucideConfig()`

### 之前
```ts
import { inject } from '@angular/core';
import { LucideIconConfig } from 'lucide-angular';

inject(LucideIconConfig).size = 12;
```

### 之后
```ts
import { provideLucideConfig } from '@lucide/angular';

providers: [
  provideLucideConfig({ size: 12 }),
]
```

### 放置位置

- 应用范围：`AppModule.providers` 或 `bootstrapApplication(...providers)`
- 功能级别：功能模块 providers
- 组件级别（独立组件）：组件 `providers`

---

## 故障排除

### 图标未显示
如果使用每图标组件：
1. 确保已导入图标组件，如果使用每图标组件
2. 检查图标名称是否完全匹配（区分大小写）

如果使用动态组件：
1. 如果使用字符串名称，确保通过 `provideLucideIcons()` 提供了图标
2. 验证图标是从 `@lucide/angular` 导入的，而不是旧版包

### TypeScript 错误？
确保您是从 `@lucide/angular` 导入，而不是 `lucide-angular`。

### 图标渲染默认值错误
确保 `provideLucideConfig()` 在正确的级别使用。
---

## 已移除的品牌图标

品牌图标在 v1 中已被移除。如果您正在使用以下任何图标，您需要将它们替换为自定义 SVG 或替代图标：

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
- RailSymbol (基于英国铁路标志)
- Slack

我们建议使用相应品牌提供的官方 SVG 图标，大多数可以在它们的网站或品牌指南中找到。或者，您可以使用 [Simple Icons](https://simpleicons.org/) 中的图标，它提供了大量的品牌图标集合。同时也链接到官方品牌指南和 SVG 图标。

一个 [用于 Simple Icons 的 Angular 包](https://github.com/gridatek/semantic-icons/tree/main/libs/simple-icons) 也可用，支持独立组件。

---

## 简而言之
- `LucideAngularModule` ⇒ 静态：已移除；动态：`LucideIcon`
- `LucideAngularModule.pick(...)` ⇒ `provideLucideIcons(...)`
- `<lucide-angular name="foo-bar">` ⇒ `<svg lucideFooBar>`
- `<lucide-icon [name]="expr">` ⇒ `<svg [lucideIcon]="expr">`
- `<lucide-icon [img]="expr">` ⇒ `<svg [lucideIcon]="expr">`
- `LucideIconConfig` ⇒ `provideLucideConfig(...)`
- 将品牌图标用法替换为 [`simple-icons`](https://github.com/gridatek/semantic-icons/tree/main/libs/simple-icons)。
