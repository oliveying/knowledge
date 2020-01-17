## URL 规范

- 不用大写；（强制）

- 用中杠-不用下杠_；（强制）

- 参数列表要encode，编码使用utf-8；（强制）

- URI中的名词表示资源集合，使用复数形式。（建议）

- 增加版本号（建议）

url转义其实也是为了符合url的规范而已。因为在标准的url规范中中文和很多的字符是不允许出现在url中的

## URL 需要转化的字符

### **ASCII 的控制字符**

这些字符都是不可打印的，自然需要进行转化。

### **一些非ASCII字符**

这些字符自然是非法的字符范围。转化也是理所当然的了。

### **一些保留字符**

最常见的就是“&”如果出现在url中了，那是url中的一个字符呢，还是特殊的参数分割用的呢？。

### **一些不安全的字符**

例如：空格。为了防止引起歧义，需要被转化为“+”。

**注释：**通过urlencode的转化规则和目的，知道urleocode是基于字符编码的。同样的一个汉字，不同的编码类型，肯定对应不同的urleocode的串。gbk编码的有gbk的encode结果，apache等服务器，接受到字符串后，可以进行decode，但是还是无法解决编码的问题。编码问题，还是需要靠约定或者字符编码的判断解决。

# js中编码函数：escape(),encodeURI()与encodeURIComponent()

函数出现时间：                   

```javascript

escape()                 javascript 1.0            

encodeURI()              javascript 1.5         

encodeURIComponent()     javascript 1.5

```

**escape()：**采用ISO Latin字符集对指定的字符串进行编码。所有的空格符、标点符号、特殊字符以及其他非ASCII字符都会转化成%xx格式的字符编码（xx代表此字符在字符集表里编码的16进制数字）。比如，空格符的对应编码是%20。不会对ASCII字符和数字进行编码。不会被此方法编码的字符69个：*，+，-，.，/，@，_，0-9，a-z，A-Z，此函数现在已经不提倡使用，反向编码函数:**unescape()。**

例如：

```javascript

escape("小明");

"%u5C0F%u660E"

```



**encodeURI()：**把URI字符串采用UTF-8编码格式转化成escape格式的字符串。不会被此方法编码的字符82个：!，#，$，&，'，(，)，*，+，,，-，.，/，:，;，=，?，@，_，~，0-9，a-z，A-Z，反向编码函数：**decodeURI()。**

例如：

```javascript

encodeURI("小明");

"%E5%B0%8F%E6%98%8E"

encodeURI("http://www.example.com?name=小明");

"http://www.example.com?name=%E5%B0%8F%E6%98%8E"

```



**encodeURIComponent()：**把URI字符串采用URF-8编码格式转化成escape格式的字符串。与**encodeURI()**相比，这个函数会将更多的字符进行编码，比如"/"等字符。所以如果字符串里面包含了URI的几个部分的话，不能用这个来进行编码。否则“/”字符被编码后将URL显示错误。不会被此方法编码的字符71个：!， '，(，)，*，-，.，_，~，0-9，a-z，A-Z，反向编码函数：**decodeURIComponent()**。

例如：

```javascript

encodeURIComponent("小明");

"%E5%B0%8F%E6%98%8E"

encodeURIComponent("http://www.example.com?name=小明");

"http%3A%2F%2Fwww.example.com%3Fname%3D%E5%B0%8F%E6%98%8E"

```



## **总结**

escape()函数用于js对字符串进行编码，不提倡使用；

encodeURI()用于整个URL跳转；

encodeURIComponent()用于参数的传递。

