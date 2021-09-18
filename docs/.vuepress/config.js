// 参考 https://zhuanlan.zhihu.com/p/36116211
module.exports = {
  title: '杜若的前端，每天进步一点点',  // 设置网站标题
  dest: './dist',   // 设置输出目录
  base: '/knowledge/', // 设置站点根路径
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'oliveying',
      description: '前端知识，对前端遇到的问题进行总结',
    }
  },
  head: [
    ['link', {
      rel: 'icon',
      href: '/img/favicon.ico'
    }]
  ],
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-137025177-1'
    }],
    <!-- Global site tag (gtag.js) - Google Analytics -->
  ],
  themeConfig: {
    repo: 'https://github.com/oliveying/knowledge', // 添加 github 链接
    // 添加导航栏
    nav: [
      {text: 'Home', link: '/'},
      {text: 'book',
      items: [
        {text: '语言精粹', link: '/bgoodparts/'},
        {text: '图解http', link: '/http/'},
        {text: 'es6', link: '/es6/'},
        {text: 'javascript教程', link: '/javascript/'}
      ]},
      {
        text: '前端技术',
        // 这里是下拉列表展现形式。
        items: [
          {text: 'html', link: '/html/'},
          {text: 'css', link: '/css/'},
          { text: 'javascript', link: '/js/' },
          { text: 'javascriptHigh', link: '/jsHigh/' },
          {text: 'h5最新用法', link: '/h5/'},
          {text: 'node', link: '/node/'},
          {text: '浏览器特性', link: '/brower/'},
          {text: 'd3', link: '/d3/'},
        ]
      },
      {text: '总结', items: [
          {text: '总结', link: '/summary/'},
          {text: '面试', link: '/interview/'},
          {text: 'problem', link: '/problem/'},
        ]
      },
      {
        text: '扩展', items: [
          {text: '启动', link: '/start/'},
          {text: '工具用法', link: '/tool/'},
          {text: 'markDown', link: '/markdown/'},
          {text: 'linux', link: '/linux/'},
          {text: 'mac', link: '/mac/'},
          {text: '提升', link: '/develop/'},
          {text: 'redis', link: '/redis/'},
        ]
      },
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/js/': [
        'Array',
        'Date',
        'Math',
        'Regex',
        'problems',
        'js事件流',
        'object',
        'error',
        'http',
        'js兼容ie',
        '存储的几种方式',
        'Navigator对象、Screen对象',
        '操作符',
        '上下滚动',
        '左右滚动'
      ],
      'js': [
        '基础字符',
      ],
      '/brower/': [
        '检测浏览器方法',
        '浏览器特性',
        '各种浏览器调试错误方法及错误处理机制',
      ],
      '/d3/': [
        'd3选择器'
      ],
      '/interview/': [
        'interview',
        '防抖和节流',
        '概念总结',
        '懒加载',
        '翻页',
        'promise、async、await、settimeout异步原理与执行顺序',
        '性能优化',
        'url到页面的渲染过程',
        '容易出错问题总结'
      ],
      '/css/': [
        'css',
        'animation',
        'css_compatibility',
        'form',
        'layout',
      ],
      '/tool/': [
        'vscode',
        'git',
        
        'yarn',
        'npm',
        'gulp',
        'command',
        'ssh',
        // 'mobile',
        'webstorm'
      ],
      '/h5/': [
        'h5',
        '处理移动端样式及内嵌app总结',
        '小程序',
        'h5和移动端通信方式'
      ],
      '/node/': [
        'crypto',
        'node截屏',
        'nodeapi',
        '处理提交的表单域',
        'node-request模块',
        'ali-oss模块',
        'node遍历文件夹并读取文件内容'
      ],
      '/redis/': [
        'egg-redis常用命令'
      ],
      '/problem/': [
        '缩写',
        'vue',
        'python'
      ],
      '/html/': [
        'html规范',
        'html标签属性名称',
      ],
      '/summary/': [
        'JavaScript编码规范',
        'JavaScript 小技巧',
        '常见兼容性问题',
        '本地调试H5页面方案总结',
        '什么是服务器端渲染和客户端渲染',
        '前端常见跨域解决方案',
        'phantomjs安装',
        'http协议',
        'Promise详解',
        'js实现二代身份证号码验证详解'
      ],
      '/es6/': [
        'let和const',
        '变量的解构赋值',
        '字符串的扩展',
        '字符串的新增方法',
        '正则的扩展',
        '数值的扩展',
        '函数的扩展',
        '对象的扩展',
        '对象的新增方法',
        'symbol',
        'set和map数据结构',
        'proxy',
        'reflect',
        'Promise对象',
        'Iterator和for...of循环',
        'Generator函数的语法',
        'Generator函数的异步应用',
        'Async',
        'Class的基本语法',
        'Class的继承',
        'Module的语法',
        'Module 的加载实现',
        '编程风格',
        '读懂ECMAScript规格',
        '异步遍历器',
      ],
      '/javascript/': [
        '面向对象编程',
        '浏览器模型'
      ],
      '/bgoodparts/': [
        'string',
        'object',
        'function',
        '继承',
        'array',
        'regexp',
        '方法'
      ],
      '/http/': [
        'http',
        'http报文内的http信息',
        '返回结果的http状态码',
        '代理网关隧道',
        'http首部',
        '确保Web安全的HTTPS',
      ],
      '/linux/': [
        'linux',
        'linux下的ps',
        'sh',
        'shell命令',
        'rsync',
        'rsync命令',
        'Linux下的tar压缩解压缩命令详解',
        'curl用法指南',
        '安装flutter',
        'grep',
        '编写脚本欢迎界面'
      ],
      '/develop/': [
        'wx',
        '反爬',
        '跨域资源共享 CORS 详解',
        'egg',
        'require',
        'requireJs中文文档',
        'xml',
        'pm2',
        'tongji',
        'seo',
        'json',
        'videojs',
        'js保存文件'
      ]
    }
  },
};