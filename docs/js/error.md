## 几种error

* InvalidUrlError 参数无效
* ProviderError 提供者错误
* MuteError 没有权限

## npm install 报错，提示`gyp ERR! stack Error: EACCES: permission denied` 解决方法

实际原因是由于用的是root账户权限执行npm，而npm默认是不适用root权限创建内容，因此会出现权限问题而导致失败，加上参数`--unsafe-perm=true --allow-root`即可解决问题。
```
npm install --production --unsafe-perm=true --allow-root
```

## 小程序开发兼容问题

* 百度小程序：
```
1、wxs语法不支持
2、自定义组件标签必须闭合
3、自定义组件属性必须小写
4、原生标签必须闭合
5、方法名不要使用getData
6、外层双引号、内部单引号
7、flex:1撑不开时，最外层宽度定义750rpx。
8、子组件和父组件不要使用相同类名
9、三元运算符不支持小于号和大于号>转换成&gt;
所以可以写!== 这种
```
* 支付宝小程序：

10、富文本组件-与微信数据结构不一致。