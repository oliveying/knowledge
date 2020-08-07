# linux
## linux 简介

### 查看Linux 版本
* cat /etc/redhat-release（Linux查看版本当前操作系统发行版信息）
* uname -a (Linux查看版本当前操作系统内核信息)
* cat /proc/version（Linux查看当前操作系统版本信息）
* getconf LONG_BIT（32bit/64bit）

### 根目录结构

* bin 该目录为命令文件目录，也成为二进制目录。包含来供系统管理员及普通用户使用的重要的linux命令和二进制（可执行）文件，包括shell解释器等
* boot 该目录中存放系统的内核文件和引导装载程序文件，/boot/vmlinuz为linux的内核文件，以及/boot/gurb。建议单独分区，分区大小100m即可。
* dev 设备（device）文件目录，存放linux系统下的设备文件，访问该目录下的某个文件，相当于访问某个设备，存放连接到计算机上的设备（终端、磁盘驱动器、光驱及网卡等）的对应文件，包括字符设备和块设备等，常用的是挂载光驱mount /dev/cdrom/mnt
* etc 系统配置文件存放的目录，该目录存放系统的大部分配置文件和字母了，不建议在此目录下存放可执行文件，重要的配置文件有/etc/inittab、/etc/fstab、/etc/init.d、/etc/X11(X Window系统有关)、/etc/sysconfig（与网络有关）、/etc/xinetd.d修改配置文件之前记得备份。该目录下的文件由系统管理员来使用，普通用户对大部分文件由只读权限

* home：系统默认的用户宿主目录，新增用户账号时，用户的宿主目录都存放在此目录下，~表示当前用户的宿主目录，~test表示用户test的宿主目录。建议单独分区，并设置较大的磁盘空间，方便用户存放数据。
* lib：系统使用的函数库的目录，程序在执行过程中，需要调用一些额外的参数时需要函数库的协助，该目录下存放了各种编程语言库。典型的linux系统包含了C、C++和FORTRAN语言的库文件。/lib目录下的库映像文件可以用来启动系统并执行一些命令，目录/lib/modules包含了可加载的内核模块，/lib目录存放了所有重要的库文件，其他的库文件则大部分存放在/usr/lib目录下。
mnt、media：主要用来临时挂载文件系统，为某些设备提供默认挂载点，如floppy，cdrom。这样当挂载了一个设备如光驱时，就可以通过访问目录/mnt/cdrom下的文件来访问相应的光驱上的文件了。
* opt：给主机额外安装软件所摆放的目录。如：FC4使用的Fedora 社群开发软件，如果想要自行安装新的KDE 桌面软件，可以将该软件安装在该目录下。以前的 Linux 系统中，习惯放置在 /usr/local 目录下。

* proc：此目录的数据都在内存中，如系统核心，外部设备，网络状态，由于数据都存放于内存中，所以不占用磁盘空间，比较重要的目录有/proc/cpuinfo、/proc/interrupts、/proc/dma、/proc/ioports、/proc/net/*等。
* root：系统管理员root的宿主目录，系统第一个启动的分区为/，所以最好将/root和/放置在一个分区下
* run：目录是说, 里面的东西是系统运行时需要的, 不能随便删除. 但是重启的时候应该抛弃. 下次系统运行时重新生成. 

* sbin：放置系统管理员使用的可执行命令，如fdisk、shutdown、mount等。与/bin不同的是，这几个目录是给系统管理员root使用的命令，一般用户只能"查看"而不能设置和使用。
* srv：服务启动之后需要访问的数据目录，如www服务需要访问的网页数据存放在/srv/www内。
* sys：文件系统是一个类似于proc文件系统的特殊文件系统，用于将系统中的设备组织成层次结构，并向用户模式程序提供详细的内核数据结构信息。
* tmp：一般用户或正在执行的程序临时存放文件的目录,任何人都可以访问,重要数据不可放置在此目录下。
* usr：应用程序存放目录，/usr/bin 存放应用程序， /usr/share 存放共享数据，/usr/lib 存放不能直接运行的，却是许多程序运行所必需的一些函数库文件，/usr/local 存放软件升级包，/usr/share/doc 系统说明文件存放目录。
* var：放置系统执行过程中经常变化的文件，如随时更改的日志文件 /var/log。/var/log/message： 所有的登录文件存放目录。/var/spool/mail： 邮件存放的目录。 /var/run: 程序或服务启动后。建议单独分区，设置较大的磁盘空间。

### 基本命令
* cd 进入目录
* ls 查看目录
* mkdir 创建目录
* rm 删除
* cp 复制
* mv 移动/重命名
* history 查看历史命令
* grep 查找
* vi/vim 编辑模式/命令行模式
* scp： 跨IP传文件
* 文件解压缩： gz、zip。。。

### 用户切换
* root 用户切换到用户 su uname

## Linux命令大全
```bash	
关机	root用户关机	poweroff	立刻关机
		shutdown -h now	立刻关机
		shutdown -h 10	10分钟后关机
		shutdown -h 18:00	定时关机，18:00关机
重启	root用户重启	reboot	立刻重启
		shutdown -r now	立刻重启
		shutdown -r 10	10分钟后重启
		shutdown -r 18:00	18:00重启
	其中poweroff和reboot任意用户都可用，其余只能root用户使用		
			
cd	进入	cd /	进入根目录
		cd 目录名	进入该目录
		cd /a/b/c	绝对路径进入a目录下的b中的c
		cd ./b/c	相对路径，相对当前目录进入c
		cd ../	返回上一层目录
		/	当前目录
ls	查看	ls 目录名	显示当前目录下的文件
		ls -l	显示文件的详细信息
		ls -a	查看当前目录下所有内容包括隐藏文件
		ls -al	查看当前目录下的所有内容包括隐藏文件的详细信息
		ls -lrt	显示文件的详细信息并按时间排序
mkdir	创建目录	mkdir 目录名（文件夹）	新建目录
		mkdir -p a/b/c	新建多级目录
		mkdir /root/a/b/c	绝对路径新建目录c
		mkdir ./d/f	相对路径新建目录f
touch	创建文件	touch 文件名	新建文件
rm	删除	rm -r 文件名或目录名	删除文件或目录，删除时有提示信息
		rm -f 文件名	强制删除，只能删除文件，不能删除目录，删除时无任何提示信息
		rm -rf 文件名或目录名	强制删除文件或目录，删除时无任何提示信息
		rm 文件名	删除文件
cp	拷贝	cp 文件 /目的地	将文件拷贝到目的地
		cp 1.txt test	将1.txt复制到test目录下
		cp 1.txt ../	将1.txt复制到当前目录上一层目录
		cp 1.txt /bin/df/	将1.txt复制到bin下的df目录下

    
```

```bash
mv	移动	mv 文件名或目录名 /目的地	剪切：将文件或目录移动到目的地
	重命名	mv 文件名或目录名 新名字	改名
		mv 文件名或目录名 /目的地/新名字	移动并改名
history	查询历史命令	history	查询历史命令
grep	查找	grep word 文件名	查找文件中包含“word”字符串的信息
查看文件	查看文件内容    cat 文件名	查看文件内容，正常查看
                    tac 文件名	到序查看文件内容
                    more 文件名	查看大文件内容，显示百分比，按回车逐行显示，按空格分页显示
                    less 文件名	查看文件，不显示文件百分比
                    head 文件名	查看文件的前几行内容(一般默认10行)
                    tail 文件名	查看文件的末尾几行内容(一般默认10行)
vi	创建文件	vi 文件名	新建文件（退出时需要保存）
	一般模式下操作	0或home键	回到当前行最前面
                    shift+4或end键	到当前行最后面
                    gg	回到第一行开头
                    G	到最后一行开头
                    ngg或nG	去哪一行。n表示第几行
                    dd	删除光标所在行
                    ndd	删除n行，包含光标所在行
                    yy	复制一行
                    nyy	复制n行
                    p(小写)	粘贴到光标下一行
                    P（大写）	粘贴到光标上一行
                    u	撤销
                    Ctrl+r	反撤销
                    /**	查找某某
                    n	向下查找
                    N	向上查找
	命令行模式	set nu	显示行号
                set nonu	取消显示行号
                "：1,$s/word1/word2/g （1表示第一行，$s表示最后一行）"	
                # "从第一行到最后一行查找word1，并用word2全部替换"
                "：8s/word1/word2/g (word1表示要被替换的字符, word2表示替换的字符)"	
                # 从第8行找word1,并用word2全部替换
                "：3,8s/word1/word2/g（g表示全部替换）"
                # "从第3行到第8行找word1,并用word2全部替换"
                r	替换光标处字符
```

```bash
修改权限	chmod	
                格式： chmod 775 -R 其中-R表示全部	
                方式一：在上一级目录，例：chmod +x -R ./bin

		        d为目录	
                方式二：在当前目录，例： chmod 755 -R 
		        
                r可读--4  w可写--2  x可执行--1	
                方式三：修改单个文件权限，例： chmod 755 xx文件
创建用户     useradd	    useradd 用户名	
创建组      groupadd	    groupadd 组名	
编译	    make	        make	
修改属主    chown	    chown R root （修改全部）	
		chown -R mysql var（修改var为属主为mysql）	
修改属组	chgrp	chgrp -R 组名	
修改mysql密码	mysqladmin -uroot -p password 新密码，旧密码为空时不用输入，若不修改密码则密码默认为空		
			
			
			
linux压缩和解压缩命令大全			
住：fliename为压缩包名	.tar	解包:tar -zxvf filename.tar	
		压缩:tar.-czvf filename.tar	
	.gz	解压1:hunzip filename.gz	
		解压2:gzip -d filename.gz	
		压缩：gzip filename	
	.tar.gz和.tgz	解压：tar -zxvf filename.tar.gz	
		压缩:tar -zcvf filename.tar.gz Dirname	
	.bz2	解压1:bzip2 -d filename.bz2	
		解压2:bunzip2 filename.bz2	
		压缩:bzip -z filename	
	.tar.bz2	解压:tar -jxvf filename.tar.bz2 	
		压缩:tar -jcvf filename.tar.bz2 Dirname	
	.bz	解压1：bzip2 -d filename.ba	
		解压2:bunzip2 filename.bz	
		压缩:未知	
	.tar.bz	解压：tar -jxvf filename.tar.bz	
		压缩：未知	
	.Z	解压:uncompress filename.Z	
		压缩:compress filename	
	.tar.Z	解压：tar -Zxvf filename.tar.Z	
		压缩：tar -Zcvf filename.tar.Z Dirname	
	.zip	解压:unzip filename.zip	
		压缩:zip filename.zip Dirname	
	.rar	解压:rar a filename.rar	
		压缩:rar e filename.rar	

```
`ps -aux | grep emailcase` 查看进程
`kill 5565` 杀进程，进入目录 `rm -rf .log`

## setsid
> https://blog.csdn.net/sweetfather/article/details/79457261
* 当进程是会话当领头进程时 setsid() 调用失败并返回（-1）；
setsid() 调用成功后，返回新的会话的ID，调用setid函数的进程成为新的会话的领头进程，并与其父进程的会话组和进程组脱离。

* 由于会话对控制终端的独占性，进程同事与控制终端脱离

## linux进程后台运行方法 nohup、setsid、&介绍
> https://www.jianshu.com/p/8958a20ce23d
我们经常会碰到这样的问题，用 telnet/ssh 登录了远程的 Linux 服务器，运行了一些耗时较长的任务， 结果却由于网络的不稳定导致任务中途失败。如何让命令提交后不受本地关闭终端窗口/网络断开连接的干扰呢？下面举了一些例子， 您可以针对不同的场景选择不同的方式来处理这个问题。
```bash
nohup/setsid/&
```
场景：

如果只是临时有一个命令需要长时间运行，什么方法能最简便的保证它在后台稳定运行呢？

解决方法：

我们知道，当用户注销（logout）或者网络断开时，终端会收到 HUP（hangup）信号从而关闭其所有子进程。因此，我们的解决办法就有两种途径：要么让进程忽略 HUP 信号，要么让进程运行在新的会话里从而成为不属于此终端的子进程。

1. nohup

nohup 无疑是我们首先想到的办法。顾名思义，nohup 的用途就是让提交的命令忽略 hangup 信号。让我们先来看一下 nohup 的帮助信息：
```bash
NOHUP(1) User Commands NOHUP(1)

NAME
nohup - run a command immune to hangups, with output to a non-tty

SYNOPSIS
nohup COMMAND [ARG]...
nohup OPTION

DESCRIPTION
Run COMMAND, ignoring hangup signals.

--help display this help and exit

--version
output version information and exit</pre>
```
可见，nohup 的使用是十分方便的，只需在要处理的命令前加上 nohup 即可，标准输出和标准错误缺省会被重定向到 nohup.out 文件中。一般我们可在结尾加上"&"来将命令同时放入后台运行，也可用">filename 2>&1"来更改缺省的重定向文件名。

nohup 示例

[root@pvcent107 ~]# nohup ping www.ibm.com &
[1] 3059
nohup: appending output to `nohup.out'
[root@pvcent107 ~]# ps -ef |grep 3059
root 3059 984 0 21:06 pts/3 00:00:00 ping www.ibm.com
root 3067 984 0 21:06 pts/3 00:00:00 grep 3059
[root@pvcent107 ~]#
2. setsid

nohup 无疑能通过忽略 HUP 信号来使我们的进程避免中途被中断，但如果我们换个角度思考，如果我们的进程不属于接受 HUP 信号的终端的子进程，那么自然也就不会受到 HUP 信号的影响了。setsid 就能帮助我们做到这一点。让我们先来看一下 setsid 的帮助信息：
```bash
SETSID(8) Linux Programmer’s Manual SETSID(8)

NAME
setsid - run a program in a new session

SYNOPSIS
setsid program [ arg ... ]

DESCRIPTION
setsid runs a program in a new session.
```
可见 setsid 的使用也是非常方便的，也只需在要处理的命令前加上 setsid 即可。

setsid 示例
```bash
[root@pvcent107 ~]# setsid ping www.ibm.com
[root@pvcent107 ~]# ps -ef |grep www.ibm.com
root 31094 1 0 07:28 ? 00:00:00 ping www.ibm.com
root 31102 29217 0 07:29 pts/4 00:00:00 grep www.ibm.com
[root@pvcent107 ~]#
```
值得注意的是，上例中我们的进程 ID(PID)为31094，而它的父 ID（PPID）为1（即为 init 进程 ID），并不是当前终端的进程 ID。

3. &

这里还有一个关于 subshell 的小技巧。我们知道，将一个或多个命令包含在“()”中就能让这些命令在子 shell 中运行中，从而扩展出很多有趣的功能，我们现在要讨论的就是其中之一。

当我们将"&"也放入“()”内之后，我们就会发现所提交的作业并不在作业列表中，也就是说，是无法通过jobs来查看的。让我们来看看为什么这样就能躲过 HUP 信号的影响吧。

subshell 示例
```bash
[root@pvcent107 ~]# (ping www.ibm.com &)
[root@pvcent107 ~]# ps -ef |grep www.ibm.com
root 16270 1 0 14:13 pts/4 00:00:00 ping www.ibm.com
root 16278 15362 0 14:13 pts/4 00:00:00 grep www.ibm.com
[root@pvcent107 ~]#
```
从上例中可以看出，新提交的进程的父ID（PPID）为1（init 进程的 PID），并不是当前终端的进程 ID。因此并不属于当前终端的子进程，从而也就不会受到当前终端的 HUP 信号的影响了。


## top 查看cpu占用率
## ps -aux | grep 端口号  === netstat  -nlpt |grep 39788

## 查看文件的几种方式
```
cat
less

```

## 1、nslookup作用
nslookup用于查询DNS的记录，查询域名解析是否正常，在网络故障时用来诊断网络问题
```bash
nslookup 10.2.2.2
# 返回
nslookup http://oliveying.com
Server:         10.2.1.0
Address:        10.2.1.10#31

Non-authoritative answer:
Name:   http://oliveying.com
Address: 10.2.2.2
```
请求一个域名的接口时，报错，链接为ip地址（此链接为nginx层反相代理），则有可能是nginx反响代理之后报错