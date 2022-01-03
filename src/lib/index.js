import { unified } from "unified";
import { baseParser as shirkhanParser } from "./parser";
import { baseCompiler as shirkhanCompiler } from "./compiler";
import {
  toKhanPlugin,
  khanToUzPlugin,
  khanUzToKhanPlugin,
  khanUzToUgPlugin,
  ugToKhanUzPlugin,
} from "./plugin";

/**
 *
 * 整个转换遵循以下统一的中间层：
 * - ug   -> khan-uz -> khan
 * - khan -> khan-uz -> ug
 *
 */
// khan to ug
export const shirkhanToUgProcessor = unified()
  .use(shirkhanParser)
  .use(toKhanPlugin)
  .use(khanToUzPlugin)
  .use(khanUzToUgPlugin)
  .freeze();

// khan to khan-uz
export const shirkhanToShirkhanUzProcessor = unified()
  .use(shirkhanParser)
  .use(toKhanPlugin)
  .use(khanToUzPlugin)
  .freeze();

// ug to khan
export const ugToShirkhanProcessor = unified()
  .use(shirkhanParser)
  .use(ugToKhanUzPlugin)
  .use(khanUzToKhanPlugin)
  .freeze();

// ug to khan-uz
export const ugToShirkhanUzProcessor = unified()
  .use(shirkhanParser)
  .use(ugToKhanUzPlugin)
  .freeze();

export * from "./plugin";
export {
  shirkhanParser,
  shirkhanCompiler,
  shirkhanCompiler as shirkhanStringify,
};
