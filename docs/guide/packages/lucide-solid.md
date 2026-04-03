# 适用于 Solid 的 Lucide

利用 Solid 细粒度响应式系统的 Lucide 图标 SolidJS 组件。每个图标都是一个响应式 Solid 组件，渲染为内联 SVG，通过 Solid 的编译时优化和响应式原语提供卓越的性能。

**你可以实现的功能：**
- 将图标用作具有细粒度响应性的 SolidJS 组件
- 使用 Solid 的响应式系统创建高性能界面
- 构建响应信号和存储的动态图标组件
- 与 Solid 的 JSX 和组件模式无缝集成
- 通过直接导入图标和最小化运行时开销来优化性能

## 安装

::: code-group

```sh [pnpm]
pnpm add lucide-solid
```

```sh [yarn]
yarn add lucide-solid
```

```sh [npm]
npm install lucide-solid
```

```sh [bun]
bun add lucide-solid
```

:::

## 如何使用

Lucide 是使用 ES 模块构建的，因此它是完全可树摇的（tree-shakable）。

每个图标都可以作为 Solid 组件导入，它会渲染一个内联 SVG 元素。这样，只有导入到项目中的图标才会包含在最终打包文件中。其余的图标会被树摇掉。

### 示例

可以传递额外的 props 来调整图标：

```jsx
import { Camera } from 'lucide-solid';

// 用法
const App = () => {
  return <Camera color="red" size={48} />;
};

export default App;
```

可以通过直接从 `lucide-solid/icons` 目录导入图标来解决 Vite 开发服务器的加载/性能问题：

```jsx
import Camera from 'lucide-solid/icons/camera';

// 用法
const App = () => {
  return <Camera color="red" size={48} />;
};

export default App;
```

## 属性

| 名称                  | 类型      | 默认值      |
| --------------------- | --------- | ------------ |
| `size`                | *number*  | 24           |
| `color`               | *string*  | currentColor |
| `strokeWidth`         | *number*  | 2            |
| `absoluteStrokeWidth` | *boolean* | false        |

### 应用属性

要自定义图标的外观，你可以将自定义属性作为 props 直接传递给组件。该组件接受所有 SVG 属性作为 props，从而允许灵活地样式化 SVG 元素。请参阅 [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) 上的 SVG 表现属性列表。

```jsx
// 用法
const App = () => {
  return <Camera fill="red" stroke-linejoin="bevel" />;
};
```

## 使用 Lucide Lab 或自定义图标

[Lucide Lab](https://github.com/lucide-icons/lucide-lab) 是不属于 Lucide 主库的图标集合。

可以通过使用 `Icon` 组件来使用它们。
所有像常规 Lucide 图标一样的 props 都可以传递过来调整图标外观。

### 使用 `Icon` 组件

这会根据传递的 iconNode 创建单个图标并渲染一个 Lucide 图标组件。

```jsx
import { Icon } from 'lucide-solid';
import { sausage } from '@lucide/lab';

const App = () => (
  <Icon iconNode={sausage} color="red"/>
);
```

## 一个通用图标组件

可以创建一个通用图标组件来加载图标。但不推荐这样做。

::: danger
下面的示例导入了所有 ES 模块，因此使用时要小心。导入所有图标将显著增加应用程序的构建大小，对其性能产生负面影响。在使用 `Webpack`、`Rollup` 或 `Vite` 等打包工具时，尤其要牢记这一点。
:::

### 图标组件示例

```tsx
import { icons, type LucideProps } from 'lucide-solid';
import { splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

interface IconProps extends LucideProps {
  name: keyof typeof icons;
}

const Icon = (props: IconProps) => {
  const [local, others] = splitProps(props, ["name"]);

  return <Dynamic component={icons[local.name]} {...others} />
};

export default Icon;
```

#### 使用图标组件

```tsx
import Icon from './Icon';

const App = () => {
  return <Icon name="home" />;
};

export default App;
```

## 无障碍性

默认情况下，我们使用 `aria-hidden="true"` 向屏幕阅读器隐藏图标。

你可以使用 aria-labels 添加无障碍属性。

```jsx
import { Check } from 'lucide-solid';

const App = () => {
  return <Check aria-label="任务已完成" />;
};
```

有关无障碍性的最佳实践，请参阅我们的 [无障碍指南](../accessibility.md)。
