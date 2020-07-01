# 安装nginx
1. 打开终端，安装command Line tools

```bash
xcode-select --install
```

2. 安装brew命令
```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

```

3. 安装nginx

```bash
brew install nginx
```
4. 启动nginx
```bash
sudo nginx
```
OK, nginx就安装好了，可以在浏览器访问了，默认端口为8080，

在浏览器输入 http://localhost:8080/ 就能看到nginx在本计算机搭建的服务器

8080是nginx自带的默认网站设置的端口，

现在我们自己来创建一个网站，设置端口和映射路径

5、自定义网站和端口

5.1 创建网站，编写几个测试网页




## 修改nginx配置，找到nginx配置的地方
```bash
/usr/local/etc/nginx 
# 或者
/etc/nginx
```