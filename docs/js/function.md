## 4 函数

> 参考JavaScript语言精粹

### 函数对象

* JavaScript中的函数就是对象。对象是"名/值"对的集合并拥有一个连到原型对象的隐藏连接。对象字面量产生的对象连接到Object.prototype。函数对象连接到Function.prototype（该原型对象本身连接到Object.prototype）。每个函数在创建时会附加两个隐藏属性：函数到上下文和实现函数行为的代码（**JavaScript创建一个函数对象时，会给该对象设置一个"调用属性"。当JavaScript调用一个函数时，可理解为调用此函数的"调用"属性**）。

* 每个函数对象在创建时也随配有一个prototype属性。它的值是一个拥有contructor属性且值为该函数的对象。这和隐藏连接到Function.prototype完全不同

    1. 因为函数是对象，所以它们可以像其他的值一样`被调用`。
    2. 函数可以保存在变量、对象和数组中
    3. 函数可以被当作参数传递给其他函数
    4. 函数也可以返回函数
    5. 因为函数是对象，所以函数拥有方法

### 函数字面量

函数对象通过函数字面量来创建：

```
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

### 调用

调用一个函数将暂停当前函数的执行，传递给控制权和参数给新函数。除了声明时定义的形式参数，每个函数接收两个附加的参数：this和arguments。参数this在面向对象中非常重要，它的值取决于调用的模式。

JavaScript中一共有四种调用模式：方法调用模式、函数调用模式、构造器调用模式和 apply 调用模式。这些模式在如何初始化关键参数this上存在差异。

#### 方法调用模式

当一个函数被保存为对象的一个属性时，我们称它为一个方法。当一个方法被调用时，this被绑定到该对象。如果一个调用表达式包含一个属性存取表达式（即一个.点表达式或者[subscript]下标表达式），那么它被当作一个方法来调用。

```
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

方法可以使用 this 去访问对象，所以它能从对象中取值或修改该对象。this 到对象的绑定发生在调用的时候。这个"超级"迟绑定（very late bingding）使得函数对 this 高度复用。通过 this 可取得它们所属对象对上下文对方法称为公共方法

#### 函数调用模式

当一个函数并非一个对象的属性时，那么它被当作一个函数来调用；
```
var sum = add(3, 4);   // sum 的值为7
```

当函数以此模式调用时，this 被绑定到全局对象。这是语言设计上的一个错误。倘若语言设计正确，当内部函数被调用时， this应该仍然绑定到外部函数的 this 变量。这个错误的后果是方法不能利用内部函数来帮助它工资，因为内部函数的 this 被绑定来错误的值，所以不能共享该方法对对象的访问权。幸运的是，有一个很容易的解决方案：如果该方法定义的一个变量并给它赋值为 this，那么内部函数就可以通过那个变量访问到 this。按照约定，我给那个变量命名为 that。

```
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

#### 构造器调用模式


JavaScript是一门基于原型继承的语言。这意味着对象可以直接从其他对象继承属性。该语言是无类别的。

这偏离了当今编程语言的主流。当今大多数语言都是基于类的语言。尽管原型继承有着强大的表现力，但它并不被广泛理解。JavaScript本身对其原型对本质也缺乏信心，所以它们很少有愿意接受原型继承的，并且认为借鉴类型话语言的模糊了这门语言真实的原型本质。真是两边不讨好。

如果在一个函数前面带上 new 来调用，那么将创建一个隐藏连接到该函数的prototype成员的新对象，同时 this将会被绑定到那个新对象上。

new 前缀也会改变 return 语句的行为。我们将会在后面看到更多相关的内容。

```
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

#### Apply 调用模式

因为JavaScript 是一门函数式的面向对象编程语言，所以函数可以拥有方法。

apply 方法让我们构建一个参数数组并用其去调用函数。它也允许我们选择 this 的值。
apply 方法接收两个参数。第一个是将被绑定给 this 的值。第二个就是一个参数数组。

```
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

### 参数

当一个函数被调用时，会得到一个"免费"奉送的参数，那就是 arguments 数组。通过它函数可以访问所有它被调用时传递给它的参数列表，包括那些没有被分配给函数声明时定义的形式参数的多余参数。这使得编写一个无须指定参数个数的函数成为可能；

```
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

### 返回

当一个函数被调用时，它从第一个语句开始执行，并在遇到关闭函数体的 } 时结束。那使得函数把控制权交还给调用该函数的程序部分。

return语句可用来使函数提取返回。当 return 被执行时，函数立即返回而不再执行余下的语句。

一个函数总会返回一个值。如果没有指定返回值，则返回 undefined 。

如果函数以在前面加上 new 前缀的方式来调用，且返回值不是一个对象，则返回this （该新对象）。







