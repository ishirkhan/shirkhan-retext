import { visit } from "unist-util-visit";
import { getMap } from "../../utils/table";

const khanMap = getMap({ from: "khanUz", to: "khan" });

/**
 * khan 转换 khan-uz
 * @returns
 */
export function khanUzToKhan() {
  return (tree) => {
    visit(tree, "CharNode", (node, index, parent) => {
      if (!node.convert) return;

      node.value = khanMap[node.value] || node.value;

      const nextNode = parent.children[index + 1];
      //nh
      if (node.value === "nh") {
        if (!nextNode || nextNode.value !== "g") {
          node.value = "n";
        }
      }
    });
  };
}
