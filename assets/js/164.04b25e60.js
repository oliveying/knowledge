(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{435:function(e,r,t){"use strict";t.r(r);var a=t(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"js判断用户来路url-使用http-header-referrer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js判断用户来路url-使用http-header-referrer","aria-hidden":"true"}},[e._v("#")]),e._v(" js判断用户来路url(使用http header referrer)")]),e._v(" "),t("p",[e._v('HTTP Header referer这玩意主要是告诉人们我是从哪儿来的，就是告诉人家我是从哪个页面过来的，可以用于统计访问本网站的用户来源，也可以用来防盗链。获取这个东西最好的方式是js，如果在服务器端获取（方法如：Request.Headers["Referer"]） 不靠谱，人家可以伪造，用js获取最好，人家很难伪造，方法：利用js的 document.referer 方法可以准确地判断网页的真实来路。 目前百度统计，google ads统计，CNZZ统计，都是用的这个方法。防盗链也很简单了，js里判断来路url如果不是本站不显示图片')]),e._v(" "),t("h2",{attrs:{id:"document-referrer-的兼容性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#document-referrer-的兼容性","aria-hidden":"true"}},[e._v("#")]),e._v(" document.referrer 的兼容性")]),e._v(" "),t("p",[e._v("document.referrer IE7都支持，它的兼容性比较高，Android 5.0开始支持，iOS都支持，PC端浏览器从IE7就开始支持了，兼容性没有什么大的问题。")]),e._v(" "),t("h2",{attrs:{id:"下面的场景无法获得-referrer-信息："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下面的场景无法获得-referrer-信息：","aria-hidden":"true"}},[e._v("#")]),e._v(" 下面的场景无法获得 referrer 信息：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('直接在浏览器中输入地址\n使用location.reload()刷新（location.href或者location.replace()刷新有信息）\n在微信对话框中，点击进入微信自身浏览器\n扫码进入微信或QQ的浏览器\n直接新窗口打开一个页面\n从https的网站直接进入一个http协议的网站（Chrome下亲测）\na标签设置rel="noreferrer"（兼容IE7+）\nmeta标签来控制不让浏览器发送referer\n点击 flash 内部链接\nChrome4.0以下，IE 5.5+以下返回空的字符串\n使用 修改 Location 进行页面导航的方法，会导致在IE下丢失 referrer，这可能是IE的一个BUG\n跨域\n<meta content="never" name="referrer">\n')])])])])}],!1,null,null,null);r.default=n.exports}}]);