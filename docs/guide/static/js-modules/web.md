<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue'
</script>

# 在 Web 中使用 Lucide

:::warning 不建议用于高流量的生产环境
此库将每个 SVG 导出为基本字符串。我们有一个针对 Web 优化的库。它体积更小，并支持颜色、大小和 strokeWidth。请参阅 [Lucide](../../lucide/index.md)。
:::

您也可以使用 lucide-static 包在 Web 项目中导入 SVG 字符串。每个图标都导出为包含 SVG 标记的字符串，可用于客户端渲染。

::: sandpack {template=vanilla showTabs=false editorHeight=295 editorWidthPercentage=60 dependencies="lucide-static"}

```html /index.html [active]
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>

    <script src="index.js"></script>
  </body>
</html>
```

```js /index.js
import "./styles.css";
import { Smile } from 'lucide-static';

document.getElementById("app").innerHTML = Smile;
```
:::

> 注意：每个图标名称均为 PascalCase。您可以在 [Lucide 图标页面](https://lucide.zhcndoc.com/icons) 中找到图标名称。
