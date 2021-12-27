import { table, HEMZE } from "shirkhan-alphabet-table";

export function getHemze() {
  return HEMZE;
}

export function getTable() {
  return table;
}
/**
 * 基于 shirkhan-alphabet-table 生成 from 为key，to 为value的map
 * @param {{from:string,to:string}} param0
 * @returns
 */
export function getMap({ from, to }, dataSet = table) {
  let m = {};
  dataSet.forEach((item) => {
    m[item[from]] = item[to];
  });

  return m;
}

/**
 * 获取元音列表
 * @returns
 */
export function getVolwes() {
  return table.filter((item) => item.volwes);
}

/**
 * 获取符号列表
 * @returns
 */
export function getPunctuations() {
  return table.filter((item) => item.punctuation);
}
