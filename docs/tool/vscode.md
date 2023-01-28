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


## 如何开发一个vscode插件
官网API：https://code.visualstudio.com/api/extension-guides/overview

开发背景
在C端Web项目React化重构过程中，前端开发人员需要编写大量的css，css中存在很多背景、字体、边框等十六进制颜色，往往需要开发人员将颜色转换成@tyc-pc组件库中对应的主题变量，这样或多或少的需要研发人员花费一些时间检索该色值相对应的变量。本文主要基于这个极小的功能点，进行插件开发，从而来阐述vscode插件的开发流程，这样前端开发人员只需要撰写设计人员提供的颜色，通过插件来实现主题变量的自动转换。
### 一、实现目标

由#0084ff 转换为 @color-primarys
### 二、环境安装
```bash
npm i -g yo generator-code // 官方插件开发脚手架
yo code // 执行脚手架命令，初始化项目
# 选择扩展程序类型
# ? What type of extension do you want to create? New Extension (TypeScript)
# 填写扩展程序名称
# ? What's the name of your extension? HelloWorld
### Press <Enter> to choose default for all options below ###

# 你的扩展程序的标识符是什么？（默认插件名称）
# ? What's the identifier of your extension? helloworld
# 你的扩展程序的描述是什么？
# ? What's the description of your extension? LEAVE BLANK
# 是否初始化一个git仓库？
# ? Initialize a git repository? Yes
# 是否将源代码与webpack捆绑在一起？
# ? Bundle the source code with webpack? No
# 使用哪个包管理器
# ? Which package manager to use? npm
# 是否要使用VSCode打开文件夹（这步可跳过）
# ? Do you want to open the new folder with Visual Studio Code? Open with `code`

```

### 三、创建模版
可以选择自己喜欢的语言 Javascript 或者 TypeScript 。
* 扩展程序类型
```
New Extension (TypeScript)
New Extension (JavaScript)
New Color Theme
New Language Support
New Code Snippets
New Keymap
New Extension Pack
New Language Pack (Localization)
New Web Extension (TypeScript)
New Notebook Renderer (TypeScript)

```
* 包管理器

npm

yarn

pnpm
### 四、项目结构
* 文件目录
* 使用命令`tree -I "node_modules|test|.git" -a`打印文件夹目录
```
.
├── .eslintrc.json
├── .gitignore
├── .vscode
│   ├── extensions.json
│   ├── launch.json // 用于启动和调试插件的配置
│   ├── settings.json
│   └── tasks.json // 用于编译TypeScript的构建任务的配置
├── .vscodeignore
├── CHANGELOG.md
├── README.md // 插件文档描述
├── package-lock.json
├── package.json // 插件清单
├── src
│   └── extension.ts // 插件源代码
├── tsconfig.json // TypeScript配置
└── vsc-extension-quickstart.md
```

主要的两个文件为 package.json 和 extension.ts 。文件 extension.ts 作为代码主函数，主要实现自定义插件功能，文件 package.json 用于插件的配置和描述。

* （1）package.json
main 指定了插件的入口函数，contributes 和 activationEvents 分别描述的插件的扩展点和触发事件。contributes（扩展点）用于定义插件要扩展 vscode 哪部分功能；vscode 暴露出多个扩展点，包括 commands（命令面板）、configuration （配置模板）、keybindings（键盘命令）等。activationEvents（触发事件）用于定义插件何时执行，当指定的事件发生时插件才会执行。

* （2）extension.ts

新建项目默认会注册 vs-demo.helloWord 命令，并在 src/extension.ts 进行了实现，当用户执行该命令时弹框消息 Hello Word from vs-demo!
使用commands.registerCommand，VS Code API将函数绑定到已注册的命令vscode-cj.helloWorld。


### 五、调试

默认工程已经配置了调试参数，只需要点击 Run Extension 即可，此时会新建一个vscode窗口，用于代码的调试。我们按下快捷键 command + shift + P ，输入 vs-demo.helloWorld 即可看到我们编写的插件了，选中我们的插件，即可发现右下角的弹窗 Hello World from vs-demo!


### 六、实战
实现css十六进制颜色转换成组件库变量功能
（1）定义命令和快捷键
命令： vscode-cj.matchColor 、快捷键： command + R + U 
* keybindings
提供一个键绑定规则，定义当用户按下组合键时应该调用什么命令。参考Key Bindings，其中详细解析了键绑定。

 注意：因为VSCode运行在不同平台上，修饰符不同，你可以使用“key”来设置默认的组合键，并用特定的平台覆盖它

注意：当调用命令时，VS Code将发出一个activationEvent onCommand:${command}

```json
{
  "contributes": {
    "keybindings": [
      {
        "command": "extension.sayHello",
        "key": "ctrl+f1", /** Windows、Linux */
        "mac": "cmd+f1",  /** macOS */
        "when": "editorTextFocus" /** 文本聚焦时  */
      }
    ]
  }
}
```
键盘规则

key 按下的键

commad 要执行的命令的标识符

when 可选的when子句，其中包含将根据当前上下文进行评估的布尔表达式

（2）代码实现
插件入口文件extension.ts导出两个函数：activate和deactivate。activate在你注册的激活事件发生时执行，而deactivate让你可以在你的插件被停用或卸载之前进行一些清理操作。
```js
export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('vscode-cj.matchColor', () => {
    // The code you place here will be executed every time your command is executed
    const editor = vscode.window.activeTextEditor;
  
    const folderUri = vscode.workspace.rootPath;
    const colorPath = '/node_modules/@ll-pc/common-less/color.less';

    if (editor) {
      const res: {
        [props: string]: string[]
      } = {};
      const document = editor.document;
      const selection = editor.selection;
      
      // Get the word within the selection
      let word = document.getText(selection);
      if (word) {
        if (word.indexOf('#') === -1 || (word.length !== 4 && word.length !== 7)) {
          vscode.window.showInformationMessage('选中颜色格式不对');
          return;
        }
        if (word.length === 4) {
          const a = word.split('');
          word = `${a[0]}${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}`;
        }

        fs.readFile(`${folderUri}${colorPath}`, 'utf8', (a: any, content: string) => { 
          if (a) { 
           vscode.window.showInformationMessage('fail: ', a) 
           return;
          }
          const lines = content.split('\n');
          const colorLines = lines.filter((item: string) => (item.indexOf('//') === -1 && item.indexOf('#') > -1)) || [];
    
          if (colorLines.length) {
            colorLines.forEach(element => {
              const newStr = rmWhitespace(element)
              const values = newStr.match(/(@.*):|#(.*);/g) || [];
              let key = values[1].toUpperCase();
              let val = values[0];
    
              key = key.substr(0, key.length - 1);  
              val = val.substr(0, val.length - 1);  
    
              if (res[key]) {
                res[key].push(val);
              } else {
                res[key] = [];
                res[key].push(val);
              }
            });
            
            const source = res[word.toUpperCase()];
            if (source) {
              try {       
                editor.edit(editBuilder => {
                  editBuilder.replace(selection, source.toString());
                });
              } catch (error) {
                // console.log(error);
              }
            } else {
              vscode.window.showInformationMessage('color配置不存在!');
            }
          }
        });
      }
    }
  });

  context.subscriptions.push(disposable);
}
```
* （3）本地发布
```bash
vsce package // 执行后，将会在根目录生成vscode-cj-0.0.1.vsix文件。
```

最后，在vscode扩展应用中进行导入，这样该插件功能便开发完成了。


### 与Marketplace相关的字段
此外，还有README.md
```json
  "displayName": "Word Count",
  "description": "Markdown Word Count Example - reports out the number of words in a Markdown file.",
```
```json
{
  "icon": "images/icon.png",
  "galleryBanner": {
    "color": "#C80000",
    "theme": "dark"
  }
}
{
  "license": "SEE LICENSE IN LICENSE.txt",
  "homepage": "https://github.com/microsoft/vscode-wordcount/blob/main/README.md",
  "bugs": {
    "url": "https://github.com/microsoft/vscode-wordcount/issues",
    "email": "sean@contoso.com"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/microsoft/vscode-wordcount.git"
  }
}
```
```json
{
  "categories": ["Linters", "Programming Languages", "Other"]
}
```

### 插件卸载钩子
VS Code完全卸载插件时执行此脚本（即在卸载程序后重新启动VSCode时），只支持Node.js脚本
```bash
{
  "scripts": {
    "vscode:uninstall": "node ./out/src/lifecycle"
  }
}
```
https://github.com/JQChan/jqchan.github.io/issues/31