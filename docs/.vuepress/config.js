// 参考 https://zhuanlan.zhihu.com/p/36116211
module.exports = {
  title: '杜若的前端，每天进步一点点',  // 设置网站标题
  dest: './dist',   // 设置输出目录
  base: '/knowledge/', // 设置站点根路径
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'oliveying',
      description: '前端知识，JavaScript，html，css，tool，git，markdown',
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
        {text: '图解http', link: '/http/'}
      ]},
      {
        text: '前端技术',
        // 这里是下拉列表展现形式。
        items: [
          {text: 'html', link: '/html/'},
          {text: 'css', link: '/css/'},
          { text: 'javascript', link: '/js/' },
          {text: 'h5最新用法', link: '/h5/'},
          {text: 'node', link: '/node/'},
          {text: '浏览器特性', link: '/brower/'}
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
        '操作符'
      ],
      '/test_tool/': [
        'mobile',
        'webstorm'
      ],
      '/brower/': [
        '浏览器特性',
        '各种浏览器调试错误方法及错误处理机制',
      ],
      '/interview/': [
        'interview',
        '防抖和节流',
        '懒加载',
      ],
      '/css/': [
        'css',
        'animation',
        'css_compatibility',
        'form',
        'layout',
      ],
      '/tool/': [
        'git',
        'yarn',
        'npm',
        'command',
        'ssh',
      ],
      '/h5/': [
        'h5',
        '处理移动端样式及内嵌app总结_20190920',
        '小程序'
      ],
      '/node/': [
        'crypto',
      ],
      '/problem/': [
        '缩写',
        'vue',
      ],
      '/html/': [
        'html标签属性名称',
      ],
      '/summary/': [
        'html规范',
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
        'rsync',
        'rsync命令',
        'Linux下的tar压缩解压缩命令详解'
      ],
      '/develop/': [
        'wx',
        '反爬'
      ]
    }
  },
};