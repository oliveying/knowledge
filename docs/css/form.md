# form 表单之input
## input和textarea设置placeholder的样式

```css
::-webkit-input-placeholder { /* WebKit browsers */
    color:    #999;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #999;
    opacity:  1;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #999;
    opacity:  1;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    #999;
  }
```

## 解决input表单元素在ios系统上默认圆角的问题
```css
input {
    -webkit-appearance: none ;
    border-radius: 2px;
}
```

## input 跳转链接 实现按回车键也能跳转

```html
 <input id="input-num" type="text" class="input input-num" onkeypress="checkInfo(event)"/>
```
 页
 ```html
          <div class="page-confirm" onclick="checkInfoConfirm(event)">确定</div>
```

```js
function checkInfoConfirm(event) {
 // 此为跳转逻辑
}
function checkInfo(event) {
      if (event.keyCode === 13) {
        checkInfoConfirm(event)
      }
    }
```