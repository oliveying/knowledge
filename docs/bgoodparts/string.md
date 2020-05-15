# string

## 语句
### 被当作假的值，其他所有值都被当作真

* false
* null
* undefined
* 空字符串''
* 数字 0
* 数字 NaN

switch、while， for， do 配合 （break，return，throw）
```bash
switch(表达式) {
     case n:
        代码块
        break;
     case n:
        代码块
        break;
     default:
        默认代码块
} 
```
```js
// switch case
switch (new Date().getDay()) {
    case 0:
        day = "星期天";
        break;
    case 1:
        day = "星期一";
         break;
    case 2:
        day = "星期二";
         break;
    case 3:
        day = "星期三";
         break;
    case 4:
        day = "星期四";
         break;
    case 5:
        day = "星期五";
         break;
    case 6:
        day = "星期六";
} 
 
// do while

var text = ""
var i = 0;
do {
    text += "<br>数字为 " + i;
    i++;
} while (i < 5) { 
    document.getElementById("demo").innerHTML = text;
}

// while
var text = ""
var i = 0;
while (i < 5) { 
    document.getElementById("demo").innerHTML = text;
}

// try catch
try {
   //在这里运行代码
    //抛出错误
} catch(err) {
   //在这里处理错误
}

```
### do
* do 语句就像while 语句，唯一的区别是它在代码块执行之后而不是在之前检测表达式的值，这就意味着代码块将总是要执行至少一次

### try catch
* try 语句执行一个代码块，并捕获该代码抛出的任何异常。catch 从句定义了一个新的变量，它将接收该异常对象。
* [无 try catch 的情况下对数据取模1千万次耗时]

使用 try catch 的使用无论是在 try 中的代码还是在 catch 中的代码性能消耗都是一样的。
需要注意的性能消耗在于 try catch 中不要直接塞进去太多的代码（声明太多的变量），最好是把所有要执行的代码放在另一个 function 中，通过调用这个 function 来执行。
针对第二点，可以查看 ECMA 中关于 try catch 的解释，在代码进入 try catch 的时候 js引擎会拷贝当前的词法环境，拷贝的其实就是当前 scope 下的所有的变量。
* 建议
在使用 try catch 的时候尽量把 try catch 放在一个相对干净的 scope 中，同时在 try catch 语句中也尽量保证足够少的变量，最好通过函数调用方式来 try catch。



### throw 语句中抛出一个异常。
* 如果 throw 语句在一个 try 代码块中，那么控制权会跳到 catch 从句中。如果 throw 语句在函数中，则该函数调用被放弃，且控制器会跳到调用该函数的 try 语句的 catch 从句中。
* throw语句中的表达式通常是一个对象字面量，它包含一个 name 属性和一个 message 属性。异常捕获器可以使用这些信息去决定该做什么

### return
* return 语句会使一个函数提前返回。它也可以指定要被返回的值。如果没有指定返回表达式，那么其返回值是 undefined。JavaScript 不允许在 return 关键字和表达式之间换行。

### break
* break 语句会使程序退出一个循环语句或 switch 语句。它可以指定一个可选的标签，那将会使程序退出带该标签的语句。JavaScript 不允许在 break 关键字和标签之间换行。

## 表达式

### typeof

typeof 运算符产生的值有'number'，'string'， 'boolean'，'function'， 'undefined'， 'object'；
如果运算数是一个数组或 null，那么结果是'object'；
* 如果 ！运算数的值为真，那么它产生false，否则，它产生 true。
* + 运算符可以进行加法运算或字符串连接。
* / 运算符可能会参数一个非整数结果，即使两个运算数都是整数。
* 如果第一个运算数值为假，那么运算符 && 产生它的第一个运算数的值。否则，它产生第二个运算数的值
* 如果第一个运算数的值为真，那么运算符 || 产生它的第一个运算符的值。否则，它产生第二个运算符的值。
* 函数调用引发函数的执行。函数调用运算符是跟随在函数名后面的一对圆括号。圆括号中可能包含将会传递给这个函数的参数
* 一个属性存取表达式用于指定一个对象或数组的属性或元素。

### 字面量 是一种方便指定新对象的表示法。属性名可以是标识符或字符串。

### 函数
函数字面量定义了函数值。它可以有一个可选的名字，用于递归地调用自己。它可以指定一个参数列表，这些参数将作为变量由调用时传递的实际参数（arguments）初始化。函数的主体包括变量定义和语句。