# Array

![数组](./images/array.png)

## concat() 方法用于连接两个或多个数组。

该方法不会改变现有的数组，返回一个新数组
```js
arrayObject.concat(arrayX,arrayX,......,arrayX)
```
arrayX 必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。

### 把两个排好序的数组合并成一个，并且按照从小到大的方式排列
```JS
var a = [1,3,5,7,13]
var b = [0,2,3,4,6,7,8,12]
c = b.concat(a)
c.sort(function(a,b){return a-b})
```

## 如果数组成员是undefined或null或空位，会被转成空字符串。
```js
[undefined, null].join('#')
// '#'

['a',, 'b'].join('-')
// 'a--b'
```


## 通过call方法，这个方法也可以用于字符串或类似数组的对象。
```js
Array.prototype.join.call('hello', '-')
// "h-e-l-l-o"

var obj = { 0: 'a', 1: 'b', length: 2 };
Array.prototype.join.call(obj, '-')
// 'a-b'
```

## concat 如果数组成员包括对象，concat方法返回当前数组的一个浅拷贝。所谓“浅拷贝”，指的是新数组拷贝的是对象的引用。
```js
var obj = { a: 1 };
var oldArray = [obj];

var newArray = oldArray.concat();

obj.a = 2;
newArray[0].a // 2
```


上面代码中，原数组包含一个对象，concat方法生成的新数组包含这个对象的引用。所以，改变原对象以后，新数组跟着改变。

## slice(start, end),返回新数组，原数组保持不变

slice方法的一个重要应用，是将类似数组的对象转为真正的数组。
```js
Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })
// ['a', 'b']

Array.prototype.slice.call(document.querySelectorAll("div"));
Array.prototype.slice.call(arguments);
```


## splice()
splice方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。

## map方法接受一个函数作为参数。该函数调用时，map方法向它传入三个参数：当前成员、当前位置和数组本身。
```js
[1, 2, 3].map(function(elem, index, arr) {
  return elem * index;
});
// [0, 2, 6]
```

map方法还可以接受第二个参数，用来绑定回调函数内部的this变量（详见《this 变量》一章）。
```js
var arr = ['a', 'b', 'c'];

[1, 2].map(function (e) {
  return this[e];
}, arr)
// ['b', 'c']
```


## forEach()
forEach方法与map方法很相似，也是对数组的所有成员依次执行参数函数。但是，forEach方法不返回值，只用来操作数据。这就是说，如果数组遍历的目的是为了得到返回值，那么使用map方法，否则使用forEach方法。
forEach的用法与map方法一致，参数是一个函数，该函数同样接受三个参数：当前值、当前位置、整个数组。
```js
function log(element, index, array) {
  console.log('[' + index + '] = ' + element);
}
[2, 5, 9].forEach(log);
// [0] = 2

```


## filter()
filter方法用于过滤数组成员，满足条件的成员组成一个新数组返回。
它的参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。该方法不会改变原数组。
```js
[1, 2, 3, 4, 5].filter(function (elem) {
  return (elem > 3);
})
// [4, 5]
```

## some()1个满足，返回true
## every() 所有都满足，返回true
返回boolean值
## indexOf()，lastIndexOf()
indexOf方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1。