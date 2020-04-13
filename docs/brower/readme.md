# network
## DOMContentLoaded 和 Load
DOMContentLoaded 和 Load 分别对应 页面 DOMContentLoaded 和 Load 事件触发的时间点，即：

DOMContentLoaded：DOM树构建完成。即HTML页面由上向下解析HTML结构到末尾封闭标签</html> 。

Load:页面加载完毕。 DOM树构建完成后，继续加载html/css 中的图片资源等外部资源，加载完成后视为页面加载完毕。

DOMContentLoaded 会比 Load 时间小，两者时间差大致等于外部资源加载的时间。

## Finish
Finish 时间与DOMContentLoaded 和 Load 并无直接关系。

Finish 时间是页面上所有 http 请求发送到响应完成的时间，HTTP1.0/1.1 协议限定，单个域名的请求并发量是 6 个，即Finish是所有请求（不只是XHR请求，还包括DOC，img，js，css等资源的请求）在并发量为6的限制下完成的时间。

Finish 的时间比 Load 大，意味着页面有相当部分的请求量，

Finish 的时间比 Load 小，意味着页面请求量很少，如果页面是只有一个 html文档请求的静态页面，Finish时间基本就等于HTML文档请求的时间。（如下图）



页面发送请求和页面解析文档结构，分属两个不同的线程，

所以 Finish 时间与DOMContentLoaded 和 Load 并无直接关系。

## transferred
查看请求的总大小

## requests
查看请求的总数量

## google浏览器报错 net::ERR_CERT_DATE_INVALID

原因，本地配置了线上的host，把host删除

> https://blog.csdn.net/Walker_m/article/details/81741960
> https://segmentfault.com/a/1190000008825390