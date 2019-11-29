//var Promise = require('Promise');

const Promise1 = new Promise(function(resolve, reject) {
  reject(new Error('test'));
});
Promise1.catch(function(error) {
  console.log(error);
});

