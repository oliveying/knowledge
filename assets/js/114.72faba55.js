(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{357:function(r,e,t){"use strict";t.r(e);var a=t(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"几种error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#几种error","aria-hidden":"true"}},[r._v("#")]),r._v(" 几种error")]),r._v(" "),t("ul",[t("li",[r._v("InvalidUrlError 参数无效")]),r._v(" "),t("li",[r._v("ProviderError 提供者错误")]),r._v(" "),t("li",[r._v("MuteError 没有权限")])]),r._v(" "),t("h2",{attrs:{id:"npm-install-报错，提示gyp-err-stack-error-eacces-permission-denied-解决方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-install-报错，提示gyp-err-stack-error-eacces-permission-denied-解决方法","aria-hidden":"true"}},[r._v("#")]),r._v(" npm install 报错，提示"),t("code",[r._v("gyp ERR! stack Error: EACCES: permission denied")]),r._v(" 解决方法")]),r._v(" "),t("p",[r._v("实际原因是由于用的是root账户权限执行npm，而npm默认是不适用root权限创建内容，因此会出现权限问题而导致失败，加上参数"),t("code",[r._v("--unsafe-perm=true --allow-root")]),r._v("即可解决问题。")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("npm install --production --unsafe-perm=true --allow-root\n")])])]),t("h2",{attrs:{id:"小程序开发兼容问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小程序开发兼容问题","aria-hidden":"true"}},[r._v("#")]),r._v(" 小程序开发兼容问题")]),r._v(" "),t("ul",[t("li",[r._v("百度小程序：")])]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("1、wxs语法不支持\n2、自定义组件标签必须闭合\n3、自定义组件属性必须小写\n4、原生标签必须闭合\n5、方法名不要使用getData\n6、外层双引号、内部单引号\n7、flex:1撑不开时，最外层宽度定义750rpx。\n8、子组件和父组件不要使用相同类名\n9、三元运算符不支持小于号和大于号>转换成&gt;\n所以可以写!== 这种\n")])])]),t("ul",[t("li",[r._v("支付宝小程序：")])]),r._v(" "),t("p",[r._v("10、富文本组件-与微信数据结构不一致。")])])}],!1,null,null,null);e.default=s.exports}}]);