##  使用tree生成目录结构 [参考](https://blog.csdn.net/qq673318522/article/details/53713903)

程序员经常会有需求，需要列出项目的结构树。Mac或者Linux下可以使用tree列出项目结构，如下图这种：

        ├── build
        ├── config
        ├── docs
        │   └── static
        │       ├── css
        │       └── js
        ├── src
        │   ├── assets
        │   ├── components
        │   ├── store
        │   │   └── modules
        │   └── views
        │       ├── book
        │       └── movie
        └── static
使用起来也非常简单。
Mac下可以使用brew install tree进行安装。安装后，在terminal中输入tree -a便可以查看某个文件夹下的所有文件。
常用的命令
当然了，我们的需求肯定不止列出所有文件这么简单。下面介绍几个常用的命令
* __tree -d__ 只显示文件夹；
* __tree -L n__ 显示项目的层级。n表示层级数。比如想要显示项目三层结构，可以用tree -l 3；
* __tree -I pattern__ 用于过滤不想要显示的文件或者文件夹。比如你想要过滤项目中的node_modules文件夹，可以使用tree -I "node_modules"；
* __tree > tree.md__ 将项目结构输出到tree.md这个文件。
举个例子，如果我们要显示某个项目下3层的所有文件结构，同时又过滤node_modules文件夹，最后输出到tree.md，可以这么写
tree -L 3 -I "node_modules"
1
结果为：

        .
        ├── README.md
        ├── build
        │   ├── build.js
        │   ├── check-versions.js
        ├── config
        │   ├── dev.env.js
        │   ├── index.js
        │   └── prod.env.js
        ├── docs
        │   ├── index.html
        │   └── static
        │       ├── css
        │       └── js
        ├── static
        └── tree.md
更多命令的使用可以查看tree --help。

## chmod +x  .sh 给执行权限

## 在pages粘贴不带格式的内容
`Option+Shift+Command+V`

