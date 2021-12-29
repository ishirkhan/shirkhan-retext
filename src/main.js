import {
  shirkhanToUgProcessor,
  ugToShirkhanProcessor,
  shirkhanStringify,
} from "./lib";

const targetText = "ademh";

// khan to ug
let result = shirkhanToUgProcessor()
  .use(shirkhanStringify)
  .processSync(targetText);
console.log("result", result.toString());

// ug to khan
result = ugToShirkhanProcessor().use(shirkhanStringify).processSync(result);
console.log("result", result.toString());
