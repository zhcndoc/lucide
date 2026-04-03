---
title: 组合图标 - React Native
description: 学习如何在 React Native 应用中通过嵌套 SVG 元素将多个图标组合成一个图标。
---

# 组合图标

你可以通过嵌套 SVG 元素将多个图标组合成一个图标。
如果你想通过组合现有图标来创建自定义图标，这很有用。

```SnackPlayer name=State&ext=js&dependencies=react-native-svg,lucide-react-native
import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import { Scan, User} from "lucide-react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Scan size={48}>
        <User
          size={12}
          x={6}
          y={6}
          absoluteStrokeWidth
        />
      </Scan>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
});

export default App;
```

这是有效的，因为 [SVG 可以嵌套](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/svg#nested_svg_element)，并且图标支持所有 SVG 属性。
可以调整 `x` 和 `y` 坐标来按需定位图标。

::: info 限制
组合图标时，你需要确保 `x` 和 `y` 坐标在外层图标的 `viewBox` 范围内（24x24）。
:::

## 使用原生 SVG 元素

你也可以将 Lucide 图标与原生 SVG 元素组合，以构建自定义图标变体。

### 带通知徽章的示例

例如，你可以使用 `circle` SVG 元素向图标添加通知徽章。

```SnackPlayer name=State&ext=js&dependencies=react-native-svg,lucide-react-native
import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import { Mail } from "lucide-react-native";
import { Circle } from 'react-native-svg';

const App = () => {
  const hasUnreadMessages = true;

  return (
    <View style={styles.container}>
      <Mail size={48}>
        {hasUnreadMessages && (
          <Circle
            r="3"
            cx="21"
            cy="5"
            stroke="none"
            fill="#F56565"
          />
        )}
      </Mail>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
});

export default App;
```

### 带文本元素的示例

你也可以使用 `text` SVG 元素向图标添加文本。

```SnackPlayer name=State&ext=js&dependencies=react-native-svg,lucide-react-native
import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import { File } from "lucide-react-native";
import { Text } from 'react-native-svg';

const App = () => {
  const hasUnreadMessages = true;

  return (
    <View style={styles.container}>
      <File size={48}>
        <Text
          x={7.5}
          y={19}
          fontSize={8}
          fontFamily="Verdana,sans-serif"
          strokeWidth={1}
        >
          JS
        </Text>
      </File>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
});

export default App;
```
