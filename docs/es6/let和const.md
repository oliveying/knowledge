# es6 let const
## let特点
* let 特点
* for计时器很适合let，使用for设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
它怎么知道上一轮循环的值，从而计算出本轮循环的值？这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。

1. 不存在变量提升
2. 暂时性死区（必须先声名，后使用）
3. 同一作用域中，不允许重复声明
4. 声名的变量不挂载到window对象上。
5. let声明的变量只在它所在的代码块有效。

```js
// 暂时性死区
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错
```

let实际上为 JavaScript 新增了块级作用域

* ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。 `应避免在块级作用域内声明函数，可以写成函数表达式`
* es6的块级作用域必须有大括号，如果没有大括号，JavaScript引擎就认为不存在块级作用域`函数只能声明在当前作用域的顶层`

## const 命令
* const 声明一个只读的常量，一旦声明，常量的值不能改变`改变常量的值会报错 TypeError`，这意味着const 一旦声明变量，就必须立即初始化，不能留到以后赋值。`只声明不赋值会报错，SyntaxError`
* 只在声明所在的块级作用域内有效
* const 命令声明的常量也是不提升，存在暂时性死区，只能在声明后使用`不然会报ReferenceError`

本质 const 实际上保证的，不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。

## es6 声明变量的6种方法
es5只有两种声明变量的方法：var命令和 function命令。

es6 除了添加let、const 还有import 命令、class 命令

## 顶层对象的属性

顶层对象，在浏览器环境指的是 window 对象，在node 指的是 global 对象，es5 之中 顶层对象的属性和全局变量是等价的。

es6 规定，顶层对象和全局变量是脱离的
```js
var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a // 1

let b = 1;
window.b // undefined
```

## globalThis对象
* 可用下面方法勉强取到顶层对象
```js
// 方法一
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);

// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};
```

