## Mac查看端口号是否被占用及释放
```bash
lsof -i: 端口号 # 查看使用端口进程
kill 你的PID /# 释放进程
lsof -i: 端口号 # 再次执行第一步，是否无进程占用

```
## Mac查看进程是否被占用及释放
```bash
lsof -i tcp:8080 # 查看使用端口进程
kill 你的PID /# 释放进程

```

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

## 查看文件执行权限
```bash
ls -l # 或者
ls -la

-rw-r--r--     1 apple  staff     246  7 13 09:49 a.js
drwxr-xr-x     7 apple  staff     224  7 13 09:51 exec
-rwxr-xr-x     1 apple  staff    2197  7 26 10:58 test.sh


```
第一个字符表示文件的性质：

- ：表示此行展示的是一个文件
d：表示此行展示的是一个目录

第2到4个字符表示此文件所有者对此文件的权限
第5到7个字符表示此文件所属于的组里面的账户对此文件的权限

第8到10个字符表示除了上面两类型的其他用户对此文件的权限

* r (read)：可读，文件可以被查看。
* w(write): 可写，文件可以被修改，删除。
* x(execute)：可执行，如果文件是脚本活程序，可以被执行。
* - ：无以上权限

* chmod 776 xxx 的命令表示为此文件的所有者和所属的组设置所有权限，为其他用户设置读写权限。
## 在pages粘贴不带格式的内容
`Option+Shift+Command+V`

