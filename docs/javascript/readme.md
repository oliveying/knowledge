## new命令可以使用Object.setPrototypeOf方法模拟。
```js
var F = function () {
  this.foo = 'bar';
};

var f = new F();
// 等同于
var f = Object.setPrototypeOf({}, F.prototype);
F.call(f);
```

## Object.create方法可以用下面的代码代替。
```js
if (typeof Object.create !== 'function') {
  Object.create = function (obj) {
    function F() {}
    F.prototype = obj;
    return new F();
  };
}
```

## 防止构造函数不加new 的解决办法
1. 在构造函数内部加 `use strict`
2. 构造函数内部判断是否使用new命令，如果发现没有使用，则直接返回一个实例对象。
```js
function Fubar(foo, bar) {
  if (!(this instanceof Fubar)) {
    return new Fubar(foo, bar);
  }

  this._foo = foo;
  this._bar = bar;
}

Fubar(1, 2)._foo // 1
(new Fubar(1, 2))._foo // 1
```

## new 的命令原理

* 创建一个空对象，作为将要返回的对象实例。
* 将这个空对象的原型，指向构造函数的prototype属性。
* 将这个空对象赋值给函数内部的this关键字。
* 开始执行构造函数内部的代码。

* 红宝书使用 new 操作符调用构造函数，实际上会经历一下4个步骤：
1. 创建一个新对象；
2. 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）；
3. 执行构造函数中的代码（为这个新对象添加属性）；
4. 返回新对象。
## new命令简化的内部流程，可以用下面的代码表示。
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

```
## 对象的拷贝
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

// 另一种更简单的写法，是利用 ES2017 才引入标准的Object.getOwnPropertyDescriptors方法。

function copyObject(orig) {
  return Object.create(
    Object.getPrototypeOf(orig),
    Object.getOwnPropertyDescriptors(orig)
  );
}
```