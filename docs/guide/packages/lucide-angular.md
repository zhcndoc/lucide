# 适用于 Angular 的 Lucide

::: warning
此文档适用于我们的 Angular 遗留包。

对于我们现代的、优先独立组件的实现，请参阅 [`@lucide/angular`](./angular)。
:::

用于 Lucide 图标的 Angular 组件和服务，集成到 Angular 的依赖注入和组件系统中。提供传统的基于模块的方法和现代的独立组件方法，以在 Angular 应用程序中实现最大的灵活性。

**您可以实现的功能：**
- 将图标用作具有完整依赖注入支持的 Angular 组件
- 通过 Angular 服务和提供者全局配置图标
- 从多个组件选择器中进行选择 (lucide-angular, lucide-icon, i-lucide, span-lucide)
- 与 Angular 的反应式表单和数据绑定集成
- 构建具有树摇图标包和懒加载支持的可扩展应用程序

## 安装

::: code-group

```sh [pnpm]
pnpm add lucide-angular
```

```sh [yarn]
yarn add lucide-angular
```

```sh [npm]
npm install lucide-angular
```

```sh [bun]
bun add lucide-angular
```

:::

## 如何使用

### 步骤 1：导入 `LucideAngularModule`

在您希望使用 Lucide 图标的任何 Angular 模块中，您必须导入 `LucideAngularModule`，并挑选您希望使用的任何图标：

```js
import { LucideAngularModule, File, House, Menu, UserCheck } from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({File, House, Menu, UserCheck})
  ]
})
export class AppModule { }
```

或使用独立版本：

```js
import { Component } from '@angular/core';
import { LucideAngularModule, FileIcon } from 'lucide-angular';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [LucideAngularModule]
})
export class AppComponent {
  readonly FileIcon = FileIcon;
}
```
### 步骤 2：在模板中使用图标

在您的模板中，您现在可以使用以下组件标签之一来插入图标：

```html
<lucide-angular name="file" class="my-icon"></lucide-angular>
<lucide-icon name="house" class="my-icon"></lucide-icon>
<i-lucide name="menu" class="my-icon"></i-lucide>
<span-lucide name="user-check" class="my-icon"></span-lucide>
```
对于独立组件
```html
<lucide-angular [img]="FileIcon" class="my-icon"></lucide-angular>
<lucide-icon [img]="FileIcon" class="my-icon"></lucide-icon>
<i-lucide [img]="FileIcon" class="my-icon"></i-lucide>
<span-lucide [img]="FileIcon" class="my-icon"></span-lucide>
```

### 属性

您可以传递额外的属性来调整图标外观。

| 名称                  | 类型      | 默认值      |
| --------------------- | --------- | ------------ |
| `size`                | *number*  | 24           |
| `color`               | *string*  | currentColor |
| `strokeWidth`         | *number*  | 2            |
| `absoluteStrokeWidth` | *boolean* | false        |

```html
<i-lucide name="house" [size]="48" color="red" [strokeWidth]="1"></i-lucide>
```

### 全局配置

您可以在根组件中注入 `LucideIconConfig` 服务，以全局配置上述定义的默认属性值。

### 使用自定义 CSS 类进行样式设置

任何额外的 HTML 属性都会被忽略，但 `class` 属性会传递给内部 SVG 图像元素，可用于对其进行样式设置：

```css
svg.my-icon {
    width: 12px;
    height: 12px;
    stroke-width: 3;
}
```

## 注入多个图标提供者

您可以使用 `LUCIDE_ICONS` 注入令牌提供额外的图标，该令牌接受接口 `LucideIconsProviderInterface` 的多个提供者，并提供了实用类 `LucideIconsProvider` 以便于使用：

```js
import { LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular';
import { MyIcon } from './icons/my-icon';

const myIcons = {MyIcon};

@NgModule({
  providers: [
    {provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(myIcons)},
  ]
})
export class AppModule { }
```

要添加自定义图标，您首先需要将它们转换为 [svgson 格式](https://github.com/elrumordelaluz/svgson)。

## 加载所有图标

::: danger
如有必要，您也可以选择使用以下格式导入所有图标，但请注意这将显著增加您的应用程序构建大小。
:::

```js
import { icons } from 'lucide-angular';

...

LucideAngularModule.pick(icons)
```

## 使用 Lucide Lab 或自定义图标

[Lucide Lab](https://github.com/lucide-icons/lucide-lab) 是不属于 Lucide 主库的图标集合。
它们的使用方式与官方图标相同。

```js
import { LucideAngularModule } from 'lucide-angular';
import { coconut } from '@lucide/lab';

@NgModule({
  imports: [
    LucideAngularModule.pick({ coconut })
  ]
})
export class AppModule { }
```

## 无障碍性

默认情况下，我们使用 `aria-hidden="true"` 向屏幕阅读器隐藏图标。

您可以使用 aria-labels 添加无障碍属性。

```html
<lucide-icon name="check" aria-label="任务已完成"></lucide-icon>
```

有关无障碍性的最佳实践，请参阅我们的 [无障碍性指南](../accessibility.md)。
