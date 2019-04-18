## 统计test.txt的行数

**wc -l test.txt**

* 扩展
wc [-clw][--help][--version][文件...]
参数：
    ```
    -c或--bytes或--chars 只显示Bytes数。
    -l或--lines 只显示行数。
    -w或--words 只显示字数。
    --help 在线帮助。
    --version 显示版本信息。
    ```

        $ wc testfile           # testfile文件的统计信息
           3 92 598 testfile       # testfile文件的行数为3、单词数92、字节数598
        $ wc testfile testfile_1 testfile_2  #统计三个文件的信息


### 查看线上日志

           tail -f -n 100 /data1/jenkins/workspace/logs/common-error.log

## 配置host

1. control+space  打开spotlight, 搜索“terminal”
2. 打开Terminal
3. 在terminal界面中输入: sudo vi /etc/hosts   然后回车
4. 会提示让你输入密码 XXXX.（注意输入密码时你看不到＊号）
5. 输入成功以后，在出现的界面中按e，转入编辑模式
6. 输入你要设定的hosts内容，比如：127.0.0.1  api.f.com
7. 输入完毕，如果要保存退出，按[esc]，再输入:wq!（注意：包含前面的冒号和后面的感叹号），再按[enter]，hosts就保存生效了。

* 为了避免错误，最好是再清除一次浏览器的cache。

## curl
