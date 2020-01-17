## pm2需要全局安装
```bash
npm install -g pm2
# 或者
yarn global add pm2
```

2、进入项目根目录
2.1 启动进程/应用 pm2 start bin/www 或 pm2 start app.js

2.2 重命名进程/应用 pm2 start app.js --name wb123

2.3 添加进程/应用 watch pm2 start bin/www --watch

2.4 结束进程/应用 pm2 stop www

2.5 结束所有进程/应用 pm2 stop all

2.6 删除进程/应用 pm2 delete www

2.7 删除所有进程/应用 pm2 delete all

2.8 列出所有进程/应用 pm2 list

2.9 查看某个进程/应用具体情况 pm2 describe www

2.10 查看进程/应用的资源消耗情况 pm2 monit

2.11 查看pm2的日志 pm2 logs

2.12 若要查看某个进程/应用的日志,使用 pm2 logs www

2.13 重新启动进程/应用 pm2 restart www

2.14 重新启动所有进程/应用 pm2 restart all

pm2 start all 开启所有进程
pm2 stop all  停止所有进程
pm2 restart all  重启所有进程
pm2 start ecosystem.json 启动本地进程
pm2 delete ecosystem.json 删除进程