'use strict';

new Promise(function() {
  console.log('支持Promise');
});

function test(resolve, reject) {
  var timeout = Math.random()*2;
  console.log('set timeout to: ' + timeout + ' seconds.');
  setTimeout(function () {
    if (timeout < 1) {
      console.log('call resolve()...');
      resolve('succ')
    } else {
      log('call reject()...');
      reject('timeout in ' + timeOut + ' seconds.');
    }
  }, timeout * 1000)

}

new Promise(test).then(function (result) {
  console.log('成功：' + result);
}).catch(function (reject) {
  console.log('失败：' + reject);
})