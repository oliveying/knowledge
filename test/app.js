var http = require('http');
var events = require('events');
var server =http.createServer();

server.on('removeListener', function (e, f) {
  console.log('对' + e + '事件取消事件处理函数');
  console.log(f);
})
server.on('newListener', function (e, f) {
  console.log('对' + e +'事件添加事件处理函数')
  console.log(f)
})
server.once('request', function (req, res) {
  if (req.url !== '/favicon.ico') {
    console.log('接收请求emitter')
  }
  res.end()
})

server.on('request', function (req, res) {
  if (req.url !== '/favicon.ico') {
    console.log(req.url)
  }
  res.end()
})

server.once('request', function (req, res) {
  if (req.url !== '/favicon.ico') {
    console.log('接受请求完毕once')
  }
  res.end()
})

server.on('customEvent', function (args1, args2) {
  console.log('自定义事件被触发');
  console.log(args1)
  console.log(args2)
})

var hhh = function (req, res) {
  console.log('取消时间')
}
server.on('request', hhh);
server.removeAllListeners('request');
server.emit('customEvent', 'args1', 'args2')

server.listen(1337, '127.0.0.1');
console.log(events.EventEmitter.listenerCount(server, 'request'))