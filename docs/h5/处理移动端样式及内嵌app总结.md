# 移动端

## 视口
视口(viewport)代表当前可见的计算机图形区域。在Web浏览器术语中，通常与浏览器窗口相同，但不包括浏览器的UI， 菜单栏等——即指你正在浏览的文档的那一部分。

 一般我们所说的视口共包括三种：布局视口、视觉视口和理想视口，它们在屏幕适配中起着非常重要的作用。

## 像素

* 一个像素就是计算机屏幕能显示一特定颜色的最小区域。
* 设备像素（物理像素）：设备屏幕的物理像素，任何设备的物理像素的数量都是固定的。
* CSS像素（逻辑像素）：为Web开发者创造的，在CSS（和JavaScript）中使用的一个抽象的层,iOS的尺寸单位为pt，Android的尺寸单位为dp。
* 倍率：物理像素 \ 倍率 = 逻辑像素。
* CSS像素相当于多少个设备像素取决于屏幕的特性（是否高密度）和用户进行的缩放。当用户放大的越大，一个CSS像素覆盖的设备像素就越多，因此这个元素不一定会跨越css设置等值的设备像素。在旧的屏幕上，当缩放程度为100%时，一个CSS像素等于一个设备像素。在高密度屏幕上，例如苹果的视网膜屏幕，一个CSS像素跨越了多个设备像素。
* 单位之间的换算关系随倍率变化：
* 1倍：1pt=1dp=1px（mdpi、iPhone 3gs）
* 1.5倍：1pt=1dp=1.5px（hdpi）
* 2倍：1pt=1dp=2px（xhdpi、iPhone 4s/5/6）
* 3倍：1pt=1dp=3px（xxhdpi、iPhone 6 plus）
* 4倍：1pt=1dp=4px（xxxhdpi）

## 初始化移动端viewport，屏幕宽即为设备宽
```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
```
width：指定viewport的宽度，可以是一个具体的值，如：600，也可以是“device-width”，表示设备的宽度

initial-scale：初始缩放比例

minimum-scale：允许的最小缩放比例

maximum-scale：允许的最大缩放比例

user-scalable：是否允许用户缩放，有yes/no两个值

* 这句话定义了本页面的viewport的宽度为设备宽度，初始缩放值和最大缩放值都为1，并禁止了用户缩放。`viewport-fit=cover`标签应对iphone X的刘海
* 以iPhone 5s为例，屏幕的分辨率是640x1136，倍率是2。浏览器会认为屏幕的分辨率是320x568，仍然是基准倍率的尺寸。所以在制作页面时，只需要按照基准倍率来就行了。无论什么样的屏幕，倍率是多少，都按逻辑像素尺寸来设计和开发页面。只不过在准备资源图的时候，需要准备2倍大小的图，通过代码把它缩成1倍大小显示，才能保证清晰。

* 1px像素的问题，一些canvas画布上圆角矩形会有锯齿

* 使用rem自适应布局，利用rem单位相对根元素的font-size来做计算，根据不同的屏幕算出html的font-size，页面内的大小单位都根据rem来写。
```html
<script>
    var docEl = doc.documentElement,
	var remStyle = document.createElement("style"),
    var width = docEl.getBoundingClientRect().width;
    var rem = width * 100 / designWidth;
	remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
<script>
```

## 设定固定的视口宽度
* 先设定好固定的视口宽度，再根据屏幕宽度与设备宽度的比例设定缩放比，一般meta viewport宽度为设计稿宽度。
```js
!function(){
    var i=screen.width/1242;
    document.write('<meta name="viewport"content="width=1242,initial-scale='+i+",maximum-scale="+i+", minimum-scale="+i+',user-scalable=no,target-densitydpi=device-dpi,minimal-ui"/>');
  }();
```

## 移动端的1像素的边框问题

* 原因UI要求的1像素指的是物理像素，而css记录的是逻辑像素；它们之间存在一个比例关系，可以用javascript中的 `window.devicePixelRatio`来获取，也可以用媒体查询的`-webkit-min-device-pixel-ratio`来获取；当然，比例多少与设备相关。
* 在手机上border无法达到我们想要的效果。这是因为devicePixelRatio特性导致，iPhone的 devicePixelRatio==2，而border-width: 1px描述的是设备独立像素，所以，border被放大到物理像素2px显示，在iPhone上就显得较粗。

### 使用translate

1. 设置height: 1px，根据媒体查询结合transform缩放为相应尺寸。
```css
div {
    height:1px;
    background:#000;
    -webkit-transform: scaleY(0.5);
    -webkit-transform-origin:0 0;
    overflow: hidden;
}
```
2.用::after和::before,设置border-bottom：1px solid #000,然后在缩放-webkit-transform: scaleY(0.5);可以实现两根边线的需求

```css
div::after{
    content:'';width:100%;
    border-bottom:1px solid #000;
    transform: scaleY(0.5);
}
```
3.用::after设置border：1px solid #000; width:200%; height:200%,然后再缩放scaleY(0.5); 优点可以实现圆角，京东就是这么实现的，缺点是按钮添加active比较麻烦。
```css
.div::after {
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #bfbfbf;
    border-radius: 4px;
    -webkit-transform: scale(0.5,0.5);
    transform: scale(0.5,0.5);
    -webkit-transform-origin: top left;
}
```
4. border 1px
```scss
@mixin scale-border-around($border-color:#000){
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid $border-color;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 333%;
  height: 333%;
  -webkit-transform: scale(0.3);
  transform: scale(0.3);
  -webkit-transform-origin: left top;
  transform-origin: left top;
  border-radius: 2px;
}
```
### box-shadow 方案

利用阴影也可以实现，优点是没有圆角问题，缺点是颜色不好控制
```css
div {
    -webkit-box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.5);
}
```
【理解】来回顾一下box-shadow属性的用法。

```css
box-shadow: h-shadow v-shadow [blur] [spread] [color] [inset];
```

参数分别表示: 水平阴影位置，垂直阴影位置，模糊距离， 阴影尺寸，阴影颜色，将外部阴影改为内部阴影，后四个可选。该例中为何将阴影尺寸设置为负数？设置成-1px 是为了让阴影尺寸稍小于div元素尺寸，这样左右两边的阴影就不会暴露出来，实现只有底部一边有阴影的效果。从而实现分割线效果（单边边框）。

### 透明度
```css
.border-1px{
 border:1px solid rgba(255,255,255,0.5)
}
```

### 切一张三像素高，宽度较长的图片,设置其高度为1px
```html
<div style='overflow: hidden;height: 1px'><img src="./images/line3.png" class="vertical-top" alt=""></div>
```
### 巧用渐变（由于采用相对定位的方式，需要考虑绝对定位时的位置）
```css
.border-1px {
    background-image:linear-gradient(180deg, red, red 50%, transparent 50%),
          linear-gradient(270deg, red, red 50%, transparent 50%),
          linear-gradient(0deg, red, red 50%, transparent 50%),
          linear-gradient(90deg, red, red 50%, transparent 50%);
          background-size: 100% 1px,1px 100% ,100% 1px, 1px 100%;
          background-repeat: no-repeat;
          background-position: top, right top,  bottom, left top;
          padding: 10px;
}
```
【思路】将原本1个物理像素的边框大小利用线性渐变分割成几个部分（百分比控制），实现小于1像素效果

【解释】linear-gradient指定线性渐变，接受大于等于3个参数，第一个为渐变旋转角度，第二个开始为渐变的颜色和到哪个位置（百分比）全部变为该颜色，该例子中，第一句就是，渐变方向旋转180度，即从上往下（默认为0度从下往上），从红色开始渐变，到50%的位置还是红色，再渐变为继承父元素颜色。

【缺点】因为每个边框都是线性渐变颜色实现，因此无法实现圆角

### 媒体查询利用设备像素比缩放，设置小数像素

 IOS8下已经支持带小数的px值, media query对应devicePixelRatio有个查询值-webkit-min-device-pixel-ratio, css可以写成这样
```css
.border { border: 1px solid #999 }
@media screen and (-webkit-min-device-pixel-ratio: 2) {
    .border { border: 0.5px solid #999 }
}
@media screen and (-webkit-min-device-pixel-ratio: 3) {
    .border { border: 0.333333px solid #999 }
}
```

* *【缺点】* 对设备有要求，小数像素目前兼容性较差

### 媒体查询 + transfrom 对方案1的优化
```css
/* 2倍屏 */
@media only screen and (-webkit-min-device-pixel-ratio: 2.0) {
    .border-bottom::after {
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }
}

/* 3倍屏 */
@media only screen and (-webkit-min-device-pixel-ratio: 3.0) {
    .border-bottom::after {
        -webkit-transform: scaleY(0.33);
        transform: scaleY(0.33);
    }
}
```


### viewport + rem 方案
  该方案是对上述方案的优化，整体思路就是利用viewport + rem + js 动态的修改页面的缩放比例，实现小于1像素的显示。在页面初始化时，在头部引入原始默认状态为初始化viewport

## 设置固定弹窗宽度，当苹果5时，弹窗会变小，可以设置

```css
 .modal{
 max-width: 300px;
 width: 95vw;
}
```

## 移动端点击区域比较大，会默认有阴影，处理方式

```css
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
```

## 移动端弹框后禁止背景屏幕滑动的解决方案
第一种. 同时为html，body设置 overflow:hidden
```css
.lock-back{
        height: 100%;
        overflow: hidden;
    }
```
```js
// 弹出时
$('html, body').addClass('lock-back');

// 隐藏时
$('html, body').removeClass('lock-back');
```

* 缺点
1. 这种方法并不能在所有的移动设备上生效。
2. 生效后，但是背景页面会滚动到顶部，弹框隐藏后页面也无法滚动到弹框时的位置。

*设置height为100vh，测试没测出问题*

第二种：弹框弹出时，设置 body 元素定位为 fixed, 然后设置 top 为页面滚动的高度，弹框隐藏时移除 body 的 fixed 定位，并把页面重新滚动到之前的位置。

```js
// 弹出时
window.stopScroll = function () {
      var top = -(window.scrollY || window.pageYOffset || (document.documentElement.scrollTop === 0 ? document.body.scrollTop :document.documentElement.scrollTop));
      $('body').css({
        'position': 'fixed',
      });
      setTimeout(function () {
        $('body').css({
          'top': top + 'px'
        })
      })
    }
    window.recoverScroll = function () {
      var top = -parseInt(document.body.style.top.replace('px', ''));
      $('body').css({
        'position': 'static'
      });
      $(window).scrollTop(top);
    };
```

* 优点： 克服了第一种方法的缺点
* 缺点：在弹框弹出和隐藏时，由于页面发生了 top 和页面滚动，所以页面会有闪烁的情况。 // 目前我们使用的是这种


### 某些机型不支持video标签的poster属性，特别是安卓

用图片元素 `<img />`来代替poster
播放前显示`<img />`，隐藏 `<video />`
播放后显示`<video />`，隐藏 `<img />`

### iphonex适配
```html
 <!-- 1.viewport meta 标签增加属性viewport-fit=cover -->
<meta name="viewport" content="width=device-width, viewport-fit=cover, xxxx">
<!-- 2.body元素增加样式 -->
<style>
  body {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
/* 3.如有fixed底部的元素，也增加上面样式 */
.xxx {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  background-color: #fff; // 记得添加background-color，不然会出现透明镂空的情况
}
</style>

```

### CSS透明度颜色设置问题
Android部分不支持 hex写法，推荐用rgba的写法

#0000009c --> rgba(0, 0, 0, 0.61)

### flex对低版本的ios和Android的支持问题

使用postcss的autoprefixer插件，自动添加浏览器内核前缀，
并且增加更低浏览器版本的配置，自动添加flex老版本的属性和写法
```json

autoprefixer({
    browsers: [
        'iOS >= 6',     // 特殊处理支持低版本IOS
        'Safari >= 6',  // 特殊处理支持低版本Safari
    ],
}),

```

### ios 日期转换NAN的问题
将日期字符串的格式符号替换成'/'。
栗子：'yyyy-MM-dd'.replace(/-/g, '/')


