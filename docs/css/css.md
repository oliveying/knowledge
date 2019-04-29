# 经常遇到的css问题
## 超过宽度，显示...
* 超出一行，显示..., 需指定宽度
  ```css
  overflow {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: no-wrap;
    display: block;
    width: 100%;
  }
  ```
* 超出两行，显示...，需指定宽度
```css
overflow2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: initial;
}
```

## table的td里换行问题
* 描述： table的td里如果是比较长的数字，会影响样式，不会换行，所以需要加强制换行，兼容浏览器换行
```css
td {
  -ms-word-break: break-all;    // ie
  word-break:break-all;         // ff
  word-break: break-word;       // chrome
}
```

