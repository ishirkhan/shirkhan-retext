import {
  shirkhanToUgProcessor,
  ugToShirkhanProcessor,
  shirkhanStringify,
  shirkhanToShirkhanUzProcessor,
  ugToShirkhanUzProcessor,
} from "./lib";

const targetText = "ŝirhan êlipbesi";
console.log("targetText", targetText);

//khan to uz
let result = shirkhanToShirkhanUzProcessor()
  .use(shirkhanStringify)
  .processSync(targetText);
console.log("khan to uz result", result.toString());

// khan to ug
let resultUg = shirkhanToUgProcessor()
  .use(shirkhanStringify)
  .processSync(targetText);
console.log("khan to ug result", resultUg.toString());

//ug to khanUz
result = ugToShirkhanUzProcessor()
  .use(shirkhanStringify)
  .processSync(resultUg.toString());
console.log("ug to khanUz result", result.toString());

// // ug to khan
result = ugToShirkhanProcessor()
  .use(shirkhanStringify)
  .processSync(resultUg.toString());
console.log("ug to khan result", result.toString());
