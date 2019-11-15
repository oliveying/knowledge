# 兼容性

```html
  <!--[if lte IE 9]>
    <link rel="stylesheet" href="">
  <![endif]-->

```
## enctype 属性规定在发送到服务器之前应该如何对表单数据进行编码。

|值|描述|
|:---|:---|
|application/x-www-form-urlencoded|	在发送前编码所有字符（默认）|
|multipart/form-data	|不对字符编码。在使用包含文件上传控件的表单时，必须使用该值。|
|text/plain	|空格转换为 "+" 加号，但不对特殊字符编码。|


## pc、m适配代码

* pc
```html
<!-- applicable-device begin -->
<meta name="applicable-device" content="pc">
<meta name="mobile-agent" content="format=html5; url=https://m.baidu.com">
<link rel="alternate" media="only screen and (max-width:640px)" href="https://m.baidu.com" />
<!-- applicable-device end -->
```
* m
```html
<!-- applicable-device begin -->
<meta name="applicable-device" content="mobile">
<link rel="canonical" href="https://www.baidu.com">
<!-- applicable-device end -->
```

## pc、m使用同一地址代码

```html
<meta name="applicable-device" content="pc,mobile">
```

## DOCTYPE声明

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```
* DOCTYPE是document type(文档类型)的简写，用来说明你用的XHTML或者HTML是什么版本。
* 其中的DTD(例如上例中的xhtml1-transitional.dtd)叫文档类型定义，里面包含了文档的规则，浏览器就根据你定义的DTD来解释你页面的标识，并展现出来。

要建立符合标准的网页，DOCTYPE声明是必不可少的关键组成部分；除非你的XHTML确定了一个正确的DOCTYPE，否则你的标识和CSS都不会生效。
```html
<html xmlns="http://www.w3.org/1999/xhtml">
```
这个"xmlns"是XHTML namespace的缩写，叫做"名字空间"声明。名字空间是什么作用呢？

答：由于xml允许你自己定义自己的标识，你定义的标识和其他人定义的标识有可能相同，但表示不同的意义。当文件交换或者共享的时候就容易产生错误。为了避免这种错误发生，XML 采用名字空间声明，允许你通过一个网址指向来识别你的标识。
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```
为了被浏览器正确解释和通过W3C代码校验，所有的XHTML文档都必须声明它们所使用的编码语言，我们一般使用gb2312(简体中文)或utf-8，制作多国语言页面也有可能用Unicode、ISO-8859-1等，根据你的需要定义。

##  $(document).ready()和window.onload区别

1. 执行时间不同

    window.onload必须等到页面内包括图片的所有元素加载完毕后才能执行。

    window.onload方法是在网页中所有的元素（包括元素的关联文件）完全加载到浏览器后才执行，即JavaScript此时才可以访问网页中的任何元素。

    $(document).ready()是DOM结构绘制完毕后就执行，不必等到加载完毕。

    jQuery中的$(document).ready()方法注册的事件处理程序，可以在DOM完全就绪时就可以被调用。此时，网页的所有元素对jQuery而言都是可以访问的，但是，这并不意味着这些元素关联的文件都已经下载完毕。

2. 编写个数不同

    window.onload不能同时编写多个，如果有多个window.onload方法，只会执行一个

    $(document).ready()可以同时编写多个，并且都可以得到执行

3. 简化写法

    window.onload没有简化写法

    $(document).ready(function(){})可以简写成$(function(){});

需要注意一点，由于在$(document).ready()方法内注册的事件，只要DOM就绪就会被执行，因此可能此时元素的关联文件未下载完。例如与图片有关的HTML下载完毕，并且已经解析为DOM树了，但很有可能图片还未加载完毕，所以例如图片的高度和宽度这样的属性此时不一定有效。要解决这个问题，可以使用JQuery中另一个关于页面加载的方法——load()方法。load()方法会在元素的onload事件中绑定一个处理函数。如果处理函数绑定给window对象，则会在所有内容（包括窗口、框架、对象和图像等）加载完毕后触发，如果处理函数绑定在元素上，则会在元素的内容加载完毕后触发。
```js
$(window).load(function(){  } )  // 等价于js中的window.onload=funciton(){  }
```

## dom文件加载的步骤为：

1. 解析HTML结构。
2. DOM树构建完成。//DOMContentLoaded
3. 加载外部脚本和样式表文件。
4. 解析并执行脚本代码。
5. 加载图片等外部文件。
6. 页面加载完毕。//load



