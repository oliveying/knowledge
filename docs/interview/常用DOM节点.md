## 常用的DOM节点

## document节点，文档节点
```js
// html 节点
document.documentElement 
// body 
document.body
// title 整个页面标题 可改变
document.title 
// 包含网页对应域名信息 location.href类似，可以修改，只能从低级改到高级域名（二级可以改到一级域名，顶级不能跳转到自己）
document.domain
// 前一个页面的url地址，和history.back()结合
document.referrer

```
## node节点10个属性
nodeType : 1~12,1: element(id, title, dir, className);text(文本节点#text，3)
nodeName: 节点名称 字符串,
nodeValue: 节点值 字符串，无值返回null
childNodes: 子节点
parentNode: 父节点
previousSibling:上一个
nextSibling: 下一个
firstChild：第一个子节点
lastChild: 最后一个子节点
ownerDocument: 整个文档节点， document
## node 7个方法
hasChildNodes：是否有子节点
appendChild: 插入后面，插入的节点
insertBefore： 插入前面（插入的节点，子节点）
removeChild: 删除的子节点，参数（删除的节点）
replaceChild: tihuan
cloneNode: (true/false);
normalize




## element 文档元素节点

## text 节点6（文本节点）
appendData
deleteData
insertData
replaceData
splitData
subStringData

## nodeType的数字代表
文档节点（document）：9，对应常量Node.DOCUMENT_NODE
元素节点（element）：1，对应常量Node.ELEMENT_NODE
属性节点（attr）：2，对应常量Node.ATTRIBUTE_NODE
文本节点（text）：3，对应常量Node.TEXT_NODE
文档片断节点（DocumentFragment）：11，对应常量Node.DOCUMENT_FRAGMENT_NODE
文档类型节点（DocumentType）：10，对应常量Node.DOCUMENT_TYPE_NODE
注释节点（Comment）：8，对应常量Node.COMMENT_NODE

document.text
document.node

history.back()