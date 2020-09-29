## grep

* 输出超时时间到sss.txt 文件夹下，在哪里执行，输出到哪个目录
```bash
grep timeout common-error.log >sss.txt
```

* 输出超时时间的行号
```bash
grep timeout common-error.log | wc -l
```

* 输出 匹配的前后5行

```bash
 
$grep -5 'parttern' inputfile # 打印匹配行的前后5行
 
$grep -C 5 'parttern' inputfile # 打印匹配行的前后5行
 
$grep -A 5 'parttern' inputfile # 打印匹配行的后5行
 
$grep -B 5 'parttern' inputfile # 打印匹配行的前5行
```