(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{434:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),n("p",[t._v("restart则是把进程停掉，从头启动一次。")]),t._v(" "),n("p",[t._v("restart自然也就reload了。")]),t._v(" "),n("p",[t._v("但是对于大型服务，restart可能不方便")]),t._v(" "),t._m(27),t._v(" "),n("p",[t._v("PM2授权您的工作流程管理。它允许您通过流程文件对每个应用程序的行为、选项、环境变量、日志文件进行微调。它特别适用于基于微服务的应用程序。配置格式支持JavaScript、JSON、YAML。")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._m(46),t._v(" "),t._m(47),t._m(48),t._v(" "),t._m(49),t._m(50),t._v(" "),n("p",[t._v("开机启动指的是pm2开机启动")]),t._v(" "),t._m(51),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._m(55),t._v(" "),t._m(56),t._v(" "),n("p",[t._v("编写好了一个node.js应用，总不能使用ip加端口访问吧。")]),t._v(" "),n("p",[t._v("使用nginx反向代理功能来配置网站域名。")]),t._v(" "),n("p",[t._v("编辑nginx配置文件，在server代码块加入以下代码，注意需要根据你的域名和ip来对应修改。")]),t._v(" "),t._m(57),t._m(58),t._v(" "),t._m(59),t._v(" "),t._m(60),t._v(" "),n("p",[t._v("配置好后重启nginx，访问域名查看一下，确保nginx配置成功。")]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://www.kancloud.cn/daiji/pm2/395276",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),n("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"pm2需要全局安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pm2需要全局安装","aria-hidden":"true"}},[this._v("#")]),this._v(" pm2需要全局安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("安装pm2")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g pm2\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" pm2\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("升级pm2")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" pm2@latest -g\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 或者")]),this._v("\npm2 update\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2、进入项目根目录\n2.1 启动进程/应用 "),s("code",[this._v("pm2 start bin/www")]),this._v(" 或 "),s("code",[this._v("pm2 start app.js")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2.2 重命名进程/应用 "),s("code",[this._v("pm2 start app.js --name wb123")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2.3 添加进程/应用 watch "),s("code",[this._v("pm2 start bin/www --watch")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2.4 结束进程/应用 "),s("code",[this._v("pm2 stop www")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2.5 结束所有进程/应用 "),s("code",[this._v("pm2 stop all")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2.6 删除进程/应用 "),s("code",[this._v("pm2 delete www")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2.7 删除所有进程/应用 "),s("code",[this._v("pm2 delete all")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2.8 列出所有进程/应用 "),s("code",[this._v("pm2 list")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2.9 查看某个进程/应用具体情况 "),s("code",[this._v("pm2 describe www")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2.10 查看进程/应用的资源消耗情况 "),s("code",[this._v("pm2 monit")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2.11 查看pm2的日志 "),s("code",[this._v("pm2 logs")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2.12 若要查看某个进程/应用的日志,使用 "),s("code",[this._v("pm2 logs www")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2.13 重新启动进程/应用 "),s("code",[this._v("pm2 restart www")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2.14 重新启动所有进程/应用 "),s("code",[this._v("pm2 restart all")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2.15 显示日志管理命令 "),s("code",[this._v("pm2 logs -h")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[n("code",[t._v("pm2 start all")]),t._v(" 开启所有进程\n"),n("code",[t._v("pm2 stop all")]),t._v("  停止所有进程\n"),n("code",[t._v("pm2 restart all")]),t._v("  重启所有进程\n"),n("code",[t._v("pm2 start ecosystem.json")]),t._v(" 启动本地进程\n"),n("code",[t._v("pm2 restart ecosystem.json")]),t._v(" 重启启动本地进程\n"),n("code",[t._v("pm2 delete ecosystem.json")]),t._v(" 删除进程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"pm2-应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pm2-应用","aria-hidden":"true"}},[this._v("#")]),this._v(" pm2 应用")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nhttp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world!'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("运行程序"),s("code",[this._v("node index.js")]),this._v("，如果控制台关闭了，程序也就关闭了")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用 "),s("code",[this._v("pm2 start index.js")]),this._v("，控制台关闭窗口也可以访问")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用 "),s("code",[this._v("pm2 start index.js --watch")]),this._v("， 想实时修改文件，可以在启动程序时带上参数。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("restart 和reload区别\nreload一般只是从新读取一次配置文件。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"进程文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 进程文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("创建一个示例的进程文件\n"),s("code",[this._v("pm2 ecosystem")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Application configuration section\n   * http://pm2.keymetrics.io/docs/usage/application-declaration/\n   */")]),t._v("\n  apps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// First application")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'API'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      script    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("COMMON_VARIABLE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      env_production "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Second application")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WEB'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      script    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web.js'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Deployment section\n   * http://pm2.keymetrics.io/docs/usage/deployment/\n   */")]),t._v("\n  deploy "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    production "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      user "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      host "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'212.83.163.1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      ref  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin/master'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      repo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git@github.com:repo.git'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      path "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/var/www/production'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post-deploy'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'npm install && pm2 reload ecosystem.config.js --env production'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dev "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      user "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      host "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'212.83.163.1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      ref  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin/master'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      repo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git@github.com:repo.git'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      path "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/var/www/development'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post-deploy'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'npm install && pm2 reload ecosystem.config.js --env dev'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      env  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dev'")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"配置超时时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置超时时间","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置超时时间")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("pm2 start app.js --kill-timeout "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者js中增加")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apps"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),t._v("         "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api"')]),t._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script"')]),t._v("       "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app.js"')]),t._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kill_timeout"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('##     "listen_timeout" : 3000')]),t._v("\n\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"运行环境管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行环境管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 运行环境管理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("定义不同环境")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  apps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myapp"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        script"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./app.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        watch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PORT"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NODE_ENV"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"development"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        env_production"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PORT"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NODE_ENV"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"production"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"日志管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日志管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 日志管理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("显示日志管理命令\n"),s("code",[this._v("pm2 logs -h")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("显示所有的应用程序的日志\n"),s("code",[this._v("pm2 logs")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("仅仅显示api应用程序的日志\n"),s("code",[this._v("pm2 logs api")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("显示1000行的应用程序日志\n"),s("code",[this._v("pm2 logs big-api --lines 1000")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("显示json格式的日志\n"),s("code",[this._v("pm2 logs --json")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("查看转换时间格式的日志\n"),s("code",[this._v("pm2 logs --format")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("刷新日志\n"),s("code",[this._v("pm2 flush")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("重载所有日志\n"),s("code",[this._v("pm2 reloadLogs")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("启动时日志配置\n"),s("code",[this._v('pm2 start echo.js --merge-logs --log-date-format="YYYY-MM-DD HH:mm Z"')]),this._v("\n或者")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"script"')]),t._v("          "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_file"')]),t._v("      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"err.log"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"out_file"')]),t._v("        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"out.log"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"merge_logs"')]),t._v("      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"log_date_format"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YYYY-MM-DD HH:mm Z"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("关闭日志\n使用 "),s("code",[this._v("--merge-logs")]),this._v(" 参数关闭 文件输出日志\n或者")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"out_file"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dev/null"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_file"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dev/null"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"更新pm2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新pm2","aria-hidden":"true"}},[this._v("#")]),this._v(" 更新pm2")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("保存当前的进程信息\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"开机启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开机启动","aria-hidden":"true"}},[this._v("#")]),this._v(" 开机启动")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# linux系统的开机启动")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 必备条件")]),t._v("\n\nsystemd: Ubuntu "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(", CentOS "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(", Arch, Debian "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\nupstart: Ubuntu "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\nlaunchd: Darwin, MacOSx\nopenrc: Gentoo Linux, Arch Linux\nrcd: FreeBSD\nsystemv: Centos "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(", Amazon Linux\nPM2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.2")]),t._v(".x\n\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("创建开机启动脚本文件\n"),n("code",[t._v("pm2 startup")])]),t._v(" "),n("li",[t._v("禁止开机启动\n"),n("code",[t._v("pm2 unstartup")])]),t._v(" "),n("li",[t._v("用户权限的开机启动\n"),n("code",[t._v("pm2 startup ubuntu -u www --hp /home/ubuntu")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"监听与重启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监听与重启","aria-hidden":"true"}},[this._v("#")]),this._v(" 监听与重启")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("pm2 start app.js --watch\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"watch"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"server"')]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ignore_watch"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node_modules"')]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client/img"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"watch_options"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"followSymlinks"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("停止监听\n"),s("code",[this._v("pm2 stop --watch 0")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"网站域名配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网站域名配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 网站域名配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-conf extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('upstream my_nodejs_upstream {\n    server 127.0.0.1:3001;\n    keepalive 64;\n}\n\nserver {\n    listen 80;\n    server_name www.haowen100.com;\n    root /home/www/project_root;\n    \n    location / {\n    \tproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    \tproxy_set_header Host $http_host;\n    \tproxy_set_header X-NginX-Proxy true;\n    \tproxy_http_version 1.1;\n    \tproxy_set_header Upgrade $http_upgrade;\n    \tproxy_set_header Connection "upgrade";\n    \tproxy_max_temp_file_size 0;\n    \tproxy_pass http://my_nodejs_upstream/;\n    \tproxy_redirect off;\n    \tproxy_read_timeout 240s;\n    }\n}\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("127.0.0.1:3001")]),this._v(" 这里修改为你的应用访问地址（ip:端口）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("www.haowen100.com")]),this._v(" 这里修改为你的域名")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("/home/www/project_root")]),this._v(" 这里改为你的nginx放程序代码的位置。")])}],!1,null,null,null);s.default=e.exports}}]);