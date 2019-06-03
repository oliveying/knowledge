## Array

![数组](./images/array.png)

## concat() 方法用于连接两个或多个数组。

该方法不会改变现有的数组，返回一个新数组
```js
arrayObject.concat(arrayX,arrayX,......,arrayX)
```
arrayX 必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。

### 把两个排好序的数组合并成一个
```JS
var a = [1,3,5,7,13]
var b = [0,2,3,4,6,7,8,12]
c = b.concat(a)
c.sort(function(a,b){return a-b}
```