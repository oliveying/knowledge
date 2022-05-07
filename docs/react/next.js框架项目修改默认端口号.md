### next.js框架项目修改默认端口号
creat-react-app生成的项目默认端口号是3000
next.js按文档生成的项目默认也是3000

可以做如下更改

```json
  "scripts": {
      "dev": "next dev",
      "dev": "next dev -p 3001",  // 自定义端口号
      "start": "react-scripts start",
      "start": "set PORT=9000 && react-scripts start"  // 自定义端口号
}
```
