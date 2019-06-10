# js 获取窗口、屏幕、页面元素宽高+位置（兼容ie）【转】

> [js 获取各种宽高+位置](https://segmentfault.com/a/1190000012834199)

## 获取屏幕宽高
```js
      window.screen.width / window.screen.height //总区域
      window.screen.availWidth / window.screen.availHeight//可用区域
      //有些手机存在底部任务栏，一般直接用第一个就ok
```
## 获取浏览器宽高
```js
      width = window.outerWidth
      height = window.outerHeight
```
## 获取浏览器位置
```js
      left = window.screenX || window.screenLeft
      top = window.screenY || window.screenTop
```
## 获取页面宽高
```js
      // (方法1)
      width = window.innerWidth
             || document.documentElement.clientWidth
             || document.body.clientWidth
      height = window.innerHeight
              || document.documentElement.clientHeight
              || document.body.clientHeight
      // (方法2)
      function getPageSize(){
         var page = document.documentElement
                   ?document.documentElement
                   :document.body,
             gcr = page.getbBoundingClientRect()
         return {
            width:Math.abs(gcr.right-gcr.left)
            height:Math.abs(gcr.bottom-gcr.top)
         }
      }
      //(移动端，一般用inner就ok了)
      width = window.innerWidth
      height =  window.innerHeight
```
## 获取element宽高
```js
      1、内部宽高client(padding+content，不包滚动条和border)
          width = elment.clientWidth
          height = elment.clientHeight
      2、整体宽高offset(padding+content+border+滚动条)
          width = elment.offsetWidth
          height = elment.offsetHeight
      3、含被overflow隐藏的内部宽高scroll（无滚动条时同1、client）
          width = elment.scrollWidth
          height = elment.scrollHeight
      4、内容宽高getBoundingClientRect(只包含content)
          size = element.getBoundingClientRect().width / height
          ie8-不支持width / height可运用right-left/bottom-top解决
```

## 获取element位置
```js
      offsetParent:设有position值为absolute或relative的最近的上级元素

      1、相对父元素(offsetParent)左上角定位
          left = element.offsetLeft
          top =  element.offsetTop

      2、相对视口左上角定位
          position=element.getBoundingClientRect().left/right/top/bottom
          //在ie下调试时，加上onscroll动态监听scrollTop数据才会正常刷新
```
## 获取滚动条位置
```js
      1、获取element对象滚动条位置
         scrollTop = element.scrollTop

      2、获取window滚动条位置兼容性方法
         scrollTop = window.scrollY
                      || window.pageYOffset
                      || (document.documentElement.scrollTop===0
                          ?document.body.scrollTop
                          :document.documentElement.scrollTop
                          );
         //在ie下调试时，加上onscroll动态监听scrollTop数据才会正常刷新

```

# 扩展
## 获取当前页面横纵坐标的高度

* 获取当前页面滚动条纵坐标的位置：document.body.scrollTop与document.documentElement.scrollTop

* 获取当前页面滚动条横坐标的位置：document.body.scrollLeft与document.documentElement.scrollLeft

1. 各浏览器下 scrollTop的差异:

*IE6/7/8：*  可以使用 document.documentElement.scrollTop；

*IE9及以上：* 可以使用window.pageYOffset或者document.documentElement.scrollTop

*Safari：* window.pageYOffset 与document.body.scrollTop都可以；

*Firefox：* 火狐等等相对标准些的浏览器就省心多了，直接用window.pageYOffset 或者 document.documentElement.scrollTop；

*Chrome：* 谷歌浏览器只认识document.body.scrollTop;

由于在不同情况下，document.body.scrollTop与document.documentElement.scrollTop都有可能取不到值，那到底网页的scrollTop值怎么得到呢？难道又要用JavaScript进行判断？

`document.body.scrollTop` 与 `document.documentElement.scrollTop` 两者有个特点，就是同时只会有一个值生效。

2. 获取scrollTop的值

* 可以使用 `window.pageYoffset`

Window `pageXOffset` 和 `pageYOffset` 属性

其定义：`pageXOffset` 设置或返回当前页面相对于窗口显示区左上角的 `X` 位置。`pageYOffset` 设置或返回当前页面相对于窗口显示区左上角的 `Y` 位置。

所有主流浏览器都支持 `pageXOffset` 和 `pageYOffset` 属性。

注意： IE 8 及 更早 IE 版本不支持该属性,但可以使用 "document.documentElement.scrollLeft" 和 "document.documentElement.scrollTop" 属性 。

由于谷歌兼容问题，可以使用 `document.body.scrollLeft` 和`document.body.scrollTop` 或者`window.pageXoffset`与`window.pageYoffset`。

总结
```js
var heightTop = document.documentElement.scrollTop || document.body.scrollTop;
console.log(heightTop);
```


# Lodash兼容IE6~IE8
> https://blog.csdn.net/j510924/article/details/52701137/
lodash 从4.0.0开始支持的环境有： Chrome 46-47, Firefox 42-43, IE 9-11, Edge 13, Safari 8-9, Node.js 0.10.x, 0.12.x, 4.x, & 5.x, & PhantomJS 1.9.8。已不再支持IE6~IE8。
如果想兼容IE6~IE8，可以使用3.x版本。3.x版本支持的环境有：
Chrome 43-44, Firefox 38-39, IE 6-11, MS Edge, Safari 5-8, ChakraNode 0.12.2, io.js 2.5.0, Node.js 0.8.28, 0.10.40, & 0.12.7, PhantomJS 1.9.8, RingoJS 0.11, & Rhino1.7.6

lodash 3.x 版本没有直接提供可用的js， 需要手动构建。
安装
npm i -g lodash-cli@3.10.1
安装完成后执行
lodash compat
会输出兼容IE6~IE8的版本lodash.custom.js及lodash.custom.min.js

lodash 3.10.1版本文档地址： https://lodash.com/docs/3.10.1#template