## animation动画

[animation](./html/animation.html)
> 参考[菜鸟教程](https://www.runoob.com/cssref/css3-pr-animation.html)

```css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;

div {
    animation:mymove 5s infinite;
    -webkit-animation:mymove 5s infinite; /* Safari 和 Chrome */
}
```

|值|说明|备注|
|:---|:----|---|
|animation-name|指定要绑定到选择器的关键帧的名称|animation-name: keyframename ,none //指定有没有动画（可用于覆盖从级联的动画） ;|
|animation-duration|动画指定需要多少秒或多少毫秒完成|animation-duration: time;// 指定动画播放完成花费的时间， 默认值0，意味着没有动画效果|
|animation-timing-function|设置动画将如何完成一个周期|animation-timing-function: value; //使用的是数学函数，成为三次贝塞尔曲线，速度曲线。使用此函数，可以使用您自己的值，或使用预先定义值之一；|
|animation-delay|设置动画在启动前的延迟间隔|animate-delay: time	// 可选。定义动画开始前等待的时间，以秒或毫秒计。默认值为0|
|animation-iteration-count|定义动画播放次数|animation-iteration-count: value;// n定义应该播放多少次动画，infinite指定动画播放无限次（永远）|
|animation-direction|指定是否应该轮流反向播放动画|animation-direction: normal|reverse|alternate|alternate-reverse|initial|inherit;见下表格|
|animation-fill-mode|规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。|animation-fill-mode: none|forwards|backwards|both|initial|inherit;|
|||
|||
|||

||值|说明|
|:---|:---|---|
|animation-timing-function|linear|动画从头到尾速度都是相同的|
||ease|默认。动画从低速开始，然后加快，在结束前变慢|
||ease-in|动画以低速开始|
||ease-out|动画以低速结束|
||ease-in-out|动画以低速开始和结束|
||cubic-bezier(n,n,n,n)|在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。|
|animation-direction|normal|默认值，动画按正常播放|
||reverse|反向播放|
||alternate|动画在奇数次（1，3，5）正向播放，偶数次（2，4，6）反向播放|
||alternate-reverse|和alternate相反|
||initial|设置该属性为它的默认值|
||inherit|从父元素继承该属性|
|animation-fill-mode|||
||||




































