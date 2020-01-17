const request = require('request');

request.get('https://www.baidu.com', function (err, responst, body) {
  console.log(body);
})