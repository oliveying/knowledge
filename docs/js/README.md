# js 知识点总结

## 去掉 console 的意义，
   1.  一些浏览器 如:低版本ie ，未打开控制台之前，没有console.log 对应的对象和方法。
   2. 在传递给console.log的对象是不能被垃圾回收,最好不要在页面中console.log任何大对象，这样可能会影响页面的整体性能，特别在生产环境中。
   3. 代码不严谨，泄漏代码逻辑
   4. 对有意义的 console 造成污染。


## 使用trim去除空格，ie8不支持trim

```js
if (typeof String.prototype.trim == 'undefined') {
    String.prototype.trim = function () {
        return this.replace(/^\s*|\s*$/g, '')
    }
}
```

