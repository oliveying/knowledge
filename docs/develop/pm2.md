## pm2需要全局安装
* 安装pm2 

```bash
npm install -g pm2
# 或者
yarn global add pm2
```

* 升级pm2
```bash
npm install pm2@latest -g
# 或者
pm2 update

```

2、进入项目根目录
2.1 启动进程/应用 `pm2 start bin/www` 或 `pm2 start app.js`

2.2 重命名进程/应用 `pm2 start app.js --name wb123`

2.3 添加进程/应用 watch `pm2 start bin/www --watch`

2.4 结束进程/应用 `pm2 stop www`

2.5 结束所有进程/应用 `pm2 stop all`

2.6 删除进程/应用 `pm2 delete www`

2.7 删除所有进程/应用 `pm2 delete all`

2.8 列出所有进程/应用 `pm2 list`

2.9 查看某个进程/应用具体情况 `pm2 describe www`

2.10 查看进程/应用的资源消耗情况 `pm2 monit`

2.11 查看pm2的日志 `pm2 logs`

2.12 若要查看某个进程/应用的日志,使用 `pm2 logs www`

2.13 重新启动进程/应用 `pm2 restart www`

2.14 重新启动所有进程/应用 `pm2 restart all`

2.15 显示日志管理命令 `pm2 logs -h`

`pm2 start all` 开启所有进程
`pm2 stop all`  停止所有进程
`pm2 restart all`  重启所有进程
`pm2 start ecosystem.json` 启动本地进程
`pm2 restart ecosystem.json` 重启启动本地进程
`pm2 delete ecosystem.json` 删除进程

## pm2 应用

```js
const http = require('http');

http.createServer(function(req, res) {
    res.end('hello world!');
}).listen(3000);
```

运行程序`node index.js`，如果控制台关闭了，程序也就关闭了

使用 `pm2 start index.js`，控制台关闭窗口也可以访问

使用 `pm2 start index.js --watch`， 想实时修改文件，可以在启动程序时带上参数。

* restart 和reload区别
reload一般只是从新读取一次配置文件。

restart则是把进程停掉，从头启动一次。

restart自然也就reload了。

但是对于大型服务，restart可能不方便

## 进程文件
PM2授权您的工作流程管理。它允许您通过流程文件对每个应用程序的行为、选项、环境变量、日志文件进行微调。它特别适用于基于微服务的应用程序。配置格式支持JavaScript、JSON、YAML。

* 创建一个示例的进程文件
`pm2 ecosystem`

```js
module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'API',
      script    : 'app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

    // Second application
    {
      name      : 'WEB',
      script    : 'web.js'
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/development',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
```
## 配置超时时间
```bash
pm2 start app.js --kill-timeout 3000
# 或者js中增加
{
  "apps" : [{
    "name"         : "api",
    "script"       : "app.js",
    "kill_timeout" : 3000
  }]
}
##     "listen_timeout" : 3000


```

## 运行环境管理
* 定义不同环境
```js
module.exports = {
  apps : [
      {
        name: "myapp",
        script: "./app.js",
        watch: true,
        env: {
            "PORT": 3000,
            "NODE_ENV": "development"
        },
        env_production: {
            "PORT": 80
            "NODE_ENV": "production",
        }
      }
  ]
}

```
## 日志管理

显示日志管理命令
`pm2 logs -h`

显示所有的应用程序的日志
`pm2 logs`

仅仅显示api应用程序的日志
`pm2 logs api`

显示1000行的应用程序日志
`pm2 logs big-api --lines 1000`

显示json格式的日志
`pm2 logs --json`

查看转换时间格式的日志
`pm2 logs --format`

刷新日志
`pm2 flush`

重载所有日志
`pm2 reloadLogs`

启动时日志配置
`pm2 start echo.js --merge-logs --log-date-format="YYYY-MM-DD HH:mm Z"`
或者
```json
{
  "script"          : "echo.js",
  "error_file"      : "err.log",
  "out_file"        : "out.log",
  "merge_logs"      : true,
  "log_date_format" : "YYYY-MM-DD HH:mm Z"
}
```

关闭日志
使用 `--merge-logs` 参数关闭 文件输出日志
或者
```json

{
  "out_file": "/dev/null",
  "error_file": "/dev/null"
}
```

## 更新pm2
```bash
保存当前的进程信息
```

## 开机启动
开机启动指的是pm2开机启动

```bash
# linux系统的开机启动
# 必备条件

systemd: Ubuntu >= 16, CentOS >= 7, Arch, Debian >= 7
upstart: Ubuntu <= 14
launchd: Darwin, MacOSx
openrc: Gentoo Linux, Arch Linux
rcd: FreeBSD
systemv: Centos 6, Amazon Linux
PM2 > 2.2.x

```
* 创建开机启动脚本文件
`pm2 startup`
* 禁止开机启动
`pm2 unstartup`
* 用户权限的开机启动
`pm2 startup ubuntu -u www --hp /home/ubuntu`

## 监听与重启

```bash
pm2 start app.js --watch
# 或者
{
  "watch": ["server", "client"],
  "ignore_watch" : ["node_modules", "client/img"],
  "watch_options": {
    "followSymlinks": false
  }
}
```
* 停止监听
`pm2 stop --watch 0`

## 网站域名配置
编写好了一个node.js应用，总不能使用ip加端口访问吧。

使用nginx反向代理功能来配置网站域名。

编辑nginx配置文件，在server代码块加入以下代码，注意需要根据你的域名和ip来对应修改。
```conf
upstream my_nodejs_upstream {
    server 127.0.0.1:3001;
    keepalive 64;
}

server {
    listen 80;
    server_name www.haowen100.com;
    root /home/www/project_root;
    
    location / {
    	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    	proxy_set_header Host $http_host;
    	proxy_set_header X-NginX-Proxy true;
    	proxy_http_version 1.1;
    	proxy_set_header Upgrade $http_upgrade;
    	proxy_set_header Connection "upgrade";
    	proxy_max_temp_file_size 0;
    	proxy_pass http://my_nodejs_upstream/;
    	proxy_redirect off;
    	proxy_read_timeout 240s;
    }
}
```
`127.0.0.1:3001` 这里修改为你的应用访问地址（ip:端口）

`www.haowen100.com` 这里修改为你的域名

`/home/www/project_root` 这里改为你的nginx放程序代码的位置。

配置好后重启nginx，访问域名查看一下，确保nginx配置成功。

> [参考](https://www.kancloud.cn/daiji/pm2/395276)