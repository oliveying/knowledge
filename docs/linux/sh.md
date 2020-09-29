# sh 是shell脚本
* #!/bin/sh 可以改为 #!/bin/bash

`#!` 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种shell

## date + % 什么意思？
```
date +%Y%m%d        //显示当前时间年月日

date +%Y%m%d --date="+1 day"  //显示前一天的日期

date +%Y%m%d --date="-1 day"  //显示后一天的日期

date +%s  //从 1970 年 1 月 1 日 00:00:00 UTC 到目前为止的秒数（时间戳）
```

## 在linux的一些脚本，需在开头一行指定脚本的解释程序
```bash
#!/usr/bin/env bash

#!/usr/bin/bash
```
`#!/usr/bin/env python`  告诉操作系统执行这个脚本的时候，调用`/usr/bin`下的python解释器；

`#!/usr/bin/python`　　告诉操作系统到env设置里查找python的安装路径，再调用对应路径下的解释器程序完成操作

* 两者区别
* env
脚本用env启动的原因，是因为脚本解释器在linux中可能被安装于不同的目录，env可以在系统的`PATH`目录中查找。同时，env还规定一些系统环境量。 而如果直接将解释器路径写死在脚本里，可能在某些系统就会存在找不到解释器的兼容性问题。

还可以加上-P参数来指定一些目录去寻找perl这个程序， `#!/usr/bin/env -S -P /usr/local/bin:/usr/bin:${PATH} perl` --->在`/usr/local/bin`和`/usr/bin`和PATH变量中定义的目录下寻找perl。

缺点:

有可能在一个多用户的系统中，别人在你的$PATH中放置了一个bash，可能出现错误。

 * `#!/usr/bin/bash`  将对给定的可执行文件系统进行显式控制。

   大部分情况下，/usr/bin/env是优先选择的，因为它提供了灵活性，特别是你想在不同的版本下运行这个脚本；而指定具体位置的方式#!/usr/bin/bash，在某些情况下更安全，因为它限制了代码注入的可能。

可能在一些系统上`/usr/bin/bash`没有，而`/bin/bash`则一定存在的。所以`/bin/bash`是显示指定的优先选择。


## 运行 Shell 脚本有两种方法
1. 作为可执行程序
```bash
#!/bin/bash
echo 'hello world'
```
将上面的代码保存为 test.sh, 并 cd 到相应目录：
```bash
chmod +x ./test.sh # 使脚本具有执行权限 ,注意一定要写成./test.sh
 ./test.sh # 执行脚本
```

2. 作为解释器参数
* 这种运行方式是，直接运行解释器，其参数就是 shell 脚本的文件名，如：
```bash
/bin/sh test.sh
/bin/php test/php
```

## shell 变量
```bash
your_name="duruo.com" # 定义变量时，变量名不加美元符号， 
                      # 只能使用英文字母，数字和下划线，首个字符不能以数字开头；
                      # 变量名和等号之间不能有空格；
                      # 不能使用标点符号；
                      # 不能使用bash里的关键字（可用help命令查看保留关键字）。
    

# 除了显式地直接赋值，还可以用语句给变量赋值
for file in `ls /etc` # 将 /etc 下目录的文件名循环出来。
# 或
for file in $(ls /etc)


# 使用变量
your_name="duruo"
echo $your_name
echo ${your_name}  # 使用一个定义过的变量，只要在变量名前面加美元符号即可

# 变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界
for skill in Ada Coffe Action Java; do
    echo "I am good at ${skill}Script" # 写成echo "I am good at $skillScript"，解释器就会把$skillScript当成一个变量（其值为空）
done

# 已定义的变量，可以被重新定义
your_name="tom"
echo $your_name
your_name="alibaba" # 这样写是合法的，但注意，第二次赋值的时候不能写$your_name="alibaba"，使用变量的时候才加美元符（$）
echo $your_name


# 只读变量

#!/bin/bash
myUrl="http://www.google.com"
readonly myUrl   # 使用 readonly 命令可以将变量定义为只读变量，只读变量的值不能被改变。
myUrl="http://www.baidu.com" # 报错 /bin/sh: NAME: This variable is read only.


# 删除变量
unset variable_name # 使用 unset 命令可以删除变量 变量被删除后不能再次使用。unset 命令不能删除只读变量。

#!/bin/sh
myUrl="http://www.baidu.com"
unset myUrl
echo $myUrl # 执行将没有任何输出。
```

### 变量类型
运行shell时，会同时存在三种变量：

1. 局部变量 局部变量在脚本或命令中定义，仅在当前shell实例中有效，其他shell启动的程序不能访问局部变量。
2. 环境变量 所有的程序，包括shell启动的程序，都能访问环境变量，有些程序需要环境变量来保证其正常运行。必要的时候shell脚本也可以定义环境变量。
3. shell变量 shell变量是由shell程序设置的特殊变量。shell变量中有一部分是环境变量，有一部分是局部变量，这些变量保证了shell的正常运行

### Shell 字符串
字符串是shell编程中最常用最有用的数据类型（除了数字和字符串，也没啥其它类型好用了），字符串可以用单引号，也可以用双引号，也可以不用引号。单双引号的区别跟PHP类似。
```bash
str='this is a string' # 单引号字符串的限制：
                       # 单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的；
                       # 单引号字串中不能出现单独一个的单引号（对单引号使用转义符后也不行），但可成对出现，作为字符串拼接使用。

your_name='runoob'    # 双引号
str="Hello, I know you are \"$your_name\"! \n"
echo -e $str # 输出结果为：Hello, I know you are "runoob"! 
             # 双引号的优点
             # 双引号里可以有变量; 双引号里可以出现转义字符; 拼接字符串

# 使用双引号拼接
your_name="runoob"
greeting="hello, "$your_name" !"
greeting_1="hello, ${your_name} !"
echo $greeting  $greeting_1
# 输出结果为 hello, runoob ! hello, runoob !

# 使用单引号拼接
greeting_2='hello, '$your_name' !'
greeting_3='hello, ${your_name} !'
echo $greeting_2  $greeting_3
# 输出结果为： hello, runoob ! hello, ${your_name} !

# 获取字符串长度
string="abcd"
echo ${#string} #输出 4

# 提取子字符串
string="runoob is a great site"
echo ${string:1:4} # 从字符串第 2 个字符开始截取 4 个字符： 输出 unoo 

# 查找子字符串
string="runoob is a great site"
echo `expr index "$string" io`  # 查找字符 i 或 o 的位置(哪个字母先出现就计算哪个)：: 输出 4


#----------
# Shell 数组
# bash支持一维数组（不支持多维数组），并且没有限定数组的大小。

# 类似于 C 语言，数组元素的下标由 0 开始编号。获取数组中的元素要利用下标，下标可以是整数或算术表达式，其值应大于或等于 0。

# 定义数组
# 在 Shell 中，用括号来表示数组，数组元素用"空格"符号分割开。定义数组的一般形式为：

# 数组名=(值1 值2 ... 值n)

array_name=(value0 value1 value2 value3)
# 或者

array_name=(
value0
value1
value2
value3
)

# 还可以单独定义数组的各个分量：
array_name[0]=value0
array_name[1]=value1
array_name[n]=valuen # 可以不使用连续的下标，而且下标的范围没有限制。

# 读取数组

valuen=${array_name[n]} # ${数组名[下标]}

echo ${array_name[@]} # 使用 @ 符号可以获取数组中的所有元素

# 获取数组的长度
# 获取数组长度的方法与获取字符串长度的方法相同，例如：


length=${#array_name[@]} # 取得数组元素的个数
# 或者
length=${#array_name[*]}

lengthn=${#array_name[n]} # 取得数组单个元素的长度


# Shell 注释
# 以 # 开头的行就是注释，会被解释器忽略。

# 通过每一行加一个 # 号设置多行注释，像这样：

#--------------------------------------------
# 这是一个注释
# author：菜鸟教程
# site：www.runoob.com
# slogan：学的不仅是技术，更是梦想！
#--------------------------------------------
##### 用户配置区 开始 #####
#
#
# 这里可以添加脚本描述信息
# 
#
##### 用户配置区 结束  #####
# 如果在开发过程中，遇到大段的代码需要临时注释起来，过一会儿又取消注释，怎么办呢？

# 每一行加个#符号太费力了，可以把这一段要注释的代码用一对花括号括起来，定义成一个函数，没有地方调用这个函数，这块代码就不会执行，达到了和注释一样的效果。

# 多行注释
# 多行注释还可以使用以下格式：

:<<EOF
注释内容...
注释内容...
注释内容...
EOF
EOF 也可以使用其他符号:

:<<'
注释内容...
注释内容...
注释内容...
'

:<<!
注释内容...
注释内容...
注释内容...
!
```

## shell 传递参数
* 我们可以在执行 Shell 脚本时，向脚本传递参数，脚本内获取参数的格式为：$n。n 代表一个数字，1 为执行脚本的第一个参数，2 为执行脚本的第二个参数，以此类推……
```bash
#!/bin/bash
# 我们向脚本传递三个参数，并分别输出，其中 $0 为执行的文件名
echo "Shell 传递参数实例！";
echo "执行的文件名：$0";
echo "第一个参数为：$1";
echo "第二个参数为：$2";
echo "第三个参数为：$3"; 
# 输出结果如下所示：
$ ./test.sh 1 2 3
Shell 传递参数实例！
执行的文件名：./test.sh
第一个参数为：1
第二个参数为：2
第三个参数为：3


# 几个特殊字符用来处理参数：
参数处理	说明
$#	传递到脚本的参数个数
$*	以一个单字符串显示所有向脚本传递的参数。
    如"$*"用「"」括起来的情况、以"$1 $2 … $n"的形式输出所有参数。
$$	脚本运行的当前进程ID号
$!	后台运行的最后一个进程的ID号
$@	与$*相同，但是使用时加引号，并在引号中返回每个参数。
    如"$@"用「"」括起来的情况、以"$1" "$2" … "$n" 的形式输出所有参数。
$-	显示Shell使用的当前选项，与set命令功能相同。
$?	显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误。

#!/bin/bash

echo "Shell 传递参数实例！";
echo "第一个参数为：$1";

echo "参数个数为：$#";
echo "传递的参数作为一个字符串显示：$*";

# 输出结果如下所示：
$ ./test.sh 1 2 3
Shell 传递参数实例！
第一个参数为：1
参数个数为：3
传递的参数作为一个字符串显示：1 2 3

# $* 与 $@ 区别：

# 相同点：都是引用所有参数。
# 不同点：只有在双引号中体现出来。假设在脚本运行时写了三个参数 1、2、3，，则 " * " 等价于 "1 2 3"（传递了一个参数），而 "@" 等价于 "1" "2" "3"（传递了三个参数）。

#!/bin/bash

echo "-- \$* 演示 ---"
for i in "$*"; do
    echo $i
done

echo "-- \$@ 演示 ---"
for i in "$@"; do
    echo $i
done
# 输出结果如下所示：

$ chmod +x test.sh 
$ ./test.sh 1 2 3
-- $* 演示 ---
1 2 3
-- $@ 演示 ---
1
2
3
```

## shell 数组
* 数组中可以存放多个值。Bash Shell 只支持一维数组（不支持多维数组），初始化时不需要定义数组大小（与 PHP 类似）。

与大部分编程语言类似，数组元素的下标由0开始。

Shell 数组用括号来表示，元素用"空格"符号分割开，语法格式如下：
```bash
array_name=(value1 ... valuen)

实例
#!/bin/bash

my_array=(A B "C" D)

# 我们也可以使用下标来定义数组:
array_name[0]=value0
array_name[1]=value1
array_name[2]=value2

# 读取数组
# 读取数组元素值的一般格式是：
${array_name[index]}

#!/bin/bash

my_array=(A B "C" D)

echo "第一个元素为: ${my_array[0]}"
echo "第二个元素为: ${my_array[1]}"
echo "第三个元素为: ${my_array[2]}"
echo "第四个元素为: ${my_array[3]}"
# 结果如下所示：
$ ./test.sh
第一个元素为: A
第二个元素为: B
第三个元素为: C
第四个元素为: D
获取数组中的所有元素


# 使用@ 或 * 可以获取数组中的所有元素，例如：

#!/bin/bash

my_array[0]=A
my_array[1]=B
my_array[2]=C
my_array[3]=D

echo "数组的元素为: ${my_array[*]}"
echo "数组的元素为: ${my_array[@]}"
执行脚本，输出结果如下所示：

$ ./test.sh
数组的元素为: A B C D
数组的元素为: A B C D

# 获取数组的长度
# 获取数组长度的方法与获取字符串长度的方法相同，例如：

#!/bin/bash

my_array[0]=A
my_array[1]=B
my_array[2]=C
my_array[3]=D

echo "数组元素个数为: ${#my_array[*]}"
echo "数组元素个数为: ${#my_array[@]}"
# 结果如下所示：
$ ./test.sh
数组元素个数为: 4
数组元素个数为: 4
