## d3支持

* 为数据可视化为生
* 底层代码javascript写的

### 浏览器支持

>=ie9+
更多详细浏览器支持列表
https://caniuse.com/#search=svg


### selectAll

### select

### classed

### attr、style、text, html

### data

### enter, append

### exit, remove


## svg

### line
x1 - 这是第一个点的x坐标。

y1 - 这是第一个点的y坐标。

x2 - 这是第二个点的x坐标。

y2 - 这是第二个点的y坐标。

stroke - 线条的颜色。

stroke-width - 线的粗细。
```html
 <svg width = "300" height = "300">
            <line x1 = "100" y1 = "100" 
               x2 = "200" y2 = "200" style = "stroke:rgb(255,0,0);
               stroke-width:2"/>
         </svg>
```

### rect
矩形的属性如下 -

x - 这是矩形左上角的x坐标。

y - 这是矩形左上角的y坐标。

width - 这表示矩形的宽度。

height - 表示矩形的高度。

fill - 填充颜色
```html
<rect x = "20" y = "20" width = "300" height = "300" fill = "green"></rect>
```

### circle
圆的属性如下 -

cx - 这是圆心的x坐标。

cy - 这是圆心的y坐标。

r - 这表示圆的半径。
```html
<svg width = "300" height = "300">
   <circle cx = "200" cy = "50" r = "20" fill = "green"/>
</svg>
```

### 椭圆元素ellipse
椭圆的属性如下 -

cx - 这是椭圆中心的x坐标。

cy - 这是椭圆中心的y坐标。

rx - 这是圆的x半径。

ry - 这是圆的y半径。
```html
<svg width = "300" height = "300">
   <ellipse cx = "200" cy = "50" rx = "100" ry = "50" fill = "green" />
</svg>
```

## svg transformation

Translate - 它有两个选项， tx沿x轴平移， ty沿y轴平移。 例如 - 翻译（30 30）。

Rotate - 它有三个选项， angle指旋转角度， cx和cy指的是x和y轴旋转的中心。 如果未指定cx和cy ，则默认为坐标系的当前原点。 例如 - 旋转（60）。

Scale - 它有两个选项， sx沿x轴的比例因子， sy沿y轴的比例因子。 这里， sy是可选的，如果没有指定，则它取sx的值。 例如 - 比例（10）。

Skew (SkewX and SkewY) - 只需一个选项; skew-angle指的是SkewX沿x轴的角度和SkewY沿y轴的角度。 例如 - skewx（20）。

```html
<svg width = "300" height = "300">
         <rect x = "20" 
            y = "20" 
            width = "60" 
            height = "60" 
            fill = "green" 
            transform = "translate(60 60) rotate(45)">
         </rect>
      </svg>

<svg width = "300" height = "300">
         <g transform = "translate(60,60) rotate(30)">
            <rect x = "20" 
               y = "20" 
               width = "60" 
               height = "30" 
               fill = "green">
            </rect>
            <circle cx = "0" 
               cy = "0" 
               r = "30" 
               fill = "red"/>
         </g>
      </svg>
```

### transition() method

```js
// 第一种
var t = d3.transition()
   .duration(2000);
d3.select("body")
   .transition(t)
   .style("background-color", "lightblue");

// 第二种
d3.select("body").transition().style("background-color", "lightblue");

```
### animation

* duration()

* delay()
```js

d3.selectAll("h3").transition().style("color","rgb(0,150,120)").duration(5000);

d3.selectAll("h3").transition()
.style("font-size","28px").delay(2000).duration(2000);

```


## drawing charts 绘制图表

* 条形图
* 圆图
* 饼形图
* 甜甜圈图表
* 折线图
* 气泡图等




