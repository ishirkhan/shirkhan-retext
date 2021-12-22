# 使用方式

```javascript
import { unified } from "unified";
import {
  shirkhanParser,
  shirkhanCompiler,
  toKhanPlugin,
  khanToUgPlugin,
  ugToKhanPlugin,
} from "shirkhan-retext";

const targetText = "shirkhan /hello world/ 123 deydughu ";

// khan to ug
let processor = unified()
  .use(shirkhanParser)
  .use(toKhanPlugin)
  .use(khanToUgPlugin)
  .use(shirkhanCompiler);

let result = processor.processSync(targetText);
console.log("result", result.toString());

// ug to khan
processor = unified()
  .use(shirkhanParser)
  .use(ugToKhanPlugin)
  .use(shirkhanCompiler);

result = processor.processSync(result);
console.log("result", result.toString());
```
