// var myObject = {
//   value: 0,
//   increment: function (inc) {
//     this.value += typeof inc === 'number' ? inc : 1;
//   },
//   getValue: function () {
//     return this.value;
//   }
// };
// function add(a, b) {
//   return a+b;
// }
// myObject.increment();
// console.log(myObject.value);
//
// myObject.increment(2);
// console.log(myObject.value);
//
// myObject.double = function () {
//   var that = this;
//
//   var helper = function () {
//     that.value = add(that.value, that.value);
//   };
//   helper();
// }
//
// // 以方法的形式调用double。
// myObject.double();
// console.log(myObject.getValue());
//


// 创建一个名为que 的构造器函数，它构造一个带有 status 属性的对象。
//
// var Que = function (string) {
//   this.status = string;
// };
//
// // 给que 的所有实例提供一个名为 get_status 的公共方法。
//
// Que.prototype.get_status = function () {
//   return this.status;
// };
//
// // 构造一个 que 实例
//
// var myQue = new Que('confused');
//
// console.log(myQue.get_status()); // confused


// 构造一个包含两个数字的数组，并将它们相加。

// var array = [3, 4];
// var sum = add.apply(null, array); // sum值为7
//
// // 构造一个包含 status 成员的对象。
//
// var statusObject = {
//   status: 'A-OK'
// };
//
// // statusObject 并咩有继承自 quo.prototype, 但我们可以在 statusObj 上调用get_status 方法，尽管statusObject 并咩有一个名叫get_status的方法。
//
// var status = Que.prototype.get_status.apply(statusObject);
//  // stats 值为 'A-OK'
//
// console.log(status);


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
