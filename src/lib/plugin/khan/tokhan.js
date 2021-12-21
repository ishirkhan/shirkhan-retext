import { modifyChildren } from "unist-util-modify-children";
import { TRANSLATIONAL_MARK } from "shirkhan-alphabet-table";
import { getMap } from "../../utils/table";

const khanMap = getMap({ from: "khan", to: "ug" });

function regroup(node, index, parent) {
  // 识别 终止符
  if (node.value === TRANSLATIONAL_MARK) {
    convertStatus = !convertStatus;
  }

  // 给字母打标记
  if (node.asciiAZ) {
    node["convert"] = convertStatus;
  }

  // 生成字符字符
  if (node.asciiAZ && node.value === "h") {
    const preNode = parent.children[index - 1];
    preNode.value = preNode.value + "h";
    parent.children.splice(index, 1, {
      ...node,
      value: "",
      ascii: false,
      asciiAZ: false,
      whiteSpace: true,
    });
  }

  return index + 1;
}

let convertStatus = true;

/**
 * 处理需要组合的字符，如 sh,kh
 * @returns
 */
export function toKhan() {
  convertStatus = true;
  return (tree) => {
    modifyChildren(regroup)(tree);
  };
}
