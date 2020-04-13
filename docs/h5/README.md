[常见的h5兼容性问题](h5.md)
[移动端](处理移动端样式及内嵌app总结_20190920.md)
[各端小程序](小程序.md)
和一般元素的区别：
* 默认样式不一样
* 有SEO优化作用

|名称|定义|备注|
|----|:---|----|
|header|一般作为网页的头部使用|
|aside|侧边栏|
|nav|导航栏||
|address|地址，字体样式默认倾斜|`兼容所有浏览器` <br>1、\<address>标签定义在文档或文章作者/拥有者的联系信息<br> 2、如果\<address>元素位于\<article>元素内，则表示文章的联系信息|
|section|代表某一个区域，分区，页面或者文档的一部分区域，有独立的内容，但结构相近，就可以用section，范围比div大，语义比div更强，可以包含header，h1~h6凸显语义的标签||
|article|独立的内容，可以是文章、blog、帖子、短文或者回复、评论||
|footer| 网站的底部||
|hggroup|专门用来包含标题h标签的分组||
|\<details open><br><summary\></summary\><br></details\>|细节、详情<br>1、open属性：默认展开<br>2、summary相当于详情的标题||
| \<dialog open>\</dialog>|对话框，不写open 不显示||
|figure|图像区域：可以包含多个图片或者一个figcaption，<br>\<figcaption>\</figcaption>用来表示图片标题|相当于figure里写figcaption+img；figcaption定义在figure的头部或者尾部|
|mark|有特殊效果，突出显示部分文本，背景默认黄色||
|time|没有特殊效果。是给浏览器看的，仅供浏览器抓取信息抓的更准确。||
|meter| 定义已知范围或分数值内的标量测量，IE不支持||
|progress|运行中或下载的进度||
|ruby|给一个解释||
|三种引用<br>1、city<br>2、blockquote<br>3、q|1、行元素，字体倾斜<br>2、块元素，默认上下一个字的间距，左右40px的margin<br>3、块元素，带引号的引入||
|两种格式化代码<br>1、code<br>2、pre|1、把换行和空格格式化显示<br>2、我们怎么写的就能怎么显示||
|\<canvas>|元素可被用来通过脚本（通常是JavaScript）绘制图形。比如,它可以被用来绘制图形,制作图片集合,甚至用来实现动画效果。你可以(也应该)在元素标签内写入可提供替代的的代码内容，这些内容将会在在旧的、不支持\<canvas>元素的浏览器或是禁用了JavaScript的浏览器内渲染并展现。|


## 前端组件定位

[腾讯位置服务](http://lbs.qq.com/webApi/component/componentGuide/componentGeolocation)

方案二
```html
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Geolocation Components Demo - zoom effect</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,
    minimum-scale=1,maximum-scale=1,user-scalable=no">
    <style>
        * {margin: 0; padding: 0; border: 0;}
        body {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        #geoPage, #markPage {
            position: relative;
        }
    </style>
</head>
<body>
    <!--  通过 iframe 嵌入前端定位组件，此处没有隐藏定位组件，使用了定位组件的在定位中视觉特效  -->
    <iframe id="geoPage" width="100%" height="30%" frameborder=0 scrolling="no"
    src="https://apis.map.qq.com/tools/geolocation?key=your key&referer=myapp&effect=zoom"></iframe>
 
    <script type="text/JavaScript">
        var loc;
        var isMapInit = false;
        //监听定位组件的message事件
        window.addEventListener('message', function(event) {
            loc = event.data; // 接收位置信息
            console.log('location', loc);
 
 
            if(loc  && loc.module == 'geolocation') { //定位成功,防止其他应用也会向该页面post信息，需判断module是否为'geolocation'
                var markUrl = 'https://apis.map.qq.com/tools/poimarker' +
                '?marker=coord:' + loc.lat + ',' + loc.lng +
                ';title:我的位置;addr:' + (loc.addr || loc.city) +
                '&key=your key&referer=myapp';
                //给位置展示组件赋值
                document.getElementById('markPage').src = markUrl;
            } else { //定位组件在定位失败后，也会触发message, event.data为null
                alert('定位失败');
            }
 
            /* 另一个使用方式
            if (!isMapInit && !loc) { //首次定位成功，创建地图
                isMapInit = true;
                createMap(event.data);
            } else if (event.data) { //地图已经创建，再收到新的位置信息后更新地图中心点
                updateMapCenter(event.data);
            }
            */
        }, false);
        //为防止定位组件在message事件监听前已经触发定位成功事件，在此处显示请求一次位置信息
        document.getElementById("geoPage").contentWindow.postMessage('getLocation', '*');
 
        //设置6s超时，防止定位组件长时间获取位置信息未响应
        setTimeout(function() {
            if(!loc) {
                //主动与前端定位组件通信（可选），获取粗糙的IP定位结果
            document.getElementById("geoPage")
                .contentWindow.postMessage('getLocation.robust', '*');
            }
        }, 6000); //6s为推荐值，业务调用方可根据自己的需求设置改时间，不建议太短
    </script>
 
    <!-- 接收到位置信息后 通过 iframe 嵌入位置标注组件 -->
    <iframe id="markPage" width="100%" height="70%" frameborder=0 scrolling="no" src=""></iframe>
</body>
</html>

```