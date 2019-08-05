(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{226:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"在-mac-上安装-phantomjs-及运行，-一路波折"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-mac-上安装-phantomjs-及运行，-一路波折","aria-hidden":"true"}},[a._v("#")]),a._v(" 在 Mac 上安装 phantomjs  及运行， 一路波折")]),a._v(" "),t("ul",[t("li",[a._v("搜索MAC上安装phantomjs，得到下面方法：")])]),a._v(" "),t("ol",[t("li",[t("p",[a._v("下载phantomjs.zip并解压，bin/phantomjs直接可用。")])]),a._v(" "),t("li",[t("p",[a._v("或者通过Homebrew安装")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("brew update "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" brew cask "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" phantomjs\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("通过下载Mac版本配置环境变量")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" .bash_profile\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("通过MacPorts安装")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" port selfupdate "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" port "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" phantomjs\n\n")])])]),t("p",[a._v("前三种方法，都踩了一遍坑。\n最终让我安装成功的方法：使用Homebrew安装。")]),a._v(" "),t("h2",{attrs:{id:"homebrew-是什么？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-是什么？","aria-hidden":"true"}},[a._v("#")]),a._v(" Homebrew 是什么？")]),a._v(" "),t("p",[a._v("官方介绍：The missing package manager for OS X（OS X 不可或缺的套件管理器）")]),a._v(" "),t("ul",[t("li",[a._v("安装：\n非常简单 直接在mac终端执行命令行")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("/usr/bin/ruby -e "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n\n")])])]),t("ul",[t("li",[a._v("测试：\n输入 "),t("code",[a._v("brew -v")]),a._v("  可看到版本号，说明安装成功。")])]),a._v(" "),t("p",[a._v("安装phantomjs：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("brew update\nbrew cask "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" phantomjs // 只输入phantomjs即可\n")])])]),t("p",[a._v("安装成功！可输入phantomjs -v 查看版本号来确认。")]),a._v(" "),t("p",[a._v("简单的hello.js:")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello,world!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nphantom"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("exit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("ul",[t("li",[a._v("运行：\ncd  要运行的js文件所在目录")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("phantomjs hello.js // Hello, world"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n")])])]),t("h2",{attrs:{id:"注意，macos升级后出现xcrun-error-invalid-active-developer-path-missing-xcrun的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意，macos升级后出现xcrun-error-invalid-active-developer-path-missing-xcrun的问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 注意，MacOS升级后出现xcrun: error: invalid active developer path, missing xcrun的问题")]),a._v(" "),t("blockquote",[t("p",[a._v("xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun")])]),a._v(" "),t("p",[a._v("解决办法，重装 "),t("code",[a._v("xcode command line：")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("xcode-select --install\n")])])]),t("p",[a._v("如果还没有解决，执行以下命令")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" xcode-select -switch /\n")])])]),t("p",[a._v("出现错误的原因是： 少了系统需要的运行库，运行命令行后会自动安装")]),a._v(" "),t("p",[a._v("噢耶，成功")]),a._v(" "),t("h2",{attrs:{id:"后续，安装之后，node有问题了，项目无法启动："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后续，安装之后，node有问题了，项目无法启动：","aria-hidden":"true"}},[a._v("#")]),a._v(" 后续，安装之后，node有问题了，项目无法启动：")]),a._v(" "),t("p",[a._v("npm -v 不生效；办法，可以重装node")]),a._v(" "),t("h3",{attrs:{id:"卸载node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载node","aria-hidden":"true"}},[a._v("#")]),a._v(" 卸载node")]),a._v(" "),t("p",[a._v("如果不是通过brew安装的")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("lsbom -f -l -s -pf /var/db/receipts/org.nodejs.pkg.bom \\"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("read")]),a._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" /usr/local/"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${i}")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf /usr/local/lib/node \\\n\n    /usr/local/lib/node_modules \\\n\n    /var/db/receipts/org.nodejs.*\n")])])]),t("p",[a._v("如果是通过官方网站安装的（本人使用官网），执行下面命令")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf /usr/local/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("node,npm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(",lib/node_modules/npm,lib/node,share/man/*/node.*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("ol",[t("li",[a._v("安装node")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" node\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("安装后有可能在终端输入node找不到该命令，执行如下")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v(" node\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("根据提示执行")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v(" --overwrite --dry-run node\n\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("根据提示删除这些冲突")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" /usr/local/lib/dtrace/node.d\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[a._v("之后运行")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v(" --overwrite node\n")])])]),t("ul",[t("li",[a._v("过程可能会报以下错误 "),t("code",[a._v("Homebrew npm install: could not symlink")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" -R "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("whoami")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("brew --prefix"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/*\n")])])]),t("p",[a._v("解决，但是npm还是不能用，重新使用brew卸载npm，然后安装；成功！")]),a._v(" "),t("ul",[t("li",[a._v("使用brew安装node会安装最新的，和之前的环境依赖可能会有冲突，所以，最后使用了node官网下载安装\nnode版本回退到10.16.0")])]),a._v(" "),t("p",[a._v("开始是v12.6.0")]),a._v(" "),t("p",[a._v("phantomjs样例")]),a._v(" "),t("h3",{attrs:{id:"http-www-mamicode-com-info-detail-1937638-html"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-www-mamicode-com-info-detail-1937638-html","aria-hidden":"true"}},[a._v("#")]),a._v(" http://www.mamicode.com/info-detail-1937638.html")]),a._v(" "),t("p",[a._v("https://blog.csdn.net/sqzhao/article/details/48655979")])])}],!1,null,null,null);s.default=n.exports}}]);