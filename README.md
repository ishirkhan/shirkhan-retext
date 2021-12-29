# 简介

本项目是遵守 [shirkhan-alphabet](https://gitee.com/silvaq/shirkhan-alphabet) 所规定的规则规矩提供文本转换功能

# 安装

yarn:

`yarn add shirkhan-retext`

npm:

`npm install shirkhan-retext`

# 使用方式

```javascript
import {
  shirkhanToUgProcessor,
  ugToShirkhanProcessor,
  shirkhanStringify,
} from "./lib";

const targetText =
  "shirkhanning awazi ni vnhge ehlish vchvn /hello , world/ 123, din bashlanghan geplerni dep yezish kehrek mu?";

// khan to ug
let result = shirkhanToUgProcessor()
  .use(shirkhanStringify)
  .processSync(targetText);

console.log("result", result.toString());

// ug to khan
result = ugToShirkhanProcessor().use(shirkhanStringify).processSync(result);
console.log("result", result.toString());
```
