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