## 配置项目开始
---
 ### 一.创建项目文件

   1).`src`文件夹                     --------------- 项目工程目录

    ```txt
      1>.api 文件夹                 --------------- 外部文件引入存放文件夹
      2>.assets 文件夹              --------------- 原生资源存放,图片css等
      3>.config 文件夹              --------------- 配置项文件存放地 
      4>.example 文件夹             --------------- 测试案例
      5>.template 文件夹            --------------- 模板样式文件夹
      6>.tools 文件夹               --------------- 驱动类型资源文件
      7>.utils 文件夹               --------------- 工具类
      8>.index.ts 文件              --------------- 入口index文件
         ```

   2).`build`文件夹                   --------------- webpack构建目录

>      webpack.config.js文件配置项     --------------- webpack工程化,文件配置对象;

   3).`typings`文件夹                 --------------- ts  类型文件

   4).加载配置项json文件              --------------- node ts 配置项文件

>     1>.配置node工程初始化                npm init -y
           1. description 写文件描述;
           2. license: 使用MIT协议
           3. author:随意
           4. keywords:关键字,随意
           5. name:项目工程名称,(默认)
           6. main: 主入口:写你工程主入口 
           7. scripts:环境配置对象;
           --- 配置start 和build 属性;
         
```javascript
      {
      "name": "client-side",
      "version": "1.0.0",
      "description": "source code of ts-learning",
      "main": "./src/index.ts",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "cross-env NODE_ENV=development webpack-dev-server --config ./build/webpack.config.js", //配置项目工程开始开始目录结构
        "build":"cross-env NODE_ENV=production webpack  --config ./build/webpack.config.js" //配置项目工程上线环境;
      },
      "keywords": [
        "typescript",
        "cource_code",
        "lison"
      ],
      "author": "serverqin",
      "license": "MIT",
      "devDependencies": {
        "clean-webpack-plugin": "^3.0.0",
        "cross-env": "^7.0.2",
        "html-webpack-plugin": "^4.3.0",
        "ts-loader": "^8.0.2",
        "webpack": "^4.44.1",
        "webpack-cli": "^3.3.12",
        "webpack-dev-server": "^3.11.0"
      },
      "dependencies": {
        "typescript": "^3.9.7"
      }
    }
```
>      2>.配置typescript tsc 等文件到全局   npm i typescript tslint -g;
>      3>.生成ts 配置文件项  tsc --init;
>      4>.安装webpack项目工程化插件依赖     npm i webpack webpack-cli webpack-dev-server -D
>      5>.构建webpack工程化项目配置         webpack.config.js;
  ```javascript
const  HtmlWebpackPlugin  = require('html-webpack-plugin');
let {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path=require('path');

module.exports={
  entry:'./src/index.ts', // 入口开始文件配置
  output:{// 项目编译完成指定输出的文件
    filename:'main.js'
  },
  resolve:{//解决配置
    extensions:['.ts','tsx','.js'] // 自动解析文件后缀;
  },
  module:{ // 模块
    rules:[{ // 指定后缀文件的处理匹配
      test:/\.tsx?$/, //匹配后缀
      use:'ts-loader',//处理其他文本,字体,媒体图片或者其他文件时使用的ts 加载库;
      // loader: 'ts-loader',
      exclude:/node_modules/, //处理文件时排除不使用的目录;
      // options:{
      //    configFile: path.resolve(__dirname, '../typescript.json'),// 配置一个目录文件找到ts配置项;
      // },
    }]
  },
  devtool: process.env.NODE_ENV==='production'?false:'inline-source-map',//定位调试代码的位置,根据环境
  devServer:{
    contentBase:'./dist',
    stats:'errors-only',
    compress:false,
    host:'localhost',
    port:8089
  },
  plugins:[ // 指定一个指定的编译模板文件;
    new HtmlWebpackPlugin({
      template:'./src/template/index.html'
    }),
    new CleanWebpackPlugin({ //清理一些指定的文件 文件夹
      cleanOnceBeforeBuildPatterns:['./dist']
    })
  ]
}
```

>      6>.配置工程化需要使用的插件
            1.npm i cross-env -D //环境工程化监测;
            2.npm i ts-loader -D //loader;
            3.npm i clean-webpack-plugin -D // 
            4.npm i html-webpack-plugin -D  // html 插件
            5.npm i typescript // 安装局部typescprit;


            > npm start  开始开发模式
            > npm run build 开始构建工程化;