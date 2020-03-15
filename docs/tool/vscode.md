# vscode 问题
## 解决Mac下VSCode打开zsh乱码

1. 乱码问题
iTerm2终端使用Zsh，并且配置Zsh主题，该主题主题需要安装字体来支持箭头效果，在iTerm2中设置这个字体，但是VSCode里这个箭头还是显示乱码。

2. 解决方案
2.1 字体
在字体册查找是否已经安装Meslo LG M for Powerline字体，如果未安装就安装一下。

2.2 VSCode中配置
使用⌘,打开settings界面,搜索terminal,在Font Family中添加字体Meslo LG M for Powerline
![vscode setting](./images/vscode.png)

也可以在VSCode的settings.json文件，加入 : "terminal.integrated.fontFamily": "Meslo LG M for Powerline",

> 字体下载链接 https://www.cnblogs.com/HelloDeveloper/articles/11387637.html
> 字体库 https://github.com/powerline/fonts

## vscode格式化快捷键

shift+option+f