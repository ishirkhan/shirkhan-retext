import { visit } from "unist-util-visit";
import { getMap, getVolwes, getHemze } from "../../utils/table";

const khanMap = getMap({ from: "khan", to: "ug" });
const volwes = getVolwes();

const HEMZE = getHemze();

/**
 * khan 字母换母语
 * @returns
 */
export function khanToUg() {
  return (tree) => {
    visit(tree, "CharNode", (node, index, parent) => {
      if (node.value === "/") {
        node.value = node.value.replace("/", "");
      }

      const preNode = parent.children[index - 1];
      if (node.convert) {
        node.value = khanMap[node.value] || node.value;
        // 首字母
        if (
          (!preNode || preNode.value === " " || preNode.punctuation) &&
          volwes.includes(node.value)
        ) {
          node.value = HEMZE + node.value;
        }
      }

      // 符号转移
      if (node.punctuation && node.value === "?") {
        node.value = "؟";
      }
    });
  };
}
