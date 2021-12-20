# 使用方式

```javascript
import { unified } from "unified";
import {
  shirkhanParser,
  shirkhanCompiler,
  toKhanPlugin,
  khanToUgPlugin,
} from "./shirkhan-retext";

const processor = unified()
  .use(shirkhanParser)
  .use(toKhanPlugin)
  .use(khanToUgPlugin)
  .use(shirkhanCompiler);

const result = processor.processSync("shirkhan /hello world/ deydughu 123");
console.log("result", result.toString());
```

```bash
// out
result شىرخان /hello world/ دەيدۇغۇ 123
```
