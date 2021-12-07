# 前端构建
## 基于webpack前端工程构建方案

### 安装
```bash
npm i easywebpack-cli  -g
```
安装成功以后, 就可以在命令行中使用 easywebpack or easy 命令, 比如 easy init, easy build, easy dev, easy print 等。** 记得认真仔细看一下 (easywebpack-cli README)[https://github.com/easy-team/easywebpack-cli] 文档，功能非常强大。**

### 项目初始化
*easy init*
选择安装

```bash
# 发布模式，压缩，hash，去除调试代码
easy build

# 文件不落地磁盘(内存), 默认根据项目根目录下面的 webpack.config.js
# 开发模式, 启动本地开发服务, 适合前端渲染项目, 后端框架项目用框架自己的启动模式.
# 编译和启动
easy server

# 构建发布
easy build prod

# 打印生成的 Webpack 配置
# 打印 entry
easy print dev -n entry 

easy print prod -n module.rules[0]

easy print -n plugins[0]

```


> https://easyjs.cn/easywebpack/about/