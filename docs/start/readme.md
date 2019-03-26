# VuePress 安装

> [参考VuePress官方文档](https://vuepress.docschina.org/guide/deploy.html#github-%E9%A1%B5%E9%9D%A2)

## [安装报错](https://github.com/vuejs/vuepress/issues/1417)

        yarn install
        yarn run docs:dev
    package.json里有

          "docs:dev": "vuepress dev docs",
          "docs:build": "vuepress build docs",
          "resolutions": {
            "webpack-dev-middleware": "3.6.0"
          },
          "dependencies": {
              "vuepress": "^0.14.10"
            }


**npm run docs:build**  // 打包

**npm run docs:dev**  //启动

## [访问地址](https://oliveying.github.io/knowledge/)

