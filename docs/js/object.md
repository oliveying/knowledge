# object

## 判断对象有多少个属性

```js
var obj = {
    a: '1',
    b: '2',
    c: '3'
}
Object.getOwnPropertyNames(obj).length;
Object.keys(obj).length;
```

* 两者区别，只有涉及不可枚举属性时，Object.keys() 只返回可枚举属性
Object.getOwnPropertyNames()方法还返回不可枚举的属性名;

## 格式化代码 *JSON.stringify()*

```js
console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// expected output: "[3,"false",false]"

JSON.stringify({});                    // '{}'
JSON.stringify(true);                  // 'true'
JSON.stringify('foo');                 // '"foo"'
JSON.stringify([1, 'false', false]);   // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 });              // '{"x":5}'
```

## 将一个JSON 字符串转换为对象 JSON.parse()
```js
var json = '{"result":true, "count":42}';
obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true

JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
```

## Object.prototype.toString()的toString()判断数据类型
```js
var o1 = new Object();
o1.toString() // "[object Object]"
```

字符串 `[object Object]`本身没有太大的用处，但是通过自定义toString方法，可以让对象在自动类型转换时，得到想要的字符串形式。
```js
var obj = new Object();

obj.toString = function () {
  return 'hello';
};

obj + ' ' + 'world' // "hello world"
```

数组、字符串、函数、Date 对象都分别部署了自定义的toString方法，覆盖了Object.prototype.toString方法。
```js
[1, 2, 3].toString() // "1,2,3"

'123'.toString() // "123"

(function () {
  return 123;
}).toString()
// "function () {
//   return 123;
// }"

(new Date()).toString()
// "Tue May 10 2016 09:11:31 GMT+0800 (CST)"
```

通过函数的call方法，可以在任意值上调用这个方法，帮助我们判断这个值的类型。
```js
Object.prototype.toString.call(value)
```
不同数据类型的Object.prototype.toString方法返回值如下。
* 数值：返回[object Number]。
* 字符串：返回[object String]。
* 布尔值：返回[object Boolean]。
* undefined：返回[object Undefined]。
* null：返回[object Null]。
* 数组：返回[object Array]。
* arguments 对象：返回[object Arguments]。
* 函数：返回[object Function]。
* Error 对象：返回[object Error]。
* Date 对象：返回[object Date]。
* RegExp 对象：返回[object RegExp]。
* 其他对象：返回[object Object]。

```js
Object.prototype.toString.call(2) // "[object Number]"
Object.prototype.toString.call('') // "[object String]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(Math) // "[object Math]"
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call([]) // "[object Array]"
```
利用这个特性，可以写出一个比typeof运算符更准确的类型判断函数。
```js
var type = function (o){
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};
type({}); // "object"
type([]); // "array"
type(5); // "number"
type(null); // "null"
type(); // "undefined"
type(/abcd/); // "regex"
type(new Date()); // "date"
```



在上面这个type函数的基础上，还可以加上专门判断某种类型数据的方法。
```js
var type = function (o){
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

['Null',
 'Undefined',
 'Object',
 'Array',
 'String',
 'Number',
 'Boolean',
 'Function',
 'RegExp'
].forEach(function (t) {
  type['is' + t] = function (o) {
    return type(o) === t.toLowerCase();
  };
});

type.isObject({}) // true
type.isNumber(NaN) // true
type.isRegExp(/abc/) // true
```

* Object.prototype.hasOwnProperty()

Object.prototype.hasOwnProperty方法接受一个字符串作为参数，返回一个布尔值，表示该实例对象自身是否具有该属性。

## Object.create() 创建实例对象
构造函数作为模板，可以生成实例对象。但是，有时拿不到构造函数，只能拿到一个现有的对象。我们希望以这个现有的对象作为模板，生成新的实例对象，这时就可以使用Object.create()方法。

* 后者继承了前者的属性和方法
```js
var person1 = {
  name: '张三',
  age: 38,
  greeting: function() {
    console.log('Hi! I\'m ' + this.name + '.');
  }
};

var person2 = Object.create(person1);

person2.name // 张三
person2.greeting() // Hi! I'm 张三. 
```

> https://wangdoc.com/javascript/stdlib/object.html#%E6%A6%82%E8%BF%B0

## this
* this 就是当前属性或者方法所在的对象

this 的几种使用场合

1. 全局环境 
2. 构造函数中 

 构造函数中的this，指的是实例对象。
3. 对象的方法中
 如果对象的方法里面包含this，this的指向就是方法运行时所在的对象。该方法赋值给另一个对象，就会改变this的指向。
 
* this注意点
1. 避免多层this
2. 避免数组处理方法中的 this

 数组的map和foreach方法，允许提供一个函数作为参数。这个函数内部不应该使用this。
 
 foreach方法的回调函数中的this，其实是指向window对象
```js
var o = {
  v: 'hello',
  p: [ 'a1', 'a2' ],
  f: function f() {
    this.p.forEach(function (item) {
      console.log(this.v + ' ' + item);
    });
  }
}

o.f()
// undefined a1
// undefined a2
```
解决这个问题的一种方法，就是前面提到的，使用中间变量固定this。
另一种方法是将this当作foreach方法的第二个参数，固定它的运行环境。
```js
var o = {
  v: 'hello',
  p: [ 'a1', 'a2' ],
  f: function f() {
    this.p.forEach(function (item) {
      console.log(this.v + ' ' + item);
    }, this);
  }
}

o.f()
// hello a1
// hello a2
```
3. 避免回调函数中的 this
回调函数中的this往往会改变指向，最好避免使用。
```js
var o = new Object();
o.f = function () {
  console.log(this === o);
}

// jQuery 的写法
$('#button').on('click', o.f);
```
点击按钮以后，控制台会显示false。原因是此时this不再指向o对象，而是指向按钮的 DOM 对象，因为f方法是在按钮对象的环境中被调用的。

>https://wangdoc.com/javascript/oop/this.html

## 绑定this的方法

### Object.prototype.call()
函数实例的call方法，可以指定函数内部this的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数。
```js
var obj = {};

var f = function () {
  return this;
};

f() === window // true
f.call(obj) === obj // true
```
call方法的参数，应该是一个对象。如果参数为空、null和undefined，则默认传入全局对象。
```js
var n = 123;
var obj = { n: 456 };

function a() {
  console.log(this.n);
}

a.call() // 123
a.call(null) // 123
a.call(undefined) // 123
a.call(window) // 123
a.call(obj) // 456
```
如果call方法的参数是一个原始值，那么这个原始值会自动转成对应的包装对象，然后传入call方法。
```js
var f = function () {
  return this;
};

f.call(5)
// Number {[[PrimitiveValue]]: 5}
```
* call方法的一个应用是调用对象的原生方法。
```js
var obj = {};
obj.hasOwnProperty('toString') // false

// 覆盖掉继承的 hasOwnProperty 方法
obj.hasOwnProperty = function () {
  return true;
};
obj.hasOwnProperty('toString') // true

Object.prototype.hasOwnProperty.call(obj, 'toString') // false
```
### Object.prototype.apply()
```js
func.apply(thisValue, [arg1, arg2, ...]);
// call和apply对比
function f(x, y){
  console.log(x + y);
}

f.call(null, 1, 1) // 2
f.apply(null, [1, 1]) // 2
```
* 找出数组中的最大元素
```js
Math.max.apply(null, [1,2,3,4,3,1,44,22])
```
* 将数组中的空值赋值为undefined
空元素与undefined的差别在于，数组的forEach方法会跳过空元素，但是不会跳过undefined。因此，遍历内部元素的时候，会得到不同的结果。
```js
Array.slice.apply(null, [1,,2])
```

* 转化类似数组的对象
利用数组对象的slice方法，可以将一个类似数组的对象（比如arguments对象）转为真正的数组。
```js
Array.prototype.slice.apply({0: 1, length: 1}) // [1]
Array.prototype.slice.apply({0: 1}) // []
Array.prototype.slice.apply({0: 1, length: 2}) // [1, undefined]
Array.prototype.slice.apply({length: 1}) // [undefined]
```

上面代码的apply方法的参数都是对象，但是返回结果都是数组，这就起到了将对象转成数组的目的。从上面代码可以看到，这个方法起作用的前提是，被处理的对象必须有length属性，以及相对应的数字键。
* 绑定回调函数的对象

前面的按钮点击事件的例子，可以改写如下。
```js
var o = new Object();

o.f = function () {
  console.log(this === o);
}

var f = function (){
  o.f.apply(o);
  // 或者 o.f.call(o);
};

// jQuery 的写法
$('#button').on('click', f);
```

上面代码中，点击按钮以后，控制台将会显示true。由于apply方法（或者call方法）不仅绑定函数执行时所在的对象，还会立即执行函数，因此不得不把绑定语句写在一个函数体内。更简洁的写法是采用下面介绍的bind方法。
### Object.prototype.bind()

bind方法用于将函数体内的this绑定到某个对象，然后返回一个新函数。
bing的参数就是所要绑定this的对象
```js
var counter = {
  count: 0,
  inc: function () {
    this.count++;
  }
};

var func = counter.inc.bind(counter);
func();
counter.count // 1
```
bind还可以接受更多的参数，将这些参数绑定原函数的参数。
```js
var add = function (x, y) {
  return x * this.m + y * this.n;
}

var obj = {
  m: 2,
  n: 2
};

var newAdd = add.bind(obj, 5);
newAdd(5) // 20
```

第一个参数也可以是null，undefined, 等于将this绑定到全局对象，函数运行时this指向顶层对象（浏览器为window）
```js
function add(x, y) {
  return x + y;
}

var plus5 = add.bind(null, 5);
plus5(10) // 15
```

bind注意点


