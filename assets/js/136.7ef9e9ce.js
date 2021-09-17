(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{307:function(a,s,t){"use strict";t.r(s);var n=t(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"安装nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装nginx")]),a._v(" "),t("ol",[t("li",[a._v("打开终端，安装command Line tools")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("xcode-select --install\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("安装brew命令")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("ruby -e "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("安装nginx")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nginx\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("启动nginx")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" nginx\n")])])]),t("p",[a._v("OK, nginx就安装好了，可以在浏览器访问了，默认端口为8080，")]),a._v(" "),t("p",[a._v("在浏览器输入 http://localhost:8080/ 就能看到nginx在本计算机搭建的服务器")]),a._v(" "),t("p",[a._v("8080是nginx自带的默认网站设置的端口，")]),a._v(" "),t("p",[a._v("现在我们自己来创建一个网站，设置端口和映射路径")]),a._v(" "),t("p",[a._v("5、自定义网站和端口")]),a._v(" "),t("p",[a._v("5.1 创建网站，编写几个测试网页")]),a._v(" "),t("h2",{attrs:{id:"修改nginx配置，找到nginx配置的地方"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改nginx配置，找到nginx配置的地方","aria-hidden":"true"}},[a._v("#")]),a._v(" 修改nginx配置，找到nginx配置的地方")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("/usr/local/etc/nginx \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或者")]),a._v("\n/etc/nginx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重启nginx")]),a._v("\nbrew services restart nginx\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);