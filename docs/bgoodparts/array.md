# 数组

## 数组字面量
允许数组包含任意混合类型的值：
```js
var arr = [] // 数组字面量
var arr1 = [1,2,3] // 数组的第一个值将获得属性名'0'， 第二个值将获得属性名'1'
var obj = {'0': 1, '1': 2} // 对象字面量

// arr继承自 Array.prototype, obj继承自 Object.prototype
```

## 长度
* 每个数组都有一个 length 属性。JavaScript数组的length 没有上界
不会发生下标越界错误
```js
var myarray = []
myarray.length // 0

myarray[1000] = true;
myarray.length // 1001;
```
ecmascript262标准：数组下标 大于等于 0 小于 2的32次方-1 的整数 

如果把length 设置小，则导致所有下标大于等于新 length 的属性被删除；

通过把下标指定为一个数组当前的length，可以附加一个新元素到该数组的尾部。

有时用 push 方法可以更方便完成同样的事情

## 删除

JavaScript 数组其实就是对象，所以 delete 运算符可以用来从数组中移除元素；
```js
delete arr[2] // 不建议，因为排在被删除之后的元素保留了它们最初的名字（下标 ）
arr.splice(2, 1) // 建议，对于大型数组，可能会效率不高。
```

## 枚举

因为JavaScript 的数组其实就是对象，所以for in 语句可以用来遍历一个数组的所有属性。但无法保证属性但顺序。
但是可以使用 for

## 混淆的地方

在 JavaScript 编程中，一个常见的错误是在须使用数组时使用量对象，或者须在使用对象时使用了数组。其实规则很简单，当属性名是小而连续的整数时，应该使用数组，否则使用对象

可以自己定义is_array 函数来避开这个缺陷
```js
var is_array = function(value) {
  return value && typeof value === 'object' && value.constructor === Array;
}
// 在识别不同窗口（window）或帧（frame）里构造的数组时会失败。如果向要准确检测那些外部的数组，需要
var is_array1 = function(value) {
  return value && 
  typeof value === 'object' &&
  typeof value.length ==== 'number' &&
  typeof value.splice === 'function' &&
  !(value.prototypeIsEnumerable('length'));
}
```

## 方法

Array.prototype 可以被扩充
```js
// 增加一个方法，允许对数组进行计算

Array.method('reduce', function(f, value) {
  for (var i = 0; i <  this[i].length; i+=1) {
    value = f(this[i], value)
  }
  return value;
})


// demo
// 创建一个数字数组
var data = [2,3,4]
// 定义两个简单的函数，一个是将两个数字相加，另一个是将两个数字相乘
var add = function(a, b) {
  return a+b;
}
var mult = function(a,b) {
  return a*b;
}
// 调用data 的reduce 方法，传入 add 函数
var sum = data.reduce(add, 0);
// 再次调用 reduce 方法，传入 mult 函数
var product = data.reduce(mult, 1);


// 因为数组就是对象，可以直接添加方法
// 给data 数组添加一个 total 方法

data.total = function() {
  return this.reduce(add, 0);
}
total = data.total();
```
因为字符串 'total'不是整数，所有给数组增加一个total属性不会改变它的长度。当属性名是整数时，数组才是最有用的，但它们依旧是对象，并且对象可以接受任何字符串的属性名

## 维度

JavaScript 的数组通常不会初始化。如果你用 [] 得到一个新数组，它将是空的。如果你访问一个不存在的元素，则将得到的值是 undefined。