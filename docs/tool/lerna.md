# Lerna简介
## 原生脚手架开发痛点分析
* 痛点1： 重复操作
   - 多Package本地link
   - 多Package本地依赖安装
   - 多Package单元测试
   - 多Package代码提交
   - 多Package代码发布
* 痛点二： 版本一致性问题
  - 发布时版本一致性
  - 发布后相互依赖版本升级
> Package越多，管理复杂度越高

## Lerna 简介
Lerna 是一个优化基于git+npm多多package项目的管理工具
### 优势
* 大幅减少重复操作
* 升级操作的标准化
> Lerna 是架构优化的产物，它揭示了一个架构真理：项目复杂度提升后，就需要对项目进行架构优化。架构优化的主要目的往往都是以效能为核心。

### 官网： https://lerna.js.org/
案例：babel,vue-cli,create-react-app

## lerna 命令
```bash
lerna add -h
lerna create name ## 创建name的packages

lerna clean # 清空依赖
lerna add @dr-cli-dev/utils packages/core # 在core安装utils依赖
lerna bootstrap # 重新安装依赖

lerna link # 相互依赖

lerna exec -- rm -rf node_modules # 执行packages里的exec命令
lerna exec --scope my-component -- ls -la #执行指定命令

lerna run test # 执行每个packages下的npm 脚本

lerna publish
# lerna ERR! E402 You must sign up for private packages
"publishConfig": {
    "access": "public"
  }
```

require('.') 等价于 require('./index.js')

本地开发，可以使用file:../core