## 微信内置浏览器及小程序的判断方法

> UA 检测和判断方法
```js
//js版本
if(/MicroMessenger/i.test(navigator.userAgent)){
	alert('你真正使用微信访问');
}
//或者
if(navigator.userAgent.match(/(MicroMessenger)/i)){
	alert('你真正使用微信访问');
}
// 或者
if (window.navigator.userAgent.indexOf(" MicroMessenger/") > -1) {
        //微信中访问
    }
```

> 更准确判断

```js
Android.*MicroMessenger.*miniProgram//安卓端的小程序
iPhone.*MicroMessenger//苹果端微信或小程序
```


