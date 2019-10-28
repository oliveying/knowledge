(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{289:function(n,e,t){"use strict";t.r(e);var r=t(0),a=Object(r.a)({},function(){var n=this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"linux下的tar压缩解压缩命令详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux下的tar压缩解压缩命令详解","aria-hidden":"true"}},[n._v("#")]),n._v(" Linux下的tar压缩解压缩命令详解")]),n._v(" "),t("h2",{attrs:{id:"tar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tar","aria-hidden":"true"}},[n._v("#")]),n._v(" tar")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("-c: 建立压缩档案 Create\n-x：解压 Extract\n-t：查看内容 List\n-r：向压缩归档文件末尾追加文件 Add/Replace\n-u：更新原压缩包中的文件 Update\n这五个是独立的命令，压缩解压都要用到其中一个，可以和别的命令连用但只能用其中一个。下面的参数是根据需要在压缩或解压档案时可选的。\n\n-z：有gzip属性的 \n-j：有bzip2属性的bz2\n-J: XZ\n--lzma: lzma\n-Z：有compress属性的\n-v：显示所有过程\n-O：将文件解开到标准输出\n\n下面的参数-f是必须的\n\n-f: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# tar -cf all.tar *.jpg")]),n._v("\n这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示产生新的包，-f指定包的文件名。\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# tar -rf all.tar *.gif")]),n._v("\n这条命令是将所有.gif的文件增加到all.tar的包里面去。-r是表示增加文件的意思。\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# tar -uf all.tar logo.gif")]),n._v("\n这条命令是更新原来tar包all.tar中logo.gif文件，-u是表示更新文件的意思。\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# tar -tf all.tar")]),n._v("\n这条命令是列出all.tar包中所有文件，-t是列出文件的意思\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# tar -xf all.tar")]),n._v("\n这条命令是解出all.tar包中所有文件，-t是解开的意思\n\n压缩\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("tar")]),n._v(" -cvf jpg.tar *.jpg //将目录里所有jpg文件打包成jpg.tar \n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("tar")]),n._v(" -czf jpg.tar.gz *.jpg   //将目录里所有jpg文件打包成jpg.tar后，并且将其用gzip压缩，生成一个gzip压缩过的包，命名为jpg.tar.gz\n\n "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("tar")]),n._v(" -cjf jpg.tar.bz2 *.jpg //将目录里所有jpg文件打包成jpg.tar后，并且将其用bzip2压缩，生成一个bzip2压缩过的包，命名为jpg.tar.bz2\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("tar")]),n._v(" -cZf jpg.tar.Z *.jpg   //将目录里所有jpg文件打包成jpg.tar后，并且将其用compress压缩，生成一个umcompress压缩过的包，命名为jpg.tar.Z\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("rar")]),n._v(" a jpg.rar *.jpg //rar格式的压缩，需要先下载rar "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("for")]),n._v(" linux\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("zip")]),n._v(" jpg.zip *.jpg //zip格式的压缩，需要先下载zip "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("for")]),n._v(" linux\n\n解压\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("tar")]),n._v(" -xvf file.tar //解压 tar包\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("tar")]),n._v(" -xzvf file.tar.gz //解压tar.gz\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("tar")]),n._v(" -xjvf file.tar.bz2   //解压 tar.bz2\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("tar")]),n._v(" -xZvf file.tar.Z   //解压tar.Z\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("unrar")]),n._v(" e file.rar //解压rar\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("unzip")]),n._v(" file.zip //解压zip\n\n总结\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v("、*.tar 用 "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("tar")]),n._v(" -xvf 解压\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("2")]),n._v("、*.gz 用 "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("gzip")]),n._v(" -d或者gunzip 解压\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3")]),n._v("、*.tar.gz和*.tgz 用 "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("tar")]),n._v(" -xzf 解压\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("4")]),n._v("、*.bz2 用 "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("bzip2")]),n._v(" -d或者用bunzip2 解压\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("5")]),n._v("、*.tar.bz2用tar -xjf 解压\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("6")]),n._v("、*.Z 用 uncompress 解压\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("7")]),n._v("、*.tar.Z 用tar -xZf 解压\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("8")]),n._v("、*.rar 用 "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("unrar")]),n._v(" e解压\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("9")]),n._v("、*.zip 用 "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("unzip")]),n._v(" 解压\n \n")])])]),t("p",[n._v("解压jdk到指定文件夹：")]),n._v(" "),t("p",[n._v("tar -xzvf jdk-8u131-linux-x64.tar.gz -C /usr/local/java")]),n._v(" "),t("p",[n._v("root@ubuntu:~# tar --help\n用法: tar [选项...] [FILE]...\nGNU 'tar' saves many files together into a single tape or disk archive, and can\nrestore individual files from the archive.")]),n._v(" "),t("p",[n._v("Examples:\ntar -cf archive.tar foo bar # Create archive.tar from files foo and bar.\ntar -tvf archive.tar # List all files in archive.tar verbosely.\ntar -xf archive.tar # Extract all files from archive.tar.")]),n._v(" "),t("p",[n._v("主操作模式:")]),n._v(" "),t("p",[n._v("-A, --catenate, --concatenate 追加 tar 文件至归档\n-c, --create 创建一个新归档\n-d, --diff, --compare 找出归档和文件系统的差异\n--delete 从归档(非磁带！)中删除\n-r, --append 追加文件至归档结尾\n-t, --list 列出归档内容\n--test-label 测试归档卷标并退出\n-u, --update 仅追加比归档中副本更新的文件\n-x, --extract, --get 从归档中解出文件")]),n._v(" "),t("p",[n._v("操作修饰符:")]),n._v(" "),t("p",[n._v("--check-device 当创建增量归档时检查设备号(默认)\n-g, --listed-incremental=FILE 处理新式的 GNU 格式的增量备份\n-G, --incremental 处理老式的 GNU 格式的增量备份\n--ignore-failed-read\n当遇上不可读文件时不要以非零值退出\n--level=NUMBER 所创建的增量列表归档的输出级别\n-n, --seek 归档可检索\n--no-check-device 当创建增量归档时不要检查设备号\n--no-seek 归档不可检索\n--occurrence[=NUMBER] 仅处理归档中每个文件的第 NUMBER\n个事件；仅当与以下子命令 --delete,\n--diff, --extract 或是 --list\n中的一个联合使用时，此选项才有效。而且不管文件列表是以命令行形式给出或是通过\n-T 选项指定的；NUMBER 值默认为 1\n--sparse-version=MAJOR[.MINOR]\n设置所用的离散格式版本(隐含\n--sparse)\n-S, --sparse 高效处理离散文件")]),n._v(" "),t("p",[n._v("重写控制:")]),n._v(" "),t("p",[n._v("-k, --keep-old-files don't replace existing files when extracting,\ntreat them as errors\n--keep-directory-symlink preserve existing symlinks to directories when\nextracting\n--keep-newer-files\n不要替换比归档中副本更新的已存在的文件\n--no-overwrite-dir 保留已存在目录的元数据\n--one-top-level[=DIR] create a subdirectory to avoid having loose files\nextracted\n--overwrite 解压时重写存在的文件\n--overwrite-dir 解压时重写已存在目录的元数据(默认)")]),n._v(" "),t("p",[n._v("--recursive-unlink 解压目录之前先清除目录层次\n--remove-files 在添加文件至归档后删除它们\n--skip-old-files don't replace existing files when extracting,\nsilently skip over them\n-U, --unlink-first 在解压要重写的文件之前先删除它们\n-W, --verify 在写入以后尝试校验归档")]),n._v(" "),t("p",[n._v("选择输出流:")]),n._v(" "),t("p",[n._v("--ignore-command-error 忽略子进程的退出代码\n--no-ignore-command-error\n将子进程的非零退出代码认为发生错误\n-O, --to-stdout 解压文件至标准输出\n--to-command=COMMAND\n将解压的文件通过管道传送至另一个程序")]),n._v(" "),t("p",[n._v("操作文件属性:")]),n._v(" "),t("p",[n._v("--atime-preserve[=METHOD]\n在输出的文件上保留访问时间，要么通过在读取(默认\nMETHOD=‘replace’)后还原时间，要不就不要在第一次(METHOD=‘system’)设置时间\n--clamp-mtime only set time when the file is more recent than\nwhat was given with --mtime\n--delay-directory-restore\n直到解压结束才设置修改时间和所解目录的权限\n--group=名称 强制将 NAME\n作为所添加的文件的组所有者\n--mode=CHANGES 强制将所添加的文件(符号)更改为权限\nCHANGES\n--mtime=DATE-OR-FILE 从 DATE-OR-FILE 中为添加的文件设置\nmtime\n-m, --touch 不要解压文件的修改时间\n--no-delay-directory-restore\n取消 --delay-directory-restore 选项的效果\n--no-same-owner\n将文件解压为您所有(普通用户默认此项)\n--no-same-permissions\n从归档中解压权限时使用用户的掩码位(默认为普通用户服务)\n--numeric-owner 总是以数字代表用户/组的名称\n--owner=名称 强制将 NAME\n作为所添加的文件的所有者\n-p, --preserve-permissions, --same-permissions\n解压文件权限信息(默认只为超级用户服务)\n--preserve 与 -p 和 -s 一样\n--same-owner\n尝试解压时保持所有者关系一致(超级用户默认此项)\n-s, --preserve-order, --same-order\nmember arguments are listed in the same order as\nthe files in the archive\n--sort=ORDER directory sorting order: none (default), name or\ninode")]),n._v(" "),t("p",[n._v("Handling of extended file attributes:")]),n._v(" "),t("p",[n._v("--acls Enable the POSIX ACLs support\n--no-acls Disable the POSIX ACLs support\n--no-selinux Disable the SELinux context support\n--no-xattrs Disable extended attributes support\n--selinux Enable the SELinux context support\n--xattrs Enable extended attributes support\n--xattrs-exclude=MASK specify the exclude pattern for xattr keys\n--xattrs-include=MASK specify the include pattern for xattr keys")]),n._v(" "),t("p",[n._v("设备选择和切换:")]),n._v(" "),t("p",[n._v("-f, --file=ARCHIVE 使用归档文件或 ARCHIVE 设备\n--force-local\n即使归档文件存在副本还是把它认为是本地归档\n-F, --info-script=名称, --new-volume-script=名称\n在每卷磁带最后运行脚本(隐含 -M)\n-L, --tape-length=NUMBER 写入 NUMBER × 1024 字节后更换磁带\n-M, --multi-volume 创建/列出/解压多卷归档文件\n--rmt-command=COMMAND 使用指定的 rmt COMMAND 代替 rmt\n--rsh-command=COMMAND 使用远程 COMMAND 代替 rsh\n--volno-file=FILE 使用/更新 FILE 中的卷数")]),n._v(" "),t("p",[n._v("设备分块:")]),n._v(" "),t("p",[n._v("-b, --blocking-factor=BLOCKS 每个记录 BLOCKS x 512 字节\n-B, --read-full-records 读取时重新分块(只对 4.2BSD 管道有效)\n-i, --ignore-zeros 忽略归档中的零字节块(即文件结尾)\n--record-size=NUMBER 每个记录的字节数 NUMBER，乘以 512")]),n._v(" "),t("p",[n._v("选择归档格式:")]),n._v(" "),t("p",[n._v("-H, --format=FORMAT 创建指定格式的归档")]),n._v(" "),t("p",[n._v("FORMAT 是以下格式中的一种:")]),n._v(" "),t("p",[n._v("gnu GNU tar 1.13.x 格式\noldgnu GNU 格式 as per tar <= 1.12\npax POSIX 1003.1-2001 (pax) 格式\nposix 等同于 pax\nustar POSIX 1003.1-1988 (ustar) 格式\nv7 old V7 tar 格式")]),n._v(" "),t("p",[n._v("--old-archive, --portability\n等同于 --format=v7\n--pax-option=关键字[[:]=值][,关键字[[:]=值]]...\n控制 pax 关键字\n--posix 等同于 --format=posix\n-V, --label=TEXT 创建带有卷名 TEXT\n的归档；在列出/解压时，使用 TEXT\n作为卷名的模式串")]),n._v(" "),t("p",[n._v("压缩选项:")]),n._v(" "),t("p",[n._v("-a, --auto-compress 使用归档后缀名来决定压缩程序\n-I, --use-compress-program=PROG\n通过 PROG 过滤(必须是能接受 -d\n选项的程序)\n-j, --bzip2 通过 bzip2 过滤归档\n-J, --xz 通过 xz 过滤归档\n--lzip 通过 lzip 过滤归档\n--lzma 通过 xz 过滤归档\n--lzop 通过 xz 过滤归档\n--no-auto-compress 不使用归档后缀名来决定压缩程序\n-z, --gzip, --gunzip, --ungzip 通过 gzip 过滤归档\n-Z, --compress, --uncompress 通过 compress 过滤归档")]),n._v(" "),t("p",[n._v("本地文件选择:")]),n._v(" "),t("p",[n._v("--add-file=FILE 添加指定的 FILE 至归档(如果名字以 -\n开始会很有用的)\n--backup[=CONTROL] 在删除前备份，选择 CONTROL 版本\n-C, --directory=DIR 改变至目录 DIR\n--exclude=PATTERN 排除以 PATTERN 指定的文件\n--exclude-backups 排除备份和锁文件\n--exclude-caches 除标识文件本身外，排除包含\nCACHEDIR.TAG 的目录中的内容\n--exclude-caches-all 排除包含 CACHEDIR.TAG 的目录\n--exclude-caches-under 排除包含 CACHEDIR.TAG\n的目录中所有内容\n--exclude-ignore=FILE read exclude patterns for each directory from\nFILE, if it exists\n--exclude-ignore-recursive=FILE\nread exclude patterns for each directory and its\nsubdirectories from FILE, if it exists\n--exclude-tag=FILE 除 FILE 自身外，排除包含 FILE\n的目录中的内容\n--exclude-tag-all=FILE 排除包含 FILE 的目录\n--exclude-tag-under=FILE 排除包含 FILE 的目录中的所有内容\n--exclude-vcs 排除版本控制系统目录\n--exclude-vcs-ignores read exclude patterns from the VCS ignore files\n-h, --dereference\n跟踪符号链接；将它们所指向的文件归档并输出\n--hard-dereference\n跟踪硬链接；将它们所指向的文件归档并输出\n-K, --starting-file=MEMBER-NAME\nbegin at member MEMBER-NAME when reading the\narchive\n--newer-mtime=DATE 当只有数据改变时比较数据和时间\n--no-null 禁用上一次的效果 --null 选项\n--no-recursion 避免目录中的自动降级\n--no-unquote do not unquote input file or member names\n--null -T 读取以空终止的名字，-C 禁用\n-N, --newer=DATE-OR-FILE, --after-date=DATE-OR-FILE\n只保存比 DATE-OR-FILE 更新的文件\n--one-file-system 创建归档时保存在本地文件系统中\n-P, --absolute-names don't strip leading '/'s from file names\n--recursion 目录递归(默认)\n--suffix=STRING 在删除前备份，除非被环境变量\nSIMPLE_BACKUP_SUFFIX\n覆盖，否则覆盖常用后缀(‘’)\n-T, --files-from=FILE 从 FILE\n中获取文件名来解压或创建文件\n--unquote unquote input file or member names (default)\n-X, --exclude-from=FILE 排除 FILE 中列出的模式串")]),n._v(" "),t("p",[n._v("文件名变换:")]),n._v(" "),t("p",[n._v("--strip-components=NUMBER 解压时从文件名中清除 NUMBER\n个引导部分\n--transform=EXPRESSION, --xform=EXPRESSION\n使用 sed 代替 EXPRESSION\n来进行文件名变换")]),n._v(" "),t("p",[n._v("文件名匹配选项(同时影响排除和包括模式串):")]),n._v(" "),t("p",[n._v("--anchored 模式串匹配文件名头部\n--ignore-case 忽略大小写\n--no-anchored patterns match after any '/' (default for\nexclusion)\n--no-ignore-case 匹配大小写(默认)\n--no-wildcards 逐字匹配字符串\n--no-wildcards-match-slash wildcards do not match '/'\n--wildcards 使用通配符(默认对 exclusion )\n--wildcards-match-slash wildcards match '/' (default for exclusion)")]),n._v(" "),t("p",[n._v("提示性输出:")]),n._v(" "),t("p",[n._v("--checkpoint[=NUMBER] 每隔 NUMBER\n个记录显示进度信息(默认为 10 个)\n--checkpoint-action=ACTION 在每个检查点上执行 ACTION\n--full-time 按文件原本时间格式打印\n--index-file=FILE 将详细输出发送至 FILE\n-l, --check-links\n只要不是所有链接都被输出就打印信息\n--no-quote-chars=STRING 禁用来自 STRING 的字符引用\n--quote-chars=STRING 来自 STRING 的额外的引用字符\n--quoting-style=STYLE 设置名称引用风格；有效的 STYLE\n值请参阅以下说明\n-R, --block-number 每个信息都显示归档内的块数\n--show-defaults 显示 tar 默认选项\n--show-omitted-dirs\n列表或解压时，列出每个不匹配查找标准的目录\n--show-snapshot-field-ranges\nshow valid ranges for snapshot-file fields\n--show-transformed-names, --show-stored-names\n显示变换后的文件名或归档名\n--totals[=SIGNAL] 处理归档后打印出总字节数；当此\nSIGNAL 被触发时带参数 -\n打印总字节数；允许的信号为:\nSIGHUP，SIGQUIT，SIGINT，SIGUSR1 和\nSIGUSR2；同时也接受不带 SIG\n前缀的信号名称\n--utc 以 UTC 格式打印文件修改时间\n-v, --verbose 详细地列出处理的文件\n--warning=KEYWORD 警告控制:\n-w, --interactive, --confirmation\n每次操作都要求确认")]),n._v(" "),t("p",[n._v("兼容性选项:")]),n._v(" "),t("p",[n._v("-o 创建归档时，相当于\n--old-archive；展开归档时，相当于\n--no-same-owner")]),n._v(" "),t("p",[n._v("其它选项:")]),n._v(" "),t("p",[n._v("-?, --help 显示此帮助列表\n--restrict 禁用某些潜在的有危险的选项\n--usage 显示简短的用法说明\n--version 打印程序版本")]),n._v(" "),t("p",[n._v("长选项和相应短选项具有相同的强制参数或可选参数。")]),n._v(" "),t("p",[n._v("The backup suffix is '~', unless set with --suffix or SIMPLE_BACKUP_SUFFIX.\nThe version control may be set with --backup or VERSION_CONTROL, values are:")]),n._v(" "),t("p",[n._v("none, off never make backups\nt, numbered make numbered backups\nnil, existing numbered if numbered backups exist, simple otherwise\nnever, simple always make simple backups")]),n._v(" "),t("p",[n._v("--quoting-style 选项的有效参数为:")]),n._v(" "),t("p",[n._v("literal\nshell\nshell-always\nc\nc-maybe\nescape\nlocale\nclocale")]),n._v(" "),t("p",[n._v("此 tar 默认为:\n--format=gnu -f- -b20 --quoting-style=escape --rmt-command=/usr/lib/tar/rmt\n--rsh-command=/usr/bin/rsh")])])}],!1,null,null,null);e.default=a.exports}}]);