## 1.0.6 (2021-12-28)


### Bug Fixes

* ng 字符遗漏问题修复 ([0162c45](https://gitee.com/silvaq/shirkhan-retext/commits/0162c4513ebac50ad97e2e2935139d6cf7455ed6))
* ngh 一起出现的时候h直接合并前一个合并字符导致的3个字符无法识别问题修复,现在只有h无法识别,需要用分隔符明确告知组合关系 ([b9e538c](https://gitee.com/silvaq/shirkhan-retext/commits/b9e538cbfd8062ba071d511fa4e4e341cb804de3))
* ug 2 khan 时的ng 问题修复,自动转换功能优化 ([f81b666](https://gitee.com/silvaq/shirkhan-retext/commits/f81b6660b45ad1a9d42ca174846ac79230f3c8b7))
* 修复了hemze 问题,修复了部分node.value变成undefined问题 ([4742f04](https://gitee.com/silvaq/shirkhan-retext/commits/4742f04e8ec339c769ce4f15655fb3dab26ff68b))


### Features

* tokhan 逻辑优化,多余并复杂的逻辑去掉 ([c50e31d](https://gitee.com/silvaq/shirkhan-retext/commits/c50e31d504fca802b12fb88a1168bcdd7818cb14))
* tokhan逻辑新增了针对ngh特殊场景规则的实现 ([daf21e3](https://gitee.com/silvaq/shirkhan-retext/commits/daf21e3810a0c5c94258427eea386d564f25b331))
* 例子文本微调 ([c238a65](https://gitee.com/silvaq/shirkhan-retext/commits/c238a65811792defe3ff05c0d20ac0aaad0b9644))
* 单词首字母前面有符号是无法补充hemze问题修复,标点符号?不正确问题修复,版本1.0.5 ([7e9534c](https://gitee.com/silvaq/shirkhan-retext/commits/7e9534c8758e737ffb362db42c4f9ee658da1eac))
* 新增khan to ug 的基本功能 ([3160a5c](https://gitee.com/silvaq/shirkhan-retext/commits/3160a5ca5940a4a7e0d100f10567d858de5bc364))
* 新增了ug to khan 插件 ([2e33194](https://gitee.com/silvaq/shirkhan-retext/commits/2e331942f755df3b94f950e5566ff0e1f942892c))
* 版本1.0.1 ([23ff71a](https://gitee.com/silvaq/shirkhan-retext/commits/23ff71a59dd9a5793162b4713dfd42a74dd40bd2))
* 版本1.0.2 ([9d4fc1c](https://gitee.com/silvaq/shirkhan-retext/commits/9d4fc1c1b88d4b5feb5c134fc45d2609e1f8ac14))
* 版本1.0.4 ([ee2fd28](https://gitee.com/silvaq/shirkhan-retext/commits/ee2fd28cc9274577842ab63cff47085545428345))
* 版本1.0.6 ([0143db6](https://gitee.com/silvaq/shirkhan-retext/commits/0143db6973c8f6fc11cc901dd5e8bfa7e7533b19))
* 符号替换逻辑优化,现在所有符号的替换基于shirkhan-alphabet-table进行 ([23b27e0](https://gitee.com/silvaq/shirkhan-retext/commits/23b27e0fcb948e48fe4e36631e8047fe4625e085))
* 补充了使用说明 ([c81c551](https://gitee.com/silvaq/shirkhan-retext/commits/c81c5514faae53aca9704044891db40248676b9e))
* 补充了发布版本控制相关的脚本和script ([cf60cdd](https://gitee.com/silvaq/shirkhan-retext/commits/cf60cddb6fde95ee909a3625135229ba208070ba))



