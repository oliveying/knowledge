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
 
* 当一个模块依赖（a）于另一个模块（b）时，定义该模块时的第一个参数为数组，数组中的模块名（字符串类型）就是它所依赖的模块。

* 当有多个依赖模时，须注意回调函数的形参顺序得和数组元素一一对应。此时requirejs会自动识别依赖，且把它们都下载下来后再进行回调。

### RequireJS具有依赖事件模块event

## RequireJs 2.0

### 延迟模块的执行
### config增加shim， map，module， enforceDefine

#### shim参数
* 解决了使用非AMD方式定义的模块（如jQuery插件）及其载入顺序。使用shim参数来取代1.0版本的order插件

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

#### map参数
* map参数用来解决同一个模块的不同版本问题，这一灵感来自于Dojo的packageMap。有这样的场景：开发初期使用了的jquery-1.6.4，后期升级到了1.7.2。但担心有些依赖jquery-1.6.4的代码升级到1.7.2后有问题。因此保守的让这部分代码继续使用1.6.4版本。这时map参数将派上用场。

    假如A，B模块中使用了jquery-1.6.4.js，C，D模块中使用了jquery-1.7.2.js。如下
    ```js
    requirejs.config({
        map: {
            'A': {
                'jquery': 'jquery-1.6.4'
            },
            'B': {
                'jquery': 'jquery-1.7.2'
            }
        }
    });
    require(['A']); // download jquery-1.6.4.js
    require(['B']); // download jquery-1.7.2.js
    ```

    这时require(['A'])将会下载jquery-1.6.4.js，require(['B'])会下载jquery-1.7.2.js。模块“A”如果写成“*”则表示除了B模块使用jquery-1.7.2之外其它模块都使用jquery-1.6.4。map参数解决了模块的各个版本问题，很好的向下兼容了老代码。

#### config

* config参数用来给指定的模块传递一些有用的数据。如下
```js
require.config({
    config: {
        'A': {
            info: {name: 'jack'}
        }
    }
});
```
    使用A的模块中可以通过A.config().info获取到该数据信息。如
    ```js
    require(['A'], function(A){
        var info = A.config().info;
        console.log(info);
    })
    ```
#### enforceDefine
* 用来强制模块使用define定义，默认为false。如underscore不再支持AMD后，其代码移除了define。此时如果仍然使用requirejs来载入它，它就是普通的js文件了。此时如果enforceDefine设为true，虽然underscore.js能下载但requirejs会报错。如

require.config({
    enforceDefine: true
});
require(['underscore'], function(_){
    console.log(_)
})

### require函数增加了第三个参数errbacks
* 很明显该函数指模块文件没有载入成功时的回调。这个也是应一些开发者得要求而增加，其中还包括另一个著名AMD的实现curl的作者John Hann。
    ```js
    require(['b'], function(){
        console.log('success');
    },function(err){
        console.log(err)
    });
    ```
    err会给出一些出错提示信息。
### 更强大的paths参数。
requirejs 1.x版本中已经有paths参数，用来映射模块别名。requirejs2.0更加强大，可以配置为一个数组，顺序映射。当前面的路径没有成功载入时可接着使用后面的路径。如下

```js
requirejs.config({
    enforceDefine: true,
    paths: {
        jquery: [
            'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min',
            'lib/jquery'
        ]
    }
});
 
require(['jquery'], function ($) {
});
```

* 当google cdn上的jquery.min.js没有获取时（假如google宕机），可以使用本地的lib/jquery.js。

### 在模块载入失败回调中可以使用undef函数移除模块的注册。
这个灵感来自dojo AMD loader，RequireJS取名undef。如下
```js
require(['jquery'], function ($) {
    //Do something with $ here
}, function (err) {
    var failedId = err.requireModules && err.requireModules[0];
    if (failedId === 'jquery') {
        requirejs.undef(failedId);
    }
});
```

### 删除了jQuery domready相关代码。
### 删除了priority，packagePaths，catchError.define。

* 最后需要注意的是，虽然功能增加了不少。但代码量却减少了近60行。主要是去掉了jQuery ready相关代码。另外newContext函数依然有1000多行。

## RequireJS进阶（一）
为了应对日益复杂，大规模的JavaScript开发。我们化整为零，化繁为简。将复杂的逻辑划分一个个小单元，各个击破。这时一个项目可能会有几十个甚至上百个JS文件，每个文件为一个模块单元。如果上线时都是这些小文件，那将对性能造成一定影响。

RequireJS提供了一个打包压缩工具r.js来对模块进行合并压缩。r.js非常强大，不但可以压缩js，css，甚至可以对整个项目进行打包。

r.js的压缩工具使用UglifyJS或Closure Compiler。默认使用UglifyJS（jQuery也是使用它压缩）。此外r.js需要node.js环境，当然它也可以运行在Java环境中如Rhino。

* 执行代码
```bash
 node r.js -o baseUrl=js name=main out=built.js

-o         表示优化，该参数是固定的，必选。
baseUrl  指存放模块的根目录，这里是r4/js，因为cd到r4中了，只需设置为js。可选，如果没有设置将从r4中查找main.js。
name     模块的入口文件，这里设置成“main”，那么r.js会从baseUrl+main去查找。这里实际是r4/js/main.js。r.js会分析main.js，找出其所依赖的所有其它模块，然后合并压缩。
out        指合并压缩后输出的文件路径，这里直接是built.js，那么将输出到根目录r4下。

```

* 介绍两个参数
1. excludeShallow 合并时将排除该文件

    可以看到输出信息中不再包括selector.js。这时运行index.html页面，会发现selector.js被单独请求下来了。
    ```bash
    node r.js -o baseUrl=js name=main out=built.js excludeShallow=selector
    ```
2. optimize (none/uglify/closure)  指定是否压缩，默认为uglify

    不传该参数时r.js默认以UglifyJS压缩。设置为none则不会压缩，仅合并，这在开发阶段是很用的。
    ```bash
    node r.js -o baseUrl=js name=main out=built.js optimize=none
    ```
    这时生成的built.js是没有压缩的。

总结：
 
 这篇演示了采用模块开发后上线前的一个小示例：把所有模块文件合并为一个文件。

先下载r.js放到开发目录中，然后使用命令行来合并压缩。其中演示了命令行参数-o、baseUrl、name、out及excludeShallow、optimize的使用。-o、name、out是必选的，其它为可选。

 ## RequireJS进阶（二）
这一篇来认识下打包工具的paths参数，在入门一中就介绍了require.config方法的paths参数。用来配置jquery模块的文件名（jQuery作为AMD模块时id为“jquery”，但文件名可通过paths配置可以不必是“jquery.js”，而是带有版本的如“jquery-1.7.2.js”）。

在入门一中，jquery-1.7.2.js和main.js都在一个域中，即把jquery-1.7.2.js下载到本地了。但有时可能一些JS资源不在同一个域。比如直接使用Google CDN上的jquery 1.7.2版本。而这时应该如何使用打包工具r.js呢？

r.js自然不会去载入非本地资源，即没有办法去把外域的js文件请求下来再合并，压缩。当使用paths参数后，使用r.js合并压缩时要忽略paths映射的文件-不合并它。让其作为一个独立模块请求。

创建目录及文件和上一篇一样，但main.js代码不同，注意目录中没有jQuery库。
main.js
```js
require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min'
    }
});

 
require(['jquery', 'event', 'selector'], function($, E, S) {
    alert($);
});
```

配置了paths参数，即jquery模块使用Google CDN的文件。

如果按照上一篇的命令来执行合并压缩，

`node r.js -o baseUrl=js name=main out=built.js`

发现命令行报错了，提示“D:\work\req\r5\js\jquery.js”不存在。刚刚新建的目录中的确没有jquery.js，因为我们使用的是Google CDN上的jquery。


此时压缩参数paths就排上用处了，修改如下
```bash
node r.js -o baseUrl=js name=main out=built.js paths.jquery=empty:
```

注意（empty后有个冒号哦），表示paths.jquery不参与合并，压缩。这时生成的built.js也就不包含它了。

把目录r5放到apache或其它web服务器上，访问index.html。

网络请求

built.js包含了main.js、event.js、cache.js，selector.js。jquery则是独立的一个请求，来自ajax.googleapis.com。

再看看如何使用r.js来合并压缩css文件。在r5下新建一个css文件夹，里面有四个css文件：main.css、nav.css、form.css、grid.css。

main.css是合并的主文件，或称配置文件。要合并的文件使用@import引入。如下

main.css
```js
@import url("nav.css");
@import url("grid.css");
@import url("form.css");
```

另外三个是普通的css文件，里面定义的各种样式。这里不贴代码了。这里将使用命令行将这四个文件合并后生成到r5/css/built.css。
```bash
node r.js -o cssIn=css/main.css out=css/built.css
```

这时回到r5/css目录会发现多了一个built.css文件，该文件是另外四个css文件的合并项。

还可以使用optimizeCss参数设置来配置是否压缩及压缩选项。optimizeCss的取值有standard/none/standard.keepLines/standard.keepComments/standard.keepComments.keepLines。
```bash
none  不压缩，仅合并

standard  标准压缩 去换行、空格、注释

standard.keepLines  除标准压缩外，保留换行

standard.keepComments  除标准压缩外，保留注释

standard.keepComments.keepLines  除标准压缩外，保留换行和注释
```

示例：
```bash
node r.js -o cssIn=css/main.css out=css/built.css optimizeCss=standard
```
压缩后built.css整个为一行了。

总结：

1，对于path配置的非本地的模块文件，使用r.js合并压缩时需要配置paths.xx=empty:。

2，cssIn和optimizeCss参数的使用来合并压缩css文件。

## RequireJS进阶（三）
进阶的前面两篇讲述了r.js如何通过命令行把所有的模块压缩为一个js文件或把所有的css压缩为一个css文件。其中包括一些压缩配置参数的使用。


但以上两种方式有几个问题

1、通过命令手动配置压缩选项显得很呆板
2、都仅合并为一个文件

对于最后只生成一个文件的库来说，这种方式并无不妥。比如jQuery，它的工程中小文件有20多个，打包后只有一个jquery-1.x.x.js。对于多数实际应用项目来说，可能打包后需要生成多个js文件。有些是页面打开时就要用到的，有些是用户点击或输入时按需加载的。

r.js有另外一种方式来合并压缩，即通过一个配置文件（如build.js）。配置文件内部采用前端工程师非常熟悉JSON格式。这样当项目开发目录固定后，配置文件也相应固定。通过配置文件就很好的隔离了开发环境及上线环境。

这次我们创建的目录中包含所有前端资源，js，css，图片。

其中有两个页面page1.html，page2.html。这两个页面分别使用page1.js和page2.js。

page1.js依赖于event和selector，page2.js依赖于event、selector和jQuery。jQuery是非本地的，没有合并前我们直接访问这两个页面，那么单个的js文件会依次下载。

现在使用r.js来合并压缩，使每个页面除下载require.js外只下载各自合并的大文件page1.js和page2.js。

build.js如下
```js
({
    appDir: "./",
    baseUrl: "js",
    dir: "../r6-built",
    paths: {
        jquery: 'empty:'
    },
    modules: [
        {
            name: "page1"
        },
        {
            name: "page2"
        }
    ]
})
```
进入命令行输入如下命令
```bash
node r.js -o build.js
```
会发现在和r6同级的目录生成了r6-built目录

该目录包含于r6一样的层级结构，这时访问该目录中的page1.html，page2.html。

这时的page1.js和page2.js就是其它模块文件的合并。另外在r6-built中其它的模块文件也被压缩了。

在build.js中可以配置很多其它参数，可以在这个示例文件中找到更多配置选项。这里不一一列举。

总结：

通过配置文件方式可以实现更加强大，灵活的合并工作。可以生成多个合并文件，包括不同页面的js，css。

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