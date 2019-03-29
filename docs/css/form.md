## form 表单之input
### input和textarea设置placeholder的样式

```
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

### 解决input表单元素在ios系统上默认圆角的问题
```
 -webkit-appearance: none ;
 border-radius: 2px;
```