---
title: 描边宽度 - React Native
description: 了解如何在 React Native 应用中使用 `strokeWidth` 属性调整图标的描边宽度，或使用 `nonScalingStroke` 属性调整 strokeWidth 的外观。
---

# 描边宽度

所有图标都是使用带有描边的 SVG 元素设计的。
它们的默认描边宽度为 `2px`。

可以调整 `strokeWidth` 以创建不同的图标外观。

## 使用 `strokeWidth` 属性调整描边宽度

```SnackPlayer name=State&ext=js&dependencies=react-native-svg,lucide-react-native
import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import { FolderLock } from "lucide-react-native";

const style = { height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center', backgroundColor: '#202127', color: '#fff' }

const App = () => {
  return (
    <View style={style}>
      <FolderLock strokeWidth={1} />
    </View>
  );
};

export default App;
```

## 非缩放描边

调整 `size` 属性时，描边宽度的大小将相对于图标的大小，这是 SVG 的默认行为。引入 `nonScalingStroke` 属性可以调整此行为，使描边宽度无论图标大小如何都保持不变。

这意味着启用 `nonScalingStroke` 后，即使将图标的 `size` 设置为 `48px`，屏幕上的 `strokeWidth` 仍将为 `2px`。

注意 `2px` 是 Lucide 图标的默认描边宽度，它可以调整为任意大小。

<!--@include: ../../../images/non-scaling-stroke-compare.svg -->

### 使用 `nonScalingStroke` 属性调整描边宽度

将 `nonScalingStroke` 设置为 `true` 会使描边宽度不随图标缩放。

```SnackPlayer name=State&ext=js&dependencies=react-native-svg,lucide-react-native
import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import { RollerCoaster } from "lucide-react-native";

const style = { height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center', backgroundColor: '#202127', color: '#fff' }

const App = () => {
  return (
    <View style={style}>
      <RollerCoaster
        size={96}
        nonScalingStroke
      />
    </View>
  );
};

export default App;
```

<!-- <Sandpack
  template="react"
  :theme="sandpackTheme"
  :files="nonScalingStroke"
  :customSetup='{
    dependencies: {
      "lucide-react": "latest"
    }
  }'
  :options="{
    editorHeight: 320,
    editorWidthPercentage: 60,
  }"
/> -->
