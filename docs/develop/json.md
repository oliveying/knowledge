
# JSON.stringify
## JSON.stringify 序列号

所有安全的JSON值都可以使用JSON.stringify()字符串化。安全的JSON值是指能够呈现为有效的JSON格式的值
```js
JSON.stringify(42);
JSON.stringify('42');
JSON.stringify(null); // ''
JSON.stringify(true); // 'true'
```


## JSON.stringify()传递一个可选参数的replacer
它可以是数组或者函数，用来指定对象序列化过程中哪些属性应该被处理，哪些应该被排除

如果replacer 是一个函数，它会对对象本身调用一次，然后对对象中的每个属性各调用一次，每次传递两个参数，键和值。如果要忽略某个键，就返回undefined，否则返回指定的值。

```js
var a = {
  b: 42,
  c: "42",
  d: [1,2,3]
}

JSON.stringify(a, ["b","c"]); // "{"b":42, "c": "42"}"

JSON.stringify(a, function(k, v) {
  if (k !== 'c') {return v;}
})
// "{"b":42,"d":[1,2,3]}"
```