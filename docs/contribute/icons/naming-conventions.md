---
description: 了解如何为 Lucide 图标选择清晰且一致的名称
---

<script setup>
import {
  arrowDown01,
  badgeCheck,
  badgePlus,
  ban,
  boneFracture,
  circleDashed,
  circleFadingArrowUp,
  circleUser,
  clock3,
  heartCrack,
  moonStar,
  notepadTextDashed,
  pencilRuler,
  rulerDimensionLine,
  save,
  sendHorizontal,
  squareDashed,
  sunSnow,
  userRound,
} from '~/.vitepress/data/iconNodes';
import LucideIcon from '~/.vitepress/theme/components/base/LucideIcon.vue';
const pencilRulerHorizontal = [
  ["path",{"d":"M10 16v-3","key":"1sz6hv"}],
  ["path",{"d":"M14 16v-3","key":"1rh0ni"}],
  ["path",{"d":"M16 2.999v5.98","key":"q5wnuh"}],
  ["path",{"d":"M18 16v-3","key":"gc63g1"}],
  ["path",{"d":"M19.005 2.994A3 3 0 0122 5.984a3 3 0 01-2.986 2.99l-11.777.017a2 2 0 01-.943-.25l-4.03-2.274a.5.5 0 010-.934l4.03-2.274a2 2 0 01.944-.247z","key":"1bk0ej"}],
  ["path",{"d":"M6 16v-3","key":"h6yyjy"}],
  ["rect",{"x":"2","y":"13","width":"20","height":"8","rx":"2","key":"ct2kk9"}]
];
const pencilRulerVertical = [
  ["path",{"d":"M16 10h-3","key":"4p2xpj"}],
  ["path",{"d":"M16 14h-3","key":"1xsqil"}],
  ["path",{"d":"M16 18h-3","key":"12gup7"}],
  ["path",{"d":"M16 6h-3","key":"1o5sfa"}],
  ["path",{"d":"M2.995 19.005a1 1 0 105.98.01L8.99 7.236a2 2 0 00-.25-.943l-2.274-4.03a.5.5 0 00-.934 0L3.26 6.294a2 2 0 00-.248.944z","key":"rw57er"}],
  ["path",{"d":"M3 16h5.979","key":"kkz6vb"}],
  ["rect",{"x":"13","y":"2","width":"8","height":"20","rx":"2","key":"qzgro9"}]
];
</script>

# 命名约定

了解如何为 Lucide 图标选择清晰且一致的名称

本页面介绍词序、修饰词、变体、相关图标以及其他有助于保持图标名称可预测的规则。

在命名新图标或审核建议名称时，可以参考这些规则。

## 1. 使用小写 kebab-case

图标名称**必须**使用小写 kebab-case。

:::: example
::: do `arrow-up-0-1`
使用小写 kebab-case
:::
::: dont `Arrow Up 0-1` 或 `arrowUp01`
避免使用其他命名方案
:::
::::

## 2. 使用美式英语

图标名称**必须**使用美式英语，而不是其他地区的变体。

:::: example
::: do <span>`color`、`maximize`、`center`</span>
:::
::: dont <span>`colour`、`maximise`、`centre`</span>
:::
::::

## 3. 根据图标所描绘的内容命名

图标名称**必须**描述图标所展示的内容，而不是描述人们可能如何使用它。

:::: example
::: do <LucideIcon name="save" :iconNode="save" /> `floppy-disk`
图标**展示**的是一张软盘
:::
::: dont <LucideIcon name="save" :iconNode="save" /> `save`
保存是一种使用场景
:::
::::

:::: example
::: do <LucideIcon name="ban" :iconNode="ban" /> `circle-slash`
图标**展示**的是一个带有斜杠的圆
:::
::: dont <LucideIcon name="ban" :iconNode="ban" /> `ban`
禁止是一种操作
:::
::::

::: tip
同一个图标在不同产品中可能代表不同含义。根据外观为图标命名，可以使名称清晰且不依赖于使用场景。
:::

## 4. 一致地命名相关图标

属于同一组的图标**必须**使用 `<group>-<variant>` 命名方案。

组名称放在前面，变体放在后面。

:::: example
::: do <span><LucideIcon name="badge-plus" :iconNode="badgePlus" /> ＋ <LucideIcon name="badge-check" :iconNode="badgeCheck" /></span> <span>`badge-plus` ＆ `badge-check`</span>
`badge` 是组名称
:::
::: dont <span><LucideIcon name="badge-plus" :iconNode="badgePlus" /> ＋ <LucideIcon name="badge-check" :iconNode="badgeCheck" /></span> <span>`plus-badge` ＆ `check-badge`</span>
`plus` 和 `check` 不是组名称
:::
::::

## 5. 描述替代图标

图标的替代版本**必须**根据其视觉差异进行命名。不要仅使用数字来区分不同版本。

:::: example
::: do <LucideIcon name="send-horizontal" :iconNode="sendHorizontal" /> `send-horizontal`
该图标描绘的是一个水平的“发送”符号
:::
::: dont <LucideIcon name="send-horizontal" :iconNode="sendHorizontal" /> <span>`send-2` 或 `send-alt`</span>
“发送 2”和“替代发送”都不是清晰的名称
:::
::::

## 6. 仅在图标描绘数字时使用数字

除非图标展示了数字，否则图标名称**不得**包含数字。

:::: example
::: do <LucideIcon name="arrow-down-0-1" :iconNode="arrowDown01" /> `arrow-down-0-1`
箭头从 0 指向 1
:::
::: dont <LucideIcon name="send-horizontal" :iconNode="sendHorizontal" /> `send-2`
图标没有展示数字 2
:::
::::

:::: example
::: do <LucideIcon name="clock-3" :iconNode="clock3" /> `clock-3`
指针指向 3 点钟方向
:::
::: dont <LucideIcon name="user-round" :iconNode="userRound" /> `user-3`
图标没有展示数字 3
:::
::::

不要使用数字来区分相似的图标。

## 7. 按大小排列元素

当图标展示多个大小不同的元素时，按从大到小的顺序排列名称。

对于包含圆和人物的图标：

:::: example
::: do <LucideIcon name="moon-star" :iconNode="moonStar" /> `moon-star`
`moon` 比 `star` 大
:::
::: dont <LucideIcon name="circle-user" :iconNode="circleUser" /> `person-circle`
`person` **没有**比 `circle` 大
:::
::::

## 8. 按位置排列大小相近的元素

当图标描绘多个大小大致相同的元素时，其名称**必须**根据视觉位置排列。

如果元素相互重叠，则按从前到后的顺序命名。

如果元素不重叠，则按照英语阅读顺序命名：从上到下，然后从左到右。

:::: example
::: do <LucideIcon name="pencil-ruler" :iconNode="pencilRuler" /> `pencil-ruler`
`pencil` **位于** `ruler` **前面**，因此排在前面
:::
::: do <LucideIcon name="ruler-dimension-line" :iconNode="rulerDimensionLine" /> `ruler-dimension-line`
尺子位于尺寸线下方，但它**更大**，因此排在前面
:::
::::

:::: example
::: do <LucideIcon name="sun-snow" :iconNode="sunSnow" /> `sun-snow`
`sun` **位于**雪花的**左侧**，因此排在前面
:::
::: dont <LucideIcon name="pencil-ruler-horizontal" :iconNode="pencilRulerHorizontal" /> `ruler-pencil`
尺子位于铅笔**下方**，因此 `pencil-ruler` 才是正确的名称
:::
::::

## 9. 将修饰词放在其描述的元素之后

修饰词**必须**放在其描述的元素之后：`<element>-<modifier>`。

:::: example
::: do <LucideIcon name="heart-crack" :iconNode="heartCrack" /> `heart-broken`
图标展示的是一颗**碎裂的**心
:::
::: dont <LucideIcon name="bone-fracture" :iconNode="boneFracture" /> `broken-bone`
图标展示的是一根**断裂的**骨头，因此应命名为 `bone-broken`
:::
::::

当图标包含多个带修饰词的元素时，每个修饰词**必须**跟在其描述的元素之后。

:::: example
::: do <LucideIcon name="circle-fading-arrow-up" :iconNode="circleFadingArrowUp" /> `circle-fading-arrow-up`
图标展示的是一个**渐隐的**圆，圆内有一个指向**上方**的箭头

`circle` 排在前面，因为它比 `arrow` 大。`fading` 跟在 `circle` 后面，因为它修饰的是圆。`up` 跟在 `arrow` 后面，因为它修饰的是箭头
:::
::: dont <LucideIcon name="notepad-text-dashed" :iconNode="notepadTextDashed" /> `notepad-text-dashed`
该图标展示的是一个带虚线边框、内部有文字的记事本，因此应命名为 `notepad-dashed-text`

`notepad` 排在前面，因为它比 `text` 大。`dashed` 跟在 `notepad` 后面，因为它修饰的是记事本。`text` 跟在二者后面，因为 `dashed` 不修饰 `text`
:::
::::

## 总结

命名图标时：

1. **描述你看到的内容**，而不是图标可能代表的含义
2. **使用美式英语**和**小写 kebab-case**
3. 使用 `<group>-<variant>` 将**相关图标放在一起**
4. **描述替代图标的独特之处**，而不是使用数字编号
5. **仅在图标描绘数字时使用数字**
6. **按从大到小的顺序排列元素**
7. 如果元素大小大致相同，则按**从前到后**的顺序排列，否则按照**英语阅读顺序**排列
8. **将修饰词放在其描述的元素之后**：`<element>-<modifier>`
