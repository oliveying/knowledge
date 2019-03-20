// 参考 https://zhuanlan.zhihu.com/p/36116211
module.exports = {
  title: '杜若的前端，每天进步一点点',  // 设置网站标题
  dest: './dist',   // 设置输出目录
  base: '/duruo/', // 设置站点根路径
  themeConfig: {
    repo: 'https://github.com/duruo-web/knowledge' // 添加 github 链接
    // 添加导航栏
    // nav: [
    //   { text: 'vue', link: '/' },
    //   { text: 'css', link: '/blog/' },
    //   { text: 'js', link: '/zhihu/' },
    //   {
    //     text: 'github'
    //     // 这里是下拉列表展现形式。
    //     // items: [
    //     //   { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
    //     //   { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' }
    //     // ]
    //   }
    // ],
    // 为以下路由添加侧边栏
    // sidebar: {
    //   '/vue/': [
    //     'one',
    //     'two'
    //   ],
    //   '/css/': [
    //     'three',
    //     'four'
    //   ]
    // }
  }
};