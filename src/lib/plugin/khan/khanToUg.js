import { visit } from "unist-util-visit";
import { getMap } from "../../utils/table";

const khanMap = getMap({ from: "khan", to: "ug" });

/**
 * khan 字母换母语
 * @returns
 */
export function khanToUg() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.convert && node.asciiAZ) {
        node.value = khanMap[node.value];
      }
    });
  };
}
