## break、continue、return区别

1. break     直接跳出当前的循环，从当前循环外面开始执行,忽略循环体中任何其他语句和循环条件测试。他只能跳出一层循环，如果你的循环是嵌套循环，那么你需要按照你嵌套的层次，逐步使用break来跳出.

2. continue     也是终止当前的循环过程，但他并不跳出循环,而是继续往下判断循环条件执行语句.他只能结束循环中的一次过程,但不能终止循环继续进行.    

3. return 语句可被用来使 正在执行分支程序返回到调用它方法。(费解)

   return表示中止当前函数的运行，并将操作权返回给调用者。
   
## 数组去重

1. Array.filter() + indexOf 处理一个长度为 15W 的数组都需要 8427ms
```js
function distinct(a, b) {
    let arr = a.concat(b);
    return arr.filter((item, index)=> {
        return arr.indexOf(item) === index
    })
}
```

2. 双重 for 循环 8427ms
最容易理解的方法，外层循环遍历元素，内层循环检查是否重复

当有重复值的时候，可以使用 push()，也可以使用 splice()

```js
function distinct(a, b) {
    let arr = a.concat(b);
    for (let i=0, len=arr.length; i<len; i++) {
        for (let j=i+1; j<len; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一
                len--;
                j--;
            }
        }
    }
    return arr
}
```

3.  for...of + includes() 与 filter + indexOf 
双重for循环的升级版，外层用 for...of 语句替换 for 循环，把内层循环改为 includes()

先创建一个空数组，当 includes() 返回 false 的时候，就将该元素 push 到空数组中 

类似的，还可以用 indexOf() 来替代 includes()
```js
function distinct(a, b) {
    let arr = a.concat(b)
    let result = []
    for (let i of arr) {
        !result.includes(i) && result.push(i)
    }
    return result
}
```

4. Array.sort()120
   
   首先使用 sort() 将数组进行排序
   
   然后比较相邻元素是否相等，从而排除重复项
   
  ```js
function distinct(a, b) {
       let arr = a.concat(b)
       arr = arr.sort()
       let result = [arr[0]]
   
       for (let i=1, len=arr.length; i<len; i++) {
           arr[i] !== arr[i-1] && result.push(arr[i])
       }
       return result
   }
```
   这种方法只做了一次排序和一次循环，所以效率会比上面的方法都要高
   
5. new Set()57ms
   
   ES6 新增了 Set 这一数据结构，类似于数组，但 Set 的成员具有唯一性
   
   基于这一特性，就非常适合用来做数组去重了

```js
 function distinct(a, b) {
       return Array.from(new Set([...a, ...b]))
   }
```
  
6. for...of + Object 16ms
首先创建一个空对象，然后用 for 循环遍历

利用对象的属性不会重复这一特性，校验数组元素是否重复

```js
function distinct(a, b) {
    let arr = a.concat(b)
    let result = []
    let obj = {}

    for (let i of arr) {
        if (!obj[i]) {
            result.push(i)
            obj[i] = 1
        }
    }

    return result
}
```

> [扩展](https://github.com/lessfish/underscore-analysis/issues/9)


## 运算符左移，使用左移将颜色rgb值转为hex，详见操作符
```js
var color = {r: 186, g: 218, b: 85};

// RGB to HEX
// (1 << 24)的作用为保证结果是6位数
var rgb2hex = function(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16) // 先转成十六进制，然后返回字符串
    .substr(1);   // 去除字符串的最高位，返回后面六个字符串
}

rgb2hex(color.r, color.g, color.b)
// "#bada55"
```

## 箭头函数有几个使用注意点

1. 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
4. 不可以使用yield命令，因此箭头函数不能用作 Generator 函数

## 判断原型链输出结果

```js
function Foo() {
  getName = function () {
    alert(1);
  }
  return this;
}

Foo.getName = function () {
  alert(2)
}
Foo.prototype.getName = function () {
  alert(3)
}

var getName = function () {
  alert(4)
}

function getName() {
  alert(5)
}

Foo.getName();
getName();
Foo().getName(); 
new Foo.getName();
new Foo().getName();
new new Foo().getName();

// 2 4 1 2 3 3
```

## 计算当前页面打开之后停留时间

```js
var second = 0;
var minute = 0;
var hour = 0;
window.setTimeout("interval();", 1000);

function interval() {
  second++;
  if (second == 60) {
    second = 0;
    minute += 1;
  }
  if (minute == 60) {
    minute = 0;
    hour += 1;
  }
  document.form1.textarea.value = hour + "时" + minute + "分" + second + "秒";
  window.setTimeout("interval();", 1000);
}
```

## ie和firefox 区别
```js
1. IE 支持 currentStyle, Firefox getComputStyle
2. IE 支持 innerText， Firefox textContent
3. 透明滤镜 IE 支持 alpha(opacity=num)；Firefox -moz-opacity: num
4. 事件方面 IE 支持 attachEvent; Firefox 支持 addEventListener
5. 对于鼠标位置：IE 支持 event.clientX；Firefox 支持 event.pageX
6. IE使用 event.srcElement；Firefox 使用event.target
7. 消除list 原点，ie margin:0 ;Firefox ：margin:0,padding:0,list-style:none
8. ie7以下不支持圆角
```
## javascript创建对象的几种方式
> [引用](https://www.html.cn/qa/javascript/11183.html)
1. 通过“字面量”方式创建
```js
var persons = {}
```
2. 通过“构造函数”方式创建
```js
var obj  = new 函数名();
```
3. 通过object 方式创建
```js
var obj = new Object();
```
4. 使用工厂模式创建对象
这种方式是使用一个函数来创建对象，减少重复代码，解决了前面三种方式的代码冗余的问题，但是方法不能共享的问题还是存在。


```js
	// 使用工厂模式创建对象
	// 定义一个工厂方法
	function createObject(name) {
		var o = new Object();
		o.name = name;
		o.sayName = function() {
			alert(this.name);
		};
		return o;
	}

	var o1 = createObject('zhang');
	var o2 = createObject('li');

	//缺点：调用的还是不同的方法
	//优点：解决了前面的代码重复的问题
	alert(o1.sayName === o2.sayName); //false
```

5. 通过原型模式创建对象
每个方法中都有一个原型（prototype），每个原型都有一个构造器（constructor），构造器又指向这个方法。

```js
function Animal(){}
alert(Animal.prototype.constructor==Animal);//true
/*
	 *  原型模式创建对象
	 */
	function Animal() {}

	Animal.prototype.name = 'animal';
	Animal.prototype.sayName = function() {
		alert(this.name);
	};

	var a1 = new Animal();
	var a2 = new Animal();

	a1.sayName();

	alert(a1.sayName === a2.sayName); //true
	alert(Animal.prototype.constructor); //function Animal(){}
	alert(Animal.prototype.constructor == Animal); //true


```

## JavaScript异步编程的几种方法
> [原文](http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html)
1. 回调函数
回调函数的优点是简单、容易理解和部署，缺点是不利于代码的阅读和维护，各个部分之间高度耦合（Coupling），流程会很混乱，而且每个任务只能指定一个回调函数
```js
a();
b();
// 如果f1是一个很耗时的任务，可以考虑改写f1，把f2写成f1的回调函数。
function f1(callback){

　　　　setTimeout(function () {

　　　　　　// f1的任务代码

　　　　　　callback();

　　　　}, 1000);

　　}
f1(f2);
```
2. 事件监听
这种方法的优点是比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以"去耦合"（Decoupling），有利于实现模块化。缺点是整个程序都要变成事件驱动型，运行流程会变得很不清晰。
```js
f1.on('done', f2);
// f1执行完毕后执行f2；
function f1() {
  setTimeout(function() {
    f1.trigger('done');
  },200)
}
```
3. 发布/订阅

上一节的"事件"，完全可以理解成"信号"。

我们假定，存在一个"信号中心"，某个任务执行完成，就向信号中心"发布"（publish）一个信号，其他任务可以向信号中心"订阅"（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做"发布/订阅模式"（publish-subscribe pattern），又称"观察者模式"（observer pattern）。

这个模式有多种实现，下面采用的是Ben Alman的Tiny Pub/Sub，这是jQuery的一个插件。

```js
// 首先，f2向"信号中心"jQuery订阅"done"信号。
　　jQuery.subscribe("done", f2);
　　function f1(){

　　　　setTimeout(function () {

　　　　　　// f1的任务代码

　　　　　　jQuery.publish("done");

　　　　}, 1000);

　　}

// jQuery.publish("done")的意思是，f1执行完成后，向"信号中心"jQuery发布"done"信号，从而引发f2的执行。

// 此外，f2完成执行后，也可以取消订阅（unsubscribe）。

　　jQuery.unsubscribe("done", f2);

```

这种方法的性质与"事件监听"类似，但是明显优于后者。因为我们可以通过查看"消息中心"，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行。

4. Promises对象

Promises对象是CommonJS工作组提出的一种规范，目的是为异步编程提供统一接口。

简单说，它的思想是，每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数。比如，f1的回调函数f2,可以写成：
```js
　　f1().then(f2);

// f1要进行如下改写（这里使用的是jQuery的实现）：

　　function f1(){

　　　　var dfd = $.Deferred();

　　　　setTimeout(function () {

　　　　　　// f1的任务代码

　　　　　　dfd.resolve();

　　　　}, 500);

　　　　return dfd.promise;

　　}

// 这样写的优点在于，回调函数变成了链式写法，程序的流程可以看得很清楚，而且有一整套的配套方法，可以实现许多强大的功能。

// 比如，指定多个回调函数：

　　f1().then(f2).then(f3);

// 再比如，指定发生错误时的回调函数：

　　f1().then(f2).fail(f3);
```
而且，它还有一个前面三种方法都没有的好处：如果一个任务已经完成，再添加回调函数，该回调函数会立即执行。所以，你不用担心是否错过了某个事件或信号。这种方法的缺点就是编写和理解，都相对比较难。

## 构造函数与普通函数的区别
> https://blog.csdn.net/weixin_41796631/article/details/82939585
1. 构造函数也是一个普通函数，创建方式和普通函数一样，但`构造函数习惯首字母大写`；
2. 构造函数和普通函数的区别在于：调用方式不一样。作用也不一样（构造函数用来新建实例对象）
3. 调用方式不一样，一个直接调用，一个new关键词调用
4. 构造函数的函数名与类名相同：`Person()`这个构造函数，Person既是函数名，也是这个对象的类名
5. 内部用this来构造属性和方法
6. 构造函数的执行流程 
    1. 创建一个新对象；
    2. 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）；
    3. 执行构造函数中的代码（为这个新对象添加属性）；
    4. 返回新对象。
7. 普通函数例子：因为没有返回值，所以为undefined
8. 构造函数例子：构造函数会马上创建一个新对象，并将该新对象作为返回值返回
9. 用 `instanceof`可以检查一个对象是否是一个类的实例，是则返回ture；所有对象都是Object对象的后代，所以任何对象和Object做 `instanceof` 都会返回ture

## 匹配html里的id
```js
var regexp = /id="[^"]*"/
undefined
var b = `<div id="hhh" class="abc"></div>`
undefined
b.match(regexp)

```