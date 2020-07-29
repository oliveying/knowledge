## grep

* 输出超时时间到sss.txt 文件夹下，在哪里执行，输出到哪个目录
```bash
grep timeout common-error.log >sss.txt
```

* 输出超时时间的行号
```bash
grep timeout common-error.log | wc -l
```