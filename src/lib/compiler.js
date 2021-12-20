import { toString } from "nlcst-to-string";

export function baseCompiler(...params) {
  const compiler = (tree, file) => {
    return toString(tree);
  };
  Object.assign(this, { Compiler: compiler });
}
