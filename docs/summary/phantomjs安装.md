# 在 Mac 上安装 phantomjs  及运行， 一路波折

* 搜索MAC上安装phantomjs，得到下面方法：

1. 下载phantomjs.zip并解压，bin/phantomjs直接可用。

2. 或者通过Homebrew安装
```bash
brew update && brew cask install phantomjs
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
brew cask install phantomjs // 只输入phantomjs即可
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


## 后续，安装之后，node有问题了，项目无法启动：
npm -v 不生效；办法，可以重装node

### 卸载node

如果不是通过brew安装的
```bash
lsbom -f -l -s -pf /var/db/receipts/org.nodejs.pkg.bom \| while read i; do sudo rm /usr/local/${i}done

sudo rm -rf /usr/local/lib/node \

    /usr/local/lib/node_modules \

    /var/db/receipts/org.nodejs.*
```

如果是通过官方网站安装的（本人使用官网），执行下面命令
```bash
sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}
```
1. 安装node
```bash
brew install node
```
2. 安装后有可能在终端输入node找不到该命令，执行如下
```bash
brew link node
```

3. 根据提示执行
```bash
brew link --overwrite --dry-run node

```

4. 根据提示删除这些冲突
```bash
sudo rm /usr/local/lib/dtrace/node.d
```
5. 之后运行
```bash
brew link --overwrite node
```

* 过程可能会报以下错误 `Homebrew npm install: could not symlink`

```bash
sudo chown -R $(whoami) $(brew --prefix)/*
```

解决，但是npm还是不能用，重新使用brew卸载npm，然后安装；成功！

* 使用brew安装node会安装最新的，和之前的环境依赖可能会有冲突，所以，最后使用了node官网下载安装
node版本回退到10.16.0

开始是v12.6.0



phantomjs样例
### http://www.mamicode.com/info-detail-1937638.html
https://blog.csdn.net/sqzhao/article/details/48655979
