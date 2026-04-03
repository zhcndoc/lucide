---
title: 全局样式 - Preact
description: 学习如何使用 CSS 或 Lucide 上下文提供者在你的 Preact 应用中全局样式化所有 Lucide 图标。
---
<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/SandpackPreact.vue'
</script>

# 全局样式

调整图标可以通过使用 [颜色](../basics/color.md)、[大小](../basics/sizing.md) 和 [描边宽度](../basics/stroke-width.md) 来完成。
要全局样式化所有图标，你可以使用 CSS，或者使用上下文提供者。

我们推荐使用 CSS 进行全局样式化，因为这是实现此目的最直接的方式。
但是使用 CSS 会阻止你在单个图标上使用像 `size`、`color` 和 `strokeWidth` 这样的 props，因为 CSS 特异性会覆盖这些 props，若要在单个图标上使用这些 props，你需要使用 Lucide 上下文提供者。

## 上下文提供者

对于使用上下文提供者进行全局样式化，你可以使用由 `lucide-preact` 包提供的 `LucideProvider` 组件。

```tsx
import { LucideProvider, Home } from 'lucide-preact';

const App = () => (
  <LucideProvider
    color="red"
    size={48}
    strokeWidth={2}
  >
    <Home />
  </LucideProvider>
);
```

这会将 `color`、`size` 和 `strokeWidth` props 应用于作为 `LucideProvider` 子元素的所有图标。


## 使用 CSS 进行样式化
使用 CSS 可以轻松完成图标样式化。

每个图标都应用了一个名为 `lucide` 的类属性。这个类名可以在 CSS 文件中用于定位应用中所有正在使用的图标。

- 图标的 **颜色** 可以使用 [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) CSS 属性来更改。
- 图标的 **大小** 可以使用 [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) CSS 属性来更改。
- 图标的 **描边宽度** 可以使用 [`stroke-width`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width) CSS 属性来更改。

::: sandpack {editorHeight=400 editorWidthPercentage=60 dependencies="lucide-preact"}

```css icon.css [active]
.lucide {
  /* 修改这里！ */
  color: #ffadff;
  width: 48px;
  height: 48px;
  stroke-width: 1px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 6px;
}
```

```jsx App.js
import {
  CakeSlice,
  Candy,
  Apple,
  Cookie,
  Martini,
  IceCream2,
  Sandwich,
  Wine,
  Dessert,
} from "lucide-preact";
import { h } from "preact";
import "./icon.css";

function App() {
  return (
    <div className="grid">
      <CakeSlice />
      <Candy />
      <Apple />
      <Cookie />
      <Martini />
      <IceCream2 />
      <Sandwich />
      <Wine />
      <Dessert />
    </div>
  );
}

export default App;
```

:::


### 绝对描边宽度

对于全局绝对描边宽度样式化，`vector-effect: non-scaling-stroke` CSS 属性可以应用于子元素。这将保持描边宽度大小不变，无论图标大小如何。参见 [absolute-stroke-width](../basics/stroke-width.md#absolute-stroke-width) 获取更多信息。

::: sandpack {editorHeight=480 editorWidthPercentage=60 dependencies="lucide-preact"}

```css icon.css [active]
.lucide {
  width: 48px;
  height: 48px;
  stroke-width: 1.5;
}

.lucide * {
  vector-effect: non-scaling-stroke;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 6px;
}
```

```jsx App.js
import {
  TentTree,
  Caravan,
  FlameKindling,
  MountainSnow,
  Trees,
  Axe,
  Map,
  CloudMoon,
  Sparkles,
} from "lucide-preact";
import { h } from "preact";
import "./icon.css";

function App() {
  return (
    <div className="grid">
      <TentTree />
      <Caravan />
      <FlameKindling />
      <MountainSnow />
      <Trees />
      <Axe />
      <Map />
      <CloudMoon />
      <Sparkles />
    </div>
  );
}

export default App;
```

:::
