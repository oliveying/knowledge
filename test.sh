#!/bin/bash

# set -e
echo "hello world"

#for file in `ls /webshot`

your_name="duruo"
echo $your_name
# myurl="http://baidu.com"
# readonly myurl
# myurl="abc"
# unset myurl

echo "$0"
echo "$1"
echo "$2"
echo "$3"
echo "$$"

echo '输入 1 到 4 之间的数字:'
echo '你输入的数字为:'
read aNum
read -p "pls enter youname :"
read -s -p 'pls enter you name'
read var1 var2 var3 
和你 一起 happy
echo $var1 $var2 $var3
case $aNum in
    1)  echo '你选择了 1'
    ;;
    2)  echo '你选择了 2'
    ;;
    3)  echo '你选择了 3'
    ;;
    4)  echo '你选择了 4'
    ;;
    *)  echo '你没有输入 1 到 4 之间的数字'
    ;;
esac

