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
