---
title: TypeScript 支持 - Angular
description: "`@lucide/angular` 包导出的所有类型以及如何在你的 Angular 项目中使用它们。"
---

# TypeScript 支持

`@lucide/angular` 包导出的类型列表。
当在 TypeScript Angular 项目中使用 Lucide 图标时，这些类型可用于为你的组件指定类型。

## 类型

### `LucideIcon`

表示具有静态 `icon` 属性的自包含 Lucide 图标组件类型。你可以在声明图标属性的模式中使用此类型。

```ts
export interface LucideIcon extends Type<LucideIconProps> {
  icon: LucideIconData;
}
```

### `LucideIconData`

一个完全描述要显示的图标的 Lucide 图标对象。

```ts
export type LucideIconData = {
  name: string;
  node: LucideIconNode[];
  aliases?: string[];
};
```

## 类型守卫

### `isLucideIconData`

```ts
export function isLucideIconData(icon: unknown): icon is LucideIconData {
  return true | false
}
```

### `isLucideIconComponent`

```ts
export function isLucideIconComponent(icon: unknown): icon is LucideIcon {
  return true | false
}
```
