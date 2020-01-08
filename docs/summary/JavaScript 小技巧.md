# JavaScript 小技巧

> [ 11个教程中不常提及的 JavaScript 小技巧](https://segmentfault.com/a/1190000018897633)

有一些在日常工作中经常出现却容易被忽略的JavaScript小技巧，作者从中选取了11个教程中不常被提及的案例，供大家一起学习！


## 过滤唯一值

Set类型是在ES6中新增的，它类似于数组，但是成员的值都是唯一的，没有重复的值。结合扩展运算符（...）我们可以创建一个新的数组，达到过滤原数组重复值的功能。
```js
const array = [1, 2, 3, 3, 5, 5, 1];
const uniqueArray = [...new Set(array)];

console.log(uniqueArray); // [1, 2, 3, 5]
```

在ES6之前，我们如果想要实现这个功能的话，需要的处理代码要多很多。这个技巧的适用范围是数组中的数值的类型为：undefined， null， boolean， string， number。当包涵object， function， array时，则不适用。

## 短路求值（Short-Circuit Evaluation）

三目运算符是一个很方便快捷的书写一些简单的逻辑语句的方式，
```js
x > 100 ? 'Above 100' : 'Below 100';
x > 100 ? (x > 200 ? 'Above 200' : 'Between 100-200') : 'Below 100';
```
但是有些时候当逻辑复杂之后，三目运算符书写起来可读性也会很难。这个时候，我们就可以使用逻辑与（&&）和逻辑或（||）运算符来改写我们的表达式。

逻辑与和逻辑或操作符总是先计算其做操作数，只有在仅靠左操作数的值无法确定该逻辑表达式的结果时，才会求解其右操作数。这被称为“短路求值（Short-Circuit Evaluation）”

工作原理

与（&&）运算符将会返回第一个false/‘falsy’的值。当所有的操作数都是true时，将返回最后一个表达式的结果。
```js
let one = 1, two = 2, three = 3;
console.log(one && two && three); // Result: 3

console.log(0 && null); // Result: 0
```

或（||）运算符将返回第一个true/‘truthy’的值。当所有的操作数都是false时，将返回最后一个表达式的结果。


```js
let one = 1, two = 2, three = 3;
console.log(one || two || three); // Result: 1

console.log(0 || null); // Result: null
```
场景举例
当我们从服务器端请求数据的过程中，我们在另一个位置来使用这个数据，但是获取数据的状态并不知道，如我们访问this.state的data属性。按照常规的方式我们会先去判断这个this.state.data的有效性，之后根据有效性情况分别进行区分处理。
```js
if (this.state.data) {
  return this.state.data;
} else {
  return 'Fetching Data';
}
```
但是我们可以通过上面的方式来简写这个逻辑处理。
```js
return (this.state.data || 'Fetching Data');
```
对比发现这个方式更加的简洁方便。

## 转换Boolean型

常规的boolean型值只有 true 和 false，但是在JavaScript中我们可以将其他的值认为是 ‘truthy’ 或者 ‘falsy’的。

除了0， “”， null， undefined， NaN 和 false,其他的我们都可以认为是‘truthy’的。

我们可以通过负运算符！将一系列的变量转换成“boolean”型。
```js
const isTrue  = !0;
const isFalse = !1;
const alsoFalse = !!0;

console.log(isTrue); // Result: true
console.log(typeof true); // Result: "boolean"
```
## 转换String型
我们可以通过+连接运算符将一个number类型的变量转换成string类型。
```js
const val = 1 + "";

console.log(val); // Result: "1"
console.log(typeof val); // Result: "string"
```
## 转换Number类型
和上面对应的，我们可以通过加法运算符+将一个string类型的变量转回为number 类型的。
```js
let int = "15";
int = +int;

console.log(int); // Result: 15
console.log(typeof int); Result: "number"
```
在某些上下文中，+将被解释为连接操作符，而不是加法操作符。当这种情况发生时(您希望返回一个整数，而不是浮点数)，您可以使用两个波浪号:~~。(需要注意为英文格式)

一个波浪号~，被称为“按位不运算符”，等价于 - n - 1。所以~15 = -16.

使用两个~~可以有效的否定运算。这是因为 - (- n - 1) - 1 = n + 1 - 1 = n。也就是说 ~-16 = 15
```js
const int = ~~"15"

console.log(int); // Result: 15
console.log(typeof int); Result: "number"
```
## 快速求幂
从ES7开始，我们可以使用幂运算符 ** 作为求幂的简写，相对之前的Math.pow(2, 3) 更加快捷。这是一个很简单实用的点，但是大部分的教程并不会专门介绍它。

```js
console.log(2 ** 3); // Result: 8
```
这不应该与 ^ 符号混淆，^ 符号通常用于表示指数，但在JavaScript中是位XOR操作符。

在ES7之前，幂的简写主要依靠的是位左移位操作符 <<，几种写法的区别。
```js
// 下面几种写法是等价的

Math.pow(2, n);
2 << (n - 1);
2**n;
```

其中需要注意的是 2 << 3 = 16 等价于 2 ** 4 = 16



## 快速Float转Integer

我们平时可以使用Math.floor(), Math.ceil()和Math.round()将float类型转换成integer类型。

但是还有一种更快的方法可以使用|(位或运算符)将浮点数截断为整数。
```js
console.log(23.9 | 0);  // Result: 23
console.log(-23.9 | 0); // Result: -23
```
| 的行为取决于处理的是正数还是负数，所以最好只在确定的情况下使用这个快捷方式。

如果n是正数的，则 n | 0 有效地向下舍入。如果n是负数的，它则有效地向上取整。更准确地说，该操作结果是直接删除小数点后的内容，将浮点数截断为整数，和上面提到的其他几个方法是有所区别的。

您还可以使用 ~~ 来获得相同的舍入效果，如上所述，实际上任何位操作符都会强制浮点数为整数。这些特殊操作之所以有效，是因为一旦强制为整数，值就保持不变。

使用场景
位或运算符可以用于从整数的末尾删除任意数量的数字。这意味着我们不必使用这样的代码在类型之间进行转换。


```js
let str = "1553";
Number(str.substring(0, str.length - 1));
```
而是可以使用下面的方式来实现我们的功能
```js
console.log(1553 / 10   | 0)  // Result: 155
console.log(1553 / 100  | 0)  // Result: 15
console.log(1553 / 1000 | 0)  // Result: 1
```
## 类中自动绑定

我们可以在类中通过使用ES6增加的箭头函数的方式来实现隐形绑定作用域。而按照之前的处理，我们需要显式的去为我们写的方法进行绑定，类似于 this.myMethod = this.myMethod.bind(this)这样。当我们的类中有很多方法时，会增加大量的绑定的代码的书写。现在我们就可以通过箭头函数的方式来简化这个过程。
```js
import React, { Component } from React;
export default class App extends Compononent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  myMethod = () => {
    // 隐式绑定
  }
  render() {
    return (
      <>
        <div>
          {this.myMethod()}
        </div>
      </>
    )
  }
};
```
## 截取数组
如果您想从数组的末尾删除值，有比使用splice()更快的替代方法。

例如，如果你知道原始数组的长度，就可以通过重新定义它的length属性来实现截取。
```js
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array.length = 4;
console.log(array); // Result: [0, 1, 2, 3]
```
这是一个特别简洁的解决方案。但是，slice()方法的运行时更快。如果速度是你的主要目标，考虑使用下面的方式。
```js
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array = array.slice(0, 4);

console.log(array); // Result: [0, 1, 2, 3]
```

## 获取数组中的最后的元素


数组方法slice()可以接受负整数，如果提供它，它将从数组的末尾开始截取数值，而不是开头。


```js
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(array.slice(-1)); // Result: [9]
console.log(array.slice(-2)); // Result: [8, 9]
console.log(array.slice(-3)); // Result: [7, 8, 9]
```
## 格式化JSON代码
我们可能在处理一些JSON相关的处理时很多时候都会使用到JSON.stringify，但是你是否意识到它可以帮助缩进JSON呢？

stringify()方法接受两个可选参数:一个replacer函数和一个space值，replacer函数可以用来过滤显示的JSON。

space值接受一个整数，表示需要的空格数或一个字符串(如'	'来插入制表符)，它可以使读取获取的JSON数据变得容易得多。
```js
console.log(JSON.stringify({ alpha: 'A', beta: 'B' }, null, '\t'));

// Result:
// '{
//     "alpha": A,
//     "beta": B
// }'
```

## js生成uuid
安装uuid
```js
npm i uuid

const uuid = require('uuid/v1');

```