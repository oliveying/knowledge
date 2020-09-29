const async = require('async');


async.series([
  callback => {
    setTimeout(() => {
      console.log('i execute first')
    }, 10);
  },
  callback => {
    setTimeout(() => {
      console.log('i execute next');
    }, 500);
  },
  callback => {
    setTimeout(() => {
      console.log('i execute last')
    }, 100);
  }
])