## 杂七杂八

### 函数参数
* 传入undefined，不会影响默认，只会影响arguments
```js
function test(a = 42; b = a+1) {
  console.log(arguments.length, a,b,arguments[0], arguments[1]);
}

test(); // 0 42 43 undefined undefined
test(10); // 1 10 11 10 undefined
test(10, undefined); // 2 10 11 10 undefined
test(10,null); // 2 10 null 10 null
```
### try finally

* finally中的return 会覆盖try和catch中return的返回值
```js
function foo() {
  try {
    return 42;
  } finally {
    // 没有返回语句，所以没有覆盖
  }
}
function bar() {
  try {
    return 42;
  } finally {
    return; // 覆盖前面的return 42
  }
}
function baz() {
  try {
    return 42;
  } finally {
    
    return 'hello'; // 覆盖前面的return
  }
}

foo(); // 42
bar(); // undefined
baz(); // hello


```
* try finally的执行顺序
```js
function foo() {
  try {
    return 42;
  }
  finally {
    console.log('hello')
  }
  console.log('never runs');
}

console.log(foo());

// hello
// 42

// try中的throw也是如此
function foo() {
  try {
    throw 42;
  }
  finally {
    console.log('hello');
  }
  console.log('never runs');
}

foo();
// hello
// Uncaught Exception: 42
```

* finally 抛出异常，函数就会在此终止。

```js
function foo() {
  try {
    return 42;
  }
  finally {
    throw 'hello'
  }
  console.log('never runs');
}
foo();
// Uncaught Exception: hello
```

* continue和break等控制语句也是如此：
```js
for(var i = 0 ; i < 10; i++) {
  try {continue} finally {
    console.log(i);
  }
}
// 0 1 2 3 4 5 6 7 8 9
```
continue在每次循环之后会在i++ 之前执行console.log(i), 所以结果是0～9 ，而不是1～10

* 可以将finally和带标签的break混合使用，请勿这样做，会让代码晦涩难懂

```js
function foo() {
  bar: {
    try {
      return 42;
    } finally {
      // 跳出标签为bar的代码块
      break bar;
    }
  }
  console.log('crazy');
  return 'hello';
}

console.log(foo());
// crazy
// hello 
```

### 宿主对象
```js
var a = document.createElement('div');
typeof a; // object

Object.prototype.toString.call(a);
// "[object HTMLDivElement]"

a.tagName; // "DIV"
```
* 宿主对象特点
1. 无法访问正常等object内建方法，如toString();
2. 无法写覆盖；
3. 包含一些预定义的只读属性；
4. 其他...

### 原生原型

* 不要轻易扩展原生方法，除非你确信代码在运行环境中不回有冲突
* 在扩展原生方法时需要加入判断条件
```js
if (!Array.prototype.push){
  Array.prototype.push = function (item) {
    this[this.length - 1] = item
  }
}
// 可以为push方法做测试
(function() {
  if (Array.prototype.push) {
    var a = [];
    a.push(1,2);
    if (a[0] === 1 && a[1] === 2) {
      // 测试通过，可以放心使用
      return;
    }
    throw Error('Array#push() is missing/broken!')
  }
}) ()
```

### 已知实现中的限制
* 字符串长两种允许的最大字符数（并非只是针对字符串值）
* 可以作为参数传递到函数中的数据大小（也称为栈大小，以字节为单位）
* 函数声明中的参数个数；
* 未经优化的调用栈（例如递归）的最大层数，即函数调用链的最大长度；
* JavaScript程序以阻塞方式在浏览器中运行的最长时间（秒）；
* 变量名的最大长度。
我们不会经常碰到这些限制，但应该对他们有所了解，特别是不同的JavaScript引擎的限制各异

