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
        {text: '语言精粹', link: '/bgoodparts/'}
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
        ]
      },
      {text: '总结', items: [
          {text: '总结', link: '/summary/'},
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
        ]
      },
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/js/': [
        'Array',
        'Date',
        'Math',
        'problems',
        'error',
      ],
      '/test_tool/': [
        'mobile',
      ],
      '/css/': [
        'css',
        'css_compatibility',
        'form',
        'layout',
      ],
      '/tool/': [
        'git',
        'yarn',
        'command'
      ],
      '/h5/': [
        'h5',
      ],
      '/node/': [
        'crypto',
      ],
      '/summary/': [
        'JavaScript 小技巧',
        '其他链接资源',
        '本地调试H5页面方案总结'
      ],
      '/bgoodparts/': [
        'function',
      ]
    }
  },
};