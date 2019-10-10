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

