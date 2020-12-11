(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{245:function(t,a,s){t.exports=s.p+"assets/img/class.5cfb4426.png"},246:function(t,a,s){t.exports=s.p+"assets/img/float.34ccc95f.png"},247:function(t,a,s){t.exports=s.p+"assets/img/left.0bcb48a1.png"},387:function(t,a,s){"use strict";s.r(a);var n=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"伪类与伪元素的特性及其区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#伪类与伪元素的特性及其区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 伪类与伪元素的特性及其区别")]),t._v(" "),n("ul",[n("li",[t._v("伪类本质上是为了弥补常规CSS选择器的不足，以便获取到更多信息；")]),t._v(" "),n("li",[t._v("伪元素本质上是创建了一个有内容的虚拟容器；")])]),t._v(" "),n("p",[t._v("CSS3中伪类和伪元素的语法不同；")]),t._v(" "),n("p",[t._v("伪类  "),n("code",[t._v(":link :hover")])]),t._v(" "),n("p",[t._v("伪元素  "),n("code",[t._v("::before ::after")])]),t._v(" "),n("p",[t._v("可以同时使用多个伪类，而只能同时使用一个伪元素；")]),t._v(" "),n("p",[t._v('其中伪类和伪元素的根本区别在于：它们是否创造了新的元素,,   这个新创造的元素就叫  "伪无素" 。')]),t._v(" "),n("p",[t._v("伪元素/伪对象：不存在在DOM文档中，是虚拟的元素，是创建新元素。 这个新元素(伪元素)  是某个元素的子元素，这个子元素虽然在逻辑上存在，但却并不实际存在于文档树中.")]),t._v(" "),n("p",[t._v("伪类：存在DOM文档中，(无标签,找不到,  只有符合触发条件时才能看到 ),  逻辑上存在但在文档树中却无须标识的“幽灵”分类。")]),t._v(" "),n("p",[t._v("因为伪类是类似于添加类所以可以是多个，而伪元素在一个选择器中只能出现一次，并且只能出现在末尾")]),t._v(" "),n("p",[t._v("W3C中对于二者应用的描述(描述太模糊, 不容易理解)：")]),t._v(" "),n("p",[t._v("伪类：用于向某些选择器添加特殊的效果\n伪元素：用于将特殊的效果添加到某些选择器(标签")]),t._v(" "),n("p",[t._v(":after/::after和:before/::before的异同")]),t._v(" "),n("ul",[n("li",[t._v("相同点")])]),t._v(" "),n("p",[t._v("都可以用来表示伪类对象，用来设置对象前的内容")]),t._v(" "),n("p",[t._v(":before和::before写法是等效的; :after和::after写法是等效的\n不同点")]),t._v(" "),n("p",[t._v(":before/:after是Css2的写法，::before/::after是Css3的写法")]),t._v(" "),n("p",[t._v("所以css2的要比css3的兼容好    ,,  :before/:after 的兼容性要比::before/::after好 ，")]),t._v(" "),n("p",[t._v("不过在H5开发中建议使用::before/::after比较好\n注意：")]),t._v(" "),n("p",[t._v("伪对象要配合content属性一起使用")]),t._v(" "),n("p",[t._v("伪对象不会出现在DOM中，所以不能通过js来操作，仅仅是在 CSS 渲染层加入")]),t._v(" "),n("p",[t._v("伪对象的特效通常要使用:hover伪类样式来激活")]),t._v(" "),n("p",[t._v("eg:当鼠标移在span上时，span前插入”duang”")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token style"}},[n("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n 　　 "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n           "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n           "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span:hover::before")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"duang"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n           "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("222"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:s(245),alt:"伪类"}})]),t._v(" "),n("h2",{attrs:{id:"css选择器问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css选择器问题","aria-hidden":"true"}},[t._v("#")]),t._v(" css选择器问题")]),t._v(" "),n("p",[t._v(":nth-child(n),n从1开始计数\n:nth-child(odd)和:nth-child(even),从1开始计数\n:nth-child(an+b),n从0开始计数")]),t._v(" "),n("p",[t._v("an+b的n表示从0开始计数，相加之后正常从1生效")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token style"}},[n("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p:nth-child(3n+0)")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("this is "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("this is "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("this is red"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("this is "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),n("h2",{attrs:{id:"两个head里的css引用加载顺序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#两个head里的css引用加载顺序","aria-hidden":"true"}},[t._v("#")]),t._v(" 两个head里的css引用加载顺序")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("main1.css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("main2.css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("ul",[n("li",[n("p",[t._v("main1.css和main2.css同时开始加载，先加载完成的优先解析")])]),t._v(" "),n("li",[n("p",[t._v("如果main1.css和main2.css中有相同的选择器规则，那么main2.css中的规则将合并main1.css的规则")])])]),t._v(" "),n("h2",{attrs:{id:"在w3c标准盒模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在w3c标准盒模型","aria-hidden":"true"}},[t._v("#")]),t._v(" 在W3C标准盒模型")]),t._v(" "),n("p",[t._v("标准盒子模型 ＝ margin + border + padding + width （width = content ）")]),t._v(" "),n("p",[t._v("IE盒子模型 ＝ margin + width（width = border + padding + content ）")]),t._v(" "),n("h2",{attrs:{id:"什么是bfc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是bfc","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是BFC?")]),t._v(" "),n("h3",{attrs:{id:"常见定位方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见定位方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见定位方案")]),t._v(" "),n("p",[t._v("在讲 BFC 之前，我们先来了解一下常见的定位方案，定位方案是控制元素的布局，有三种常见方案:")]),t._v(" "),n("ul",[n("li",[t._v("普通流 (normal flow)\n在普通流中，元素按照其在 HTML 中的先后位置至上而下布局，在这个过程中，行内元素水平排列，直到当行被占满然后换行，块级元素则会被渲染为完整的一个新行，除非另外指定，否则所有元素默认都是普通流定位，也可以说，普通流中元素的位置由该元素在 HTML 文档中的位置决定。")]),t._v(" "),n("li",[t._v("浮动 (float)\n在浮动布局中，元素首先按照普通流的位置出现，然后根据浮动的方向尽可能的向左边或右边偏移，其效果与印刷排版中的文本环绕相似。")]),t._v(" "),n("li",[t._v("绝对定位 (absolute positioning)\n在绝对定位布局中，元素会整体脱离普通流，因此绝对定位元素不会对其兄弟元素造成影响，而元素具体的位置由绝对定位的坐标决定。")])]),t._v(" "),n("h3",{attrs:{id:"bfc-即-block-formatting-contexts-块级格式化上下文-，它属于上述定位方案的普通流。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bfc-即-block-formatting-contexts-块级格式化上下文-，它属于上述定位方案的普通流。","aria-hidden":"true"}},[t._v("#")]),t._v(" BFC 即 Block Formatting Contexts (块级格式化上下文)，它属于上述定位方案的普通流。")]),t._v(" "),n("p",[t._v("具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。")]),t._v(" "),n("p",[t._v("通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。")]),t._v(" "),n("h3",{attrs:{id:"触发-bfc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#触发-bfc","aria-hidden":"true"}},[t._v("#")]),t._v(" 触发 BFC")]),t._v(" "),n("p",[t._v("只要元素满足下面任一条件即可触发 BFC 特性：")]),t._v(" "),n("p",[t._v("body 根元素")]),t._v(" "),n("p",[t._v("浮动元素：float 除 none 以外的值")]),t._v(" "),n("p",[t._v("绝对定位元素：position (absolute、fixed)")]),t._v(" "),n("p",[t._v("display 为 inline-block、table-cell、flex、table-caption或者inline-flex")]),t._v(" "),n("p",[t._v("overflow 除了 visible 以外的值 (hidden、auto、scroll)")]),t._v(" "),n("h3",{attrs:{id:"bfc-特性及应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bfc-特性及应用","aria-hidden":"true"}},[t._v("#")]),t._v(" BFC 特性及应用")]),t._v(" "),n("ol",[n("li",[t._v("同一个 BFC 下外边距会发生折叠")])]),t._v(" "),n("p",[t._v("div上下边距只有100px，如果想两个div的margin互不影响，可以在各自div外层包括div，并且外层加"),n("code",[t._v("overflow: hidden")]),t._v(" 触发BFC，div上下边距就是200px")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\ndiv{\n    width: 100px;\n    height: 100px;\n    background: lightblue;\n    margin: 100px;\n}\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("BFC 可以包含浮动的元素（清除浮动）\n浮动元素会脱离文档流")])]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bisque"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:s(246),alt:"浮动元素脱离文档流"}})]),t._v(" "),n("p",[t._v("由于容器内元素浮动，脱离了文档流，所以容器只剩下 2px 的边距高度。如果使触发容器的 BFC，那么容器将会包裹着浮动元素。")]),t._v(" "),n("p",[t._v("如果使触发容器的BFC， 则容器将会包裹着浮动元素，即在父级元素"),n("code",[t._v("div")]),t._v("增加"),n("code",[t._v("overflow:hidden")])]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("BFC 可以阻止元素被浮动元素覆盖")])]),t._v(" "),n("p",[t._v("这时候其实第二个元素有部分被浮动元素所覆盖，(但是文本信息不会被浮动元素所覆盖) 如果想避免元素被覆盖，可触第二个元素的 BFC 特性，在第二个元素中right加入 overflow: hidden，就会变成两栏布局自适应布局")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token style"}},[n("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".left")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bisque"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".right")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 140px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aquamarine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* overflow: hidden; */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("我是一个左浮动的元素"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("我是一个没有设置浮动;"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:s(247),alt:"浮动元素脱离文档流"}})]),t._v(" "),n("h2",{attrs:{id:"link-和-import-区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#link-和-import-区别","aria-hidden":"true"}},[t._v("#")]),t._v(" link 和@import 区别")]),t._v(" "),n("ol",[n("li",[t._v("从属关系区别 @import是 CSS 提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。")]),t._v(" "),n("li",[t._v("加载顺序区别 加载页面时，link标签引入的 CSS 被同时加载；@import引入的 CSS 将在页面加载完毕后被加载。")]),t._v(" "),n("li",[t._v("兼容性区别 @import是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link标签作为 HTML 元素，不存在兼容性问题。")]),t._v(" "),n("li",[t._v("DOM可控性区别 可以通过 JS 操作 DOM ，插入link标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import的方式插入样式。")]),t._v(" "),n("li",[t._v("权重区别 link引入的样式权重大于@import引入的样式。")])]),t._v(" "),n("h2",{attrs:{id:"video-audio中会触发的事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#video-audio中会触发的事件","aria-hidden":"true"}},[t._v("#")]),t._v(" Video/Audio中会触发的事件")]),t._v(" "),n("p",[t._v("方法：load() play() pause()")]),t._v(" "),n("p",[t._v("事件：play() playing() pause() seeked() seeking() abort()当音频/视频的加载已放弃时触发")]),t._v(" "),n("h2",{attrs:{id:"html5-没有删除哪个元素？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#html5-没有删除哪个元素？","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML5 没有删除哪个元素？")]),t._v(" "),n("p",[t._v("删除的：basefont、big、center、font、s、strike、tt、u")]),t._v(" "),n("h2",{attrs:{id:"javascript-regexp-对象有-3-个方法：test-、exec-和-compile-。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript-regexp-对象有-3-个方法：test-、exec-和-compile-。","aria-hidden":"true"}},[t._v("#")]),t._v(" javaScript RegExp 对象有 3 个方法：test()、exec() 和 compile()。")]),t._v(" "),n("p",[t._v("(1) test() 方法用来检测一个字符串是否匹配某个正则表达式，如果匹配成功，返回 true ，否则返回 false；\n(2) exec() 方法用来检索字符串中与正则表达式匹配的值。exec() 方法返回一个数组，其中存放匹配的结果。如果未找到匹配的值，则返回 null；\n（3）compile() 方法可以在脚本执行过程中编译正则表达式，也可以改变已有表达式。")]),t._v(" "),n("h2",{attrs:{id:"web程序对象作用域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#web程序对象作用域","aria-hidden":"true"}},[t._v("#")]),t._v(" Web程序对象作用域")]),t._v(" "),n("p",[t._v("常用的有三个：请求作用域，会话作用域，应用上下文。\n请求作用域req范围最小，需要的资源最少，作用当前请求")]),t._v(" "),n("p",[t._v("session会话作用于本次对话，每个对话都有JSessionID，")]),t._v(" "),n("p",[t._v("ServletContext作用域范围大：web应用中所有都能够访问，生命周期和web容器一样长，维护所需资源多。")]),t._v(" "),n("p",[t._v("在满足需求内耗费的资源越小越好")]),t._v(" "),n("h2",{attrs:{id:"html5中可以省略结束标记的元素有"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#html5中可以省略结束标记的元素有","aria-hidden":"true"}},[t._v("#")]),t._v(" html5中可以省略结束标记的元素有")]),t._v(" "),n("p",[t._v("1、dd")]),t._v(" "),n("p",[t._v("2、dt")]),t._v(" "),n("p",[t._v("3、li")]),t._v(" "),n("p",[t._v("4、p")]),t._v(" "),n("p",[t._v("5、optgroup")]),t._v(" "),n("p",[t._v("6、option")]),t._v(" "),n("p",[t._v("7、rt")]),t._v(" "),n("p",[t._v("8、rp")]),t._v(" "),n("p",[t._v("9、thread")]),t._v(" "),n("p",[t._v("10、tfoot")]),t._v(" "),n("p",[t._v("11、tr")]),t._v(" "),n("p",[t._v("12、td")]),t._v(" "),n("p",[t._v("13、th")]),t._v(" "),n("h2",{attrs:{id:"css-百分比参照问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-百分比参照问题","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 百分比参照问题")]),t._v(" "),n("p",[t._v("参照父元素宽度的元素：padding margin width text-indent")]),t._v(" "),n("p",[t._v("参照父元素高度的元素：height")]),t._v(" "),n("p",[t._v("参照父元素属性:font-size line-height")]),t._v(" "),n("p",[t._v("特殊：相对定位的时候，top(bottom) left(right)参照的是父元素的内容区域的高度与宽度，而绝对定位的时候参照的是最近的定位元素包含padding的高度与宽度")]),t._v(" "),n("h2",{attrs:{id:"domtree的根节点是document"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#domtree的根节点是document","aria-hidden":"true"}},[t._v("#")]),t._v(" Domtree的根节点是document")]),t._v(" "),n("h2",{attrs:{id:"下列关于比较ajax与flash的优缺点，相关描述正确的是？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下列关于比较ajax与flash的优缺点，相关描述正确的是？","aria-hidden":"true"}},[t._v("#")]),t._v(" 下列关于比较Ajax与Flash的优缺点，相关描述正确的是？")]),t._v(" "),n("ol",[n("li",[t._v("Ajax的优势：1.可搜索性 2.开放性 3.费用 4.易用性 5.易于开发。")]),t._v(" "),n("li",[t._v("Flash的优势：1.多媒体处理 2.兼容性 3.矢量图形 4.客户端资源调度")]),t._v(" "),n("li",[t._v("Ajax的劣势：1.它可能破坏浏览器的后退功能   2.使用动态页面更新使得用户难于将某个特定的状态保存到收藏夹中 ，不过这些都有相关方法解决。")]),t._v(" "),n("li",[t._v("Flash的劣势：1.二进制格式 2.格式私有 3.flash 文件经常会很大，用户第一次使用的时候需要忍耐较长的等待时间  4.性能问题")])])])}],e=s(0),p=Object(e.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);a.default=p.exports}}]);