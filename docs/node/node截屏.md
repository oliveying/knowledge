```
node-webkit 屏幕截图功能
https://www.cnblogs.com/vaal-water/p/4200659.html
node截屏
https://www.npmjs.com/package/desktop-screenshot

有用
* NodeJS + PhantomJS 抓取页面信息以及截图
https://blog.csdn.net/kkwant/article/details/81272070

```

使用node-webshot进行网页截图
http://developer.51cto.com/art/201608/516453.htm

node.js网页截图
http://ju.outofmemory.cn/entry/117277


图片优化

最后介绍两个图片优化的工具
https://www.npmjs.com/package/imagemin
svgo

```js
var screenshot = require('desktop-screenshot'); 
  
screenshot("screenshot.png", function(error, complete) { 
  if(error) 
    console.log("Screenshot failed", error); 
  else
    console.log("Screenshot succeeded"); 
}); 
```

## 使用 Electron 创建屏幕截图
> https://github.com/demopark/electron-api-demos-Zh_CN
* 属于一个框架

## node-desktop-screenshot
* 屏幕截屏
* 资料介绍很少

## 使用node-webshot进行网页截图

* 用到的npm模块有yargs和node-webshot，关于yargs的文章参考这里从零开始打造个人专属命令行工具集——yargs完全指南。

node-webshot是调用phantomjs来生成网页截图的，phantomjs是非常有名的npm项目，相当于一个脚本版的WebKit浏览器 ，通过phantomjs可以使用脚本 和网页进行交互，所以phantomjs经常用来进行网页自动化测试。

phantomjs会和普通的浏览器一样加载完整的网页内容，然后在内存里面进行渲染，虽然肉眼看不到它渲染的页面，但是通过生成图片就可以看到了，node-webshot使用的就是phantomjs的render接口来获取网页截图的。

## 使用desktop-screenshot进行系统截图
> https://github.com/johnvmt/node-desktop-screenshot

* desktop-screenshot是一个跨平台的系统截图项目，用法和node-webshot类似，只是少了一个url参数。

## plantomjs

用到的资料

https://phantomjs.org/

https://github.com/ariya/phantomjs


一个NodeJS截图&页面信息抓取库： http://miniflycn.github.io/url-extract/index-zh-cn.html

特点： 利用PhantomJS做网页截图经济适用，但其API较少，做其他功能就比较吃力了。例如，其自带的Web Server Mongoose最高只能同时支持10个请求，指望他能独立成为一个服务是不怎么实际的。所以这里需要另一个语言来支撑服务，这里选用NodeJS来完成。


https://cnodejs.org/topic/51bde3b060af11cd33568647
phantomjs很好用，但是注意要和nodejs配合使用的话使用node.js 0.8.4 + Phantom1.9。 node.js 0.10.4 + [Phantom1.6 ~ Phantom1.9]有bug




## 介绍yargs 
> http://developer.51cto.com/art/201608/515865.htm

## 使用node 命令行程序开发教程

> https://www.kancloud.cn/kancloud/command-line-with-node/48648