## 安装淘宝源地址
```bash
npm config set registry=https://registry.npm.taobao.org
```
## 使用npm config命令设置npm官网源地址：
```bash
npm config set registry=http://registry.npmjs.org
```

## 安装cnpm

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 安装指定版本的gulp
```bash
npm install --save-dev gulp@3.9.1

```

## node版本管理 nvm 和 n 的区别

都是node的版本管理工具。

n是一个npm包，nvm是一个独立的软件
n支持windows，nvm不支持windows，可以使用nvmw或者nvm-windows
n切换node版本时，node全局模块不受影响；nvm切换node版本时，所有的全局模块需要重新安装，并且需要手动指定node的路径

> http://taobaofed.org/blog/2015/11/17/nvm-or-n/

## n 安装

```bash
npm install -g n # 安装n
sudo n 10.13.0 # 切换版本

```

## 当清node_modules 出现某一些包错误时候，查不到原因时候，可以适当的清除缓存试试。删掉重新安装

```bash
rm -rf node_modules
npm cache clean
npm install
```

## npm install 报错时 先降级node，再升级node版本就行

1.降级node版本
```bash
sudo n 6.3
```
2.降级node后npm正常可用了，先升级npm版本
```bash
sudo npm install npm -g

```
3.再次升级node版本
```bash
sudo n 10.13.0
```
4.至此npm恢复正常