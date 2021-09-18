# js通过url地址保存文本
```js
const click = function (node) {
    const event = new MouseEvent("click");
    node.dispatchEvent(event);
  };
const saveUrl = function (url, name) {
    const save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    const can_use_save_link = "download" in save_link;
    if (can_use_save_link) {
      save_link.href = url;
      save_link.download = name;
      click(save_link);
      return;
    }

    const opened = document.open(url, "_blank");
    if (!opened) {
      document.location.href = url;
    }
  };


// 第二种
function download(url, name) {
      var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
      //地址
      save_link.href = url;
      save_link.download = name;
      var ev = document.createEvent("MouseEvents");
      ev.initMouseEvent(
          "click", true, false, window, 0, 0, 0, 0, 0
          , false, false, false, false, 0, null
      );
      save_link.dispatchEvent(ev);
  }
```

## IE浏览器使用download方法/saveUrl，非ie直接使用`window.location.href` 判断是否ie浏览器
```js
const isIE =
      new RegExp("MSIE (\\d+\\.\\d+);").test(window.navigator.userAgent) ||
      "ActiveXObject" in window;

```


