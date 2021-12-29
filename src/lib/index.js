import { unified } from "unified";
import { baseParser as shirkhanParser } from "./parser";
import { baseCompiler as shirkhanCompiler } from "./compiler";
import { toKhanPlugin, khanToUgPlugin, ugToKhanPlugin } from "./plugin";

// khan to ug
export const shirkhanToUgProcessor = unified()
  .use(shirkhanParser)
  .use(toKhanPlugin)
  .use(khanToUgPlugin)
  .freeze();

// ug to khan
export const ugToShirkhanProcessor = unified()
  .use(shirkhanParser)
  .use(ugToKhanPlugin)
  .freeze();

export * from "./plugin";
export {
  shirkhanParser,
  shirkhanCompiler,
  shirkhanCompiler as shirkhanStringify,
};
