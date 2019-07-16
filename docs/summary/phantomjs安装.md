# 在 Mac 上安装 phantomjs  及运行， 一路波折

* 搜索MAC上安装phantomjs，得到下面方法：

1. 下载phantomjs.zip并解压，bin/phantomjs直接可用。

2. 或者通过Homebrew安装
```bash
brew update && brew install phantomjs
```
3. 通过下载Mac版本配置环境变量
```bash
vi .bash_profile
```

4. 通过MacPorts安装
```bash
sudo port selfupdate && sudo port install phantomjs

```

前三种方法，都踩了一遍坑。
最终让我安装成功的方法：使用Homebrew安装。

## Homebrew 是什么？
官方介绍：The missing package manager for OS X（OS X 不可或缺的套件管理器）

* 安装：
非常简单 直接在mac终端执行命令行
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

```

* 测试：
输入 `brew -v`  可看到版本号，说明安装成功。

安装phantomjs：
```bash
brew update
brew install phantomjs // 只输入phantomjs即可
```
安装成功！可输入phantomjs -v 查看版本号来确认。

简单的hello.js:
```js
console.log("Hello,world!");
phantom.exit();
```
* 运行：
cd  要运行的js文件所在目录
```bash
phantomjs hello.js // Hello, world!
```

## 注意，MacOS升级后出现xcrun: error: invalid active developer path, missing xcrun的问题

> xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
 
解决办法，重装 `xcode command line：`

```bash
xcode-select --install
```

如果还没有解决，执行以下命令
```bash
sudo xcode-select -switch /
```

出现错误的原因是： 少了系统需要的运行库，运行命令行后会自动安装

噢耶，成功

