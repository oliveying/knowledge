(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{338:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象")]),t._v(" "),s("ul",[s("li",[t._v('JavaScript 的简单类型包括数字、字符串、布尔值（true和false）、null值和undefined 值。其他所有的值都是对象。数字、字符串和布尔值"貌似"对象，因为它们拥有方法，但它们是不可变的。JavaScript中的对象是可变的键控组合（keyed collections）。在JavaScript中，数组是对象，函数是对象，正则表达式是对象，当然，对象也是对象。')])]),t._v(" "),s("p",[t._v("对象是属性的容器，其中每个属性都拥有名字和值。属性的名字可以说包括空字符串在内的任意字符串。属性值可以是除undefined以外的任何值")]),t._v(" "),s("p",[t._v("JavaScript 中的对象是无类别（class-free）的。它对新属性的名字和值没有约束。对象适合用于手机和管理数据。对象可以包含其他对象，所有它们可以容易地表示称树形或图形结构。")]),t._v(" "),s("p",[t._v("JavaScript 包括一个原型链的特性，允许对象继承另一个对象的属性。正确地使用它能减少对象初始化的时间和内存消耗")]),t._v(" "),s("h2",{attrs:{id:"对象字面量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象字面量","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象字面量")]),t._v(" "),s("p",[t._v("对象字面量提供了一种非常方便地创建新对象的表示法。一个对象字面量就是包围在一对花括号中的零或多个'名/值'对。对象字面量可以出现在任何允许表达式出现的地方。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" empty "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" stooge "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first-name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'du'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  last"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ruo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("属性名可以是包括空字符串在内的任何字符串。在对象字面量中，如果属性名是一个合法的 JavaScript 标识符且不是保留字，并不强制要求用引号阔住属性名\n对象是可嵌套的。")]),t._v(" "),s("h3",{attrs:{id:"检索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检索","aria-hidden":"true"}},[t._v("#")]),t._v(" 检索")]),t._v(" "),s("ol",[s("li",[t._v("要检索对象中包含的值，可以采用在[]后缀中阔住一个字符串表达式的方式。")]),t._v(" "),s("li",[t._v("如果字符串表达式是一个常数，而且它是一个合法的 JavaScript 标识符而并非保留字，那么也可以用"),s("code",[t._v(".")]),t._v(" 表示法代替，优先考虑使用"),s("code",[t._v(".")]),t._v(" 表示法，因为它更紧凑且可读性更好。")]),t._v(" "),s("li",[t._v("检索不存在的成员元素的值，将返回一个 undefined 值")]),t._v(" "),s("li",[t._v("|| 或运算符可以用来填充默认值")]),t._v(" "),s("li",[t._v("尝试检索一个 undefined 值将会导致 TypeError 异常。可用过 && 运算符来避免错误")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("stooge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first-name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'du'")]),t._v("\nstooge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("last "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'ruo'")]),t._v("\nstooge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stooge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unknown'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'unknown'")]),t._v("\n\nstooge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// throw 'TypeError'")]),t._v("\nstooge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" stooge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])]),s("h3",{attrs:{id:"更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新","aria-hidden":"true"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),s("ul",[s("li",[t._v("对象中的值可以通过赋值语句来更新。如果属性名已经存在于对象中，那么这个属性的值被替换。 如果对象之前并没有拥有那个属性名，那么该属性就被扩充到该对象中。")])]),t._v(" "),s("h3",{attrs:{id:"引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用","aria-hidden":"true"}},[t._v("#")]),t._v(" 引用")]),t._v(" "),s("ul",[s("li",[t._v("对象通过引用来传统。它们永远不会被拷贝；")])]),t._v(" "),s("h3",{attrs:{id:"原型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型")]),t._v(" "),s("p",[t._v("每个对象都连接到一个原型对象，并且它可以从中继承属性。所有通过对象字面量创建的对象都连接到 Object.prototype 这个 JavaScript 中标准的对象。")]),t._v(" "),s("p",[t._v("当你创建一个新对象时，你可以选择某个对象作为它的原型。")]),t._v(" "),s("ul",[s("li",[t._v("创建一个使用原对象作为其原型的对象")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beget "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("beget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("o")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("F")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("F")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("F")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" another_stooge "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beget")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stooge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("原型连接在更新时是不起作用的。当我们对某个对象做出改变时，不会触及到该对象的原型")]),t._v(" "),s("p",[t._v("原型连接只有在检索值的时候才被用到。如果我们尝试去获取对象的某个属性值，且该对象没有此属性名，那么JavaScript 会试着从原型对象中获取属性值。如果那个原型对象也没有该属性，那么再从它的原型中寻找，依此类推，直到该过程最后到达终点 Object.prototype。 如果想要的属性完全不存在原型链中，那么结果就是 undefined 值，这个过程成为"),s("em",[t._v("委托")])]),t._v(" "),s("p",[t._v("原型关系是一种动态的关系。如果我们添加一个新的属性到原型中，该属性会立即对所有基于该原型创建的对象可见。（详见第6章）")]),t._v(" "),s("h3",{attrs:{id:"反射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反射","aria-hidden":"true"}},[t._v("#")]),t._v(" 反射")]),t._v(" "),s("ul",[s("li",[t._v("typeof 确定属性值\n原型链中的任何属性也会产生一个值")])]),t._v(" "),s("h4",{attrs:{id:"处理不需要的属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理不需要的属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 处理不需要的属性")]),t._v(" "),s("ol",[s("li",[t._v("让你的程序检查并剔除函数值。一般来说，做反射的目标是数据，因此你应该意识到一些值可能会是函数。")]),t._v(" "),s("li",[t._v("使用 hasOwnProperty 方法，如果是对象独有的属性，它将返回 true。hasOwnProperty 方法不会检查原型链。")])]),t._v(" "),s("h3",{attrs:{id:"枚举"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#枚举","aria-hidden":"true"}},[t._v("#")]),t._v(" 枚举")]),t._v(" "),s("p",[t._v("for in 语句可用来遍历一个对象中的所有属性名。该枚举过程将会列出所有的属性 --- 包括函数和你可能不关心的原型链中的属性 ---所以有必要过滤掉那些你不想要的值。最为常用的过滤器是 hasOwnProperty 方法，以及使用 typeof 来排除函数；")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" anouther_stooge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" anouther_stooge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeln")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("':'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" another_stooge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("属性名出现的顺序是不确定的。因此要对任何可能出现的顺序有所准备。如果你想要确保属性以特定的顺序出现，最好的办法就是完全避免使用 for in 语句，而是创建一个数组，在其中以正确的顺序包含属性名")]),t._v(" "),s("p",[t._v("通过使用 for 而不是 for in， 可以得到我们想要的属性，而不用担心可能发掘除原型链中的属性，并且我们按正确的顺序取得了它们的值。")]),t._v(" "),s("h3",{attrs:{id:"删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除")]),t._v(" "),s("p",[t._v("delete 运算符可以用来删除对象的属性。它将会移除对象中确定包含的属性。它不会触及原型链中的任何对象。")]),t._v(" "),s("p",[t._v("删除对象的属性可能会让来自原型链中的属性浮现出来")]),t._v(" "),s("h3",{attrs:{id:"减少全局变量污染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少全局变量污染","aria-hidden":"true"}},[t._v("#")]),t._v(" 减少全局变量污染")]),t._v(" "),s("p",[t._v("最小化使用全局变量的一个方法是在你的应用中只创建唯一一个全局变量：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MYAPP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("也可以使用闭包")])])}],!1,null,null,null);a.default=e.exports}}]);