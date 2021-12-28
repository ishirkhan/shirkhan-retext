import { unified } from "unified";
import {
  shirkhanParser,
  shirkhanCompiler,
  toKhanPlugin,
  khanToUgPlugin,
  ugToKhanPlugin,
} from "./lib";

const targetText =
  "shirkhanning awazi ni vnhge ehlish vchvn /hello , world/ 123, din bashlanghan geplerni dep yezish kehrek mu?";

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
