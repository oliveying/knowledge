# 适配及兼容问题

## 手机端适配使用px还是rem

* 对于只需要适配少部分手机设备，分辨率对页面影响不大的，使用px即可；

* 对于需要适配各种移动设备，使用rem，例如只需要适配iPhone和iPad等分辨率差别比较挺大的设备。

1. px像素（pixel）：相对长度单位。相对于显示器屏幕分辨率而言.在移动端，因为手机分辨率种类颇多，不可能一个个去适配，需要考虑em和rem

2. em相对于父元素字体大小的单位

3. rem是指相对于根元素的字体大小的单位, 只会相对于html的值，不会受到父级的影响

## background-size兼容ie

```css
.back {
background: url("图片路径") 0 0 no-repeat;
    background-size: cover;
    -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='图片路径',sizingMethod='scale');
    filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='图片路径',sizingMethod='scale');
    background: none\9;
}
```


## 多行文本溢出...
* `-webkit-line-clamp` 因使用了WebKit的CSS扩展属性，该方法适用于WebKit浏览器及移动端；

* 可以使用css控制、css+js控制[文本超出省略号](./html/overflow2.html)

*使用css控制* _注意事项：由于是靠右侧，所以当设置的宽度和字体存放的一列宽度有间隙时，右侧的最后一个字会有一点点截断，所以需要UI正确合理控制一行的字宽，防止溢出、或者使用渐变_
```css
    background-image: -webkit-gradient(linear,left top,right top,color-stop(0,rgba(255,255,255,0)),color-stop(26.4%,#fff));
    background-image: linear-gradient(90deg,rgba(255,255,255,0) 0,#fff 26.4%);
```
思路：使用css控制，在外层加高度，超出隐藏，利用外层的before为float:left, after的content为relation控制，所以，当超出的时候显示...， 不超出，显示不了
```css
 /* css完美解决 */
    .wrap {
      height: 40px;
      line-height: 20px;
      overflow: hidden;
    }

    .wrap .text {
      float: right;
      margin-left: -5px;
      width: 100%;
      word-break: break-all;
    }

    .wrap::before {
      float: left;
      width: 5px;
      content: '';
      height: 40px;
    }

    .wrap::after {
      float: right;
      content: "...";
      height: 20px;
      line-height: 20px;
      /* 为三个省略号的宽度 */
      width: 3em;
      /* 使盒子不占位置 */
      margin-left: -3em;
      /* 移动省略号位置 */
      position: relative;
      left: 100%;
      top: -20px;
      padding-right: 5px;
      text-align: right;
      background-color: #aaeeff;
    }
```

*使用css+js控制*
```css
/*超出隐藏js实现*/

    .figcaption {
      background: #EEE;
      width: 410px;
      height: 80px;
    }
    .figcaption p {
      margin: 0;
      line-height: 20px;
    }
```

```js
$(".figcaption").each(function(i){
    var divH = $(this).height();
    var $p = $("p", $(this)).eq(0);
    while ($p.outerHeight() > divH) {
      $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
    };
  });
```

