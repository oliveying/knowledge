# mac环境安装flutter配置
## mac 配置环境变量


## mac 配置环境变量(扩展)
> https://www.cnblogs.com/mingm/p/10653198.html

（1）首先要知道你使用的Mac OS X是什么样的Shell，使用命令
```bash
echo $SHELL
```

如果输出的是：csh或者是tcsh，那么你用的就是C Shell。

如果输出的是：bash，sh，zsh，那么你的用的可能就是Bourne Shell的一个变种。

Mac OS X 10.2之前默认的是C Shell。

Mac OS X 10.3之后默认的是Bourne Shell。

（2）如果是Bourne Shell。

那么你可以把你要添加的环境变量添加到你主目录下面的.profile或者.bash_profile，如果存在没有关系添加进去即可，如果没有生成一个。

 
 1.`open/vim  /etc/profile`   （建议不修改这个文件 ）

 全局（公有）配置，不管是哪个用户，登录时都会读取该文件。

 

 2.`/etc/bashrc`    （一般在这个文件中添加系统级环境变量）

 全局（公有）配置，bash shell执行时，不管是何种方式，都会读取此文件。

 我在这里加入mysqlstart、mysql和mysqladmin命令的别名，保证每一个用户都可以使用这3个命令。

 

 3.`~/.bash_profile`  （一般在这个文件中添加用户级环境变量）

（注：Linux 里面是 .bashrc 而 Mac 是 .bash_profile）

 若bash shell是以login方式执行时，才会读取此文件。该文件仅仅执行一次!默认情况下,他设置一些环境变量

 我在这里：设置终端配色、

 我在这里：设置命令别名alias ll='ls -la'

 我在这里：设置环境变量：export PATH=/opt/local/bin:/opt/local/sbin:$PATH

 

 

### MAC 修改host文件 
```bash
sudo vi /etc/hosts

 ```


linux下查看和添加PATH环境变量

==============================================

PATH的格式为：
```bash
PATH=$PATH:<PATH 1>:<PATH 2>:<PATH 3>:------:<PATH N>   ，中间用冒号隔开。
```
添加PATH环境变量：
```bash
#export PATH=/opt/STM/STLinux-2.3/devkit/sh4/bin:$PATH
```
查看PATH环境变量：
```bash
#echo $PATH

/usr/kerberos/sbin:/usr/kerberos/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin
```
 

 操作示例：

-------------------------------------------------------

通过编辑 启动文件 来改PATH，
```bash
# vim /etc/profile
```
在文档最后，添加:
```bash
export PATH="/opt/STM/STLinux-2.3/devkit/sh4/bin:$PATH"
```
保存，退出。

 

想立即生效请运行：
```bash
#source /etc/profile
```
不报错则成功。

 -------------------------------

Mac部分

在终端输入下列代码
```bash
cd ~/　　　　　　　　　 
touch .bash_profile  
open .bash_profile  
``` 
这样就会通过记事本打开.bash_profile，下图里面有我之前配置过的Mongo环境变量，继续添加(注意:${PATH})：

```bash
MONGODB_HOME="/usr/local/mongodb"
NODE_HOME="/usr/local"

export PATH="/usr/bin:/usr/sbin:/bin:/sbin:/usr/X11R6/bin:$MONGODB_HOME/bin:$NODE_HOME/bin"
 ```

如果想立刻生效，则可执行下面的语句：
```bash
$ source .bash_profile（这是文件名）
```
之后关闭终端，重启终端即可

## android studio 首次打开会报错
```bash
unable to access android sdk add-on list
```

* 原因
AS启动后，会在默认路径下检测是否有Android SDK，如果没有的话，就会报上述错误。

* 可以使用这种
1. 打开Settings 
2. 点击HTTP Proxy，选择Manual proxy configuration： 设置 Host name 为：mirrors.neusoft.edu.cn 设置 Port number 为：80

还有另外两种解决方案

* 主动设置SDK

如果本机有Android SDK的话，可以点击cancel跳过，在下一个界面手动选择本地SDK目录就可以了。

* 跳过检测

在Android Studio的安装目录下，找到`\bin\idea.properties`
在尾行添加`disable.android.first.run=true`，表示初次启动不检测SDK
四、小结
上面两个解决方案都可以解决启动开篇报错的问题，但是都是治标不治本，做Android开发，Android SDK是必须的
可以在进入AS主界面后，再进行SDK相关的下载

> https://blog.csdn.net/u010358168/java/article/details/81535307

> https://book.flutterchina.club/chapter1/install_flutter.html