# 4 函数

> 参考JavaScript语言精粹

## 函数对象

* JavaScript中的函数就是对象。对象是"名/值"对的集合并拥有一个连到原型对象的隐藏连接。对象字面量产生的对象连接到Object.prototype。函数对象连接到Function.prototype（该原型对象本身连接到Object.prototype）。每个函数在创建时会附加两个隐藏属性：函数到上下文和实现函数行为的代码（**JavaScript创建一个函数对象时，会给该对象设置一个"调用属性"。当JavaScript调用一个函数时，可理解为调用此函数的"调用"属性**）。

* 每个函数对象在创建时也随配有一个prototype属性。它的值是一个拥有contructor属性且值为该函数的对象。这和隐藏连接到Function.prototype完全不同

    1. 因为函数是对象，所以它们可以像其他的值一样`被调用`。
    2. 函数可以保存在变量、对象和数组中
    3. 函数可以被当作参数传递给其他函数
    4. 函数也可以返回函数
    5. 因为函数是对象，所以函数拥有方法

## 函数字面量

函数对象通过函数字面量来创建：

```js
// 创建一个名为add的变量，并用来把两个数字相加的函数赋值给它；
var add = function (a, b) {
    return a+b
}
```

函数字面量包括4个部分

1. 保留字function
2. 函数名，它可以被省略。函数可以用它的名字来递归地调用自己。此名字也能被调试器和开发工具用来识别函数。如果没有给函数命名，比如上面的例子，它会被认为是匿名函数
3. 包围在圆括号中的一组参数，其中每个参数用逗号分割。这些名称被定义为函数中的变量。它们不像普通的变量那样将被初始化为undefined，而是在该函数被调用时初始化为实际提供的参数的值
4. 包含花括号中的一组语句。这些语句是函数的主体。它们在函数调用时执行；

函数字面量可以出现在任何允许表达式出现的地方。函数也可以被定义在其他函数中。一个内部函数自然可以访问自己的参数和变量，同时它也能方便地访问它被嵌套在其中的那个函数的参数与变量。**通过函数字面量创建的函数对象包含一个连到外部的上下文的连接。这被成为闭包**。它是JavaScript强大表现力的根基。

## 调用

调用一个函数将暂停当前函数的执行，传递给控制权和参数给新函数。除了声明时定义的形式参数，每个函数接收两个附加的参数：this和arguments。参数this在面向对象中非常重要，它的值取决于调用的模式。

JavaScript中一共有四种调用模式：方法调用模式、函数调用模式、构造器调用模式和 apply 调用模式。这些模式在如何初始化关键参数this上存在差异。

调用运算符是跟在任何产生的函数值的表达式之后的一对圆括号。圆括号内可包含零个或多个用逗号隔开的表达式。每个表达式产生一个参数值，每个参数值被赋予函数声明时定义的形式参数名。当实际参数（arguments）的个数与形式参数（parameters） 的个数不匹配时，不会导致运行错误。
* 实际参数值过多---》超出的参数值将被忽略
* 实际参数值锅烧，缺失的值将会被替换为 undefined。
* 对参数值不会进行类型检查老人和类型的值都可以被传递给参数

### 方法调用模式

当一个函数被保存为对象的一个属性时，我们称它为一个方法。当一个方法被调用时，this被绑定到该对象。如果一个调用表达式包含一个属性存取表达式（即一个.点表达式或者[subscript]下标表达式），那么它被当作一个方法来调用。

```js
// 创建一个 myObject 。它有一个value 属性和一个 increment 方法。
// increment 方法接收一个可选的参数。如果参数不是数字，那么默认使用数字1。

var myObject = {
  value: 0,
  increment: function (inc) {
    this.value += typeof inc === 'number' ? inc : 1;
  },
  getValue: function () {
    return this.value;
  }
};
myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);
```

方法可以使用 this 去访问对象，所以它能从对象中取值或修改该对象。this 到对象的绑定发生在调用的时候。这个"超级"迟绑定（very late bingding）使得函数对 this 高度复用。通过 this 可取得它们所属对象对上下文的方法称为公共方法

### 函数调用模式

当一个函数并非一个对象的属性时，那么它被当作一个函数来调用；
```js
var sum = add(3, 4);   // sum 的值为7
```

当函数以此模式调用时，this 被绑定到全局对象。这是语言设计上的一个错误。倘若语言设计正确，当内部函数被调用时， this应该仍然绑定到外部函数的 this 变量。这个错误的后果是方法不能利用内部函数来帮助它工资，因为内部函数的 this 被绑定来错误的值，所以不能共享该方法对对象的访问权。幸运的是，有一个很容易的解决方案：如果该方法定义的一个变量并给它赋值为 this，那么内部函数就可以通过那个变量访问到 this。按照约定，我给那个变量命名为 that。

```js
// 给 myObject 增加一个 double 方法
myObject.double = function () {
  var that = this;

  var helper = function () {
    that.value = add(that.value, that.value);
  };
  helper();
}

// 以方法的形式调用double。
myObject.double();
console.log(myObject.getValue());

```

### 构造器调用模式


JavaScript是一门基于原型继承的语言。这意味着对象可以直接从其他对象继承属性。该语言是无类别的。

这偏离了当今编程语言的主流。当今大多数语言都是基于类的语言。尽管原型继承有着强大的表现力，但它并不被广泛理解。JavaScript本身对其原型对本质也缺乏信心，所以它们很少有愿意接受原型继承的，并且认为借鉴类型话语言的模糊了这门语言真实的原型本质。真是两边不讨好。

如果在一个函数前面带上 new 来调用，那么将创建一个隐藏连接到该函数的prototype成员的新对象，同时 this将会被绑定到那个新对象上。

new 前缀也会改变 return 语句的行为。我们将会在后面看到更多相关的内容。

```js
// 创建一个名为que 的构造器函数，它构造一个带有 status 属性的对象。

var Que = function (string) {
  this.status = string;
};

// 给que 的所有实例提供一个名为 get_status 的公共方法。

Que.prototype.get_status = function () {
  return this.status;
};

// 构造一个 que 实例

var myQue = new Que('confused');

console.log(myQue.get_status()); // confused

```

目的就是结合 new 前缀调用的函数被称为构造器函数。按照约定，它们保存在以大写格式命名的变量里。如果调用构造器函数时没有在前面加上 new， 可能会发生非常糟糕的事情，既没有编译时警告，也没有运行时警告，所以大写约定非常重要。

我不推荐使用这种形式的构造器函数。在下一章我们将看到更好的替代方式

### Apply 调用模式

因为JavaScript 是一门函数式的面向对象编程语言，所以函数可以拥有方法。

apply 方法让我们构建一个参数数组并用其去调用函数。它也允许我们选择 this 的值。
apply 方法接收两个参数。第一个是将被绑定给 this 的值。第二个就是一个参数数组。

```js
// 构造一个包含两个数字的数组，并将它们相加。

var array = [3, 4];
var sum = add.apply(null, array); // sum值为7

// 构造一个包含 status 成员的对象。

var statusObject = {
  status: 'A-OK'
};

// statusObject 并咩有继承自 quo.prototype, 但我们可以在 statusObj 上调用get_status 方法，尽管statusObject 并咩有一个名叫get_status的方法。

var status = Que.prototype.get_status.apply(statusObject);
 // stats 值为 'A-OK'

console.log(status);
```

## 参数

当一个函数被调用时，会得到一个"免费"奉送的参数，那就是 arguments 数组。通过它函数可以访问所有它被调用时传递给它的参数列表，包括那些没有被分配给函数声明时定义的形式参数的多余参数。这使得编写一个无须指定参数个数的函数成为可能；

```js
// 构造一个将很多个值相加的函数

// 注意该函数内部定义的变量 sum 不会与函数外部定义的sum 产生冲突。
// 该函数只会看到内部的那个变量。

var sum = function () {
  var i, sum = 0;
  for (i = 0; i < arguments.length; i ++) {
    sum += arguments[i];
  }
  return sum;
};

console.log(sum(4, 3, 2, 2, 1, 2, 7)); // 21
```

这不是一个特别有用的模式。第6章中，我们将会看到如何给数组添加一个相似的方法来达到同样的效果。

因为语言的一个设计错误，arguments 并不是一个真正的数组。它只是一个 "类似数组（array-like）"的对象。arguments 拥有一个 length 属性，但它缺少所有的数组方法。我们将在本章结尾看到这个设计错误导致的后果.

## 返回

当一个函数被调用时，它从第一个语句开始执行，并在遇到关闭函数体的 } 时结束。那使得函数把控制权交还给调用该函数的程序部分。

return语句可用来使函数提前返回。当 return 被执行时，函数立即返回而不再执行余下的语句。

一个函数总会返回一个值。如果没有指定返回值，则返回 undefined 。

如果函数以在前面加上 new 前缀的方式来调用，且返回值不是一个对象，则返回this （该新对象）。

## 异常

JavaScript 提供了一套异常处理机制。异常是干扰程序的正常流程的非正常（但并非完全出乎意料）的事故。当查出这样的事故时，你的程序应该抛出一个异常；

```js
var add = function (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw {
      name: 'TypeError',
      message: 'add needs numbers'
    }
  }
  return a + b;
};
```

throw 语句中断函数的执行。它应该抛出一个exception对象，该对象包含可识别异常类型的name 属性和一个描述性的 message 属性。你也可以添加其他的属性。

该 exception 对象将被传递到一个 try 的语句的 catch 从句；

```js
// 构造一个 try_it 函数，用不正确的方式调用之前的 add 函数

var try_it = function () {
  try {
    add("seven");
  } catch (e){
    console.log(e.name + ': ' + e.message);
  }
}

try_it();
```

如果在 try 代码块内抛出了一个异常，控制权就会跳转到它的 catch 从句。

一个 try 语句只会有一个将捕获所有异常的 catch 代码块。如果你的处理手段取决于异常的类型，那么异常处理器必须检查异常对象的 name 属性以确定异常的类型。

## 给类型增加方法

JavaScript 允许给语言的基本类型增加方法。在第三章中，我们已经看到，通过给 Object.prototype 添加方法来使得该方法对所有对象可用。这样对方式对函数、数组、字符串、数字、正则表达式和布尔值同样适用；

举例来说，我们可以通过给 Function.prototype 增加方法来使得该方法对所有函数可用：

```js
Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
}
```
通过给 Function.prototype 增加一个 method 方法，我们就不必键入prototype 这个属性名。这个缺点也就被掩盖了。

JavaScript 并没有单独整数类型，因此有时候只提取数字中的整数部分是必要的。JavaScript 本身提供的取整方法有些丑陋。我们可以通过给 Number.prototype 添加一个 integer 方法来改善它。它会根据数字的正负来判断是使用 Math.celling 还是 Math.floor。

`测试报错`
```js
Number.method('integer', function () {
  return Math[this < 0 ? 'ceiling': 'floor'](this);
})

console.log((-10/3).integer());
```

JavaScript 缺少一个移除字符串末端空白的方法。那是一个很容易修复的疏忽：

```js
String.method('trim', function () {
  return this.replace(/^\s+|\s+$/g, '');
})
console.log('"' + "  neat    ".trim() + '"');
```

我们的 trim 方法使用了一个正则表达式。我们将在第 7 章看到更多关于正则表达式的内容。

通过给基本类型增加方法，我们可以大大提高语言的表现力。因为 JavaScript 原型继承的动态本质，新的方法立刻被赋予到所有的值（对象实例）上，哪怕值（对象实例）是在方法被创建之前就创建好了。

基本类型的原型是公共的结构，所以在类库混用时务必小心。一个保险的做法就是只在确定没有该方法时才添加他。

```js
// 有条件的增加一个方法

Function.prototype.method = function(name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
}
```

另一个要注意的就是 for in 语句用在原型上时表现很糟糕。 我们在第 3 章已经看到了几个减轻这个问题的影响办法：
1. 我们可以使用 hasOwnProperty 方法去筛选出继承而来的属性，或者我们可以查找特定的类型。

## 递归（Recursion）

递归函数会直接或间接调用自身的一种函数。递归是一种强大的编程技术，它将一个问题分解为一组相似的子问题，每一个都用一个寻常解去解决。一般来说，一个递归函数调用自身去解决它的子问题。

"汉诺塔"是一个著名的难题。塔的设备包括三根柱子和一套直径各不相同的空心圆盘。开始时圆柱子上的所有圆盘都按照较小的圆盘放在较大的圆盘之上的顺序堆叠。目标是通过每次移动一个圆盘到另一根柱子，最终将一堆圆盘移动到目标柱子上，过程中不可以将大的圆盘放置在较小的圆盘之上。这个难题又一个寻常解：
```js

var hanoi = function (disc, src, aux, dst) {
  if (disc > 0) {
    hanoi(disc - 1, src, dst, aux);
    console.log('move disc ' + disc + ' from ' + src + ' to ' + dst);
    hanoi(disc - 1, aux, src, dst);
  }
};

hanoi(3, 'Src', 'Aux', 'Dst');
```
圆盘数量为3时，返回这样的解法
```bash
move disc 1 from Src to Dst
move disc 2 from Src to Aux
move disc 1 from Dst to Aux
move disc 3 from Src to Dst
move disc 1 from Aux to Src
move disc 2 from Aux to Dst
move disc 1 from Src to Dst

```

汉诺塔函数的目的是把一堆圆盘从一根柱子全部转移到另一根柱子上，必要时使用辅助柱子。汉诺塔函数将这个问题分解成三个子问题。首先，它移动一对圆盘中较小的盘子到辅助柱上，从而露出下面较大的圆盘；然后，移动下面的圆盘到目标柱子上；最后，将刚才较小的圆盘从辅助柱上再移到目标柱上。

汉诺塔函数通过递归地调用自身，去处理一对圆盘的移动，从而实现这些子步骤。传递给汉诺塔函数的参数包括当前移动的圆盘编号和它将要用到的三根柱子。当它调用自身时，处理的是当前函数正在处理的圆盘之上的圆盘。最终，它会以一个不存在的圆盘编号去调用，而这样的情况则函数不会在再执行。由于该函数对非法值不予理会，我们也就不必担心它会导致死循环。

递归函数可以非常高效对操作树形结构，比如浏览器端的文档对象模型（DOM）。每次递归调用时处理给定树的一小段。

## 作用域
* 在函数中的参数和变量在函数外部是不可变的，而且在一个函数中的任何位置定义的变量在该函数中的任何地方都可见。

在编程语言中，作用域控制着变量与参数的可见性及声明周期。对程序员来说，这是一个重要的帮助，因为它减少了名称冲突，并且提供了自动内存管理。
```js
var foo = function() {
  var a = 3, b = 5;
  
  var bar = function() {
    var b = 7, c = 11;
  // 此时，a 为 3， b 为 7， c 为 11
    a += b + c;
  // 此时，a 为 21， b 为7， c 为 11
  }
  
}
```

## 闭包

作用域的好处是内部函数可以访问定义在它们的外部函数的参数和变量（除了this 和arguments）

内部函数拥有比它外部函数更长的生命周期。


## 回调

函数可以让不连续事件的处理变得更容易

## 模块

我们可以使用函数和闭包来构建模块。模块是一个提供接口却隐藏状态与实现的函数或对象

* 模块模式利用了函数作用域和闭包来创建绑定对象与私有成员的关联

## 级联

* 有一些方法没有返回值。例如，一些设置或修改对象的某个状态却不返回任何值的方法就是典型的例子。如果我们让这些方法返回 this 而不是 undefined，就可以启用级联。在一个级联中，我们可以在单独一条的语句中依次调用同一个对象的很多方法。一个启用级联的ajax 类库可能允许我们以这样的形式进行编码
```js
getElement('myBoxDiv').
  move(350,130).
  width(100).
  height(100).
  on('mousedown', function(m) {
    this.startdrag(m, this.getNinth(m))
  }).
  on('mousemove', 'drag')
```
级联可以产生出具备很强表现力的接口。它也能帮助控制那种构造试图一次做太多事情的接口的趋势。


## 套用
函数也是值，从而我们可以用有趣的方式去操作函数值。套用允许我们将函数与传递给它的参数相结合去产生出一个新的函数。
```js
var add1 = add.curry(1);
document.writeln(add1(6));
```

## 记忆

函数可以用对象去记住先前操作的结果，从而能避免无谓的运算。这种优化被称为 记忆
> 参考 https://dmego.me/2016/10/16/hanoi.html


