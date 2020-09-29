const net = require('net');
const server = net.createServer((c) => {
  // 'connection' 监听器。
  console.log('客户端已连接');
  c.on('end', () => {
    console.log('客户端已断开连接');
  });
  c.write('你好\r\n');
  c.pipe(c);
});
server.on('error', (err) => {
  throw err;
});
server.listen(8124, () => {
  console.log('服务器已启动');
});