## 关于xml里有隐藏字符<0x1a>导致报错问题 
<0x1a>就是^Z（表示结束），会导致解析xml报错
* 使用JSON.stringify格式化字符串，然后格式化之后变成了\u001a, 把这个替换掉就不会报错了

```js
var fs = require('fs');
var xml2js = require('xml2js');

var parser = new xml2js.Parser();
var filePath = "./00021.xml";


var data = fs.readFileSync(filePath);
parser.parseString(data, function (err, result) {
    var strings = result.DOCUMENT.item;

    for(var i=0;i< strings.length;i++ ){
        var test = (JSON.stringify(strings[i].display[0].business_scope[0]));
        console.log(test);
        strings[i].display[0] = test.replace('\\u001a', '')
    }
});
```

## 扩展

xml解析可能导致错误的还有特殊字符，两种选择，一种转译，一种删除
&lt; < 小于号  
&gt; > 大于号  
&amp; & 和  
&apos; ' 单引号  
&quot; " 双引号
&nbsp;  空格  
&#35; 井号 #


## xml格式

### 什么是 XML?
```bash
XML 指可扩展标记语言（EXtensible Markup Language）
XML 是一种标记语言，很类似 HTML
XML 的设计宗旨是传输数据，而非显示数据
XML 标签没有被预定义。您需要自行定义标签。
XML 被设计为具有自我描述性。
XML 是 W3C 的推荐标准
XML 与 HTML 的主要差异
XML 不是 HTML 的替代。
XML 和 HTML 为不同的目的而设计：

XML 被设计为传输和存储数据，其焦点是数据的内容。
HTML 被设计用来显示数据，其焦点是数据的外观。
HTML 旨在显示信息，而 XML 旨在传输信息。
```
### XML语法
XML 的语法规则很简单，且很有逻辑。这些规则很容易学习，也很容易使用。
1. 所有 XML 元素都须有关闭标签
在 HTML，经常会看到没有关闭标签的元素：
```xml
<p>This is a paragraph
<p>This is another paragraph
<!-- 在 XML 中，省略关闭标签是非法的。所有元素都必须有关闭标签： -->

<p>This is a paragraph</p>
<p>This is another paragraph</p>  
```
2. XML 标签对大小写敏感
XML 元素使用 XML 标签进行定义。
XML 标签对大小写敏感。在 XML 中，标签 `<Letter>` 与标签 `<letter>` 是不同的。
必须使用相同的大小写来编写打开标签和关闭标签：
```xml
<Message>这是错误的。</message>
<message>这是正确的。</message> 
```
3. XML 必须正确地嵌套
在 HTML 中，常会看到没有正确嵌套的元素：
```xml
<b><i>This text is bold and italic</b></i>
<!-- 在 XML 中，所有元素都必须彼此正确地嵌套： -->

<b><i>This text is bold and italic</i></b>
<!-- 在上例中，正确嵌套的意思是：由于 <i> 元素是在 <b> 元素内打开的，那么它必须在 <b> 元素内关闭。 -->
```
4. XML 文档必须有根元素
XML 文档必须有一个元素是所有其他元素的父元素。该元素称为根元素。
```xml
<root>
  <child>
    <subchild>.....</subchild>
  </child>
</root>
```
5. XML 的属性值须加引号
与 HTML 类似，XML 也可拥有属性（名称/值的对）。
在 XML 中，XML 的属性值须加引号。请研究下面的两个 XML 文档。第一个是错误的，第二个是正确的：
```xml
<note date=08/08/2008>
<to>George</to>
<from>John</from>
</note> 
<note date="08/08/2008">
<to>George</to>
<from>John</from>
</note> 
```
在第一个文档中的错误是，note 元素中的 date 属性没有加引号。

6. 实体引用
在 XML 中，一些字符拥有特殊的意义。
如果你把字符 "<" 放在 XML 元素中，会发生错误，这是因为解析器会把它当作新元素的开始。
这样会产生 XML 错误：
```xml
<message>if salary < 1000 then</message>
<!-- 为了避免这个错误，请用实体引用来代替 "<" 字符： -->

<message>if salary &lt; 1000 then</message> 
```
在 XML 中，有 5 个预定义的实体引用：

引用	释义	释义
```
&lt; < 小于号  
&gt; > 大于号  
&amp; & 和  
&apos; ' 单引号  
&quot; " 双引号

```
7. XML 中的注释
在 XML 中编写注释的语法与 HTML 的语法很相似：
```xml
<!-- This is a comment --> 
```
8. 在 XML 中，空格会被保留
在 XML 中，文档中的空格不会被删节。

9. XML 以 LF 存储换行
在 Windows 应用程序中，换行通常以一对字符来存储：回车符 (CR) 和换行符 (LF)。这对字符与打字机设置新行的动作有相似之处。在 Unix 应用程序中，新行以 LF 字符存储。而 Macintosh 应用程序使用 CR 来存储新行。

## xml 代码示例
```xml
<?xml version='1.0' encoding='utf-8'?>
  <DOCUMENT>
    <item>
      <key><![CDATA[ 863419591 ]]></key>
    </item>
  </DOCUMENT>
```
> https://www.jianshu.com/p/723436770ce2