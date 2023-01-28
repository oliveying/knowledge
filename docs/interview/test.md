1. bfc
display: inline-block, table-cell,flex
overflow: 除了visible
float：除了none
position：absolute，fixed
body

box-sizing:
border-box content包含 content + border+ padding
content-box content包含 content

伪类和伪元素
伪类：hover，active，visited，link，focus，first-child，：lang
伪元素：before，after，

选择器优先级
行内> 外部引用
import
ID> class>伪类>标签>
```css
div {
    display: flex;
flex-direction: row;
opacity:
flex-wrap: 
flex-flow: row no-wrap
justify-content: space-between;
aligin-items: stretch, baseline, flex
align-content:

}
order

```
order
flew-grow
flex-shrink
flex-basis
flex
align-selft

产生层级
z-index
opacity
position
transform



display flex
flex-wrap
flex-direction
flex-flow
justify-content
align-items
align-content



```js
function _new (constructor1, arg) {
    const args = [].slice.call(arguments);
    const constr = args.shift();
    const context = Object.create(constr.prototype);
    const result = constr.apply(context, args);
    return typeof result ==='object' && result !== null ? result : context;
}
```