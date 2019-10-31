# linux命令ps aux|grep xxx详解

* 对进程进行监测和控制,首先必须要了解当前进程的情况,也就是需要查看当前进程, 而`ps命令（Process Status）`就是最基本同时也是非常强大的进程查看命令.

使用该命令 可以确定有哪些进程正在运行和运行的状态、进程是否结束、进程有没有僵尸、哪些进程占用了过多的资源等等.总之大部分信息都是可以通过执行该命令得到的.

ps 为我们提供了进程的一次性的查看，它所提供的查看结果并不动态连续的；如果想对进程时间监控，应该用 top 工具。

如果直接用ps命令，会显示所有进程的状态，通常结合grep命令查看某进程的状态。

grep （global search regular expression(RE) and print out the line,全面搜索正则表达式并把行打印出来）是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来。

使用示例：

```bash
[root@node20 updateDB]# ps aux|grep ./update_stock

root 14232 0.0 0.0 5928 724 pts/1 S+ 18:16 0:00 grep ./update_stock

root 25021 0.0 0.0 3056 816 ? S Apr12 0:03 ./update_stock
```

ps aux输出格式：
user    13641  0.0  0.1 955408 26632 ?        Ssl  Oct28   0:00 node app.olivying_server.js
user    18279  0.0  0.0 105524  1104 pts/1    S+   16:13   0:00 grep --color app.olivying_server.js
USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND
格式说明：

USER: 行程拥有者

PID: pid

%CPU: 占用的 CPU 使用率

%MEM: 占用的记忆体使用率

VSZ: 占用的虚拟记忆体大小

RSS: 占用的记忆体大小

TTY: 终端的次要装置号码 (minor device number of tty)

STAT: 该行程的状态，linux的进程有5种状态：

D 不可中断 uninterruptible sleep (usually IO)

R 运行 runnable (on run queue)

S 中断 sleeping

T 停止 traced or stopped

Z 僵死 a defunct (”zombie”) process

注: 其它状态还包括W(无驻留页), <(高优先级进程), N(低优先级进程), L(内存锁页).

START: 行程开始时间

TIME: 执行的时间

COMMAND:所执行的指令
