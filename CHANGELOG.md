# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.6.0](https://gitee.com/silvaq/shirkhan-retext/compare/v1.5.0...v1.6.0) (2022-01-05)


### ⚠ BREAKING CHANGES

* 按照alphabet-table v1.5的调整进行调整,测试用例更新

### Features

* 按照alphabet-table v1.5的调整进行调整,测试用例更新 ([8166019](https://gitee.com/silvaq/shirkhan-retext/commit/8166019736d8b63e9180a31ecbdaa17f021a6d95))


### Bug Fixes

* 修复khan-uz的ħ 字符母语转换显示不正常问题 ([f42b0bd](https://gitee.com/silvaq/shirkhan-retext/commit/f42b0bd8e2e4c14d88bdd2d0fd29071e99d8ae88))
* 当khan内容包含khan-uz的字符时转换失败问题修复 ([a314b6b](https://gitee.com/silvaq/shirkhan-retext/commit/a314b6bb7e658a7faa941c3420404a9b74cbe707))

## [1.5.0](https://gitee.com/silvaq/shirkhan-retext/compare/v1.4.0...v1.5.0) (2022-01-05)


### Features

* 响应alphabet-table 1.4中的khan-uz字符调整,测试用例更新 ([8f45125](https://gitee.com/silvaq/shirkhan-retext/commit/8f4512595dfb2824694210aba31dde694409aa5d))

## [1.4.0](https://gitee.com/silvaq/shirkhan-retext/compare/v1.3.0...v1.4.0) (2022-01-03)


### Features

* 新增shirkhan-uz的支持,所有转换调整成都通过shirkhan-uz中间层来互换 ([168b0c5](https://gitee.com/silvaq/shirkhan-retext/commit/168b0c55df689b14561c0968b0136fdf9eb50e9c))

## [1.3.0](https://gitee.com/silvaq/shirkhan-retext/compare/v1.2.0...v1.3.0) (2021-12-29)


### Features

* 新增了目前为止遇到过的所有情况的测试用例 ([8553f7b](https://gitee.com/silvaq/shirkhan-retext/commit/8553f7bada7072fea73fbcad947c9066f4a5f7a9))


### Bug Fixes

* 修复h和非双字符的字符一起出现时h前面的字符一起被忽略转移 ([125626a](https://gitee.com/silvaq/shirkhan-retext/commit/125626a4828f7a63265f63c05f58a28154531ab2))
* 修复ug to khan 时单词 ademh 变成adem/h ,缺少关闭终止符问题 ([5c9152b](https://gitee.com/silvaq/shirkhan-retext/commit/5c9152b5f94df8172abc74d79722857be5c755ea))

## [1.2.0](https://gitee.com/silvaq/shirkhan-retext/compare/v1.1.0...v1.2.0) (2021-12-29)

## [1.1.0](https://gitee.com/silvaq/shirkhan-retext/compare/v1.0.9...v1.1.0) (2021-12-29)


### Features

* 修复ug转shirkhan 的时候hemze前面出现符号时没有被去掉问题,保留两个processor ([048f9fc](https://gitee.com/silvaq/shirkhan-retext/commit/048f9fc7ad4a67cdaa53671ec0f6f6a5223c7f1f))

### [1.0.9](https://gitee.com/silvaq/shirkhan-retext/compare/v1.0.8...v1.0.9) (2021-12-28)


### Features

* 发布版本的自动发布线上逻辑去掉,使得确认所有条件成立后再发布到线上,避免误操作带来的麻烦 ([b3b9bdf](https://gitee.com/silvaq/shirkhan-retext/commit/b3b9bdf0c53ba367fbea6738e85a3581cafd5598))


### Bug Fixes

* 修复因preNode是undefine导致的异常 ([0f0864a](https://gitee.com/silvaq/shirkhan-retext/commit/0f0864a134504ee4b5a669327b4296c7ee326d67))

### [1.0.8](https://gitee.com/silvaq/shirkhan-retext/compare/v1.0.7...v1.0.8) (2021-12-28)

### 1.0.7 (2021-12-28)


### Features

* tokhan 逻辑优化,多余并复杂的逻辑去掉 ([c50e31d](https://gitee.com/silvaq/shirkhan-retext/commit/c50e31d504fca802b12fb88a1168bcdd7818cb14))
* tokhan逻辑新增了针对ngh特殊场景规则的实现 ([daf21e3](https://gitee.com/silvaq/shirkhan-retext/commit/daf21e3810a0c5c94258427eea386d564f25b331))
* 例子文本微调 ([c238a65](https://gitee.com/silvaq/shirkhan-retext/commit/c238a65811792defe3ff05c0d20ac0aaad0b9644))
* 单词首字母前面有符号是无法补充hemze问题修复,标点符号?不正确问题修复,版本1.0.5 ([7e9534c](https://gitee.com/silvaq/shirkhan-retext/commit/7e9534c8758e737ffb362db42c4f9ee658da1eac))
* 新增khan to ug 的基本功能 ([3160a5c](https://gitee.com/silvaq/shirkhan-retext/commit/3160a5ca5940a4a7e0d100f10567d858de5bc364))
* 新增了ug to khan 插件 ([2e33194](https://gitee.com/silvaq/shirkhan-retext/commit/2e331942f755df3b94f950e5566ff0e1f942892c))
* 版本1.0.1 ([23ff71a](https://gitee.com/silvaq/shirkhan-retext/commit/23ff71a59dd9a5793162b4713dfd42a74dd40bd2))
* 版本1.0.2 ([9d4fc1c](https://gitee.com/silvaq/shirkhan-retext/commit/9d4fc1c1b88d4b5feb5c134fc45d2609e1f8ac14))
* 版本1.0.4 ([ee2fd28](https://gitee.com/silvaq/shirkhan-retext/commit/ee2fd28cc9274577842ab63cff47085545428345))
* 版本1.0.6 ([0143db6](https://gitee.com/silvaq/shirkhan-retext/commit/0143db6973c8f6fc11cc901dd5e8bfa7e7533b19))
* 符号替换逻辑优化,现在所有符号的替换基于shirkhan-alphabet-table进行 ([23b27e0](https://gitee.com/silvaq/shirkhan-retext/commit/23b27e0fcb948e48fe4e36631e8047fe4625e085))
* 补充了使用说明 ([c81c551](https://gitee.com/silvaq/shirkhan-retext/commit/c81c5514faae53aca9704044891db40248676b9e))
* 补充了发布版本控制相关的脚本和script ([cf60cdd](https://gitee.com/silvaq/shirkhan-retext/commit/cf60cddb6fde95ee909a3625135229ba208070ba))


### Bug Fixes

* ng 字符遗漏问题修复 ([0162c45](https://gitee.com/silvaq/shirkhan-retext/commit/0162c4513ebac50ad97e2e2935139d6cf7455ed6))
* ngh 一起出现的时候h直接合并前一个合并字符导致的3个字符无法识别问题修复,现在只有h无法识别,需要用分隔符明确告知组合关系 ([b9e538c](https://gitee.com/silvaq/shirkhan-retext/commit/b9e538cbfd8062ba071d511fa4e4e341cb804de3))
* ug 2 khan 时的ng 问题修复,自动转换功能优化 ([f81b666](https://gitee.com/silvaq/shirkhan-retext/commit/f81b6660b45ad1a9d42ca174846ac79230f3c8b7))
* 修复了hemze 问题,修复了部分node.value变成undefined问题 ([4742f04](https://gitee.com/silvaq/shirkhan-retext/commit/4742f04e8ec339c769ce4f15655fb3dab26ff68b))

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
