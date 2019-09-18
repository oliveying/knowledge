# http报文内的http信息

常用的内容编码有以下几种

```bash
gzip # GNU zip

compress # UNIX系统的标准压缩
deflate # zlib
indentity # 不进行编码
```
## 发送多种数据的多部分对象集合

```bash
multipart/form-data # 在 Web 表单文件上传时使用

multipart/byteranges # 状态码 206 （Partial Content 部分内容），响应豹纹包含了多个范围的内容时使用

# 执行范围请求时，会用到首部字段 Range 来指定资源的 byte 范围
Get请求
GET /tip.jpg HTTP/1.1
Host: www.usagidesign.jp
Range: bytes=5001-10000  # 5001-10000
# Range: bytes=5001-  # 5001字节之后全部
# Range: bytes=-3000, 5000-7000  # 从一开始到 3000 字节和5000-7000字节的多重范围

Response
HTTP/1.1 206 Partial Content
Date: Sun, 08 Sep 2019 06:01:20 GMT
Content-Range: bytes 5001-10000/10000 # 针对范围请求，响应会返回状态码206 Partial Content 的响应报文。对于多重范围的范围请求，响应会在首部字段 Content-Type 标明 multipart/byteranges 后返回响应报文
Content-Length: 5000
Content-Type: image/jpeg
```

## 内容协商返回最合适的内容

比如中英文web版本切换

```bash
Accept
Accept-Charset
Accept-Encoding
Accept-Language
Content-Languge

```

有三种类型：服务器驱动协商、客户端驱动协商，透明协商