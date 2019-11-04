# gulp
> https://www.gulpjs.com.cn/docs/api/
## Buffer.from(buffer)
buffer <Buffer> | <Uint8Array> 要拷贝数据的 Buffer 或 Uint8Array。

拷贝 buffer 的数据到新建的 Buffer 实例。

```js
const buf1 = Buffer.from('buffer');
const buf2 = Buffer.from(buf1);

buf1[0] = 0x61;

console.log(buf1.toString()); // 通过toString 进行格式化
// 打印: auffer
console.log(buf2.toString());
// 打印: buffer
```

## through2用法
```js
gulp.task('rewrite', () => {
  return gulp.src('./through/enter.txt')
    .pipe(through2.obj(function(chunk, enc, callback) {
      const { contents } = chunk;
      for (var i = 0; i < contents.length; i++) {
        if (contents[i] === 97) {
          contents[i] = 122;
        }
      }

      chunk.contents = contents;
      this.push(chunk);

      callback();
    }))
    .pipe(gulp.dest('./dist'));
});
```

## gulp-minify-ejs
```bash
npm install gulp-minify-ejs --save-dev
```
```js
var gulp = require('gulp'),
    //rename = require("gulp-rename"),
    minifyejs = require('gulp-minify-ejs')
 
gulp.task('minify-html', function() {
  return gulp.src(['src/views/*.ejs','src/views/*.html'])
    .pipe(minifyejs())
    //.pipe(rename({suffix:".min"}))
    .pipe(gulp.dest('dist'))
})
```
## 创建任务（task）

### 导出任务
任务（tasks）可以是 public（公开） 或 private（私有） 类型的。

* 公开任务（Public tasks） 从 gulpfile 中被导出（export），可以通过 gulp 命令直接调用。
* 私有任务（Private tasks） 被设计为在内部使用，通常作为 series() 或 parallel() 组合的组成部分。

一个私有（private）类型的任务（task）在外观和行为上和其他任务（task）是一样的，但是不能够被用户直接调用。如需将一个任务（task）注册为公开（public）类型的，只需从 gulpfile 中导出（export）即可。

```js
const { series } = require('gulp');

// `clean` 函数并未被导出（export），因此被认为是私有任务（private task）。
// 它仍然可以被用在 `series()` 组合中。
function clean(cb) {
  // body omitted
  cb();
}

// `build` 函数被导出（export）了，因此它是一个公开任务（public task），并且可以被 `gulp` 命令直接调用。
// 它也仍然可以被用在 `series()` 组合中。
function build(cb) {
  // body omitted
  cb();
}

exports.build = build;
exports.default = series(clean, build);
```

### 组合任务
Gulp 提供了两个强大的组合方法： series() 和 parallel()，允许将多个独立的任务组合为一个更大的操作。这两个方法都可以接受任意数目的任务（task）函数或已经组合的操作。series() 和 parallel() 可以互相嵌套至任意深度。

如果需要让任务（task）按顺序执行，请使用 series() 方法。
```js
const { series } = require('gulp');

function transpile(cb) {
  // body omitted
  cb();
}

function bundle(cb) {
  // body omitted
  cb();
}

exports.build = series(transpile, bundle);
```
对于希望以最大并发来运行的任务（tasks），可以使用 parallel() 方法将它们组合起来。
```js
const { parallel } = require('gulp');

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

exports.build = parallel(javascript, css);
```
当 series() 或 parallel() 被调用时，任务（tasks）被立即组合在一起。这就允许在组合中进行改变，而不需要在单个任务（task）中进行条件判断。
```js
const { series } = require('gulp');

function minify(cb) {
  // body omitted
  cb();
}


function transpile(cb) {
  // body omitted
  cb();
}

function livereload(cb) {
  // body omitted
  cb();
}

if (process.env.NODE_ENV === 'production') {
  exports.build = series(transpile, minify);
} else {
  exports.build = series(transpile, livereload);
}
```
* series() 和 parallel() 可以被嵌套到任意深度。
```js
const { series, parallel } = require('gulp');

function clean(cb) {
  // body omitted
  cb();
}

function cssTranspile(cb) {
  // body omitted
  cb();
}

function cssMinify(cb) {
  // body omitted
  cb();
}

function jsTranspile(cb) {
  // body omitted
  cb();
}

function jsBundle(cb) {
  // body omitted
  cb();
}

function jsMinify(cb) {
  // body omitted
  cb();
}

function publish(cb) {
  // body omitted
  cb();
}

exports.build = series(
  clean,
  parallel(
    cssTranspile,
    series(jsTranspile, jsBundle)
  ),
  parallel(cssMinify, jsMinify),
  publish
);
```
当一个组合操作执行时，这个组合中的每一个任务每次被调用时都会被执行。例如，在两个不同的任务（task）之间调用的 clean 任务（task）将被执行两次，并且将导致不可预期的结果。因此，最好重构组合中的 clean 任务（task）。

如果你有如下代码：
```js
// This is INCORRECT
const { series, parallel } = require('gulp');

const clean = function(cb) {
  // body omitted
  cb();
};

const css = series(clean, function(cb) {
  // body omitted
  cb();
});

const javascript = series(clean, function(cb) {
  // body omitted
  cb();
});

exports.build = parallel(css, javascript);
```
重构为：
```js
const { series, parallel } = require('gulp');

function clean(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

function javascript(cb) {
  // body omitted
  cb();
}

exports.build = series(clean, parallel(css, javascript));
```
## Globs
glob 是一串文字和/或通配符，如 *, **, 或 !，用于匹配文件路径。Globbing 是使用一个或多个 globs 在文件系统上定位文件的操作。

### 字符串片段与分隔符

避免使用node 的path 类方法来创建 glob，__dirname、__filename， process.cwd()


1. 特殊字符： * (一个星号)

在一个字符串片段中匹配任意数量的字符，包括零个匹配。对于匹配单级目录下的文件很有用。

下面这个 glob 能够匹配类似 index.js 的文件，但是不能匹配类似 scripts/index.js 或 scripts/nested/index.js 的文件。
```js
'*.js'
```
2. 特殊字符： ** (两个星号)
在多个字符串片段中匹配任意数量的字符，包括零个匹配。 对于匹配嵌套目录下的文件很有用。请确保适当地限制带有两个星号的 glob 的使用，以避免匹配大量不必要的目录。

下面这个 glob 被适当地限制在 scripts/ 目录下。它将匹配类似 scripts/index.js、scripts/nested/index.js 和 scripts/nested/twice/index.js 的文件。
```js
'scripts/**/*.js'
```
在上面的示例中，如果没有 scripts/ 这个前缀做限制，node_modules 目录下的所有目录或其他目录也都将被匹配。

3. 特殊字符： ! (取反)
由于 glob 匹配时是按照每个 glob 在数组中的位置依次进行匹配操作的，所以 glob 数组中的取反（negative）glob 必须跟在一个非取反（non-negative）的 glob 后面。第一个 glob 匹配到一组匹配项，然后后面的取反 glob 删除这些匹配项中的一部分。如果取反 glob 只是由普通字符组成的字符串，则执行效率是最高的。
```js
['script/**/*.js', '!scripts/vendor/']
```
如果任何非取反（non-negative）的 glob 跟随着一个取反（negative） glob，任何匹配项都不会被删除。

```js
['script/**/*.js', '!scripts/vendor/', 'scripts/vendor/react.js']
```
取反（negative） glob 可以作为对带有两个星号的 glob 的限制手段。

```js
['**/*.js', '!node_modules/']
```
在上面的示例中，如果取反（negative）glob 是 !node_modules/**/*.js，那么各匹配项都必须与取反 glob 进行比较，这将导致执行速度极慢。

3. 匹配重叠（Overlapping globs）
两个或多个 glob 故意或无意匹配了相同的文件就被认为是匹配重叠（overlapping）了。如果在同一个 src() 中使用了会产生匹配重叠的 glob，gulp 将尽力去除重叠部分，但是在多个 src() 调用时产生的匹配重叠是不会被去重的。

## Glob base
glob base (有时称为 glob parent)是 glob 字符串中任何特殊字符之前的路径段。因此，/src/js/**.js 的 blob base 是 /src/js/。所有匹配 glob 的路径都保证共享 glob base——该路径段不能是可变的。

由 src() 生成的 Vinyl 实例是用 glob base 集作为它们的 base 属性构造的。当使用 dest() 写入文件系统时，将从输出路径中删除 base ，以保留目录结构。

有关更深入的信息，请参阅 glob-parent 库。

## Glob base
glob base (有时称为 glob parent)是 glob 字符串中任何特殊字符之前的路径段。因此，/src/js/**.js 的 blob base 是 /src/js/。所有匹配 glob 的路径都保证共享 glob base——该路径段不能是可变的。

由 src() 生成的 Vinyl 实例是用 glob base 集作为它们的 base 属性构造的。当使用 dest() 写入文件系统时，将从输出路径中删除 base ，以保留目录结构。

有关更深入的信息，请参阅 glob-parent 库。

## 文件系统模式
文件系统模式决定文件的权限。文件系统上的大多数文件和目录将具有相当宽松的模式，允许 gulp 代表您读取/写入/更新文件。默认情况下，gulp 将创建与运行进程具有相同权限的文件，但是您可以通过 src()、 dest() 中的选项配置模式。如果您遇到权限(EPERM)问题，请检查文件上的模式。

## 模块
Gulp 由许多小模块组成，这些模块被拉到一起以实现内聚性工作。通过在小模块中使用 semver，我们可以在不发布 gulp 新版本的情况下发布 bug 修复和特性。通常，当您没有看到主存储库上的进展时，工作是在其中一个模块中完成的。

如果遇到问题，请使用 npm update 命令更新当前模块。如果问题仍然存在，则在单个项目存储库上打开一个 issue

## gulp 常用插件
```js
"devDependencies": {
    "gulp": "^3.9.1",
    "gulp-autoprefixer": "^4.0.0",
    "gulp-babel": "^7.0.1",
    "gulp-css-spriter": "^0.4.0",
    "gulp-debug": "^4.0.0",
    "gulp-concat": "^2.6.1",
    "gulp-ejs": "^3.0.1",
    "gulp-ejs-template": "^0.2.0",
    "gulp-filter": "^5.0.1",
    "gulp-flatten": "^0.3.1",
    "gulp-inject": "^4.3.0",
    "gulp-less": "^4.0.0",
    "gulp-load-plugins": "^1.5.0",
    "gulp-minify-ejs": "^1.0.3",
    "gulp-postcss": "^7.0.1",
    "gulp-rename": "^1.2.2",
    "gulp-replace": "^0.6.1",
    "gulp-requirejs-optimize": "^1.2.0",
    "gulp-rev": "^8.0.0",
    "gulp-rev-replace": "^0.4.3",
    "gulp-sass": "^3.1.0",
    "gulp-size": "^2.1.0",
    "gulp-useref": "^3.1.2",
    "gulp-uglify": "^2.0.1"
    "gulp-watch": "^5.0.1",
  },
```

### gulp-load-plugins
* 它的作用是自动require你在package.json中的插件:
```js
// gulpfile.js
var $ = require('gulp-load-plugins')();
gulp.src('./**/*.js')
    .pipe($.concat('all.js'))
    .pipe($.uglify())
    .pipe($.rename('all.min.js'))
    .pipe(gup.dest('./dist'))
```

### gulp-autoprefixer
* 根据设置浏览器版本自动处理浏览器前缀
```js
gulp.src([
    path.join(conf.paths.src, '/public/css_route/*.scss')
  ])
    .pipe($.sass(watchSassOptions)).on('error', conf.errorHandler('Sass'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(debug({ title: 'Build Scss File: ' }))
    .pipe(gulp.dest(path.join(conf.paths.src, '/public/styles')))
```

### gulp-clean-css用于css文件压缩
使用参数配置
```js
var gulp        = require('gulp'),
    minifyCss   = require('gulp-clean-css'),
    pump        = require('pump');

gulp.task('cssmin', [], function(cb) {
    pump([
        gulp.src('src/css/*.css'),
        minifyCss({
            keepSpecialComments: '*',
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
            compatibility: 'ie8' // 兼容性
        }),
        gulp.dest('dist/css')
    ], cb
    )
});
```
* gulp-minify-css也是实现相同功能，但gulp-minify-css现在已经被标记为deprecated

### del
删除文件及文件夹

## yargs
这个插件严格来说并不是专门用于gulp，它是Node中处理命令行参数的通用解决方案，只要一句代码 var args = require('yargs').argv;就可以让命令行的参数都放在变量args上，可以根据参数判断是测试环境还是正式环境。

单字符的简单参数，如传入-m=5或-m 5，则可得到args.m = 5
多字符参数（必须使用双连字符），如传入--test=5或--test 5，则可得到args.test = 5。
不带值的参数，如传入--production，则会被认为是布尔类型的参数，可得到args.production = true

### gulp-util
gulp-util带有很多方便的函数，其中最常用的应该就是log了。var gutil = require('gulp-util');支持传入多个参数，打印结果会将多个参数用空格连接起来。console.log的区别就是所有gutil.log的结果会自动带上时间前缀。另外，它还支持颜色，如gutil.log(gutil.colors.red('test'));打印出来的test是红色的。其实gutil.colors就是一个chalk的实例，而chalk是专门用来处理命令行打印着色的一个工具。

```js
var gulp = require('gulp')
var gutil = require('gulp-util')

gulp.task('default', function () {
    gutil.log('message')
    gutil.log(gutil.colors.red('error'))
    gutil.log(gutil.colors.green('message:') + "some")
})
```