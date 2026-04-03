---
title: 填充图标 - React Native
description: 了解如何在 React Native 应用程序中使用 Lucide 图标的填充，以及使用 Lucide 图标填充的限制。
---

# 填充图标

官方不支持填充。
但是，所有图标上都可用所有 SVG 属性。
填充仍然可以使用，并且在某些图标上效果良好。

星星示例：

```SnackPlayer name=State&ext=js&dependencies=react-native-svg,lucide-react-native
import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import { Star, StarHalf } from "lucide-react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.starRating}>
        <View style={styles.stars}>
          { Array.from({ length: 5 }, () => (
              <Star fill="#111" strokeWidth={0} />
          ))}
        </View>
        <View style={[styles.stars, styles.rating]}>
          <Star fill="orange" strokeWidth={0} />
          <Star fill="orange" strokeWidth={0} />
          <StarHalf fill="orange" strokeWidth={0} />
        </View>
      </View>
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
  starRating: {
    position: 'relative',
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  rating: {
    position: 'absolute',
    top: 0,
  }
});

export default App;
```
