(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{340:function(a,e,t){"use strict";t.r(e);var s=t(0),v=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"regexp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regexp","aria-hidden":"true"}},[a._v("#")]),a._v(" regexp")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" parse_url "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/^(?:([a-zA-Z]+):)?(\\/{0,3})([0-9.\\-A-Za-z]+)(?::(\\d+))?(?:\\/([^?#]*))?(?:#(.*))$/")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" url "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://www.baidu.com:80/googr?q#frame'")]),a._v("\n")])])]),t("p",[t("code",[a._v("(?:([a-zA-Z]+):)?")])]),a._v(" "),t("p",[a._v("这个因子匹配一个协议名，但仅当它之后跟随一个：（冒号）的时候才匹配 "),t("code",[a._v("(?:...)")]),a._v("表示一个非捕获型数组（noncapturing）。后缀？表示这个分组是可选的。表示重复1次或0次。\n"),t("code",[a._v("(...)")]),a._v("表示捕获型分组(capturing group)。一个捕获型分组将复制它所匹配的文本，并将其放入 result 数组中。每个捕获型分组都将被指定一个编号。第一个捕获型分组的编号是1，所以该分组所匹配的文本拷贝将出现在 "),t("code",[a._v("result[1]")]),a._v(" 中。\n"),t("code",[a._v("[...]")]),a._v(" 表示一个字符类。 这个字符类 "),t("code",[a._v("A-Za-z")]),a._v("包含26个大写字母和26个小写字母。连字符（-）表示范围从 A 到 Z。后缀 + 表示这个字符类将被匹配1次或多次。这个组后面跟着字符：，它将按字面进行匹配。")]),a._v(" "),t("p",[t("code",[a._v("(\\/{0,3})")])]),a._v(" "),t("p",[a._v("下一个因子是捕获型分组2。"),t("code",[a._v("\\/")]),a._v(" 表示一个应该被匹配的/（斜杠）。它用"),t("code",[a._v("\\")]),a._v("(反斜杠)来进行转义，这样它就不会被错误地解释为这个正则表达式的结束符。后缀"),t("code",[a._v("{0,3}")]),a._v("表示 "),t("code",[a._v("/")]),a._v(" 将被匹配 0 次或者1次到3次之间")]),a._v(" "),t("p",[t("code",[a._v("([0-9.a-zA-Z\\-]+)")])]),a._v(" "),t("p",[a._v("下一个因子是捕获型分组 3。它将匹配一个主机名，由1个或多个数字、字母或.或-组成。"),t("code",[a._v("-")]),a._v(" 被转义为 "),t("code",[a._v("\\-")]),a._v(" 以防被与表示范围的连字符相混淆")]),a._v(" "),t("p",[t("code",[a._v("(?::(\\d+))?")])]),a._v(" "),t("p",[a._v("下一个可选因子将匹配端口号，它是由一个前置：加上 1个或多个数字而组成的序列，"),t("code",[a._v("\\d")]),a._v(" 表示一个数字字符。1个或多个数字组成的数字串将被捕获型分组4捕获")]),a._v(" "),t("p",[t("code",[a._v("(?:\\/([^?#]*))?")])]),a._v(" "),t("p",[a._v("我们有另一个可选分组。该分组以一个 "),t("code",[a._v("/")]),a._v("开始。之后的字符类"),t("code",[a._v("[^?#]")]),a._v("以一个"),t("code",[a._v("^")]),a._v("开始表示这个类包含除"),t("code",[a._v("?")]),a._v("和"),t("code",[a._v("#")]),a._v("之外的所有字符。"),t("code",[a._v("*")]),a._v("表示这个字符匹配 0 次 或多次。")]),a._v(" "),t("p",[a._v("不严谨，因为会包含行结束符，控制字符，以及其他大量不应在此被匹配的字符")]),a._v(" "),t("p",[t("code",[a._v("?:\\?([^#]*)?")])]),a._v(" "),t("p",[a._v("我们还有一个 "),t("code",[a._v("?")]),a._v(" 开始的可选分组。它包含捕获型分组 6，这个分组包含0 个或多个非 "),t("code",[a._v("#")]),a._v(" 字符")]),a._v(" "),t("p",[t("code",[a._v("(?:#(.*))?")])]),a._v(" "),t("p",[a._v("最后一个可选分组以 "),t("code",[a._v("#")]),a._v(" 开始的。"),t("code",[a._v(".")]),a._v(" 将匹配除行结束符以外的所有字符：\n"),t("code",[a._v("$")]),a._v(" 表示这个字符串的结束。")]),a._v(" "),t("ul",[t("li",[a._v("匹配数字的正则表达式")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" parse_number "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/^-?\\d+(?:\\.\\d*)?(?:e[+\\-]?\\d+)?$/i")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("code",[a._v("-?")]),a._v(" 减号后面的问号后缀表示这个减号是可选的；\n"),t("code",[a._v("\\d+")]),a._v(" "),t("code",[a._v("\\d")]),a._v("的含义和"),t("code",[a._v("[0-9]")]),a._v("一样，它匹配的是一个数字，后缀 "),t("code",[a._v("+")]),a._v(" 规定它可以匹配 1个或多个数字：")]),a._v(" "),t("p",[t("code",[a._v("(?:\\.\\d*)?")]),a._v(" 匹配后面跟随 0 个或多个数字的小数点\n"),t("code",[a._v("(?:e[+\\-]?\\d+)?")]),a._v(" 可选的非捕获型分组，它将匹配一个 e （或E）, 一个可选的正负号及一个或多个数字")]),a._v(" "),t("h2",{attrs:{id:"结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 结构")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("G")]),a._v(" 全局的（匹配多次；准确含义随方法而变）")]),a._v(" "),t("li",[t("code",[a._v("I")]),a._v(" 大小写不敏感（忽略字符大小写）")]),a._v(" "),t("li",[t("code",[a._v("M")]),a._v(" 多行 （^ 和 $ 能匹配行结束符）")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 创建一个匹配JavaScript字符串的正则表达式")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" my_regexp "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Regexp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\"(?:\\\\./[^\\\\\\\\\\\\\\"])*\\""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'g'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("RegExp 对象的属性")]),a._v(" "),t("ul",[t("li",[a._v("global 如果标志 g 被使用，值为true")]),a._v(" "),t("li",[a._v("ignoreCase 如果标志 i 被使用，值为true")]),a._v(" "),t("li",[a._v("lastIndex 下一次 exec 匹配开始的索引，初始值为 0")]),a._v(" "),t("li",[a._v("multiline 如果标志 m 被使用，值为 true")]),a._v(" "),t("li",[a._v("source 正则表达式源代码文本")])]),a._v(" "),t("h2",{attrs:{id:"元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#元素","aria-hidden":"true"}},[a._v("#")]),a._v(" 元素")]),a._v(" "),t("h3",{attrs:{id:"正则表达式选择"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式选择","aria-hidden":"true"}},[a._v("#")]),a._v(" 正则表达式选择")]),a._v(" "),t("p",[a._v("一个正则表达式选择包含 1 个或多个正则表达式序列。这些序列被 | （竖线）分割。如果这些序列中的任何一项符合匹配条件，那么这个选择就被匹配。它尝试按顺序一次匹配这些序列项。")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("into"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/in|int/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("将在 into 中匹配 in。但它不会匹配 int，因为 in 已被匹配成功")]),a._v(" "),t("h3",{attrs:{id:"正则表达式序列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式序列","aria-hidden":"true"}},[a._v("#")]),a._v(" 正则表达式序列")]),a._v(" "),t("p",[a._v("一个正则表达式序列包含 1 个或多个正则表达式因子。每个因子能选择是否跟随一个量词，这个量词决定着这个因子被允许出现但次数。如果没有指定这个量词，那么该因子将被匹配一次。")]),a._v(" "),t("h3",{attrs:{id:"正则表达式因子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式因子","aria-hidden":"true"}},[a._v("#")]),a._v(" 正则表达式因子")]),a._v(" "),t("p",[a._v("一个正则表达式因子可以是一个字符、一个由圆括号包围但组，一个字符类，或者是一个转义序列。除了控制字符和特殊字符以外，所有字符都将被按照字面处理：\n"),t("code",[a._v("\\/[](){}+*|.^$")]),a._v("\n如果你希望上面列出但字符按字面去匹配，那么必须要用一个\\前缀来进行转义。当你存在疑虑时，可以给任何特殊字符都添加一个 \\ 前缀来使其字面化 \\ 前缀不能使字母或数字字面化。\n一个未被转义的，将匹配除行结束符以外的任何字符\n当 lastIndex 属性值为 0 时，一个未转义的 ^ 将匹配该文本的开始，当指定了 m标识时，它也能匹配行结束符。\n一个未转义的 $ 将匹配该文本的结束。当指定了 m 标志时，它也能匹配行结束符。")]),a._v(" "),t("h3",{attrs:{id:"正则表达式转义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式转义","aria-hidden":"true"}},[a._v("#")]),a._v(" 正则表达式转义")]),a._v(" "),t("h3",{attrs:{id:"正则表达式分组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式分组","aria-hidden":"true"}},[a._v("#")]),a._v(" 正则表达式分组")]),a._v(" "),t("h3",{attrs:{id:"正则表达式类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式类","aria-hidden":"true"}},[a._v("#")]),a._v(" 正则表达式类")]),a._v(" "),t("h3",{attrs:{id:"正则表达式类转义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式类转义","aria-hidden":"true"}},[a._v("#")]),a._v(" 正则表达式类转义")]),a._v(" "),t("h3",{attrs:{id:"正则表达式量词"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式量词","aria-hidden":"true"}},[a._v("#")]),a._v(" 正则表达式量词")]),a._v(" "),t("p",[a._v("未完待续。。。")])])}],!1,null,null,null);e.default=v.exports}}]);