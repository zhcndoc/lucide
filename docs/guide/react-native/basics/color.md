---
title: 颜色 - React Native
description: 了解如何在 React Native 应用程序中使用 `color` 属性或通过父元素的文本颜色值来调整图标的颜色。
---
# 颜色

默认情况下，所有图标的颜色值为：`currentColor`。此关键字使用元素的计算文本 `color` 值来表示图标颜色。

在 MDN 上阅读更多关于 [ `currentColor` 的信息](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword)。

## 使用 `color` 属性调整颜色

可以通过将 color 属性传递给元素来调整颜色。

```SnackPlayer name=State&ext=js&dependencies=react-native-svg,lucide-react-native
import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import { Smile } from "lucide-react-native";

const style = { height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center' }

const App = () => {
  return (
    <View style={style}>
      <Smile color="#3e9392" />
    </View>
  );
};

export default App;
```
