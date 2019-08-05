## 盒模型概述

* 在一个文档中，每个元素都被表示为一个矩形的盒子。确定尺寸，属性`像它的颜色，背景，边框方面`和这些盒子的位置是渲染引擎的目标。

* 在 CSS 中，使用标准盒模型描述这些矩形盒子中的每一个。这个模型描述了元素所占空间的内容。每个盒子有四个边：外边距边（margin）， 边框边（border），内填充边（padding）与内容（content）边。

    ![盒模型](./images/box.png)

### css元素分类
* 替换元素和不可替换元素：就元素本身的特点来讲，可以分为替换和不可替换元素

    1. 替换元素就是浏览器根据元素的标签和属性，来决定元素的具体显示内容

        例如：浏览器会根据\<img>标签的src属性的值来读取图片信息并显示出来，而如果查看(X)HTML代码，则看不到图片的实际内容；

        又例如：根据\<input>标签的type属性来决定是显示输入框，还是单选按钮等。

         (X)HTML中的\<img>、\<input>、\<textarea>、\<select>、\<object>都是替换元素。这些元素往往没有实际的内容，即是一个空元素，浏览器会根据元素的标签类型和属性来显示这些元素。可替换元素也在其显示中生成了框。
    2. 不可替换元素

        (X)HTML 的大多数元素是不可替换元素，即其内容直接表现给用户端（例如浏览器）。段落<p>是一个不可替换元素，文字“段落的内容”全被显示。

* 显示元素

    除了可替换元素和不可替换元素的分类方式外，CSS 2.1中元素还有另外的分类方式：块级元素（block-level）和行内元素（inline-level，也译作“内联”元素）。

   1. 块级元素

    通过CSS设定了浮动（float属性，可向左浮动或向右浮动）以及设定显示（display）属性为“block”或“list-item”的元素都是块级元素。

    但是浮动元素比较特殊，由于浮动，其旁边可能会有其他元素的存在。而“list-item”（列表项<li>），会在其前面生成圆点符号，或者数字序号。

    * 块级元素特点：自动换行，可设置高宽
    1. 每个块级元素都是独自占一行，其后的元素也只能另起一行，并不能两个元素共用一行。
    2. 元素的高度、宽度、行高和顶底边距都是可以设置的。　　
    3. 元素的宽度如果不设置的话，默认为父元素的宽度。

        常见的块级元素：
        ```html
         <address>   <article> HTML5 <aside> HTML5 <audio> HTML5 <blockquote>  <canvas> HTML5

         <dd>  <div> <dl>  <fieldset>  <figcaption> HTML5  <figure> HTML5  <footer> HTML5  <form>

         <h1>,  <h2>,  <h3>, <h4>,  <h5>, <h6>

         <header>  HTML5  <hgroup> HTML5  <hr> <noscript>  <ol> <output> HTML5  <p> <pre>  <section> HTML5 <table>

         <tfoot>  <ul> <video>  HTML5
        ```
        \<blockquote>: HTML中的元素（或者 HTML 块级引用元素），代表其中的文字是引用内容。通常在渲染时，这部分的内容会有一定的缩进（注 中说明了如何更改）。若引文来源于网络，则可以将原内容的出处 URL 地址设置到 cite 特性上，若要以文本的形式告知读者引文的出处时，可以通过 \<cite> 元素。

        \<output>HTML 标签定义一个用户的操作或者计算的结果。

        \<noscript> 标签 当某个script类型在浏览器中不受支持或者被关闭时作为替代的内容
        * h5中所有块级元素列表

        |名称|定义|备注|
        |----|:----|----|
        |\<address>|联系方式信息||
        |\<blockquote>|块引用||
        |\<dd>|定义列表中定义条目描述。||
        |\<dl>|定义列表。||
        |\<div>|文档分区。||
        |\<fieldset>|表单元素分组|表格会有边界，使用legend表示表单标题|
        |\<form>|表单。||
        |\<h1>, \<h2>, \<h3>, <br>\<h4>, \<h5>, \<h6>|标题级别||
        |\<hr>|水平分割线||
        |\<noscript>|不支持脚本或禁用脚本时显示的内容。||
        |\<ol>|有序列表。||
        |\<table>|表格||
        |\<tfoot>|表脚注||
        |\<ul>|无序列表||
        |\<p>|行||
        |\<pre>|预格式化文本||
        |\<article>|文章内容|HTML5|
        |\<aside>|伴随内容|HTML5|
        |\<audio>|音频播放|HTML5|
        |\<canvas>|绘制图形|HTML5|
        |\<figcaption>|图文信息组标题|HTML5|
        |\<figure>|图文信息组（参照figcaption）|HTML5|
        |\<footer>|区段尾或页尾|HTML5|
        |\<header>|区段头或页头。|HTML5|
        |\<hgroup> |标题组|HTML5|
        |\<output>|表单输出。|HTML5|
        |\<section>|一个页面区段|HTML5|
        |\<video>|视频|HTML5 |

    2. 行内元素

    display属性等于“inline”的元素都是行内元素。几乎所有的可替换元素都是行内元素，例如<img>、<input>等等。

    不过元素的类型也不是固定的，通过设定CSS 的display属性，可以使行内元素变为块级元素，也可以让块级元素变为行内元素。

    * 行内元素特点：（无法自动换行，无法设置宽高）
    1. 可以和其他元素处于一行，不用必须另起一行。
    2. 元素的高度、宽度及顶部和底部边距不可设置。
    3. 元素的宽度就是它包含的文字、图片的宽度，不可改变。

      常见的行内元素：

    ```html
    <b>, <big>,  <i>, <small>, <tt>

    <abbr>, <acronym>,  <cite>, <code>, <dfn>,  <em>, <kbd>, <strong>,  <samp>, var

    a, <bdo>,  <br>, <img>, <map>,  object,  <q>, script,  <span>, <sub>, <sup>

    <button>, <input>,  <label>, <select>, <textarea>
    ```

    * 行内元素分为行内替换元素，行内非替换元素

    * 行内替换元素

        width、 height、 margin的四个方向、 padding的四个方向都正常显示，遵循标准的css盒模型。 例如：img

    * 行内非替换元素

        width、 height不起作用，用line-height来控制高度。

        padding左右起作用，上下不会影响行高，但是对于有背景色和内边距的行内非替换元素，背景可以向元素上下延伸，但是行高没有改变。因此视觉效果就是与前面的行重叠。(《css权威指南》 P249)
        margin左右起作用，上下不起作用，原因在于：行内非替换元素的外边距不会改变一个元素的行高（《css权威指南》 P227）。

# 常见的布局方案
## 静态布局(Static Layout)
1. 布局概念：最传统、原始的Web布局设计。网页最外层容器(outer)有固定的大小,所有的内容以该容器为标准,超出宽高的部分用滚动条(overflow:scroll)来实现滚动查阅。

2. 优点：采用的是css2之前的写法,不需要考虑用户浏览器的宽度，不存在浏览器兼容性。布局简单。

3. 缺点：但是移动端不可以使用pc端的页面,两个页面的布局不一致,移动端需要自己另外设计一个布局并使用不同域名呈现。

4. 实现方法：PC端: 最外层居中,限制了最小的宽度, 低于了则以最小宽度出现滚动条，移动端限制了最大的宽度, 超过了则以最大宽度居中显示

## 流式布局(Liquid Layout)，也叫百分比布局

* 布局概念

流式布局的特点是随着屏幕的改变，页面的布局没有发生大的变化，可以进行适配调整，这个正好与自适应布局相补。
流式布局常用的设计模板:
  1. 左侧固定+右侧自适应
  2. 左右固定宽度+中间自适应(参考京东手机版)

  页面元素的宽度按照屏幕进行适配调整，主要的问题是如果屏幕尺度跨度太大，那么在相对其原始设计而言过小或过大的屏幕上不能正常显示 。 你看到的页面，元素的大小会变化而位置不会变化——这就导致如果屏幕太大或者太小都会导致元素无法正常显示。
* 优点

元素的宽高用百分比做单位，元素宽高按屏幕分辨率调整，布局不发生变化

* 缺点

屏幕尺度跨度过大的情况下，页面不能正常显示。

### 自适应布局

分别为不同的屏幕设置布局格式，当屏幕大小改变时，会出现不同的布局，意思就是在这个屏幕下这个元素块在这个地方，但是在那个屏幕下，这个元素块又会出现在那个地方。只是布局改变，元素不变。可以看成是不同屏幕下由多个静态布局组成的。

## 弹性盒子布局（flex layout）

* 布局概念

    弹性布局是css3引入的强大布局方式，用来替代以前web开发人员使的一些复杂易错的hacks方法（如float实现流式布局）
* 优点

简单、方便、快捷

* 缺点

css3 新特性，浏览器兼容性不好。部分手机浏览器android也不支持。

* 实现方法
> 参考[阮一峰flex布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。
```css

.box{
  display: flex;
}
```
### flex-direction属性决定主轴的方向（即项目的排列方向）。
```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
* row（默认值）：主轴为水平方向，起点在左端。
* row-reverse：主轴为水平方向，起点在右端。
* column：主轴为垂直方向，起点在上沿。
* column-reverse：主轴为垂直方向，起点在下沿。

### flex-wrap属性
* 默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
* nowrap（默认）：不换行。
* wrap：换行，第一行在上方。
* wrap-reverse：换行，第一行在下方。

### flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap

```css
.box {
  flex-flow: <flex-direction> <flex-wrap>;
}

```

### justify-content属性定义了项目在主轴上的对齐方式。

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```
* flex-start（默认值）：左对齐
* flex-end：右对齐
* center： 居中
* space-between：两端对齐，项目之间的间隔都相等。
* space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

### align-items属性定义项目在交叉轴上如何对齐。

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}

```
* flex-start：交叉轴的起点对齐。
* flex-end：交叉轴的终点对齐。
* center：交叉轴的中点对齐。
* baseline: 项目的第一行文字的基线对齐。
* stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

### align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```
* flex-start：与交叉轴的起点对齐。
* flex-end：与交叉轴的终点对齐。
* center：与交叉轴的中点对齐。
* space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
* space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
* stretch（默认值）：轴线占满整个交叉轴。

## 百分比宽度布局（Percentage Widths Layout）

* 固定页面布局，当屏幕大小改变时，页面的大体格局保持不变。
* 宽度使用百分比，文字使用em，rem。
* 随着浏览器宽度的改变，页面的格局会逐渐发生变化。
```css
.layout {
  width: 100%;
  font-size: 0;
  .left {
  width: 20%;
  }
  .content {
  width: 80%
  }
}
```

## 双栏布局

## 方案1：撑满window，随浏览器大小变化而变化
```html

    <div class="layout-wrap">
      <div class="layout-head">
      上部
      </div>
      <div class="layout-left">
      左侧
      </div>
      <div class="layout-right">
      右侧
      </div>
    </div>
```
```css
.layout {
      &-wrap {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      &-head {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100px;
        background: #666;
        overflow: auto;
      }
      &-left {
        position: absolute;
        top: 100px;
        left: 0;
        bottom: 0;
        width: 200px;
        background: #eee;
        overflow: auto;
      }
      &-right {
        position: absolute;
        top: 100px;
        left: 200px;
        right: 0;
        bottom: 0;
        background: #999;
        overflow: auto;
      }
    }
```

* abs布局，简单快速的达到我们想要的效果，兼容性好，但是整个页面脱离了文档流

#### 方案2 采用行内块元素布局

```html
    <div class="layout-wrap">
      <div class="layout-head">
      上部
      </div>
      <div class="layout-body">
        <div class="layout-left">
        左部
        </div>
        <div class="layout-right">
        右部
        </div>
      </div>
    </div>
<style>
 .layout {
      &-wrap {
        height: 100%;
      }
      &-head {
        height: 100px;
        background: #666;
        font-size: 30px;
      }
      &-body {
        height: calc(100% - 100px);
        background: #eee;
        font-size: 0;
      }
      &-left {
        display: inline-block;
        width: 40%;
        height: 100%;
        background: #eee;
        font-size: 30px;
        overflow: auto;
      }
      &-right {
        display: inline-block;
        width: 60%;
        height: 100%;
        background: #999;
        font-size: 30px;
        overflow: auto;
      }
    }
</style>
   
```

* 由于用到了calc 影响性能，还需要在较高版本的浏览器运行
* 需要清除行内块的空隙带来的影响

#### 方案3：float布局

```scss
    .layout {
      &-wrap {
        height: 100%;
      }
      &-head {
        height: 100px;
        background: #666;
        font-size: 30px;
      }
      &-body {
        height: calc(100% - 100px);
        background: #eee;
        font-size: 0;
      }
      &-left {
        float: left;
        width: 40%;
        height: 100%;
        background: #eee;
        font-size: 30px;
        overflow: auto;
      }
      &-right {
        width: 60%;
        height: 100%;
        margin-left: 40%;
        background: #999;
        font-size: 30px;
        overflow: auto;
      }

    }
```

* 在方案二的基础上调整一下左右两个div的样式即可，需要清除浮动带来的影响

## 响应式布局（Liquid Layout）

* 采用自适应布局和流式布局的综合方式，为不同屏幕分辨率范围创建流式布局
* 利用媒体查询可以检测到屏幕的尺寸(主要检测宽度)，并设置不同的CSS样式，当屏幕大小改变时，会出现不同的布局。
* 栅格布局；将当前屏幕划分为n个，普遍划分为12，24个，根据不同的屏幕显示不同的大小，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。
* 随着用户浏览器宽度的变化，到达特定尺寸样式会突变，比如左右模块突变为上下模块。
```css
@media (min-width: 1200px)
.container {
    width: 1170px;
}
@media (min-width: 992px)
.container {
    width: 970px;
}
@media (min-width: 768px)
.container {
    width: 750px;
}
```

# 移动端

## 视口（viewport）与像素

### 布局视口

* 不再与移动端浏览器相关联，完全是独立的。实际上布局视口的宽度要比屏幕宽出很多。

### 视觉视口

* 用户看到的网站展示区域，一般视觉视口和设备宽度一致。并且它的CSS像素的数量会随着用户缩放而改变。

### 理想视口

* 为了使网站在移动端有最理想的浏览和阅读宽度而设定。需要手动添写meta视口标签通知浏览器操作。使用它配合css媒体查询制定移动端展示方案。

### 像素

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

#### 屏幕宽即为设备宽
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" charset="UTF-8">
```
* 以iPhone 5s为例，屏幕的分辨率是640x1136，倍率是2。浏览器会认为屏幕的分辨率是320x568，仍然是基准倍率的尺寸。所以在制作页面时，只需要按照基准倍率来就行了。无论什么样的屏幕，倍率是多少，都按逻辑像素尺寸来设计和开发页面。只不过在准备资源图的时候，需要准备2倍大小的图，通过代码把它缩成1倍大小显示，才能保证清晰。

* 1px像素的问题，一些canvas画布上圆角矩形会有锯齿

* 使用rem自适应布局，利用rem单位相对根元素的font-size来做计算，根据不同的屏幕算出html的font-size，页面内的大小单位都根据rem来写。
```js
 var docEl = doc.documentElement;
	var remStyle = document.createElement("style");
    var width = docEl.getBoundingClientRect().width;
    var rem = width * 100 / designWidth;
	remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
```
## 常见布局


```html
    <div class="layout-wrap">
      <div class="layout-head">
        这是顶部
      </div>
      <div class="layout-body">
        主体内容
      </div>
      <div class="layout-foot">
        底部
      </div>
    </div>

.layout {
  &-head {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4rem;
    background: #fa0;
  }
  &-body {
    position: absolute;
    top: 4rem;
    left: 0;
    right: 0;
    bottom: 4rem;
    background: #eee;
  }
  &-foot {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4rem;
    background: #ffa319;
  }
 }
```

## 设定固定的视口宽度
* 先设定好固定的视口宽度，再根据屏幕宽度与设备宽度的比例设定缩放比，一般meta viewport宽度为设计稿宽度。
```js
 !function(){
    var i=screen.width/1242;
    document.write('<meta name="viewport"content="width=1242,initial-scale='+i+",maximum-scale="+i+", minimum-scale="+i+',user-scalable=no,target-densitydpi=device-dpi,minimal-ui"/>');
  }();
```
* 目前在wap项目中存在两种layout，view/layout/h5.ejs 采用的是屏幕宽即为设备宽，view/layout/h5.fixwidth.ejs，是以1242作为固定宽度。
```scss
    $h5-fixwidth: 1242px;
    $h5-fixwidth-base-ratio: 3;
    @function realPx($px) {
      @return $px*$h5-fixwidth-base-ratio;
    }
    .common-btn {
        display: inline-block;
        width: realPx(160px);
        height: realPx(44px);
        background: #F2CEAE;
        box-shadow: 0 realPx(6px) realPx(20px) 0 rgba(0, 0, 0, 0.30);
        border-radius: realPx(5px);
        font-size: realPx(16px);
        line-height: realPx(44px);
        color: #03418B;
        letter-spacing: 0;
        text-align: center;
        font-family: PingFang-SC-Medium, Arial, Helvetica, sans-serif;
    }
```
* 所有的像素都需要重新计算长度
### 1px
* 像素的原因 由于视口显示宽度与设备宽度一样，实际像素与逻辑像素，而设备宽度为逻辑像素，逻辑像素=像素密度✖倍率，比如android大部分屏幕的倍率为2，ios的为3，比如ios手机一逻辑像素实际对应9个像素点。
##### 方案1：透明度
```css
.border-1px{
 border:1px solid rgba(255,255,255,0.5)
}
```

### 方案2：切一张三像素高，宽度较长的图片,设置其高度为1px
```html
<div style='overflow: hidden;height: 1px'><img src="./images/line.png"></div>
```
### 方案3：巧用渐变（由于采用相对定位的方式，需要考虑绝对定位时的位置）
```css
.app-border-bottom {
    position: relative;
}
.app-border-bottom::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0px;
    bottom: 0px;
    background: -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(66.66%, transparent), color-stop(66.66%, #e0e0e0), to(#e0e0e0));
    background: linear-gradient(transparent 0%, transparent 66.66%, #e0e0e0 66.66%, #e0e0e0 100%);
}
```

## 一些小技巧

### 标签语义化

* 直观从html结构中就能看出大致结构，方便后续人员的开发与查找元素

```html
<header></header>
<footer></footer>
<section></section>
<a></a>
<i></a>

```
### 伪类元素的使用  :before :after

* 使用场景--一些使用共用的文字且不适用于同一模板，方便随时更新
* 结构尽量精简，减少层级，降低html解析的DOM树复杂度

```css
.company-history-count:before {
    content: '查看更多 ';
}
.company-history-count:after {
    content: ' ';
}

```
* 一些特定的样式，不需要多余元素包裹，比如异型元素小三角，

```css
.tab-main .active.tab .top::after {
    position: absolute;
    left: 35%;
    top: 100%;
    content: '';
    width: 0;
    height: 0;
    margin-top: 2px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #fff;
}
```

### 充分利用 + 选择器

* 组件与组件间的间隔，无须增加新的css

```html
<ul class="list-warp">
    <li class="list"></li>
    <li class="list"></li>
    <li class="list"></li>
    <li class="list"></li>
</ul>

.list {
    width: 100px;
    height: 30px;
    & + & {
      border-top: 1px solid #000;
    }
}
```
### 元素空隙的处理

* 由于当前本地开发的html未压缩，而发到测试与线上的html是压缩过后的，导致本地与测试所看到的页面会稍显不同。
* 行内元素间的空格回车等会造成行内元素的空隙，特别是inline-block元素，解决方法：
* 1.设置空隙的字体大小，font-size:0;
```scss
.list-warp{
    font-size:0;
    .list{
        display:inline-block;
        font-size:14px;
    }
}
```
* 2.设置元素浮动，但需要清除浮动的影响，而且图文并排时由于脱离了文档流，导致外部环绕文字显示会有问题
```scss
.list-warp{
    clear:both;
    .list{
        float:left;
    }
}
```
