'use strict';

// new Promise(function() {
//   console.log('支持Promise');
// });
//
// function test(resolve, reject) {
//   var timeout = Math.random()*2;
//   console.log('set timeout to: ' + timeout + ' seconds.');
//   setTimeout(function () {
//     if (timeout < 1) {
//       console.log('call resolve()...');
//       resolve('succ')
//     } else {
//       console.log('call reject()...');
//       reject('timeout in ' + timeout + ' seconds.');
//     }
//   }, timeout * 1000)
//
// }
//
// new Promise(test).then(function (result) {
//   console.log('成功：' + result);
// }).catch(function (reject) {
//   console.log('失败：' + reject);
// })

new Promise(function (resolve, reject) {
  console.log('start new Promise...');
  var timeout = Math.random()*2;
  console.log('set timeout to: ' + timeout + ' seconds.');
  setTimeout(function () {
    if (timeout > 1) {
      console.log('call resolve() ...');
      resolve('200 ok')
    } else {
      console.log('call reject() ...');
      reject('timeout in ' + timeout + ' seconds.');
    }
  },  timeout* 1000)

}).then(function (r) {
  console.log('success: ' + r);
}).catch(function (r) {
  console.log('Failed: ' + r);
})