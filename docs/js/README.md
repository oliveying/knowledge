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

## 声明一个对象和数组的几种方法和区别

> https://wangdoc.com/javascript/oop/new.html

## new 命令的原理
使用new命令时，它后面的函数依次执行下面的步骤。

* 创建一个空对象，作为将要返回的对象实例。
* 将这个空对象的原型，指向构造函数的prototype属性。
* 将这个空对象赋值给函数内部的this关键字。
* 开始执行构造函数内部的代码。

* 如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象。

new简化流程
```js
function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
  // 将 arguments 对象转为数组
  var args = [].slice.call(arguments);
  // 取出构造函数
  var constructor = args.shift();
  // 创建一个空对象，继承构造函数的 prototype 属性
  var context = Object.create(constructor.prototype);
  // 执行构造函数
  var result = constructor.apply(context, args);
  // 如果返回结果是对象，就直接返回，否则返回 context 对象
  return (typeof result === 'object' && result != null) ? result : context;
}

// 实例
var actor = _new(Person, '张三', 28);
```

## 判断ie浏览器
```js
    var isIE = new RegExp("MSIE (\\d+\\.\\d+);").test(window.navigator.userAgent) || ("ActiveXObject" in window);

```
## 11个内置对象
* String
* Number
* Boolean
* Error（6个）
* Math
* Date
* RegExp
* Object
* Function
* Array
* Global(Window)

## window.onbeforeunload 是否确定退出页面

```js
window.onbeforeunload = function () {
    // 条件
    return "您确定要退出页面吗？";
};
```

## 取消连续点击选中文字效果

* 直接在元素中加user-select
```css
div{
    -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    -khtml-user-select:none;/*早期浏览器*/
      user-select:none;
}

```
* 或者

```js
<section onselectstart="return false;">这又是一段文字</section>

```

## 正则中的输入限制验证

```js
 keywords.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'); // 默认这些特殊字符加\
//  &lt; < 小于号  
//  &gt; > 大于号  
//  &amp; & 和  
//  &apos; ' 单引号  
//  &quot; " 双引号
// 以上都需要替换

var escapeRegex = function (str = '') {
    return str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
};

var htmlEntities = function (str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};
```

## 评论中添加表情思路
* 先自定义表情包的图片路径及名称

* 渲染之前
通过后端传过来的字段比如“[苦笑]”， 对应自定义表情包中的“[苦笑]”名称及对应的图片，全局把名称替换为图片，并初始化图片大小样式等；

* 评论时
通过点击表情包，使用jquery.face.js插件

## 从Url中获取某一参数的参数值:var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");详解

* 下面代码是从url中获取参数名为name的参数值
```js
var getQueryString = function(name) {
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
var r = window.location.search.substr(1).match(reg);

if (r != null)return decodeURIComponent(r[2]);
return null;

};

^n 的用法 : 匹配任何开头为n的字符串

"(^|&)"+name 的含义 : 匹配以&name开头 或者 空白name 开头的字符串

(其实|前面有空白也就是什么都没有,也就是通配url中第一个参数或第二个参数的情况)

[^abc]的用法 : 匹配除了abc以外的其他字符

[^&]的含义 : 匹配除了 & 以外的任意字符 (也很好理解,因为一旦出现 & 说明是另一个参数了,所以不能匹配了)

[^&]*的含义 : 匹配任意数量的 除了 & 以外的字符 (也就是说name=后面的值一旦有&则就不向后取值了)

n$ 的用法 : 匹配任何结尾为 n 的字符串

(&|$)的含义 : 匹配任何以 & 结尾 或者 以空白结尾的参数 (也就是说匹配了该参数在中间或者最后一个参数的情况)

([^&]*)(&|$)的含义 : 匹配 & 之外的以任意多个 参数值,一旦遇到 & 或者 空白 就中止

(遇到 & 说明到下一个参数了,也就是该参数在中间的情况,遇到 空白 说明没有值了,也就是该参数为最后一个参数)

最后整个 “(^|&)” + name + "=([^&]*)(&|$)的含义 :

匹配以 &name=开头 或者 name=开头 中间为任意多个除了 & 以外的字符 一旦遇到 & 或者 空白 就中止取值

最后就是第二个参数:

i : 执行对大小写不敏感的匹配

(也就是说 我们要的参数 state 可以匹配 state 或者 STATE 或者 StAtE 等等吧 就是对大小写不敏感)

g : 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）

m : 执行多行匹配


```

> https://blog.csdn.net/weixin_44296929/article/details/101207166

## 解决调用构造函数时忘记加new 的问题
```js
// 1 使用instanceof
function Fubar (foo, bar) {
  if (this instanceof Fubar) {
    this._foo = foo;
    this._bar = bar;
  } else {
    return new Fubar(foo, bar);
  }
}
// 2 使用
function Fubar(foo, bar){
  'use strict';
  this._foo = foo;
  this._bar = bar;
}

function Person(name) {
  if (new.target !== undefined) {
    this.name = name;
  } else {
    throw new Error('必须使用 new 命令生成实例');
  }
}

// 另一种写法
function Person(name) {
  if (new.target === Person) {
    this.name = name;
  } else {
    throw new Error('必须使用 new 命令生成实例');
  }
}
```
## 清除前后空格，（兼容所有浏览器）
```js
String.prototype.trim = String.prototype.trim || function () {
  return this.replace(/^\s+|\s+$/g, '');
}
```
## 定义一个log方法，让他可以代替console.log
```js
function log() {
  console.log.apply(console, arguments);
}
```
## 为什么要使用事件委托
避免内存泄漏（ie9一下）
减少事件数量
预测未来元素

> https://wangdoc.com/javascript/oop/prototype.html