# Navigator对象、Screen对象
* window.navigator属性指向一个包含浏览器和系统信息的 Navigator 对象。脚本通过这个属性了解用户的环境信息。

## navigator 属性

### Navigator.userAgent
navigator.userAgent属性返回浏览器的 User Agent 字符串，表示浏览器的厂商和版本信息。
```js
navigator.userAgent
// "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36"

navigator.userAgent
// "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"
```

通过userAgent属性识别浏览器，不是一个好办法。因为必须考虑所有的情况（不同的浏览器，不同的版本），非常麻烦，而且用户可以改变这个字符串
现在一般不再通过它识别浏览器了，而是使用“功能识别”方法，即逐一测试当前浏览器是否支持要用到的 JavaScript 功能。

通过userAgent可以大致准确地识别手机浏览器，方法就是测试是否包含mobi字符串。

```js
var ua = navigator.userAgent.toLowerCase();

if (/mobi/i.test(ua)) {
  // 手机浏览器
} else {
  // 非手机浏览器
}
```
如果想要识别所有移动设备的浏览器，可以测试更多的特征字符串。
```js
/mobi|android|touch|mini/i.test(ua)

```
### Navigator.plugins
Navigator.plugins属性返回一个类似数组的对象，成员是 Plugin 实例对象，表示浏览器安装的插件，比如 Flash、ActiveX 等。

```js
var pluginsLength = navigator.plugins.length;

for (var i = 0; i < pluginsLength; i++) {
  console.log(navigator.plugins[i].name);
  console.log(navigator.plugins[i].filename);
  console.log(navigator.plugins[i].description);
  console.log(navigator.plugins[i].version);
}
```

### Navigator.platform

Navigator.platform属性返回用户的操作系统信息，比如MacIntel、Win32、Linux x86_64等 。
```js
navigator.platform
// "Linux x86_64"
navigator.platform
// "MacIntel"

```

### Navigator.onLine

navigator.onLine属性返回一个布尔值，表示用户当前在线还是离线（浏览器断线）。

如果是false，可以断定用户一定离线

```js
window.addEventListener('offline', function(e) { console.log('offline'); });
window.addEventListener('online', function(e) { console.log('online'); });
```
用户变成在线会触发online事件，变成离线会触发offline事件，可以通过window.ononline和window.onoffline指定这两个事件的回调函数。

### Navigator.language，Navigator.languages

Navigator.language属性返回一个字符串，表示浏览器的首选语言。该属性只读。
```js
navigator.language // "en"

```
Navigator.languages属性返回一个数组，表示用户可以接受的语言。Navigator.language总是这个数组的第一个成员。HTTP 请求头信息的Accept-Language字段，就来自这个数组。
```js
navigator.languages  // ["en-US", "en", "zh-CN", "zh", "zh-TW"]
```
如果这个属性发生变化，就会在window对象上触发languagechange事件。

### Navigator.geolocation
Navigator.geolocation属性返回一个 Geolocation 对象，包含用户地理位置的信息。注意，该 API 只有在 HTTPS 协议下可用，否则调用下面方法时会报错。

Geolocation 对象提供下面三个方法。
* Geolocation.getCurrentPosition()：得到用户的当前位置
* Geolocation.watchPosition()：监听用户位置变化
* Geolocation.clearWatch()：取消watchPosition()方法指定的监听函数
注意，调用这三个方法时，浏览器会跳出一个对话框，要求用户给予授权。

### Navigator.cookieEnabled
Navigator.cookieEnabled属性返回一个布尔值，表示浏览器的 Cookie 功能是否打开。

```js
navigator.cookieEnabled // true

```
注意，这个属性反映的是浏览器总的特性，与是否储存某个具体的网站的 Cookie 无关。用户可以设置某个网站不得储存 Cookie，这时cookieEnabled返回的还是true。


## navigator 方法
```js
Navigator.javaEnabled()
Navigator.javaEnabled() // 方法返回一个布尔值，表示浏览器是否能运行 Java Applet 小程序。

navigator.javaEnabled() // false
Navigator.sendBeacon()
Navigator.sendBeacon() // 方法用于向服务器异步发送数据，详见《XMLHttpRequest 对象》一章。
```


# Screen 对象
Screen 对象表示当前窗口所在的屏幕，提供显示设备的信息。window.screen属性指向这个对象。

该对象有下面的属性。

Screen.height：浏览器窗口所在的屏幕的高度（单位像素）。除非调整显示器的分辨率，否则这个值可以看作常量，不会发生变化。显示器的分辨率与浏览器设置无关，缩放网页并不会改变分辨率。

Screen.width：浏览器窗口所在的屏幕的宽度（单位像素）。

Screen.availHeight：浏览器窗口可用的屏幕高度（单位像素）。因为部分空间可能不可用，比如系统的任务栏或者 Mac 系统屏幕底部的 Dock 区，这个属性等于height减去那些被系统组件的高度。

Screen.availWidth：浏览器窗口可用的屏幕宽度（单位像素）。

Screen.pixelDepth：整数，表示屏幕的色彩位数，比如24表示屏幕提供24位色彩。

Screen.colorDepth：Screen.pixelDepth的别名。严格地说，colorDepth 表示应用程序的颜色深度，pixelDepth 表示屏幕的颜色深度，绝大多数情况下，它们都是同一件事。

Screen.orientation：返回一个对象，表示屏幕的方向。该对象的type属性是一个字符串，表示屏幕的具体方向，landscape-primary表示横放，landscape-secondary表示颠倒的横放，portrait-primary表示竖放，portrait-secondary。

下面是Screen.orientation的例子。
```js
window.screen.orientation
// { angle: 0, type: "landscape-primary", onchange: null }
```

下面的例子保证屏幕分辨率大于 1024 x 768。
```js
if (window.screen.width >= 1024 && window.screen.height >= 768) {
  // 分辨率不低于 1024x768
}
```

下面是根据屏幕的宽度，将用户导向不同网页的代码。
```js
if ((screen.width <= 800) && (screen.height <= 600)) {
  window.location.replace('small.html');
} else {
  window.location.replace('wide.html');
}

```

> https://wangdoc.com/javascript/bom/navigator.html