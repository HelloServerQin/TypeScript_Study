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