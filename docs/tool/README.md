# 各种便捷工具

## 测试tdk工具
[META SEO inspector](https://chrome.google.com/webstore/detail/ibkclpciafdglkjkcibmohobjkcfkaef)

Axure RP Extension for Chrome
0.6.3

竞品排名比较

JSONView 0.0.32.3

React Developer Tools 4.2.0 (10/3/2019)

Vue.js devtools 5.3.2

Postman 5.5.4

User-Agent Switcher for Google Chrome 1.9.3
## 图片压缩工具

[https://tinypng.com/](https://tinypng.com/)

[https://imageoptim.com/mac](https://imageoptim.com/mac)

## sketch
[https://oursketch.com/](https://oursketch.com/)

与ps比较
* sketch软件比较轻量级，适合做UI设计
* ps更适合修图、处理图片

## 资料下载pdf

[http://menvscode.com/](http://menvscode.com/)


## google分析工具

[google分析工具](https://developers.google.cn/analytics/devguides/reporting/?hl=zh-cn)

## [ngrok](https://dashboard.ngrok.com/get-started)

## 插件用法

### [js-cookie](https://github.com/js-cookie/js-cookie)

一个简单，轻巧的JavaScript API，用于处理浏览器cookie
```bash
$ npm i js-cookie

# cdn
<script src="https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js"></script>

# es module
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.mjs"
></script>
import Cookies from 'js-cookie'

Cookies.set('foo', 'bar')


Cookies.set('name', 'value')
Cookies.set('name', 'value', { expires: 7 })
# 创建一个过期的cookie，该cookie对当前页的路径有效：
Cookies.set('name', 'value', { expires: 7, path: '' })

Cookies.get('name') // => 'value'
Cookies.get('nothing') // => undefined

# 读取所有可见的Cookie
Cookies.get() // => { name: 'value' }

# 注意：无法通过传递一个cookie属性来读取特定的cookie（在写入有问题的cookie时可能已使用或可能未使用）：
Cookies.get('foo', { domain: 'sub.example.com' })
# `domain` won't have any effect...!
# 名为foo的cookie仅在.get（）上可用，前提是从调用代码的位置可以看到它；域和/或路径属性在读取时不起作用。

# Delete cookie:
Cookies.remove('name')

# Delete a cookie valid to the path of the current page:
# 删除对当前路径有效的cookie
Cookies.set('name', 'value', { path: '' })
Cookies.remove('name') // fail!
Cookies.remove('name', { path: '' }) // removed!

# IMPORTANT! When deleting a cookie and you're not relying on the default attributes, you must pass the exact same path and domain attributes that were used to set the cookie:
# 重要！删除cookie时，如果不依赖默认属性，则必须传递用于设置cookie的完全相同的路径和域属性：
Cookies.remove('name', { path: '', domain: '.yourdomain.com' })
# 删除一个不存在的Cookie既不会引发异常，也不会返回任何值。
```