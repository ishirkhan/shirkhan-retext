import { shirkhanToUgProcessor, shirkhanStringify } from "../index";

// khan to ug
const toUg = (text) =>
  shirkhanToUgProcessor().use(shirkhanStringify).processSync(text).toString();

describe("双字符测试 sh,kh eh,gh,ch,ng,zh,wh", () => {
  const cases = [
    {
      name: "sh,kh",
      expect: toUg("shirkhan"),
      result: "شىرخان",
    },
    {
      name: "eh,gh",
      expect: toUg("ehsil ishlargha tutush qilduq"),
      result: "ئېسىل ئىشلارغا تۇتۇش قىلدۇق",
    },
    {
      name: "ch,ng",
      expect: toUg("chvshining"),
      result: "چۈشىنىڭ",
    },
    {
      name: "wh,zh",
      expect: toUg("whazirqi zhornal"),
      result: "ھازىرقى ژورنال",
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
    // 因khan-uz中kh 代表h，这个规则先无效
    // {
    //   name: "单独出现不做转换",
    //   expect: toUg("ademh"),
    //   result: "ئادەمh",
    // },
    {
      name: "组词作用",
      expect: toUg("shirkhan"),
      result: "شىرخان",
    },
    {
      name: "解决语义冲突作用",
      expect: toUg("vnhge ehlish"),
      result: "ئۈنگە ئېلىش",
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
      expect: toUg("svrxet"),
      result: "سۈرئەت",
    },
    {
      name: "辅音开头的单词没有hemze",
      expect: toUg("shirkhan"),
      result: "شىرخان",
    },
    {
      name: "元音开头的单词无需加Hemze",
      expect: toUg("ademler"),
      result: "ئادەملەر",
    },
    {
      name: "元音开头带Hemze的单词需正常识别",
      expect: toUg("xademler"),
      result: "ئادەملەر",
    },
    {
      name: "符号开头的单词需正确处理Hemze",
      expect: toUg(",ademler"),
      result: "،ئادەملەر",
    },
    {
      name: "空白开头的单词需正确处理Hemze",
      expect: toUg(" ademler"),
      result: " ئادەملەر",
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
      expect: toUg("mehning awazimni vnhge almaqchi"),
      result: "مېنىڭ ئاۋازىمنى ئۈنگە ئالماقچى",
    },
    {
      name: "n gh, ngh => n+gh",
      expect: toUg("bashlanghan"),
      result: "باشلانغان",
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
      expect: toUg("shirkhan /hello world/ deydu"),
      result: "شىرخان hello world دەيدۇ",
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
      expect: toUg("?;,"),
      result: "؟؛،",
    },
  ];

  cases.forEach((item) => {
    test(item.name, () => {
      expect(item.expect).toEqual(item.result);
    });
  });
});
