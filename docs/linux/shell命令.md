## shell脚本中set -e作用
* 在`set -e`之后出现的代码，一旦出现了返回值非零，整个脚本就会立即推出，那么就可以避免一些脚本的危险操作

exit 0 exit 1以及echo $?说明

exit 0 ----正常退出命令

exit 1 ---- 非正常退出命令

exit $? ----获取上次命令执行的结果，如果是0就正常执行，如果非0就是执行出现了异常

## shell脚本中set -x 作用
表示有详细的日志输出，免的老是要echo


## shell中declare命令
-a 声明一个数组

-i 声明一个整型

-f 打印所有函数定义

-F 仅打印函数名字

-r 声明一个readonly变量，该变量的值无法改变，并且不能为unset

-x 和export的作用类似

## shell中的case
 为多选择语句，可以用case语句匹配一个值与一个模式，如果匹配成功，执行相匹配的命令。

```bash
case 值 in
模式1)
     command1
     command2
     ;;
模式2)
     command1
     command2
     ;;
*)   
     command1
     ;;
esac
```
case工作方式如上所示。取值后面必须为单词in，每一模式必须以右括号结束。取值可以为变量或常数。匹配发现取值符合某一模式后，其间所有命令开始执行直至 ;;。

取值将检测匹配的每一个模式。一旦模式匹配，则执行完匹配模式相应命令后不再继续其他模式。如果无一匹配模式，使用星号 * 捕获该值，再执行后面的命令。

## shell 中的if 语句语法格式
```bash
if condition
then
   command1
   command2
   ...
   commandN
```
## shell if [[ ]]和[ ]区别 || &&

`[[]]`
这是内置在shell中的一个命令。支持字符串的模式匹配（使用=~操作符时甚至支持shell的正则表达式

`-z` 判断是否为空
```bash
abc=$1
if [[-z "$abc"]] # 当输入不符合自己预期
then 

```

## shell 中的for循环
```bash
for var in item1 item2 item3 ... itemN
do
  command1
  command2
  ...
  commandN
done

# 写成一行
for var in item1 item2 ... itemN; do command1; command2… done;

```

## shell 中本地文件上传到服务命令
`scp -i` mac 把本地文件上传到服务的命令,当服务器通过密钥认证

```bash
scp -i ~/.ssh/密钥.pem 本地文件 username@ip:/文件路径
ssh -i ~/.ssh/密钥 username@ip
```

## shell 中$1 的作用
```bash
#!/bin/sh
echo "shell脚本本身的名字: $0"
echo "传给shell的第一个参数: $1"
echo "传给shell的第二个参数: $2"
```
## shell 中的EOF用法
Shell中通常将EOF与 << 结合使用，表示后续的输入作为子命令或子Shell的输入，直到遇到EOF为止，再返回到主调Shell。
  可以把EOF替换成其他东西，意思是把内容当作标准输入传给程序。


## shell 中read命令可以获取键盘输入的字符
> https://www.cnblogs.com/xl-892694298/p/11017168.html
```bash
read [-rs] [-a ARRAY] [-d delim] [-n nchars] [-N nchars] [-p prompt] [-t timeout] [-u fd] [var_name1 var_name2 ...]

```
read命令用于从标准输入中读取输入单行，并将读取的单行根据IFS变量分裂成多个字段，并将分割后的字段分别赋值给指定的变量列表var_name。第一个字段分配给第一个变量var_name1，第二个字段分配给第二个变量var_name2，依次到结束。如果指定的变量名少于字段数量，则多出的字段数量也同样分配给最后一个var_name，如果指定的变量命令多于字段数量，则多出的变量赋值为空。

如果没有指定任何var_name，则分割后的所有字段都存储在特定变量REPLY中。

```bash
选项说明：
-a：将分裂后的字段依次存储到指定的数组中，存储的起始位置从数组的index=0开始。
-d：指定读取行的结束符号。默认结束符号为换行符。
-n：限制读取N个字符就自动结束读取，如果没有读满N个字符就按下回车或遇到换行符，则也会结束读取。
-N：严格要求读满N个字符才自动结束读取，即使中途按下了回车或遇到了换行符也不结束。其中换行符或回车算一个字符。
-p：给出提示符。默认不支持"\n"换行，要换行需要特殊处理，见下文示例。例如，"-p 请输入密码："
-r：禁止反斜线的转义功能。这意味着"\"会变成文本的一部分。
-s：静默模式。输入的内容不会回显在屏幕上。
-t：给出超时时间，在达到超时时间时，read退出并返回错误。也就是说不会读取任何内容，即使已经输入了一部分。
-u：从给定文件描述符(fd=N)中读取数据。

```
### 基本用法示例
(1).将读取的内容分配给数组变量，从索引号0开始分配。

```bash
[root@xuexi ~]# read -a array_test
what is you name?    

[root@xuexi ~]# echo ${array_test[@]}
what is you name?

[root@xuexi ~]# echo ${array_test[0]}
what
```
(2).指定读取行的结束符号，而不再使用换行符。
```bash
[root@xuexi ~]# read -d '/'
what is you name \//       # 输入完尾部的"/"，自动结束read
```
由于没有指定var_name，所以通过$REPLY变量查看read读取的行。
```bash
[root@xuexi ~]# echo $REPLY
what is you name /
```
(3).限制输入字符。

例如，输入了5个字符后就结束。
```bash
[root@xuexi tmp]# read -n 5
12345

[root@xuexi tmp]# echo $REPLY   # 输入12345共5个字符
12345
```
如果输入的字符数小于5，按下回车会立即结束读取。
```bash
[root@xuexi ~]# read -n 5
123

[root@xuexi ~]# echo $REPLY
123
```
但如果使用的是"-N 5"而不是"-n 5"，则严格限制读满5个字符才结束读取。
```bash
[root@xuexi ~]# read -N 5
123\n4

[root@xuexi ~]# read -N 5
123          # 3后的回车(换行)算是一个字符
4
```
(4).使用-p选项给出输入提示。
```bash
[root@xuexi ~]# read -p "pls enter you name: "
pls enter you name: Junmajinlong

[root@xuexi ~]# echo $REPLY
Junmajinlong
```
"-p"选项默认不带换行功能，且也不支持"\n"换行。但通过$'string'的方式特殊处理，就可以实现换行的功能。例如：
```bash
[root@node2 ~]# read -p $'Enter your name: \n'
Enter your name: 
JunMaJinLong
```
关于$'String'和$"String"的作用，见http://www.cnblogs.com/f-ck-need-u/p/8454364.html

(5).禁止反斜线转义功能。
```bash
[root@xuexi ~]# read -r
what is you name \?

[root@xuexi ~]# echo $REPLY
what is you name \?
```
(6).不回显输入的字符。比如输入密码的时候，不回显输入密码。
```bash
[root@xuexi ~]# read -s -p "please enter your password: "
please enter your password:

[root@xuexi ~]# echo $REPLY
123456
```
(7).将读取的行分割后赋值给变量。
```bash
[root@xuexi ~]# read var1 var2 var3
abc def    galsl djks

[root@xuexi ~]# echo $var1:::$var2:::$var3
abc:::def:::galsl djks
```
(8).给出输入时间限制。没完成的输入将被丢弃，所以变量将赋值为空(如果在执行read前，变量已被赋值，则此变量在read超时后将被覆盖为空)。
```bash
[root@xuexi ~]# var=5

[root@xuexi ~]# read -t 3 var
1

[root@xuexi ~]# echo $var
```

## 给文件夹下的sh权限

```bash
cd ~/bin # 进入bin目录下
chmod -R 777 文件名/目录  # 可读可写可执行
```