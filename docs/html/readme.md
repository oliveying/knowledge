## 兼容性

```html
  <!--[if lte IE 9]>
    <link rel="stylesheet" href="">
  <![endif]-->

```

## enctype 属性规定在发送到服务器之前应该如何对表单数据进行编码。

|值|描述|
|:--|:--|
|application/x-www-form-urlencoded|	在发送前编码所有字符（默认）|
|multipart/form-data	|不对字符编码。在使用包含文件上传控件的表单时，必须使用该值。|
|text/plain	|空格转换为 "+" 加号，但不对特殊字符编码。|


