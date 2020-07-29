## 输入URL到页面渲染

* *DNS解析
* TCP三次握手建立连接
* 发送http请求
* 服务端处理并响应数据
* 浏览器响应、解析数据，并渲染页面

## 浏览器解析渲染页面过程
* 解析HTML，生成DOM树
* 解析CSS，生成CSSOM树
* 将DOM树和CSSOM树关联，生成渲染树(Render Tree)
* 布局render树（Layout/reflow），负责各元素尺寸、位置的计算
* 绘制render树（paint），绘制页面像素信息
* 将像素发送给GPU，展示在页面上。(Display)

## webkit渲染流程及分层加速
浏览器的渲染流程大致如下：
1. HTML解释器解析HTML文档成DOM树
2. CSS解析器解析CSS为CSSOM树
3. 根据DOM和CSSOM生成renderObject树
4. 根据CSSOM和renderObject树生成renderLayout树
5. 采用软件或硬件加速

### HTML的解析流程
当浏览器收到从服务器或本地读取到的html文件流后通过转码器转码成字符流，再通过词法分析器解释成词语，然后构建成dom节点，最后生成一个dom树，流程如下：

解释器在解释字节流到字符串时，会先检查html文档的编码格式，然后用合适的解码器进行解码；

如果解析HTML成DOM树过程中，解析到外部资源的加载，会开启异步加载外部资源，如果遇到script标签的话，就需要停止解析，在webkit内核的浏览器中，在加载外部脚本前，会先开启一个预扫描和预加载器，去扫描后面的解析需要用到的外部资源并加载，因为预扫描和预加载的过程不会创建dom，所以过程是比较快的；之后才会去加载外部的脚本，加载完成后就立即执行脚本；

如果script标签上有defer或者async的话，会开启异步的脚本加载，解析到有defer的script，会异步加载脚本，同时会继续解析html，当所有html解析完成后，才会去执行脚本的内容；

如果解析到有async的script，同样会异步加载脚本，html的解析不会被阻断，但是当脚本加载完成后，就会阻断后面的解析而去执行脚本内容；
因此，一般script都是写在`<body>`最后面，不影响前面的dom的构建；

DOM树生成后，会触发DOMContentLoaded事件，相当于JQuery的$(document.render())方法，此时可以访问到dom，但此时资源还是没有加载完的；

### CSS的解析
css的解析同样是会生成一个树——CSSOM，它提供了一个api是我们能够通过js去操作它；
我们可以通过document.styleSheets去访问加载的所有样式表：
```js
document.styleSheets
document.styleSheets[0].disable = true; // 禁用该样式表
```

因为浏览器会提供一个默认的样式，所以CSSOM的构建其实是在根据用户引入的样式表或者自定义样式进行修改插入；

### RenderObject树
CSSOM和DOM生成之后，就会进行一系列的规则匹配去匹配DOM在CSSOM中的样式信息，会根据优先匹配ID规则=》类规则=》标签名规则，然后会把样式信息保存在renderObject对象中，最后会生成一个renderObject树，renderObject树与DOM树并不是一一对应的，因为对于一些非可视节点是不会生成renderObject节点的，如head、script等；

生成renderObject的三条规则：

1. document会生成一个renderObject节点
2. DOM树的可视节点
3. 某系情况下内核需要建立匿名的renderObject节点，它并不代表DOM上的任意节点

生成renderObject树之后就会进行布局计算，布局计算是一个递归的过程，因为一个元素的布局信息通常跟它的子孙节点有关，比如说高度：

### 网页分层
生成renderObject树之后，并且经过布局计算，位置信息等都保存在了renderObject对象中，接下来就会生成renderLayer树，renderLayer对象与renderObject是一对多的关系，以下renderObject节点会创建一个renderLayer节点：

    • DOM树中的document节点对应的renderView节点
    • 设置了position的节点
    • 设置了透明度、overflow:auto屏幕动滚的节点
    • 使用了canvas 2D 和 3D(webGL)的节点
    • video节点

浏览器最终的渲染就是通过renderLayer树来进行渲染的，一个renderLayer节点中包含多个renderObject节点，内容渲染就是通过renderObject来渲染的；

最终的渲染有软件渲染和硬件渲染；都是一层一层渲染的，我们可以把一个renderLayer对象当作一个层。

> https://www.yuque.com/books/share/ea55261b-dffd-44ba-9002-05fc0d55b9c5/alrshk
