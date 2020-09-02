(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{318:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},function(){var s=this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"mac环境安装flutter配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac环境安装flutter配置","aria-hidden":"true"}},[s._v("#")]),s._v(" mac环境安装flutter配置")]),s._v(" "),t("p",[s._v("资料")]),s._v(" "),t("blockquote",[t("p",[s._v("https://www.yuque.com/xytech/flutter/\nhttps://book.flutterchina.club/chapter15/code_structure.html")])]),s._v(" "),t("h2",{attrs:{id:"mac-配置环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac-配置环境变量","aria-hidden":"true"}},[s._v("#")]),s._v(" mac 配置环境变量")]),s._v(" "),t("h2",{attrs:{id:"mac-配置环境变量-扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac-配置环境变量-扩展","aria-hidden":"true"}},[s._v("#")]),s._v(" mac 配置环境变量(扩展)")]),s._v(" "),t("blockquote",[t("p",[s._v("https://www.cnblogs.com/mingm/p/10653198.html")])]),s._v(" "),t("p",[s._v("（1）首先要知道你使用的Mac OS X是什么样的Shell，使用命令")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SHELL")]),s._v("\n")])])]),t("p",[s._v("如果输出的是：csh或者是tcsh，那么你用的就是C Shell。")]),s._v(" "),t("p",[s._v("如果输出的是：bash，sh，zsh，那么你的用的可能就是Bourne Shell的一个变种。")]),s._v(" "),t("p",[s._v("Mac OS X 10.2之前默认的是C Shell。")]),s._v(" "),t("p",[s._v("Mac OS X 10.3之后默认的是Bourne Shell。")]),s._v(" "),t("p",[s._v("（2）如果是Bourne Shell。")]),s._v(" "),t("p",[s._v("那么你可以把你要添加的环境变量添加到你主目录下面的.profile或者.bash_profile，如果存在没有关系添加进去即可，如果没有生成一个。")]),s._v(" "),t("p",[s._v("1."),t("code",[s._v("open/vim /etc/profile")]),s._v("   （建议不修改这个文件 ）")]),s._v(" "),t("p",[s._v("全局（公有）配置，不管是哪个用户，登录时都会读取该文件。")]),s._v(" "),t("p",[s._v("2."),t("code",[s._v("/etc/bashrc")]),s._v("    （一般在这个文件中添加系统级环境变量）")]),s._v(" "),t("p",[s._v("全局（公有）配置，bash shell执行时，不管是何种方式，都会读取此文件。")]),s._v(" "),t("p",[s._v("我在这里加入mysqlstart、mysql和mysqladmin命令的别名，保证每一个用户都可以使用这3个命令。")]),s._v(" "),t("p",[s._v("3."),t("code",[s._v("~/.bash_profile")]),s._v("  （一般在这个文件中添加用户级环境变量）")]),s._v(" "),t("p",[s._v("（注：Linux 里面是 .bashrc 而 Mac 是 .bash_profile）")]),s._v(" "),t("p",[s._v("若bash shell是以login方式执行时，才会读取此文件。该文件仅仅执行一次!默认情况下,他设置一些环境变量")]),s._v(" "),t("p",[s._v("我在这里：设置终端配色、")]),s._v(" "),t("p",[s._v("我在这里：设置命令别名alias ll='ls -la'")]),s._v(" "),t("p",[s._v("我在这里：设置环境变量：export PATH=/opt/local/bin:/opt/local/sbin:$PATH")]),s._v(" "),t("h3",{attrs:{id:"mac-修改host文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac-修改host文件","aria-hidden":"true"}},[s._v("#")]),s._v(" MAC 修改host文件")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/hosts\n\n")])])]),t("p",[s._v("linux下查看和添加PATH环境变量")]),s._v(" "),t("p",[s._v("==============================================")]),s._v(" "),t("p",[s._v("PATH的格式为：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">")]),s._v(":------:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   ，中间用冒号隔开。\n")])])]),t("p",[s._v("添加PATH环境变量：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#export PATH=/opt/STM/STLinux-2.3/devkit/sh4/bin:$PATH")]),s._v("\n")])])]),t("p",[s._v("查看PATH环境变量：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#echo $PATH")]),s._v("\n\n/usr/kerberos/sbin:/usr/kerberos/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin\n")])])]),t("p",[s._v("操作示例：")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("通过编辑 启动文件 来改PATH，")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/profile")]),s._v("\n")])])]),t("p",[s._v("在文档最后，添加:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/STM/STLinux-2.3/devkit/sh4/bin:'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v("\n")])])]),t("p",[s._v("保存，退出。")]),s._v(" "),t("ul",[t("li",[s._v("想立即生效请运行：")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#source /etc/profile")]),s._v("\n")])])]),t("p",[s._v("不报错则成功。")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("Mac部分")]),s._v(" "),t("p",[s._v("在终端输入下列代码")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/　　　　　　　　　 \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" .bash_profile  \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" .bash_profile  \n")])])]),t("p",[s._v("这样就会通过记事本打开.bash_profile，下图里面有我之前配置过的Mongo环境变量，继续添加(注意:${PATH})：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MONGODB_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/mongodb"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/bin:/usr/sbin:/bin:/sbin:/usr/X11R6/bin:'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MONGODB_HOME")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NODE_HOME")]),s._v('/bin"')]),s._v("\n")])])]),t("p",[s._v("如果想立刻生效，则可执行下面的语句：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" .bash_profile（这是文件名）\n")])])]),t("p",[s._v("之后关闭终端，重启终端即可")]),s._v(" "),t("h2",{attrs:{id:"android-studio-首次打开会报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android-studio-首次打开会报错","aria-hidden":"true"}},[s._v("#")]),s._v(" android studio 首次打开会报错")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("unable to access android sdk add-on list\n")])])]),t("ul",[t("li",[t("p",[s._v("原因\nAS启动后，会在默认路径下检测是否有Android SDK，如果没有的话，就会报上述错误。")])]),s._v(" "),t("li",[t("p",[s._v("可以使用这种")])])]),s._v(" "),t("ol",[t("li",[s._v("打开Settings")]),s._v(" "),t("li",[s._v("点击HTTP Proxy，选择Manual proxy configuration： 设置 Host name 为：mirrors.neusoft.edu.cn 设置 Port number 为：80")])]),s._v(" "),t("p",[s._v("还有另外两种解决方案")]),s._v(" "),t("ul",[t("li",[s._v("主动设置SDK")])]),s._v(" "),t("p",[s._v("如果本机有Android SDK的话，可以点击cancel跳过，在下一个界面手动选择本地SDK目录就可以了。")]),s._v(" "),t("ul",[t("li",[s._v("跳过检测")])]),s._v(" "),t("p",[s._v("在Android Studio的安装目录下，找到"),t("code",[s._v("\\bin\\idea.properties")]),s._v("\n在尾行添加"),t("code",[s._v("disable.android.first.run=true")]),s._v("，表示初次启动不检测SDK\n四、小结\n上面两个解决方案都可以解决启动开篇报错的问题，但是都是治标不治本，做Android开发，Android SDK是必须的\n可以在进入AS主界面后，再进行SDK相关的下载")]),s._v(" "),t("blockquote",[t("p",[s._v("https://blog.csdn.net/u010358168/java/article/details/81535307")])]),s._v(" "),t("blockquote",[t("p",[s._v("https://book.flutterchina.club/chapter1/install_flutter.html")])])])}],!1,null,null,null);a.default=r.exports}}]);