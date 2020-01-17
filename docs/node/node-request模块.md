# node-request模块
> node中，http模块也可作为客户端使用（发送请求），第三方模块request对其使用方法进行了封装，操作更方便！

## 安装request模块
```bash
cnpm install request --save
```
## 基本用法
```js
//request(options,callback)

request({
    url: url, //请求路径
    method: "POST", //请求方式，默认为get
    headers: { //设置请求头
        "content-type": "application/json",
    },
    body: JSON.stringify(requestData) //post参数字符串
}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
    }
}); 
```
## 简单示例
```js
var request = require('request');
request('https://www.baidu.com', function (error, response, body) {
       console.log(body)//打印百度首页html内容
})

// or

request({url:'https://www.baidu.com'}, function (error, response, body) {
       console.log(body)//打印百度首页html内容
})
```
## 结合文件流
进行网络爬虫的时候，有时我们需要保存图片、js、css等文件，request支持文件流
```js
request('https://www.baidu.com/img/bd_logo1.png').pipe(fs.createWriteStream('a.png'))
//抓取百度logo并保存到本地
// 也可以将文件传给PUT或POST请求，用于文件上传。未提供header的情况下，会检测文件后缀名，在PUT请求中设置相应的content-type。

fs.createReadStream('pic.jpg').pipe(request.put('http://veb.com/upload'))
//读取流pipe上传
```
## 表单上传
```js
request.post('http://service.com/upload', {form:{key:'value'}})

// or

request.post('http://service.com/upload').form({key:'value'})
// formData形式

var r = request.post('http://veblen.com/upload')
var form = r.form()
form.append('my_field', 'my_value')
form.append('my_buffer', new Buffer([1, 2, 3]))
form.append('my_file', fs.createReadStream(path.join(__dirname, 'doodle.png'))
form.append('remote_file', request('https://www.baidu.com/img/bd_logo1.png'))
// 附上nodejs重定向（跟request没关系）

res.writeHead(302, {
    'Location': 'https://www.baidu.com'
    //add other headers here...
});
res.end();
// 结合cheerio爬虫很酷


//npm install cheerio
var  cheerio = require('cheerio');
var  $ = cheerio.load('<ul id="fruits">...</ul>');//jquery 一样的操作

```