## 服务器端配置：
1、安装xinetd,并修改rsync相关配置
```bash
# yum -y install xinetd
# vi /etc/xinetd.d/rsync
```
如下代码：
```js
service rsync
{
        disable = yes
        socket_type     = stream
        wait            = no
        user            = root
        server          = /usr/bin/rsync
        server_args     = --daemon
        log_on_failure  += USERID
}
```
将disable = yes改成disable = no
然后重启xinetd
```bash
# /etc/init.d/xinetd restart
[
  注：如果服务器上装有防火墙，需要打开端口，默认端口是873
  # telnet 127.0.0.1 873
  Trying 127.0.0.1...
  telnet: connect to address 127.0.0.1: Connection refused
  # iptables -A INPUT -s 192.168.0.0/255.255.255.0 -p tcp -m tcp --dport 873 -j ACCEPT
  # iptables -A INPUT -p tcp -m tcp --dport 873 -j DROP
]
```
2、编写rsync.conf配置文件
```bash
# vi /etc/rsyncd.conf
```
内容如下：
```js
port=873
uid = nobody
gid = nobody
user chroot = no
max connections = 200
timeout = 600
pid file = /var/run/rsyncd.pid
lock file = /var/run/rsyncd.lock
log file = /var/log/rsyncd.log
 
[www]
path = /home/www
ignore errors
read only = no
list = no
hosts allow = 192.168.1.0/255.255.255.0 设置允许访问的ip 可以为*（所有）
auth users = root
secrets file = /etc/rsyncd.secrets
```
```bash
注释：
port  #开放端口
uid = nobody  #进行备份的用户UID，nobody为任何用户
gid = nobody  #进行备份的组GID，nobody为任意组
use chroot = no  #如果"use chroot"指定为true，那么rsync在传输文件以前首先chroot到path参数所指定的目录下。这样做的原因是实现额外的安全防护，但是缺 点是需要以root权限，并且不能备份指向外部的符号连接所指向的目录文件。默认情况下chroot值为true。但是这个一般不需要，所以我选择no或 false
list = no  #不允许列清单
max connections = 200 #最大连接数
timeout = 600 #覆盖客户指定的IP超时时间，也就是说rsync服务器不会永远等待一个崩溃的客户端。
pidfile = /var/run/rsyncd.pid  #pid文件的存放位置
lock file = /var/run/rsync.lock  #锁文件的存放位置
log file = /var/log/rsyncd.log  #日志文件的存放位置
 
[backup]  #这里是认证模块名，即跟samba语法一样，是对外公布的名字
path = /home/www  #这里是参与同步的目录
ignore errors  #可以忽略一些无关的IO错误
read only = no  #允许可读可写
list = no  #不允许列清单
hosts allow = 192.168.1.0/255.255.255.0  #这里跟samba的语法是一样的，只允许192.168.1.0/24的网段进行同步，拒绝其它一切IP
auth users = admin  #认证的用户名
secrets file = /etc/rsyncd.secrets  #密码文件存放地址
```
注意：对于这个地方的配置文件，虽然解释的很清楚，可是一些朋友始终还会在这里出错，这里我提亮点易错点：
[backup]是认证模块名和 path = /var/www 是参与同步的目录
这里的path 大家要记好了，这里不要随便的一设置就直接完事，要知道这里是认证模块的，以后从客户机备份的数据会存储在这里。
 
3、编写用户密码文件
```bash
# vi /etc/rsyncd.secrets
root:1234789 #用户名:密碼
```
 
4、给予只读权限
```bash
# chown root:root /etc/rsyncd.secrets
# chmod 600 /etc/rsyncd.secrets
```
 

-rw------- (600) -- 只有属主有读写权限。

-rw-r--r-- (644) -- 只有属主有读写权限；而属组用户和其他用户只有读权限。

-rwx------ (700) -- 只有属主有读、写、执行权限。

-rwxr-xr-x (755) -- 属主有读、写、执行权限；而属组用户和其他用户只有读、执行权限。

-rwx--x--x (711) -- 属主有读、写、执行权限；而属组用户和其他用户只有执行权限。

-rw-rw-rw- (666) -- 所有用户都有文件读、写权限。这种做法不可取。

-rwxrwxrwx (777) -- 所有用户都有读、写、执行权限。更不可取的做法。

 

　　以下是对目录的两个普通设定：

 

drwx------ (700) - 只有属主可在目录中读、写。

drwxr-xr-x (755) - 所有用户可读该目录，但只有属主才能改变目录中的内容

 

　　suid的代表数字是4，比如4755的结果是-rwsr-xr-x

　　sgid的代表数字是2，比如6755的结果是-rwsr-sr-x

　　sticky位代表数字是1，比如7755的结果是-rwsr-sr-t


 
5、创建目录并修改所有者
```bash
# mkdir /home/www/
# chown -R nobody:nobody /home/www
```
6、启动服务
```bash
# rsync --daemon
```
7、加入开机自启动
```bash
# echo "rsync --daemon">> /etc/rc.local
```
二、Linux客户端进行同步
1、客户端默认好像已经装了rsync，没有的话装下：
```bash
# yum -y install rsync
```
2、创建密码文件
```bash
# vi /etc/rsyncd.passwd
文件内容如下(只包含密码部分)：
123456789
```
3、执行异步同步操作：
```bash
# /usr/bin/rsync -avz --progress --password-file=/etc/rsyncd.passwdroot@192.168.1.1::www /home/www
```