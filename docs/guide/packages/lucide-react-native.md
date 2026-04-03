# 适用于 React Native 的 Lucide

适用于 Lucide 图标的 React Native 组件，可在 iOS 和 Android 平台上无缝工作。基于 react-native-svg 构建，每个图标都渲染为原生 SVG 组件，在移动设备上提供一致的视觉外观和性能。

**您可以实现的功能：**
- 将图标用作具有平台一致渲染效果的 React Native 组件
- 使用可缩放矢量图标构建跨平台移动应用
- 创建适应不同屏幕密度的响应式界面
- 与 React Native 的样式系统和动画库集成
- 在 iOS 和 Android 平台上保持一致的图标外观

## 安装

首先，确保您已安装 `react-native-svg`（版本介于 12 到 15 之间）。然后，安装该包：

::: code-group

```sh [pnpm]
pnpm add lucide-react-native
```

```sh [yarn]
yarn add lucide-react-native
```

```sh [npm]
npm install lucide-react-native
```

```sh [bun]
bun add lucide-react-native
```

:::

## 如何使用

每个图标都可以作为 React 组件导入。

### 示例

可以传递额外的 props 来调整图标：

```jsx
import { Camera } from 'lucide-react-native';

// 用法
const App = () => {
  return <Camera color="red" size={48} />;
};

export default App;
```

## 属性

| 名称                  | 类型      | 默认值       |
| --------------------- | --------- | ------------ |
| `size`                | *number*  | 24           |
| `color`               | *string*  | currentColor |
| `strokeWidth`         | *number*  | 2            |
| `absoluteStrokeWidth` | *boolean* | false        |

### 应用属性

要自定义图标的外观，您可以直接将自定义属性作为 props 传递给组件。该组件接受所有 SVG 属性作为 props，从而允许灵活地设置 SVG 元素的样式。

```jsx
// 用法
const App = () => {
  return <Camera fill="red" />;
};
```

## 使用 Lucide Lab 或自定义图标

[Lucide Lab](https://github.com/lucide-icons/lucide-lab) 是不属于 Lucide 主库的图标集合。

可以通过使用 `Icon` 组件来使用它们。
所有类似于常规 Lucide 图标的 props 都可以传递以调整图标外观。

### 使用 `Icon` 组件

这将基于传递的 iconNode 创建单个图标并渲染一个 Lucide 图标组件。

```jsx
import { Icon } from 'lucide-react-native';
import { coconut } from '@lucide/lab';

const App = () => (
  <Icon iconNode={coconut} />
);
```

## 一个通用图标组件

可以创建一个通用图标组件来加载图标，但不推荐这样做。

::: warning
下面的示例导入了所有 ES 模块，因此使用时要小心。导入所有图标将显著增加应用程序的构建大小，对其性能产生负面影响。在使用 `Webpack`、`Rollup` 或 `Vite` 等打包器时，尤其要牢记这一点。
:::

### 图标组件示例

```tsx
import * as icons from 'lucide-react-native/icons';

interface IconProps {
  name: keyof typeof icons;
  color?: string;
  size?: number;
}

const Icon = ({ name, color, size }: IconProps) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
```

#### 使用图标组件

```tsx
import Icon from './Icon';

const App = () => {
  return <Icon name="House" />;
};

export default App;
```
