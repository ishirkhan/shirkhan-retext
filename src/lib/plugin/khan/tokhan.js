export { toKhan as toKhanPlugin } from "./tokhan";
import { TRANSLATIONAL_MARK } from "shirkhan-alphabet-table";
import { getTable } from "../../utils/table";

const doubleCharacter = getTable()
  .map((item) => item.khan)
  .filter((item) => item.length === 2);

/**
 * 处理需要组合的字符，如 sh,kh
 * @returns
 */
export function toKhan() {
  return (root) => {
    const children = root.children;
    let len = children.length;
    let convertStatus = true;

    const deletePos = [];

    for (let index = 0; index < len; index++) {
      const preNode = children[index - 1];
      const node = children[index];

      // 识别 终止符
      if (node.value === TRANSLATIONAL_MARK) {
        convertStatus = !convertStatus;
        continue;
      }
      // 忽略非符号，非a-z字母
      if (!node.asciiAZ && !node.punctuation) continue;

      // 补充转换状态
      node["convert"] = convertStatus;

      // 处理 h 字符
      if (
        convertStatus &&
        node.value === "h" &&
        preNode &&
        preNode.value?.length === 1 &&
        doubleCharacter.includes(preNode?.value + "h") // 排除单独出现的h被前一个字符合并导致前一个字符无法正确转换
      ) {
        node.value = preNode.value + "h";
        // 记录删除坐标
        preNode.value = "";
        deletePos.push(index - 1);
      }
      // 处理 ngh => n+gh ，not ng+h
      if (
        convertStatus &&
        node.value === "h" &&
        preNode &&
        preNode?.value === "ng"
      ) {
        preNode.value = "n";
        node.value = "gh";
      }
      // 处理 ng 字符
      if (
        convertStatus &&
        preNode &&
        preNode.value === "n" &&
        node.value === "g"
      ) {
        node.value = preNode.value + node.value;
        // 记录删除坐标
        preNode.value = "";
        deletePos.push(index - 1);
      }
    }

    // 删除被合并的元素
    root.children = children.filter(
      (item, index) => !deletePos.includes(index)
    );
  };
}
