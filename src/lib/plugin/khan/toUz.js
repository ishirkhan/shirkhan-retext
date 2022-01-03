import { visit } from "unist-util-visit";
import { getMap } from "../../utils/table";

const khanMap = getMap({ from: "khan", to: "khanUz" });
/**
 * ReadMe:
 * 不管什么内容咱先转换khan易写AST,然后通过此插件转换回khan-uz,通过这种方式避免过多的多对多转换。
 * 以后的转换都像本插件一样通过第三者的方式转换是建议优先考虑的
 */

/**
 * khan 转换 khan-uz
 * @returns
 */
export function khanToUz() {
  return (tree) => {
    visit(tree, "CharNode", (node, index, parent) => {
      if (!node.convert) return;

      node.value = khanMap[node.value] || node.value;

      // 处理hemze
      const preNode = parent.children[index - 1];
      if (
        (preNode?.value === " " ||
          !preNode ||
          preNode?.punctuation ||
          preNode.whiteSpace) &&
        node.value === "x"
      ) {
        node.value = ""; // 单词首位的hemze被清理
        (node.convert = false), (node.whiteSpace = true);
      }
    });
  };
}
