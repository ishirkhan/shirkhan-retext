import {
  punctuation,
  whiteSpace,
  numerical,
} from "parse-latin/lib/expressions";

const isAscii = (char) => /[\x00-\xFF]/.test(char);
const isAsciiAZ = (char) => /[a-zA-Z]/.test(char);
const isPunctuation = (char) => punctuation.test(char);
const isWhiteSpace = (char) => whiteSpace.test(char);
const isNumber = (char) => numerical.test(char);
export function baseParser(...params) {
  /**
   *
   * @param {string} value
   * @param {*} file
   * @returns
   */
  const parser = (value, file) => {
    return {
      type: "RootNode",
      children: Array.from(value).map((char) => {
        return {
          type: "CharNode",
          value: char.toLocaleLowerCase(),
          ascii: isAscii(char),
          asciiAZ: isAsciiAZ(char),
          punctuation: isPunctuation(char),
          whiteSpace: isWhiteSpace(char),
          number: isNumber(char),
        };
      }),
    };
  };
  Object.assign(this, { Parser: parser });
}
