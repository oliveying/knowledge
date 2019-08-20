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

## bind注意点

### 每一次返回一个新函数
所以监听事件时，要写成
```js
var listener = o.m.bind(o);
element.addEventListener('click', listener);
//  ...
element.removeEventListener('click', listener);
```
### 结合回调函数使用
回调函数是 JavaScript 最常用的模式之一，但是一个常见的错误是，将包含this的方法直接当作回调函数。解决方法就是使用bind方法，将counter.inc绑定counter。
```js
var counter = {
  count: 0,
  inc: function () {
    'use strict';
    this.count++;
  }
};

function callIt(callback) {
  callback();
}

callIt(counter.inc.bind(counter));
counter.count // 1
```
还有一种情况比较隐蔽，就是某些数组方法可以接受一个函数当作参数。这些函数内部的this指向，很可能也会出错。
```js
obj.print = function () {
  this.times.forEach(function (n) {
    console.log(this.name);
  }.bind(this));
};

obj.print()
```

### 结合call方法使用

利用bind方法，可以改写一些 JavaScript 原生方法的使用形式，以数组的slice方法为例。
```js
[1, 2, 3].slice(0, 1) // [1]
// 等同于
Array.prototype.slice.call([1, 2, 3], 0, 1) // [1]
```

上面的代码中，数组的slice方法从[1, 2, 3]里面，按照指定位置和长度切分出另一个数组。这样做的本质是在[1, 2, 3]上面调用Array.prototype.slice方法，因此可以用call方法表达这个过程，得到同样的结果。

call方法实质上是调用Function.prototype.call方法，因此上面的表达式可以用bind方法改写。
```js
var slice = Function.prototype.call.bind(Array.prototype.slice);
slice([1, 2, 3], 0, 1) // [1]
```

上面代码的含义就是，将Array.prototype.slice变成Function.prototype.call方法所在的对象，调用时就变成了Array.prototype.slice.call。类似的写法还可以用于其他数组方法。
```js
var push = Function.prototype.call.bind(Array.prototype.push);
var pop = Function.prototype.call.bind(Array.prototype.pop);

var a = [1 ,2 ,3];
push(a, 4)
a // [1, 2, 3, 4]

pop(a)
a // [1, 2, 3]
```

如果再进一步，将Function.prototype.call方法绑定到Function.prototype.bind对象，就意味着bind的调用形式也可以被改写。
```js
function f() {
  console.log(this.v);
}

var o = { v: 123 };
var bind = Function.prototype.call.bind(Function.prototype.bind);
bind(f, o)() // 123
```

上面代码的含义就是，将Function.prototype.bind方法绑定在Function.prototype.call上面，所以bind方法就可以直接使用，不需要在函数实例上使用。

## 构造函数的prototype
> https://wangdoc.com/javascript/oop/prototype.html

JavaScript 通过构造函数生成新对象，因此构造函数可以视为对象的模板。实例对象的属性和方法，可以定义在构造函数内部。
同一个构造函数的多个实例之间，无法共享属性，从而造成对系统资源的浪费。

可以使用JavaScript 的原型对象（prototype）来解决

JavaScript 继承机制的设计思想就是，原型对象的所有属性和方法，都能被实例对象共享。也就是说，如果属性和方法定义在原型上，那么所有实例对象就能共享，不仅节省了内存，还体现了实例对象之间的联系。而实例对象可以视作从原型对象衍生出来的子对象。

## 原型链

JavaScript 规定，所有对象都有自己的原型对象（prototype）。一方面，任何一个对象，都可以充当其他对象的原型；另一方面，由于原型对象也是对象，所以它也有自己的原型。因此，就会形成一个“原型链”（prototype chain）：对象到原型，再到原型的原型……

如果一层层地上溯，所有对象的原型最终都可以上溯到Object.prototype，即Object构造函数的prototype属性。也就是说，所有对象都继承了Object.prototype的属性。这就是所有对象都有valueOf和toString方法的原因，因为这是从Object.prototype继承的。

那么，Object.prototype对象有没有它的原型呢？回答是Object.prototype的原型是null。null没有任何属性和方法，也没有自己的原型。因此，原型链的尽头就是null。
```js
Object.getPrototypeOf(Object.prototype)
// null
```

上面代码表示，Object.prototype对象的原型是null，由于null没有任何属性，所以原型链到此为止。Object.getPrototypeOf方法返回参数对象的原型，具体介绍请看后文。

读取对象的某个属性时，JavaScript 引擎先寻找对象本身的属性，如果找不到，就到它的原型去找，如果还是找不到，就到原型的原型去找。如果直到最顶层的Object.prototype还是找不到，则返回undefined。如果对象自身和它的原型，都定义了一个同名属性，那么优先读取对象自身的属性，这叫做“覆盖”（overriding）。

注意，一级级向上，在整个原型链上寻找某个属性，对性能是有影响的。所寻找的属性在越上层的原型对象，对性能的影响越大。如果寻找某个不存在的属性，将会遍历整个原型链。

举例来说，如果让构造函数的prototype属性指向一个数组，就意味着实例对象可以调用数组方法。
```js
var MyArray = function () {};

MyArray.prototype = new Array();
MyArray.prototype.constructor = MyArray;

var mine = new MyArray();
mine.push(1, 2, 3);
mine.length // 3
mine instanceof Array // true
```

上面代码中，mine是构造函数MyArray的实例对象，由于MyArray.prototype指向一个数组实例，使得mine可以调用数组方法（这些方法定义在数组实例的prototype对象上面）。最后那行instanceof表达式，用来比较一个对象是否为某个构造函数的实例，结果就是证明mine为Array的实例，instanceof运算符的详细解释详见后文。

## constructor 属性

prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数。
```js
function P() {}
P.prototype.constructor === P // true
```

由于constructor属性定义在prototype对象上面，意味着可以被所有实例对象继承。
```js
function P() {}
var p = new P();

p.constructor === P // true
p.constructor === P.prototype.constructor // true
p.hasOwnProperty('constructor') // false
```

上面代码中，p是构造函数P的实例对象，但是p自身没有constructor属性，该属性其实是读取原型链上面的P.prototype.constructor属性。

constructor属性的作用是，可以得知某个实例对象，到底是哪一个构造函数产生的。
```js
function F() {};
var f = new F();

f.constructor === F // true
f.constructor === RegExp // false
```

上面代码中，constructor属性确定了实例对象f的构造函数是F，而不是RegExp。

另一方面，有了constructor属性，就可以从一个实例对象新建另一个实例。
```js
function Constr() {}
var x = new Constr();

var y = new x.constructor();
y instanceof Constr // true
```

上面代码中，x是构造函数Constr的实例，可以从x.constructor间接调用构造函数。这使得在实例方法中，调用自身的构造函数成为可能。
```js
Constr.prototype.createCopy = function () {
  return new this.constructor();
};
```

上面代码中，createCopy方法调用构造函数，新建另一个实例。

constructor属性表示原型对象与构造函数之间的关联关系，如果修改了原型对象，一般会同时修改constructor属性，防止引用的时候出错。
```js
function Person(name) {
  this.name = name;
}

Person.prototype.constructor === Person // true

Person.prototype = {
  method: function () {}
};

Person.prototype.constructor === Person // false
Person.prototype.constructor === Object // true
```

上面代码中，构造函数Person的原型对象改掉了，但是没有修改constructor属性，导致这个属性不再指向Person。由于Person的新原型是一个普通对象，而普通对象的constructor属性指向Object构造函数，导致Person.prototype.constructor变成了Object。

所以，修改原型对象时，一般要同时修改constructor属性的指向。
```js
// 坏的写法
C.prototype = {
  method1: function (...) { ... },
  // ...
};

// 好的写法
C.prototype = {
  constructor: C,
  method1: function (...) { ... },
  // ...
};

// 更好的写法
C.prototype.method1 = function (...) { ... };
```

上面代码中，要么将constructor属性重新指向原来的构造函数，要么只在原型对象上添加方法，这样可以保证instanceof运算符不会失真。

如果不能确定constructor属性是什么函数，还有一个办法：通过name属性，从实例得到构造函数的名称。
```js
function Foo() {}
var f = new Foo();
f.constructor.name // "Foo"
```

## instanceof 运算符

instanceof运算符返回一个布尔值，表示对象是否为某个构造函数的实例。
```js
var v = new Vehicle();
v instanceof Vehicle // true
```

上面代码中，对象v是构造函数Vehicle的实例，所以返回true。

instanceof运算符的左边是实例对象，右边是构造函数。它会检查右边构建函数的原型对象（prototype），是否在左边对象的原型链上。因此，下面两种写法是等价的。
```js
v instanceof Vehicle
// 等同于
Vehicle.prototype.isPrototypeOf(v)
```

上面代码中，Object.prototype.isPrototypeOf的详细解释见后文。

由于instanceof检查整个原型链，因此同一个实例对象，可能会对多个构造函数都返回true。
```js
var d = new Date();
d instanceof Date // true
d instanceof Object // true
```

上面代码中，d同时是Date和Object的实例，因此对这两个构造函数都返回true。

由于任意对象（除了null）都是Object的实例，所以instanceof运算符可以判断一个值是否为非null的对象。
```js
var obj = { foo: 123 };
obj instanceof Object // true

null instanceof Object // false
```

上面代码中，除了null，其他对象的instanceOf Object的运算结果都是true。

instanceof的原理是检查右边构造函数的prototype属性，是否在左边对象的原型链上。有一种特殊情况，就是左边对象的原型链上，只有null对象。这时，instanceof判断会失真。
```js
var obj = Object.create(null);
typeof obj // "object"
Object.create(null) instanceof Object // false
```

上面代码中，Object.create(null)返回一个新对象obj，它的原型是null（Object.create的详细介绍见后文）。右边的构造函数Object的prototype属性，不在左边的原型链上，因此instanceof就认为obj不是Object的实例。但是，只要一个对象的原型不是null，instanceof运算符的判断就不会失真。

instanceof运算符的一个用处，是判断值的类型。
```js
var x = [1, 2, 3];
var y = {};
x instanceof Array // true
y instanceof Object // true
```

上面代码中，instanceof运算符判断，变量x是数组，变量y是对象。

注意，instanceof运算符只能用于对象，不适用原始类型的值。
```js
var s = 'hello';
s instanceof String // false
```

上面代码中，字符串不是String对象的实例（因为字符串不是对象），所以返回false。

此外，对于undefined和null，instanceOf运算符总是返回false。
```js
undefined instanceof Object // false
null instanceof Object // false
```
利用instanceof运算符，还可以巧妙地解决，调用构造函数时，忘了加new命令的问题。

```js
function Fubar (foo, bar) {
  if (this instanceof Fubar) {
    this._foo = foo;
    this._bar = bar;
  } else {
    return new Fubar(foo, bar);
  }
}
```

上面代码使用instanceof运算符，在函数体内部判断this关键字是否为构造函数Fubar的实例。如果不是，就表明忘了加new命令。


## 构造函数的继承

让一个构造函数继承另一个构造函数，是非常常见的需求。这可以分成两步实现。第一步是在子类的构造函数中，调用父类的构造函数。
```js
function Sub(value) {
  Super.call(this);
  this.prop = value;
}
```

上面代码中，Sub是子类的构造函数，this是子类的实例。在实例上调用父类的构造函数Super，就会让子类实例具有父类实例的属性。

第二步，是让子类的原型指向父类的原型，这样子类就可以继承父类原型。
```js
Sub.prototype = Object.create(Super.prototype);
Sub.prototype.constructor = Sub;
Sub.prototype.method = '...';
```

上面代码中，Sub.prototype是子类的原型，要将它赋值为Object.create(Super.prototype)，而不是直接等于Super.prototype。否则后面两行对Sub.prototype的操作，会连父类的原型Super.prototype一起修改掉。

另外一种写法是Sub.prototype等于一个父类实例。
```js
Sub.prototype = new Super();

```
上面这种写法也有继承的效果，但是子类会具有父类实例的方法。有时，这可能不是我们需要的，所以不推荐使用这种写法。

举例来说，下面是一个Shape构造函数。
```js
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};
```

我们需要让Rectangle构造函数继承Shape。
```js
// 第一步，子类继承父类的实例
function Rectangle() {
  Shape.call(this); // 调用父类构造函数
}
// 另一种写法
function Rectangle() {
  this.base = Shape;
  this.base();
}

// 第二步，子类继承父类的原型
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
```

采用这样的写法以后，instanceof运算符会对子类和父类的构造函数，都返回true。
```js
var rect = new Rectangle();

rect instanceof Rectangle  // true
rect instanceof Shape  // true
```

上面代码中，子类是整体继承父类。有时只需要单个方法的继承，这时可以采用下面的写法。
```js
ClassB.prototype.print = function() {
  ClassA.prototype.print.call(this);
  // some code
}
```

上面代码中，子类B的print方法先调用父类A的print方法，再部署自己的代码。这就等于继承了父类A的print方法。

## 多重继承
JavaScript 不提供多重继承功能，即不允许一个对象同时继承多个对象。但是，可以通过变通方法，实现这个功能。
```js
function M1() {
  this.hello = 'hello';
}

function M2() {
  this.world = 'world';
}

function S() {
  M1.call(this);
  M2.call(this);
}

// 继承 M1
S.prototype = Object.create(M1.prototype);
// 继承链上加入 M2
Object.assign(S.prototype, M2.prototype);

// 指定构造函数
S.prototype.constructor = S;

var s = new S();
s.hello // 'hello'
s.world // 'world'
```

上面代码中，子类S同时继承了父类M1和M2。这种模式又称为 Mixin（混入）。

## Object对象相关方法
### Object.getPrototypeOf()
Object.getPrototypeOf方法返回参数对象的原型。这是获取原型对象的标准方法。

```js
var F = function () {};
var f = new F();
Object.getPrototypeOf(f) === F.prototype // true
```
上面代码中，实例对象f的原型是F.prototype。

下面是几种特殊对象的原型。
```js
// 空对象的原型是 Object.prototype
Object.getPrototypeOf({}) === Object.prototype // true

// Object.prototype 的原型是 null
Object.getPrototypeOf(Object.prototype) === null // true

// 函数的原型是 Function.prototype
function f() {}
Object.getPrototypeOf(f) === Function.prototype // true
```
### Object.setPrototypeOf()

Object.setPrototypeOf方法为参数对象设置原型，返回该参数对象。它接受两个参数，第一个是现有对象，第二个是原型对象。
```js
var a = {};
var b = {x: 1};
Object.setPrototypeOf(a, b);

Object.getPrototypeOf(a) === b // true
a.x // 1
```

上面代码中，Object.setPrototypeOf方法将对象a的原型，设置为对象b，因此a可以共享b的属性。

new命令可以使用Object.setPrototypeOf方法模拟。
```js
var F = function () {
  this.foo = 'bar';
};

var f = new F();
// 等同于
var f = Object.setPrototypeOf({}, F.prototype);
F.call(f);
```

上面代码中，new命令新建实例对象，其实可以分成两步。第一步，将一个空对象的原型设为构造函数的prototype属性（上例是F.prototype）；第二步，将构造函数内部的this绑定这个空对象，然后执行构造函数，使得定义在this上面的方法和属性（上例是this.foo），都转移到这个空对象上。

### Object.create()
生成实例对象的常用方法是，使用new命令让构造函数返回一个实例。但是很多时候，只能拿到一个实例对象，它可能根本不是由构建函数生成的，那么能不能从一个实例对象，生成另一个实例对象呢？

JavaScript 提供了Object.create方法，用来满足这种需求。该方法接受一个对象作为参数，然后以它为原型，返回一个实例对象。该实例完全继承原型对象的属性。
```js
// 原型对象
var A = {
  print: function () {
    console.log('hello');
  }
};

// 实例对象
var B = Object.create(A);

Object.getPrototypeOf(B) === A // true
B.print() // hello
B.print === A.print // true
```

上面代码中，Object.create方法以A对象为原型，生成了B对象。B继承了A的所有属性和方法。

实际上，Object.create方法可以用下面的代码代替。
```js
if (typeof Object.create !== 'function') {
  Object.create = function (obj) {
    function F() {}
    F.prototype = obj;
    return new F();
  };
}
```

上面代码表明，Object.create方法的实质是新建一个空的构造函数F，然后让F.prototype属性指向参数对象obj，最后返回一个F的实例，从而实现让该实例继承obj的属性。

下面三种方式生成的新对象是等价的。
```js
var obj1 = Object.create({});
var obj2 = Object.create(Object.prototype);
var obj3 = new Object();
```

如果想要生成一个不继承任何属性（比如没有toString和valueOf方法）的对象，可以将Object.create的参数设为null。
```js
var obj = Object.create(null);

obj.valueOf()
// TypeError: Object [object Object] has no method 'valueOf'
```

上面代码中，对象obj的原型是null，它就不具备一些定义在Object.prototype对象上面的属性，比如valueOf方法。

使用Object.create方法的时候，必须提供对象原型，即参数不能为空，或者不是对象，否则会报错。
```js
Object.create()
// TypeError: Object prototype may only be an Object or null
Object.create(123)
// TypeError: Object prototype may only be an Object or null
```

Object.create方法生成的新对象，动态继承了原型。在原型上添加或修改任何方法，会立刻反映在新对象之上。
```js
var obj1 = { p: 1 };
var obj2 = Object.create(obj1);

obj1.p = 2;
obj2.p // 2
```

上面代码中，修改对象原型obj1会影响到实例对象obj2。

除了对象的原型，Object.create方法还可以接受第二个参数。该参数是一个属性描述对象，它所描述的对象属性，会添加到实例对象，作为该对象自身的属性。
```js
var obj = Object.create({}, {
  p1: {
    value: 123,
    enumerable: true,
    configurable: true,
    writable: true,
  },
  p2: {
    value: 'abc',
    enumerable: true,
    configurable: true,
    writable: true,
  }
});

// 等同于
var obj = Object.create({});
obj.p1 = 123;
obj.p2 = 'abc';
```

Object.create方法生成的对象，继承了它的原型对象的构造函数。
```js
function A() {}
var a = new A();
var b = Object.create(a);

b.constructor === A // true
b instanceof A // true
```

上面代码中，b对象的原型是a对象，因此继承了a对象的构造函数A。

### Object.prototype.isPrototypeOf()
实例对象的isPrototypeOf方法，用来判断该对象是否为参数对象的原型。
```js
var o1 = {};
var o2 = Object.create(o1);
var o3 = Object.create(o2);

o2.isPrototypeOf(o3) // true
o1.isPrototypeOf(o3) // true
```

上面代码中，o1和o2都是o3的原型。这表明只要实例对象处在参数对象的原型链上，isPrototypeOf方法都返回true。
```js
Object.prototype.isPrototypeOf({}) // true
Object.prototype.isPrototypeOf([]) // true
Object.prototype.isPrototypeOf(/xyz/) // true
Object.prototype.isPrototypeOf(Object.create(null)) // false
```

上面代码中，由于Object.prototype处于原型链的最顶端，所以对各种实例都返回true，只有直接继承自null的对象除外。

### Object.prototype.__proto__
实例对象的__proto__属性（前后各两个下划线），返回该对象的原型。该属性可读写。
```js
var obj = {};
var p = {};

obj.__proto__ = p;
Object.getPrototypeOf(obj) === p // true
```

上面代码通过__proto__属性，将p对象设为obj对象的原型。

根据语言标准，__proto__属性只有浏览器才需要部署，其他环境可以没有这个属性。它前后的两根下划线，表明它本质是一个内部属性，不应该对使用者暴露。因此，应该尽量少用这个属性，而是用Object.getPrototypeOf()和Object.setPrototypeOf()，进行原型对象的读写操作。

原型链可以用__proto__很直观地表示。
```js
var A = {
  name: '张三'
};
var B = {
  name: '李四'
};

var proto = {
  print: function () {
    console.log(this.name);
  }
};

A.__proto__ = proto;
B.__proto__ = proto;

A.print() // 张三
B.print() // 李四

A.print === B.print // true
A.print === proto.print // true
B.print === proto.print // true
```

上面代码中，A对象和B对象的原型都是proto对象，它们都共享proto对象的print方法。也就是说，A和B的print方法，都是在调用proto对象的print方法。

## 获取原型对象方法的比较
如前所述，__proto__属性指向当前对象的原型对象，即构造函数的prototype属性。
```js
var obj = new Object();

obj.__proto__ === Object.prototype
// true
obj.__proto__ === obj.constructor.prototype
// true
```

上面代码首先新建了一个对象obj，它的__proto__属性，指向构造函数（Object或obj.constructor）的prototype属性。

因此，获取实例对象obj的原型对象，有三种方法。
```js
obj.__proto__
obj.constructor.prototype
Object.getPrototypeOf(obj)
```

上面三种方法之中，前两种都不是很可靠。__proto__属性只有浏览器才需要部署，其他环境可以不部署。而obj.constructor.prototype在手动改变原型对象时，可能会失效。
```js
var P = function () {};
var p = new P();

var C = function () {};
C.prototype = p;
var c = new C();

c.constructor.prototype === p // false
```

上面代码中，构造函数C的原型对象被改成了p，但是实例对象的c.constructor.prototype却没有指向p。所以，在改变原型对象时，一般要同时设置constructor属性。
```js
C.prototype = p;
C.prototype.constructor = C;

var c = new C();
c.constructor.prototype === p // true
```

因此，推荐使用第三种Object.getPrototypeOf方法，获取原型对象。
```js
Object.getOwnPropertyNames()
Object.getOwnPropertyNames方法返回一个数组，成员是参数对象本身的所有属性的键名，不包含继承的属性键名。

Object.getOwnPropertyNames(Date)
// ["parse", "arguments", "UTC", "caller", "name", "prototype", "now", "length"]
```

上面代码中，Object.getOwnPropertyNames方法返回Date所有自身的属性名。

对象本身的属性之中，有的是可以遍历的（enumerable），有的是不可以遍历的。Object.getOwnPropertyNames方法返回所有键名，不管是否可以遍历。只获取那些可以遍历的属性，使用Object.keys方法。
```js
Object.keys(Date) // []

```
上面代码表明，Date对象所有自身的属性，都是不可以遍历的。

### Object.prototype.hasOwnProperty()
对象实例的hasOwnProperty方法返回一个布尔值，用于判断某个属性定义在对象自身，还是定义在原型链上。
```js
Date.hasOwnProperty('length') // true
Date.hasOwnProperty('toString') // false
```

上面代码表明，Date.length（构造函数Date可以接受多少个参数）是Date自身的属性，Date.toString是继承的属性。

另外，hasOwnProperty方法是 JavaScript 之中唯一一个处理对象属性时，不会遍历原型链的方法。

in 运算符和 for...in 循环
in运算符返回一个布尔值，表示一个对象是否具有某个属性。它不区分该属性是对象自身的属性，还是继承的属性。
```js
'length' in Date // true
'toString' in Date // true
```

in运算符常用于检查一个属性是否存在。

获得对象的所有可遍历属性（不管是自身的还是继承的），可以使用for...in循环。
```js
var o1 = { p1: 123 };

var o2 = Object.create(o1, {
  p2: { value: "abc", enumerable: true }
});

for (p in o2) {
  console.info(p);
}
// p2
// p1
```

上面代码中，对象o2的p2属性是自身的，p1属性是继承的。这两个属性都会被for...in循环遍历。

为了在for...in循环中获得对象自身的属性，可以采用hasOwnProperty方法判断一下。
```js
for ( var name in object ) {
  if ( object.hasOwnProperty(name) ) {
    /* loop code */
  }
}
```

获得对象的所有属性（不管是自身的还是继承的，也不管是否可枚举），可以使用下面的函数。
```js
function inheritedPropertyNames(obj) {
  var props = {};
  while(obj) {
    Object.getOwnPropertyNames(obj).forEach(function(p) {
      props[p] = true;
    });
    obj = Object.getPrototypeOf(obj);
  }
  return Object.getOwnPropertyNames(props);
}
```

上面代码依次获取obj对象的每一级原型对象“自身”的属性，从而获取obj对象的“所有”属性，不管是否可遍历。

下面是一个例子，列出Date对象的所有属性。
```js
inheritedPropertyNames(Date)
// [
//  "caller",
//  "constructor",
//  "toString",
//  "UTC",
//  ...
// ]
```

### 对象的拷贝
如果要拷贝一个对象，需要做到下面两件事情。

确保拷贝后的对象，与原对象具有同样的原型。
确保拷贝后的对象，与原对象具有同样的实例属性。
下面就是根据上面两点，实现的对象拷贝函数。
```js
function copyObject(orig) {
  var copy = Object.create(Object.getPrototypeOf(orig));
  copyOwnPropertiesFrom(copy, orig);
  return copy;
}

function copyOwnPropertiesFrom(target, source) {
  Object
    .getOwnPropertyNames(source)
    .forEach(function (propKey) {
      var desc = Object.getOwnPropertyDescriptor(source, propKey);
      Object.defineProperty(target, propKey, desc);
    });
  return target;
}
```

另一种更简单的写法，是利用 ES2017 才引入标准的Object.getOwnPropertyDescriptors方法。
```js
function copyObject(orig) {
  return Object.create(
    Object.getPrototypeOf(orig),
    Object.getOwnPropertyDescriptors(orig)
  );
}
```

## 严格模式
> https://wangdoc.com/javascript/oop/strict.html





