## fs.createReadStreame(path[, options]);

这个api的作用是打开一个可读的文件流并且返回一个fs.ReadStream对象
```bash
path <string> | <Buffer> | <URL>
options <string> | <Object>

flags <string> 参阅支持的文件系统标志。默认值: 'r'。
encoding <string> 默认值: null。
fd <integer> 默认值: null。
mode <integer> 默认值: 0o666。
autoClose <boolean> 默认值: true。
emitClose <boolean> 默认值: false。
start <integer>
end <integer> 默认值: Infinity。
highWaterMark <integer> 默认值: 64 * 1024。
```
返回: <fs.ReadStream>

```js
const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream(path.join(__dirname, '../test/test.js'), {encoding: 'utf8'});
//读取文件发生错误事件
readStream.on('error', (err) => {
  console.log('发生异常:', err); // 找不到文件的时候就会到这里
});
//已打开要读取的文件事件
readStream.on('open', (fd) => {
  console.log('文件已打开:', fd);
});
//文件已经就位，可用于读取事件
readStream.on('ready', () => {
  console.log('文件已准备好..');
});

//文件读取中事件·····
readStream.on('data', (chunk) => {
  console.log('读取文件数据:', chunk);
});

//文件读取完成事件
readStream.on('end', () => {
  console.log('读取已完成..');
});

//文件已关闭事件
readStream.on('close', () => {
  console.log('文件已关闭！');
})

```

## fs.Stats 类
fs.Stats 对象提供了关于文件的信息。

从 fs.stat()、fs.lstat() 和 fs.fstat() 及其同步的方法返回的对象都属于此类型。 如果传给这些方法的 options 中的 bigint 为 true，则数值将会为 bigint 型而不是 number 型，并且该对象将会包含额外的以 Ns 为后缀的纳秒精度的属性。
### fs.stat
```js
var fs = require("fs");
/*
    读取文件的状态；
    fs.stat(path,callback);
    callback有两个参数；err，stats；stats是一个fs.Stats对象；
    如果发生错误err.code是常见错误之一；
 不建议在调用 fs.open() 、fs.readFile() 或 fs.writeFile() 之前使用 fs.stat() 检查一个文件是否存在。 作为替代，用户代码应该直接打开/读取/写入文件，当文件无效时再处理错误。
 如果要检查一个文件是否存在且不操作它，推荐使用 fs.access()。
 */
fs.stat("./wenjian.txt",function(err,stats){
    console.log(err);
    console.log(stats);
//    获取文件的大小；
    console.log(stats.size);
//    获取文件最后一次访问的时间；
    console.log(stats.atime.toLocaleString());
//    文件创建的时间；
    console.log(stats.birthtime.toLocaleString());
//    文件最后一次修改时间；
    console.log(stats.mtime.toLocaleString());
//    状态发生变化的时间；
    console.log(stats.ctime.toLocaleString())
//    判断是否是目录；是返回true；不是返回false；
    console.log(stats.isFile())
//    判断是否是文件；是返回true、不是返回false；
    console.log(stats.isDirectory())
})
```

## fs.access
要检查文件是否存在但随后并不对其进行操作，则建议使用 fs.access()。
```js
fs.access(path[, mode], callback)
```
## net
* net 模块用于创建基于流的 ICP 或 IPC 的服务器（net.createServer()）与客户端（net.createConnection()）
```js
var net = require('net');
var server = net.createServer(function(socket) {
  socket.on('data', function (data) {
    socket.write(data)
  })
}) 
server.on(8888);
telnet 127.0.0.1 8888 # 使用telnet // 检测端口
```

## telnet命令一般用来检测一个端口使用

```bash
brew install telnet # mac安装telnet
telnet 127.0.0.1 8888 # 使用telnet
```
使用telnet

## process.argv
process.argv 属性返回一个数组，其中包含当启动 Node.js 进程时传入的命令行参数。 第一个元素是 process.execPath。 如果需要访问 argv[0] 的原始值，参阅 process.argv0。 第二个元素将是正在执行的 JavaScript 文件的路径。 其余元素将是任何其他命令行参数。

例如，假设 process-args.js 的脚本如下：
```js
// 打印 process.argv。
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
```
启动 Node.js 进程：
```bash
$ node process-args.js one two=three four
# 输出如下：

# 0: /usr/local/bin/node
# 1: /Users/mjr/work/node/process-args.js
# 2: one
# 3: two=three
# 4: four
```
## process.cwd()
返回: `<string>`
`process.cwd()` 方法返回 Node.js 进程的当前工作目录。
```js
console.log(`当前工作目录是: ${process.cwd()}`);
```

## process.platform
`<string>`
process.platform 属性返回字符串，标识 Node.js 进程运行其上的操作系统平台。

当前可能的值有：
```js
'aix'
'darwin'
'freebsd'
'linux'
'openbsd'
'sunos'
'win32'
console.log(`此平台是 ${process.platform}`);
```
如果 Node.js 是在 Android 操作系统上构建的，也可以返回值 'android'。 但是，Node.js 中的 Android 支持是实验性的。