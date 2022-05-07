## yapi-to-typescript 教程

### 安装
* 在非脚手架生成的项目中, 需先安装 yapi-to-typescript 
```bash
npm i yapi-to-typescript -D 或 yarn add yapi-to-typescript -D
```
* 使用命令行生成配置文件
```bash
npx ytt init -c ytt.config.ts 或 yarn ytt init -c ytt.config.ts
```
### 生成typescript文件
```bash
 yarn ytt -c ytt.config.ts || npx ytt -c ytt.config.ts
```

### 默认生成的配置文件如下
```ts
import { defineConfig } from 'yapi-to-typescript'

export default defineConfig([
  {
    serverUrl: 'http://foo.bar', // 改成公司自己的yapi地址
    typesOnly: false, //  我们不用ytt生成请求函数,这部分的官网描述空缺,仍需要调研,推荐暂时不要使用
    target: 'typescript',
    reactHooks: {
      enabled: false,
    },
    prodEnvName: 'production',
    outputFilePath: 'src/api/index.ts', // 这样会将所有类型文件全部写入，需要改成传入一个函数
    requestFunctionFilePath: 'src/api/request.ts',
    dataKey: 'data',
    projects: [
      {
        token: 'hello',
        categories: [
          {
            id: 0,
            getRequestFunctionName(interfaceInfo, changeCase) {
              // 以接口全路径生成请求函数名
              return changeCase.camelCase(interfaceInfo.path)

              // 若生成的请求函数名存在语法关键词报错、或想通过某个关键词触发 IDE 自动引入提示，可考虑加前缀，如:
              // return changeCase.camelCase(`api_${interfaceInfo.path}`)

              // 若生成的请求函数名有重复报错，可考虑将接口请求方式纳入生成条件，如:
              // return changeCase.camelCase(`${interfaceInfo.method}_${interfaceInfo.path}`)
            },
          },
        ],
      },
    ],
  },
])
```

### 配置教程
1. outputFilePath
```js
outputFilePath: (interfaceInfo) => {
  // interfaceInfo 记录了很多信息
  return `src/api-interface/${interfaceInfo._category.name}.ts`
}
```
2. getRequestDataTypeName: 获取请求数据类型的名称。

默认情况下,ytt会以接口路径的最后一个单词 + Request作为请求类型的名称,但这样重名的风险较大,所以,也需要我们进行一些改造
```js
getRequestDataTypeName: (interfaceInfo, changeCase) => {
  const requestArr = interfaceInfo.path.replace('.json', '').split('/');
  return changeCase.pascalCase(`${upperFirst(requestArr.length > 4 ? requestArr.slice(-3) : requestArr.slice(-2))}Req`);
},
```

3. getResponseDataTypeName: 响应数据的名称(同getRequestDataTypeName)

```js
getResponseDataTypeName: (interfaceInfo, changeCase) => {
  const requestArr = interfaceInfo.path.replace('.json', '').split('/');
  return changeCase.pascalCase(`${upperFirst(requestArr.length > 4 ? requestArr.slice(-3) : requestArr.slice(-2))}Res`);
},
```

4.  dataKey: 只关心哪个字段的数据

    一般情况下,我们只关注data字段内的数据, 至于code或message,我们并不关心他们的类型,所以需要将dataKey设置为data
1. Projects: 项目列表

    project是一个数组,可以同时爬取多个项目的类型
```js
projects: [
  {
    // token是每个项目设置中的token,是项目的唯一标识
    token: 'f09asjdklfjaslkdfjalksjdflkasjdflkasjdflk',
    categories: [
      {
        // id 想要拉取的分类id, 0为全部拉取, -xx为不想要拉取哪个分类
        id: [0, -2563],
      },
    ],
  },
],
```
token: yapi 进入设置 ---> 生成ts service ---> remoteUrl -> token

id: yapi 分类的URL cat_后面跟着的就是分类id
![22](./222.png)

> https://fjc0k.github.io/yapi-to-typescript/handbook/