import { visit } from "unist-util-visit";
import { getMap } from "../../utils/table";

const ugMap = getMap({ from: "ug", to: "khan" });
const ugChars = Object.keys(ugMap);

let convertStatus = false;

function converUgCharToKhan(node, index, parent) {
  node.value = ugMap[node.value];

  //处理 ng
  const next = parent.children[index + 1];
  if (node.value === "nh" && next?.value !== "گ") {
    node.value = "n";
  }

  // 处理hemze
  const preNode = parent.children[index - 1];
  if (
    (preNode?.value === " " || !preNode || preNode?.punctuation) &&
    node.value === "x"
  ) {
    node.value = ""; // 单词首位的hemze被清理
  }

  // 当转换模式开启的话得关闭
  if (convertStatus) {
    convertStatus = false;

    // 找到之前的最后一个字符后面添加结束符
    let i = index;
    while (parent.children[i - 1]?.asciiAZ === false) {
      i = i - 1;
      if (i < 0) break;
    }
    if (i > 0) {
      parent.children[i].value = "/" + parent.children[i].value;
    }
  }
}
/**
 * 母语字母转换成 khan
 * @returns
 */
export function ugToKhan() {
  return (tree) => {
    visit(tree, "CharNode", (node, index, parent) => {
      if (ugChars.includes(node.value)) {
        converUgCharToKhan(node, index, parent);
        return;
      }

      // 遇到第一个非母语的拉丁字符就开始转
      if (node.asciiAZ && !convertStatus) {
        convertStatus = true;
        node.value = "/" + node.value;
      }

      // 当遍历了所有，转换模式还没停止的话停掉它
      if (convertStatus && index === parent.children.length - 1) {
        convertStatus = false;
        node.value = node.value + "/";
      }
    });
  };
}
