# 适配及兼容问题

## 手机端适配使用px还是rem

* 对于只需要适配少部分手机设备，分辨率对页面影响不大的，使用px即可；

* 对于需要适配各种移动设备，使用rem，例如只需要适配iPhone和iPad等分辨率差别比较挺大的设备。

1. px像素（pixel）：相对长度单位。相对于显示器屏幕分辨率而言.在移动端，因为手机分辨率种类颇多，不可能一个个去适配，需要考虑em和rem

2. em相对于父元素字体大小的单位

3. rem是指相对于根元素的字体大小的单位, 只会相对于html的值，不会受到父级的影响

## background-size兼容ie

```css
.back {
background: url("图片路径") 0 0 no-repeat;
    background-size: cover;
    -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='图片路径',sizingMethod='scale');
    filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='图片路径',sizingMethod='scale');
    background: none\9;
}
```
