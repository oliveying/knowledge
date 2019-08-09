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

## JavaScript中call,apply,bind方法的总结。
### apply()

使用 apply， 你可以继承其他对象的方法：

注意这里apply()的第一个参数是null，在非严格模式下，第一个参数为null或者undefined时会自动替换为指向全局对象，apply()的第二个参数为数组或类数组。

```js
var a = {
    user:"追梦子",
    fn:function(e,ee){
        console.log(this.user); //追梦子
        console.log(e+ee); //520
    }
}
var b = a.fn;
var arr = [500,20];
b.apply(a,arr);
```
### call()

call()是apply()的一颗语法糖，作用和apply()一样，同样可实现继承，唯一的区别就在于call()接收的是参数列表，而apply()则接收参数数组。
```js
var a = {
    user:"追梦子",
    fn:function(e,ee){
        console.log(this.user); //追梦子
        console.log(e+ee); //3
    }
}
var b = a.fn;
b.call(a,1,2);
```

### bind()

bind()的作用与call()和apply()一样，都是可以改变函数运行时上下文，区别是call()和apply()在调用函数之后会立即执行，而bind()方法调用并改变函数运行时上下文后，返回一个新的函数，供我们需要时再调用。

```js
var a = {
    user:"追梦子",
    fn:function(e,d,f){
        console.log(this.user); //追梦子
        console.log(e,d,f); //10 1 2
    }
}
var b = a.fn;
var c = b.bind(a,10);
c(1,2);
```
* 如何选用
如果不需要关心具体有多少参数被传入函数，选用apply()；

如果确定函数可接收多少个参数，并且想一目了然表达形参和实参的对应关系，用call()；

如果我们想要将来再调用方法，不需立即得到函数返回结果，则使用bind();

* 总结

call()、apply()和bind()都是用来改变函数执行时的上下文，可借助它们实现继承；

call()和apply()唯一区别是参数不一样，call()是apply()的语法糖；

bind()是返回一个新函数，供以后调用，而apply()和call()是立即调用。

应用实践：

1. 使用log去调用console

```js
function log () {
  console.log.apply(console, arguments);
}
```
2. arguments类数组转为数组

```js
function test(){
  return Array.prototype.slice.apply(arguments);
}
```


