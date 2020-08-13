# 在OS X系统下安装redis

## 安装homebrew
非常简单 直接在mac终端执行命令行
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

```

* 测试：
输入 `brew -v`  可看到版本号，说明安装成功。
之前安装过homebrew，需要执行`homebrew update`来更新，以便安装较新版的redis

```bash
brew install redis
```


```bash
## 开机启动redis命令 
$ ln -sfv /usr/local/opt/redis/*.plist ~/Library/LaunchAgents

# 使用launchctl启动redis server 
$ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.redis.plist

# 使用配置文件启动redis server 
$ redis-server /usr/local/etyoc/redis.conf

# 停止redis server的自启动 
$ launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.redis.plist

# redis 配置文件的位置 
/usr/local/etc/redis.conf

# 卸载redis和它的文件 
 rm ~/Library/LaunchAgents/homebrew.mxcl.redis.plist

# 测试redis server是否启动 
$ redis-cli ping
```

## redis 插件， 可以先在github查找node redis相关