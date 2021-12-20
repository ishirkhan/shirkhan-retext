import { table } from "shirkhan-alphabet-table";

/**
 * 基于 shirkhan-alphabet-table 生成 from 为key，to 为value的map
 * @param {{from:string,to:string}} param0
 * @returns
 */
export function getMap({ from, to }) {
  let m = {};
  table.forEach((item) => {
    if (item.punctuation) return;
    m[item[from]] = item[to];
  });

  return m;
}
