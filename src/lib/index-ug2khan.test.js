import { ugToShirkhanProcessor, shirkhanStringify } from "./index";

// ug to khan
const toKhan = (text) =>
  ugToShirkhanProcessor().use(shirkhanStringify).processSync(text).toString();
describe("双字符测试 sh,kh eh,gh,ch,ng,zh,wh", () => {
  const cases = [
    {
      name: "sh,kh",
      expect: toKhan("شىرخان"),
      result: "shirkhan",
    },
    {
      name: "eh,gh",
      expect: toKhan("ئېسىل ئىشلارغا تۇتۇش قىلدۇق"),
      result: "ehsil ishlargha tutush qilduq",
    },
    {
      name: "ch,ng",
      expect: toKhan("چۈشىنىڭ"),
      result: "chvshining",
    },
    {
      name: "wh,zh",
      expect: toKhan("ھازىرقى ژورنال"),
      result: "whazirqi zhornal",
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
      expect: toKhan("ئادەمh"),
      result: "adem/h/",
    },
    {
      name: "组词作用",
      expect: toKhan("شىرخان"),
      result: "shirkhan",
    },
    {
      name: "解决语义冲突作用",
      expect: toKhan("ئۈنگە ئېلىش"),
      result: "vnhge ehlish",
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
      expect: toKhan("سۈرئەت"),
      result: "svrxet",
    },
    {
      name: "辅音开头的单词没有hemze",
      expect: toKhan("شىرخان"),
      result: "shirkhan",
    },
    {
      name: "元音开头的单词无需加Hemze",
      expect: toKhan("ئادەملەر"),
      result: "ademler",
    },
    {
      name: "元音开头带Hemze的单词需正常识别",
      expect: toKhan("ئادەملەر"),
      result: "ademler",
    },
    {
      name: "符号开头的单词需正确处理Hemze",
      expect: toKhan("،ئادەملەر"),
      result: ",ademler",
    },
    {
      name: "空白开头的单词需正确处理Hemze",
      expect: toKhan(" ئادەملەر"),
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
      expect: toKhan("مېنىڭ ئاۋازىمنى ئۈنگە ئالماقچى"),
      result: "mehning awazimni vnhge almaqchi",
    },
    {
      name: "n gh, ngh => n+gh",
      expect: toKhan("باشلانغان"),
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
      expect: toKhan("شىرخان hello world دەيدۇ"),
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
      expect: toKhan("؟؛،"),
      result: "?;,",
    },
  ];

  cases.forEach((item) => {
    test(item.name, () => {
      expect(item.expect).toEqual(item.result);
    });
  });
});
