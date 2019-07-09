#!/bin/bash
# author:xysong
# url: xysong.github.io

echo "Shell 传递参数实例 ！";
echo "第一个参数为： $1";
echo "第二个参数为： $2";
echo "第三个参数为： $3";
echo "参数个数为： $#";
echo "传递的参数以字符串显示： $*";
echo "脚本运行的当前ID： $$";
echo "后台运行的最后进程的ID： $!";
echo "在引号中返回每个参数： $@";
echo "显示shell使用的当前选项，与set命令功能相同： $-";
echo "显示最后命令推出状态。0：没有错误，其他任何值标明有错误： $?";

i_name="xysong"
echo $i_name
echo ${i_name}

my_name="xysong"
echo "my name is ${my_name} xixixi"
echo "my name is "${my_name}"xixixi"
echo "my name is "${#my_name}"xixixi"
echo "my name is "${#my_name}"xixixi"


str="hello,xysong"
# echo `expr index "$str" ,`

array_name=(
value0
value1
value2
value3
)
echo ${array_name[1]}
echo ${array_name[@]}
echo ${#array_name[*]}
echo ${#array_name[n]}

val=`expr $a + $b`
echo "a + b : $val"
val=`expr $a - $b`
echo "a - b : $val"
val=`expr $a \* $b`
echo "a * b : $val"
val=`expr $b / $a`
echo "b / a : $val"
val=`expr $b % $a`
echo "b % a : $val"