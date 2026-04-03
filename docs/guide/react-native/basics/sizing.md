---
title: 尺寸 - React Native
description: 学习如何使用 `size` 属性或通过 CSS 调整 React Native 应用程序中图标的大小。
---
# 尺寸

默认情况下，所有图标的大小为 `24px` 乘 `24px`。可以使用 `size` 属性和 CSS 调整大小。

## 使用 `size` 属性调整图标大小

```SnackPlayer name=State&ext=js&dependencies=react-native-svg,lucide-react-native
import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import { Landmark } from "lucide-react-native";

const style = { height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center' }

const App = () => {
  return (
    <View style={style}>
      <Landmark size={48}  />
    </View>
  );
};

export default App;
```

## 通过 style 属性调整图标大小

可以使用 style 属性中的 `width` 和 `height` 来调整图标大小。

```SnackPlayer name=State&ext=js&dependencies=react-native-svg,lucide-react-native
import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import { Landmark } from "lucide-react-native";

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  icon: {
    width: 48,
    height: 48
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Landmark style={styles.icon}  />
    </View>
  );
};

export default App;
```
