## RequireJs 1.0
> 样例详见 test-require
html里引入
```js
<script data-main="main" src="require.js"></script>
```
script 标签多了自定义属性，data-main=“main”， 等号右边的main指的是main.js ，当然可以使用任意的名称，这个main指主模块或入口模块。

main.js如下
```js
require.config({
    paths: {
        jquery: 'jquery-1.7.2'
    }
});
require(['jquery'], function ($){
    alert($().jquery); // 返回jquery版本号
} )
```
* require.config用来配置一些参数，它将影响到requirejs库的一些行为
* require.config的参数是一个JS对象，常用的配置有baseUrl，paths等。

### RequireJS使用define来定义模块。

    如果是在js文件夹下，就使用 `data-main="js/main"`
    ```js
    require.config({
        baseUrl: 'js'
    })
    ```
总结：
* 使用baseUrl来配置模块根目录，baseUrl可以是绝对路径也可以是相对路径
* 使用define定义一个函数类型模块，RequireJS的模块可以是JS对象，函数或其它任何类型（CommonJS/SeaJS则只能是JS对象）
 
### RequireJS具有依赖事件模块event

## RequireJs 2.0

1. 延迟模块的执行
2. config增加shim， map，module， enforceDefine

* shim参数解决了使用非AMD方式定义的模块（如jQuery插件）及其载入顺序。使用shim参数来取代1.0版本的order插件

下面是一个使用jQuery插件形式配置的参数。我们知道jQuery插件本质上是将命名空间挂在全局的jQuery或jQuery.fn上而非使用define定义的模块。而jQuery插件都依赖于jQuery，即在require插件时得保证jQuery先下载下来。可以如下配置
```js
require.config({
    shim: {
        'jquery-slide': ['jquery']
    }
});
require(['jquery-slide']);
```

这时会保证先下载jquery.js，然后再下载jquery-slide.js。

* es5-shim
```html
<!--[if lt IE 9]>
<script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-shim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/4.5.7/es6-shim.min.js"></script>
<![endif]-->
```
## html5shiv 让ie6-ie8支持h5标签
```html
<!--[if lt IE 9]>
<script src="https://cdn.tianyancha.com/js-cdn/html5shiv/3.7.3/html5shiv.min.js"></script>
<![endif]-->

```

> https://www.cnblogs.com/snandy/archive/2012/05/22/2513652.html