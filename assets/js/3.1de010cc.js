(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{260:function(t,e,s){t.exports=s.p+"assets/img/110.589cd4d0.png"},261:function(t,e,s){t.exports=s.p+"assets/img/111.f925eca5.png"},262:function(t,e,s){t.exports=s.p+"assets/img/112.6cc3e347.png"},263:function(t,e,s){t.exports=s.p+"assets/img/113.c249e872.png"},264:function(t,e,s){t.exports=s.p+"assets/img/114.971f2ddc.png"},265:function(t,e,s){t.exports=s.p+"assets/img/115.b07b6480.png"},266:function(t,e,s){t.exports=s.p+"assets/img/116.f973ecad.png"},267:function(t,e,s){t.exports=s.p+"assets/img/117.37d2b07b.png"},290:function(t,e,s){"use strict";s.r(e);var i=[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"前端｜本地调试h5页面方案总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端｜本地调试h5页面方案总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端｜本地调试H5页面方案总结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("参考 https://www.jianshu.com/p/a43417b28280")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"简单网络、app环境的调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单网络、app环境的调试","aria-hidden":"true"}},[this._v("#")]),this._v(" 简单网络、APP环境的调试")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"讲述h5页面在app中，即webview的调试方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#讲述h5页面在app中，即webview的调试方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 讲述h5页面在app中，即webview的调试方法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"h5调用了app的jsbridge接口-则此h5页面只能在此app里打开"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#h5调用了app的jsbridge接口-则此h5页面只能在此app里打开","aria-hidden":"true"}},[this._v("#")]),this._v(" H5调用了App的jsBridge接口,则此H5页面只能在此App里打开")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("chrome://inspect/#devices")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-通过chrome调试安卓机上的h5页面-实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过chrome调试安卓机上的h5页面-实践","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 通过Chrome调试安卓机上的H5页面  "),e("em",[this._v("实践")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("1. 安装Chrome 32或者之后的版本\n2. 使用USB线将安卓机和Mac连接起来\n3. 打开 USB 调试选项在安卓设备上，进入设置>开发者选项>打开USB调试 (注意：在安卓 4.2 及以后的版本中，默认情况下开发者选项是隐藏的。要启用开发者选项，选择设置>关于手机然后点击版本号7次。)。\n4. 在电脑端的Chrome里，在地址栏输入chrome://inspect#device。进入后确认Discover USB devices已经勾选了：\n\n ![jpg](./images/1.png)\n\n 5. 在你的设备上，打开要浏览的页面,会跳出一个弹框，询问你是否要允许在电脑端进行USB调试。选择确定。\n\n  ![jpg](./images/2.png)\n\n 6. 点击chrome://inspect/#devices 页面上的inspect便可以审查安卓机上的H5页面的元素了\n\n  ![jpg](./images/3.png)\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("有时候不弹出是否允许USB调试\n进入开发者模式→点击“撤销USB调试授权”→确认，之后重新连接电脑（重新插拔USB数据线）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-通过safari调试iphone上的h5页面-实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过safari调试iphone上的h5页面-实践","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 通过Safari调试iPhone上的H5页面 "),e("em",[this._v("实践")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("1. 运行Safari,点击“Safari”菜单下面的“偏好设置（Preferences...）”，切换到“高级选项（Advanced）”：\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v('![jpg](./images/10.png)\n\n2. 勾选“在菜单栏显示"开发"菜单（ShowDevelop menu in menu bar）”，关闭偏好设置。此时在Safari的工具栏出现“开发（Develop）”菜单：\n\n![jpg](./images/13.png)\n\n3. 使用USB线将iPhone和Mac连接起来\nmac需要设置开发者模式\n在设置===> safari浏览器 ===> 高级 ===> JavaScript、网页检查器（选中）\n\n4. 在iPhoneSafari打开要调试的H5页面,便可以调试了\n\n![jpg](./images/11.png)\n\n![jpg](./images/12.png)\n')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"复杂网络、app环境的调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复杂网络、app环境的调试","aria-hidden":"true"}},[this._v("#")]),this._v(" 复杂网络、app环境的调试")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("需求")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("难点")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("必须在*.signature.cn环境下进行调试,否则无法访问用来签名的https://io.signature.cn服务")]),this._v(" "),e("li",[this._v("io.signature.cn服务使用https协议通信,中间难以通过代理拦截")]),this._v(" "),e("li",[this._v("分享相关微信jsBridge接口,只在微信App中存在,无法在本地开发环境调用")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("解决办法(适用于Mac)")]),this._v(":")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[i("p",[t._v("下载安装微信Web开发者工具，从这里https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html")])]),t._v(" "),i("li",[i("p",[t._v("下载并安装 Charles，从这里http://xclient.info/s/charles.html")])]),t._v(" "),i("li",[i("p",[t._v("打开Charles，按如图所示方式安装根证书")]),t._v(" "),i("p",[i("img",{attrs:{src:s(260),alt:"jpg"}})])]),t._v(" "),i("li",[i("p",[t._v("在Proxy -> SSL Proxying Settings 中，加入 *.signature.cn 域名")]),t._v(" "),i("p",[i("img",{attrs:{src:s(261),alt:"jpg"}})])]),t._v(" "),i("li",[i("p",[t._v("在Tools ->  Map Local 功能中，加入需要代理到本地的线上 URL 到 本地文件夹的对应关系")]),t._v(" "),i("p",[i("img",{attrs:{src:s(262),alt:"jpg"}})])]),t._v(" "),i("li",[i("p",[t._v("在微信开发者工具中，设置代理到 Charles 端口")]),t._v(" "),i("p",[i("img",{attrs:{src:s(263),alt:"jpg"}})])]),t._v(" "),i("li",[i("p",[t._v("在微信开发者工具中，打开线上地址，可以看到 JS 文件已经被替换，这时候可以在同时有线上 API 和微信 jsBridge 的环境下进行调试")]),t._v(" "),i("p",[i("img",{attrs:{src:s(264),alt:"jpg"}})]),t._v(" "),i("p",[t._v("--------------------------更新--------------------------")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"调试工具还有xcode和微信web开发者工具（上文讲的是微信开发者工具，两者不同）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调试工具还有xcode和微信web开发者工具（上文讲的是微信开发者工具，两者不同）","aria-hidden":"true"}},[this._v("#")]),this._v(" 调试工具还有xcode和微信web开发者工具（上文讲的是微信开发者工具，两者不同）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("xcodeXcode\nxcodeXcode 是运行在操作系统Mac OS X上的集成开发工具（IDE），由苹果公司开发。Xcode是开发OS X和iOS应用程序的最快捷的方式。")]),this._v(" "),e("p",[this._v("它有iOS系统模拟器，能够结合上边的用Safari调试iPhone手机上的页面的方式调试模拟器中任何app打开的页面。")]),this._v(" "),e("p",[this._v("以钉钉调试为例，请看文档  钉钉调试文档")]),this._v(" "),e("p",[e("img",{attrs:{src:s(265),alt:"jpg"}})]),this._v(" "),e("p",[e("img",{attrs:{src:s(266),alt:"jpg"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(267),alt:"jpg"}})])}],r=s(0),n=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("勾选在菜单栏中显示开发菜单")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("在微信中调试H5页面的微信分享功能,http://m.signature.cn数字签名生成服务使用https协议通信(比如 https://io.signature.cn),数字签名服务只允许*.signature.cn访问")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),s("ol",[t._m(19),t._v(" "),s("li",[s("p",[t._v("微信web开发者工具")]),t._v(" "),s("p",[t._v("下载链接："),s("a",{attrs:{href:"https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1455784140",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信web开发者工具下载链接"),s("OutboundLink")],1),t._v("   （这个链接还真不好找，百度 bing搜到的结果都是微信开发者工具的下载链接）")]),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("如图，这是一个非常强大的工具，即可以调试安卓手机的页面也可以调试iOS手机上的页面，，，用这个工具可以调试各浏览器上的页面，微博里的h5页面或者QQ客户端里的h5页面")])])])])},i,!1,null,null,null);e.default=n.exports}}]);