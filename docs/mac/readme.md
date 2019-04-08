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