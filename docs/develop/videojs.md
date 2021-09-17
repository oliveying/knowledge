## videojs 插件总结
[videojs官网](https://videojs.com/forest/) 
[videojs官网github](https://github.com/videojs/video.js) 

下载地址js、css
```js
`https://vjs.zencdn.net/${version}/video.min.js`
`https://vjs.zencdn.net/${version}/video-js.min.css`
`https://vjs.zencdn.net/7.15.4/video.min.js`

"https://vjs.zencdn.net/7.15.4/video-js.min.css"
```
* Video.js 是一个通用的在网页上嵌入视频播放器的 JS 库，Video.js 自动检测浏览器对 HTML5 的支持情况，如果不支持 HTML5 则自动使用 Flash 播放器。

在页面中引用样式及js文件
```html

<link href="video-js.css" rel="stylesheet" type="text/css">
<script src="videojs.js"></script>
```

* 设置flash路径，Video.js会在不支持html5的浏览中使用flash播放视频文件
```js
    videojs.options.flash.swf = "video-js.swf";

```

* poster="**"播放初始图。可使用三种视频格式，根据所需要格式选择对应的。
```js
<video id="my-player" class="video-js vjs-default-skin" controls preload="none" width="640" height="264"
      poster="http://video-js.zencoder.com/oceans-clip.png"
      data-setup="{}">
    <source src="http://视频地址格式1.mp4" type='video/mp4' />
    <source src="http://视频地址格式2.webm" type='video/webm' />
    <source src="http://视频地址格式3.ogv" type='video/ogg' />
    <track kind="captions" src="demo.captions.vtt" srclang="en" label="English"></track><!-- Tracks need an ending tag thanks to IE9 -->
    <track kind="subtitles" src="demo.captions.vtt" srclang="en" label="English"></track><!-- Tracks need an ending tag thanks to IE9 -->
</video>

```

* 设置自动播放将下面代码加到html中代码后面

```js
var myPlayer = videojs('my-player');
    videojs("my-player").ready(function(){
        var myPlayer = this;
        myPlayer.play();
    });
    // 或者
var videoPlayer = videojs(
        document.getElementById("my-player"),
       {
          controls: true, // 是否显示进度条
          poster: "", // 视频封面图地址
          autoplay: true, // 自动播放
          fluid: false, // 自适应宽高
          // language: 'zh-CN', // 设置语言

          loop: true, // 循环播放视频
          // inactivityTimeout: false

// 类型： number  Video.js表示用户通过"vjs-user-active"和"vjs-user-inactive"类以及"useractive"事件与玩家进行交互。

// 在inactivityTimeout决定了不活动的许多毫秒声明用户闲置之前是必需的。值为0表示没有inactivityTimeout，用户永远不会被视为非活动状态。


          preload: "auto", // auto 立即开始加载视频（如果浏览器支持）。某些移动设备不会预加载视频，以保护用户的带宽/数据使用。这就是为什么这个价值被称为’汽车’，而不是更具决定性的东西’true’。；
          // metadata: 仅加载视频的元数据，其中包括视频的持续时间和尺寸等信息。有时，元数据将通过下载几帧视频来加载。
          //'none'不要预加载任何数据。浏览器将等待用户点击“播放”开始下载。
          // width: '',//number/string, 视频播放器的显示宽度（以像素为单位）/
          // height: '', 
          // 



          muted: true, // 静音
          // src: 嵌入视频源的URL,
          controlBar: {
            // 设置控制条组件
            /* 设置控制条里面组件的相关属性及显示与否  */
            // playToggle: 播放暂停按钮
            // volumeMenuButton： 音量控制
            // progressControl： 点播流时，播放进度条，seek控制
            // liveDisplay：直播流时，显示LIVE
            // playbackRateMenuButton：播放速率，当前只有html5模式下才支持设置播放速率
            // fullscreenToggle // 全屏控制
            // currentTimeDisplay: true, // 当前播放时间
            // timeDivider: true, // '/'分隔符
            // durationDisplay: true, // 总时间
            // remainingTimeDisplay: false, // 当前播放时间
            // volumePanel: {
            //   inline: false,
            // },

            /* 使用children的形式可以控制每一个控件的位置，以及显示与否 */
            children: [
              {
                name: "playToggle",
              }, // 播放/暂停按钮
              {
                name: "currentTimeDisplay",
              }, // 视频当前已播放时间
              {
                name: "durationDisplay",
              }, // 视频播放总时间
              // { // 倍数播放，可以自己设置
              //   name: 'playbackRateMenuButton',
              //   'playbackRates': [0.5, 1, 1.5, 2, 2.5]
              // },
              {
                name: "volumePanel", // 音量控制
                inline: false, // 不使用水平方式
              },
              {
                name: "FullscreenToggle",
              }, // 全屏
              {
                name: "progressControl",
              }, // 播放进度条
            ],
          },
           sources:[ // 视频源 等同于html里插入 <video ...>
                                        //   <source src="//path/to/video.mp4" type="video/mp4">
                                        //   <source src="//path/to/video.webm" type="video/webm">
                                        // </video>
                {
                    src: '//vjs.zencdn.net/v/oceans.mp4',
                    type: 'video/mp4',
                    poster: '//vjs.zencdn.net/v/oceans.png'
                }
           ],
           plugins: { // 自动初始化插件 等同于player.foo({bar: true});
                                         //player.boo({baz: false})                
             foo: {bar: true},
             boo: {baz: false}
           }
        },
        function f() {
          console.log('视频可以播放了',this);
        }
      );

```

* 动态切换视频
```js
var data = {
    src: 'xxx.mp4',
    type: 'video/mp4'
  };
  var player = videojs('my-player', {...});
  player.pause();
  player.src(data);
  player.load(data);
  // 动态切换poster
  player.posterImage.setSrc('xxx.jpg');
  player.play();
 
  // 销毁videojs
  //player.dispose();
```
* 解决在iPhone中播放时自动全屏问题
视频在微信点击播放时，会以模态框弹出再播放。

解决办法就是在video标签中添加playsinline="true"属性。
```html
<video
    webkit-playsinline="true"
    playsinline="true"
    class="video-js vjs-big-play-centered vjs-fluid">
</video>
```

常用事件：

   播放 this.play()

   停止 – video没有stop方法，可以用pause 暂停获得同样的效果

   暂停 this.pause()

   销毁 this.dispose()

   监听 this.on(‘click‘,fn)

   触发事件this.trigger(‘dispose‘)

* techCanOverridePoster 和source 平级  boolean

使技术人员有可能覆盖玩家的海报并融入玩家的海报生命周期。当使用多个技术时，这可能很有用，每个技术都必须在播放新源时设置自己的海报

* techOrder

输入：Array，默认值：[‘html5’]

定义Video.js技术首选的顺序。默认情况下，这意味着Html5首选技术。其他注册的技术将在此技术之后按其注册顺序添加。

* vtt.js

类型： string

允许覆盖vtt.js的默认URL，该URL可以异步加载到polyfill支持WebVTT。

此选项将用于Video.js（即video.novtt.js）的“novtt”版本中。否则，vtt.js与Video.js捆绑在一起。


组件参数
* children

类型： Array|Object

如果Array- 这是默认值 - 这用于确定哪些子节点（按组件名称）以及在播放器（或其他组件）上创建它们的顺序：
```js
// The following code creates a player with ONLY bigPlayButton and
// controlBar child components.
videojs('my-player', {
  children: [
    'bigPlayButton',
    'controlBar'
  ]
});
```
该children选项还可以作为传递Object。在这种情况下，它用于提供options任何/所有孩子，包括禁用它们false：
```js
// This player's ONLY child will be the controlBar. Clearly, this is not the
// ideal method for disabling a grandchild!
videojs('my-player', {
  children: {
    controlBar: {
      fullscreenToggle: false
    }
  }
});
```
 * ${componentName}

类型： Object

可以通过组件名称的低驼峰案例变体（例如controlBarfor ControlBar）为组件提供自定义选项。这些可以嵌套在孙子关系的表示中。例如，要禁用全屏控件：
```js
videojs('my-player', {
  controlBar: {
    fullscreenToggle: false
  }
});
```
技术选择

* ${techName}

类型： Object

Video.js回放技术（即“技术”）可以作为传递给该videojs功能的选项的一部分给予自定义选项。它们应该在技​​术名称的小写变体下传递（例如"flash"或"html5"）。

flash

* swf
指定Video.js SWF文件在Flash技术位置的位置：
```js
videojs('my-player', {
  flash: {
    swf: '//path/to/videojs.swf'
  }
});
```
但是，更改全局默认值通常更合适：
```js
videojs.options.flash.swf = ‘//path/to/videojs.swf’
```
html5

* nativeControlsForTouch

类型： boolean

只有技术支持Html5，此选项可以设置true为强制触摸设备的本机控件。

* nativeAudioTracks

类型： boolean

可以设置为false禁用本机音轨支持。最常用于videojs-contrib-hls。

* nativeTextTracks

类型： boolean

可以设置为false强制模拟文本轨道而不是本机支持。该nativeCaptions选项也存在，但只是一个别名nativeTextTracks、

* nativeVideoTracks

类型： boolean

可以设置为false禁用本机视频轨道支持。最常用于videojs-contrib-hls。
```js
var options = {};
 
var player = videojs(‘example_video_1‘, options, function onPlayerReady() {
  videojs.log(‘播放器已经准备好了!‘);
 
  // In this context, `this` is the player that was created by Video.js.<br>  // 注意，这个地方的上下文， `this` 指向的是Video.js的实例对像player
  this.play();
 
  // How about an event listener?<br>  // 如何使用事件监听？
  this.on(‘ended‘, function() {
    videojs.log(‘播放结束了!‘);
  });
});

```
参考 https://blog.csdn.net/tangkthh/article/details/102862213

