<script setup>
import Sandpack from '~/.vitepress/theme/components/editors/Sandpack.vue'
</script>

# 在 Node.js 中使用 Lucide

你也可以通过 lucide-static 包在 Node.js 项目中导入 Lucide 图标。
每个图标都导出为包含 SVG 标记的字符串，可用于服务器端渲染或静态站点生成。

::: code-group

```js [ESM]
import {MessageSquare} from 'lucide-static';
```

```js [CommonJs]
const {MessageSquare} = require('lucide-static');
```

:::

> 注意：每个图标名称均采用帕斯卡命名法（PascalCase）。你可以在 [Lucide 图标页面](https://lucide.dev/icons) 找到图标名称。


## Node.js 示例

::: sandpack {template=node showTabs=false editorHeight=480 editorWidthPercentage=60 dependencies="lucide-static"}

```js /index.js [active]
import http from 'http';
import { MessageSquare } from 'lucide-static';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  res.end(`
    <!DOCTYPE html>
    <html>
      <body>
        <h1>Lucide Icons</h1>
        <p>This is a Lucide icon ${MessageSquare}</p>

      </body>
    </html>
  `);
});

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

:::
