## break、continue、return区别

1. break     直接跳出当前的循环，从当前循环外面开始执行,忽略循环体中任何其他语句和循环条件测试。他只能跳出一层循环，如果你的循环是嵌套循环，那么你需要按照你嵌套的层次，逐步使用break来跳出.

2. continue     也是终止当前的循环过程，但他并不跳出循环,而是继续往下判断循环条件执行语句.他只能结束循环中的一次过程,但不能终止循环继续进行.    

3. return 语句可被用来使 正在执行分支程序返回到调用它方法。(费解)

   return表示中止当前函数的运行，并将操作权返回给调用者。
   
## 数组去重

1. Array.filter() + indexOf 处理一个长度为 15W 的数组都需要 8427ms
```js
function distinct(a, b) {
    let arr = a.concat(b);
    return arr.filter((item, index)=> {
        return arr.indexOf(item) === index
    })
}
```

2. 双重 for 循环 8427ms
最容易理解的方法，外层循环遍历元素，内层循环检查是否重复

当有重复值的时候，可以使用 push()，也可以使用 splice()

```js
function distinct(a, b) {
    let arr = a.concat(b);
    for (let i=0, len=arr.length; i<len; i++) {
        for (let j=i+1; j<len; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一
                len--;
                j--;
            }
        }
    }
    return arr
}
```

3.  for...of + includes() 与 filter + indexOf 
双重for循环的升级版，外层用 for...of 语句替换 for 循环，把内层循环改为 includes()

先创建一个空数组，当 includes() 返回 false 的时候，就将该元素 push 到空数组中 

类似的，还可以用 indexOf() 来替代 includes()
```js
function distinct(a, b) {
    let arr = a.concat(b)
    let result = []
    for (let i of arr) {
        !result.includes(i) && result.push(i)
    }
    return result
}
```

4. Array.sort()120
   
   首先使用 sort() 将数组进行排序
   
   然后比较相邻元素是否相等，从而排除重复项
   
  ```js
function distinct(a, b) {
       let arr = a.concat(b)
       arr = arr.sort()
       let result = [arr[0]]
   
       for (let i=1, len=arr.length; i<len; i++) {
           arr[i] !== arr[i-1] && result.push(arr[i])
       }
       return result
   }
```
   这种方法只做了一次排序和一次循环，所以效率会比上面的方法都要高
   
5. new Set()57ms
   
   ES6 新增了 Set 这一数据结构，类似于数组，但 Set 的成员具有唯一性
   
   基于这一特性，就非常适合用来做数组去重了

```js
 function distinct(a, b) {
       return Array.from(new Set([...a, ...b]))
   }
```
  
6. for...of + Object 16ms
首先创建一个空对象，然后用 for 循环遍历

利用对象的属性不会重复这一特性，校验数组元素是否重复

```js
function distinct(a, b) {
    let arr = a.concat(b)
    let result = []
    let obj = {}

    for (let i of arr) {
        if (!obj[i]) {
            result.push(i)
            obj[i] = 1
        }
    }

    return result
}
```

> [扩展](https://github.com/lessfish/underscore-analysis/issues/9)


## 运算符左移，使用左移将颜色rgb值转为hex，详见操作符
```js
var color = {r: 186, g: 218, b: 85};

// RGB to HEX
// (1 << 24)的作用为保证结果是6位数
var rgb2hex = function(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16) // 先转成十六进制，然后返回字符串
    .substr(1);   // 去除字符串的最高位，返回后面六个字符串
}

rgb2hex(color.r, color.g, color.b)
// "#bada55"
```

## 箭头函数有几个使用注意点

1. 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
4. 不可以使用yield命令，因此箭头函数不能用作 Generator 函数

## 判断原型链输出结果

```js
function Foo() {
  getName = function () {
    alert(1);
  }
  return this;
}

Foo.getName = function () {
  alert(2)
}
Foo.prototype.getName = function () {
  alert(3)
}

var getName = function () {
  alert(4)
}

function getName() {
  alert(5)
}

Foo.getName();
getName();
Foo().getName(); 
new Foo.getName();
new Foo().getName();
new new Foo().getName();

// 2 4 1 2 3 3
```

## 计算当前页面打开之后停留时间

```js
var second = 0;
var minute = 0;
var hour = 0;
window.setTimeout("interval();", 1000);

function interval() {
  second++;
  if (second == 60) {
    second = 0;
    minute += 1;
  }
  if (minute == 60) {
    minute = 0;
    hour += 1;
  }
  document.form1.textarea.value = hour + "时" + minute + "分" + second + "秒";
  window.setTimeout("interval();", 1000);
}
```

## 输入URL到页面渲染

* *DNS解析
* TCP三次握手建立连接
* 发送http请求
* 服务端处理并响应数据
* 浏览器响应、解析数据，并渲染页面

## 浏览器解析渲染页面过程
* 解析HTML，生成DOM树
* 解析CSS，生成CSSOM树
* 将DOM树和CSSOM树关联，生成渲染树(Render Tree)
* 布局render树（Layout/reflow），负责各元素尺寸、位置的计算
* 绘制render树（paint），绘制页面像素信息
* 将像素发送给GPU，展示在页面上。(Display)