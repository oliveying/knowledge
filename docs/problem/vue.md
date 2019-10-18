# vue 遇到问题

## 初始化之后需要调试，使用console， eslint报错

* 选择把 webpack.base.conf.js里的eslint隐藏
```js
rules: [
      // ...(config.dev.useEslint? [{
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter'),
      //     emitWarning: !config.dev.showEslintErrorsInOverlay
      //   }
      // }] : []),
]
```

## vue监听手指滑动vue-touch的使用

### npm安装
```bash
npm install vue-touch@next --save
//main.js中引入：
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
```
用法如下：
```html
//html代码
<template>
  <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper">
      <div class="menu-container">    
      </div>
  </v-touch>
</template>
```
```js
export default {
  data () {
    return {
    
    }
  },
  methods: {
    swiperleft: function () {
     console.log("左划")
    },
    swiperright: function () {
     console.log("右滑")
    }
  }

}
```

* 注意事项：
    使用左右滑动之后，发现不能上下滑动了，这是因为vue-touch 默认禁止了用户的手势操作，注意组件上有个css属性：touch-action: none；
    把这个属性覆盖一下就好了，如： touch-action: pan-y!important;