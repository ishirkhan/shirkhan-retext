import { ugToShirkhanUzProcessor, shirkhanStringify } from "../index";

// ug to khan
const toKhanUz = (text) =>
  ugToShirkhanUzProcessor().use(shirkhanStringify).processSync(text).toString();
describe("双字符测试 sh,kh eh,gh,ch,ng,zh,wh", () => {
  const cases = [
    {
      name: "sh,kh",
      expect: toKhanUz("شىرخان"),
      result: "shirkhan",
    },
    {
      name: "eh,gh",
      expect: toKhanUz("ئېسىل ئىشلارغا تۇتۇش قىلدۇق"),
      result: "êsil ishlargha tutush qilduq",
    },
    {
      name: "ch,ng",
      expect: toKhanUz("چۈشىنىڭ"),
      result: "chvshiniñ",
    },
    {
      name: "wh,zh",
      expect: toKhanUz("ھازىرقى ژورنال"),
      result: "ĥazirqi zhornal",
    },
  ];

  cases.forEach((item) => {
    test(item.name, () => {
      expect(item.expect).toEqual(item.result);
    });
  });
});

// 只能组词用，不能单独使用,有语义冲突作用
describe("h 字符规则测试", () => {
  const cases = [
    {
      name: "单独出现不做转换",
      expect: toKhanUz("ئادەمh"),
      result: "adem/h/",
    },
    {
      name: "组词作用",
      expect: toKhanUz("شىرخان"),
      result: "shirkhan",
    },
    {
      name: "解决语义冲突作用",
      expect: toKhanUz("ئۈنگە ئېلىش"),
      result: "vnge êlish",
    },
  ];

  cases.forEach((item) => {
    test(item.name, () => {
      expect(item.expect).toEqual(item.result);
    });
  });
});

describe("Hemze 规则测试", () => {
  const cases = [
    {
      name: "单词中间的x当做Hemze",
      expect: toKhanUz("سۈرئەت"),
      result: "svrxet",
    },
    {
      name: "辅音开头的单词没有hemze",
      expect: toKhanUz("شىرخان"),
      result: "shirkhan",
    },
    {
      name: "元音开头的单词无需加Hemze",
      expect: toKhanUz("ئادەملەر"),
      result: "ademler",
    },
    {
      name: "元音开头带Hemze的单词需正常识别",
      expect: toKhanUz("ئادەملەر"),
      result: "ademler",
    },
    {
      name: "符号开头的单词需正确处理Hemze",
      expect: toKhanUz("،ئادەملەر"),
      result: ",ademler",
    },
    {
      name: "空白开头的单词需正确处理Hemze",
      expect: toKhanUz(" ئادەملەر"),
      result: " ademler",
    },
  ];

  cases.forEach((item) => {
    test(item.name, () => {
      expect(item.expect).toEqual(item.result);
    });
  });
});

describe("n g ng gh 语义冲突", () => {
  const cases = [
    {
      name: "n g ng",
      expect: toKhanUz("مېنىڭ ئاۋازىمنى ئۈنگە ئالماقچى"),
      result: "mêniñ awazimni vnge almaqchi",
    },
    {
      name: "n gh, ngh => n+gh",
      expect: toKhanUz("باشلانغان"),
      result: "bashlanghan",
    },
  ];

  cases.forEach((item) => {
    test(item.name, () => {
      expect(item.expect).toEqual(item.result);
    });
  });
});

describe("终止符 '/' 测试", () => {
  const cases = [
    {
      name: "终止符包围的内容不做转换",
      expect: toKhanUz("شىرخان hello world دەيدۇ"),
      result: "shirkhan /hello world/ deydu",
    },
  ];

  cases.forEach((item) => {
    test(item.name, () => {
      expect(item.expect).toEqual(item.result);
    });
  });
});

describe("标点符号", () => {
  const cases = [
    {
      name: "三个符号需要转移",
      expect: toKhanUz("؟؛،"),
      result: "?;,",
    },
  ];

  cases.forEach((item) => {
    test(item.name, () => {
      expect(item.expect).toEqual(item.result);
    });
  });
});
