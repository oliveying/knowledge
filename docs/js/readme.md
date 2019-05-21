### js 知识点总结

## 弹窗下拉加载数据

```html
<div class="body">
  <div class="popup">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</div>
```
```css
.body {
    max-height: 200px;
    padding: 10px 26px;
    overflow: scroll;
}
```
```js
var pn = 1;
var limitTotal = '';
window.getData = function () {
        query.getData(pn).then(function (result) {
          if (result.state === 'ok') {
            limitTotal = Math.ceil(result.data.count / 10);
            var items = result.data.items;
            $('.popup').append(items);

            if (unitPn < limitTotal) {
              unitPn++;
              $(".body").unbind("scroll").bind("scroll",window.dropDownRefresh);
            } else {
              $('.body').unbind("scroll", window.dropDownRefresh);
            }
          } else {
          }
      });
    };
// 检测下拉到底部
    window.dropDownRefresh = function (e) {
      var scrollTop = $(this).scrollTop();
      var scrollHeight = $(this).height();
      var windowHeight = $('.popup').height();
      if ((scrollTop + scrollHeight) >= windowHeight) {
        $('.body').unbind("scroll", window.dropDownRefresh);
        window.getData();
      }
    };
```


