## DNS 预读取

> 参考[MDN](https://developer.mozilla.org/zh-CN/docs/Controlling_DNS_prefetching)

`X-DNS-Prefetch-Control` 头控制着浏览器的 DNS 预读取功能。DNS 预读取是一项使浏览器主动去执行域名解析的功能，其范围包括文档的所有链接，无论图片的，css的，还是JavaScript 等其他用户能够点击的 URL。

因为预存取会在后台执行，所以 DNS 很可能在链接对应的东西出现之前就已经解析完毕。这能够减少用户点击链接时的延迟。
>X-DNS-Prefetch-Control: on
* 启用 DNS 预解析。在浏览器支持 DNS 预解析的特性时即使不使用该标签浏览器依然会进行预解析。
>X-DNS-Prefetch-Control: off
* 关闭 DNS 预解析。这个属性在页面上的链接并不是由你控制的或是你根本不想向这些域名引导数据时是非常有用的。

### 强制查询特定主机名
```html
<link rel="dns-prefetch" href="http://www.spreadfirefox.com/">
```

## web开发会话跟踪的方法

1. cookie

cookie和session的作用都是为了保持访问的用户和后端服务器之间的交互状态，但随着cookie个数的增多和访问量的增加，它占用的网络贷款随之增大，所以当访问量很低的时候一般用session。

Cookie 通过在客户端记录信息确定用户身份，Session 通过在服务器端记录信息确定用户身份。

* 什么是 Cookie?
Cookie 实际上是一小段的文本信息。客户端请求服务器，如果服务器需要记录该用户状态，就使用response向客户端浏览器发送一个 Cookie 。客户端浏览器会把 Cookie 保存起来。当浏览器再请求该网站时，浏览器把请求的网址连同该Cookie一同提交给服务器。服务器检查该 Cookie，以此来辨认用户状态。服务器还可以根据需要修改 Cookie 的内容。

Cookie 具有不可跨域性。根据 Cookie 规范，浏览器访问 Google 只会携带 Google 的 Cookie，而不会携带百度的 Cookie。Google也只能操作Google的Cookie，而不能操作Baidu的Cookie。

Cookie在客户端是由浏览器来管理的。浏览器能够保证Google只会操作Google的Cookie而不会操作 Baidu的Cookie，从而保证用户的隐私安全。浏览器判断一个网站是否能操作另一个网站Cookie的依据是域名。Google与Baidu的域名 不一样，因此Google不能操作Baidu的Cookie。

2. session
* Session 的致命弱点是不容易在多台服务器之间共享。

session代表服务器与浏览器的一次会话过程，这个过程是连续的，也可以时断时续的。session存放服务器端的内存中（为了获取更高的存取速度）。   

session的创建和使用总在服务端，而浏览器从来都没得到过session对象。但浏览器可以请求Servlet（jsp也是Servlet） 来获取session的信息。每个用户都会有一个独立的Session。如果Session内容过于复杂，当大量客户访问服务器时可能会导致内存溢出。因此，Session里的信息应该尽量精简。 

Session在用户第一次访问服务器的时候自动创建。需要注意只有访问JSP、Servlet等程序时才会创建Session，只访问HTML、IMAGE等静态资源并不会创建Session。如果尚未生成Session，也可以使用request.getSession(true)强制生成Session。 
 
Session生成后，只要用户继续访问，服务器就会更新Session的最后访问时间，并维护该Session。用户每访问服务器一次，无论是否读写Session，服务器都认为该用户的Session“活跃（active）”了一次   
由于会有越来越多的用户访问服务器，因此Session也会越来越多。为防止内存溢出，服务器会把长时间内没有活跃的Session从内存删除。这个时间就是Session的超时时间。如果超过了超时时间没访问过服务器，Session就自动失效了。

3. url重写   

URL地址重写是对客户端不支持Cookie的解决方案。URL地址重写的原理是将该用户Session的id信息重写 到URL地址中。服务器能够解析重写后的URL获取Session的id。这样即使客户端不支持Cookie，也可以使用Session来记录用户状态。

4. 隐藏input     

是一种最简单的方式，将字段隐藏在HTML表单中，但不在客户端显示。比如在第一张页面中输入用户名和密码登陆，服务器生成响应返回第二张页面。当第二张页面提交时可能仍然需要知道来自第一张页面中的用户名。   那么就可以通过隐藏表单域来实现这一连续的过程。当第一张页面提交后，服务器端作出响应返回第二张页面，此页面中用隐藏域记录了来自登陆时的用户名。通俗说就是当服务器回发给客户端的响应中，就同时把用户名再次回发到客户端，用隐藏域隐藏起来，是不可见的。当第二张页面提交时，此隐藏域中的用户名一并随表单提交。这样服务器就仍然可以判断此用户是否与以前的用户相同。于是，再次处理完结果后继续将响应回发给客户端，且此响应中也仍然包含了用户名，在客户端中仍然用隐藏域将这一信息隐藏。这样就完成了一个连续请求的动作，但是对于用户，这是不可见的。

5. ip地址



> 参考[web开发会话跟踪的方法](https://www.jianshu.com/p/be8ee69ca651)


## js实现页面重定向的几种方法
1. 重定向
```js
<script language="javascript"type="text/javascript">
　　window.location.href="";
</script>
 ```

2. 返回
 ```js
<script language="javascript">
　　alert("返回");
　　window.history.back(-1);
</script>
 ```

3. ie 重定向 用上面也可以
```js
<script language="javascript">
window.navigate("");
</script>
```

4. 使用Location操作URL
```js
window.location.replace("");
```

5. 重载刷新页面
```js
window.location.reload ( );
```

如果该方法没有规定参数，或者参数是 false，它就会用 HTTP 头 If-Modified-Since 来检测服务器上的文档是否已改变。如果文档已改变，reload() 会再次下载该文档。如果文档未改变，则该方法将从缓存中装载文档。这与用户单击浏览器的刷新按钮的效果是完全一样的。

如果把该方法的参数设置为 true，那么无论文档的最后修改日期是什么，它都会绕过缓存，从服务器上重新下载该文档。这与用户在单击浏览器的刷新按钮时按住 Shift 健的效果是完全一样。
```js
window.location.reload (true); 
``` 

## scroll事件的绑定和解除方法
```js
$(window).on("scroll", function handle(){});  //绑定滚动事件

$(window).off("scroll", handle); //卸载滚动事件
```

## 手机滑到页面底部自动加载数据

```js
$(window).scroll(function(){

　　var scrollTop = $(this).scrollTop();
　　var scrollHeight = $(document).height();
　　var windowHeight = $(this).height();
　　if(scrollTop + windowHeight == scrollHeight){
　　 //加载数据的函数
　　}
});
```

## 图片放在自己网站不显示，打开图片链接显示问题？防盗链

  防盗链，这个是由于对方网站会看我们发过去的host， host是我们的域名。 有可能会屏蔽。

  可以加
```html
  <meta name="referrer" content="no-referrer" />// 隐藏来源页地址
```
