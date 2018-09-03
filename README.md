# webpack4学习
开发：npm start // "start": "webpack-dev-server --open --config webpack.dev.js",
生产：npm run build // "build": "webpack --config webpack.prod.js"

# entry
入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。
# output
output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。
# loader
loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。
loader 用于对模块的源代码进行转换（通过脚本或者工具）。
loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！
# plugins
插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。
# mode
通过选择 development 或 production 之中的一个，来设置 mode 参数，你可以启用相应模式下的 webpack 内置的优化。
# 开发
##  source map
当 webpack 打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。
##  更改代码自动刷新
webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。
##  模块热替换
模块热替换(Hot Module Replacement 或 HMR)
它允许在运行时更新各种模块，而无需进行完全刷新。

# 常用plugins
##  CommonsChunkPlugin 
为每个页面间的应用程序共享代码创建 bundle。
##  webpack-merge
区分公共配置和生产环境或开发环境weapack配置。
##  HtmlWebpackPlugin
每次编译为为你创建新的html文件。
##  clean-webpack-plugin
在每次构建前清理文件夹（如/dist）。
##  ExtractTextPlugin
CSS 分离成单独的文件。
##  CommonsChunkPlugin（webpack4废弃）
可以将公共的依赖模块提取到 chunk 中。
webpack4在config中添加如下配置
```
optimization: {
  splitChunks: {
    name: 'common'
  }
}
```
##  ExtractTextWebpackPlugin
用于将 CSS 从主应用程序中分离。
##  ProvidePlugin 
能够在通过 webpack 编译的每个模块中，通过访问一个变量来获取到 package 包。
## workbox-webpack-plugin
帮助 ServiceWorkers 快速启用。
## mini-css-extract-plugin
抽离出css到单独的文件。

# 常用的loader
##  style-loader
##  css-loader
##  file-loader
##  image-webpack-loader
压缩和优化你的图像
##  url-loader
url-loader 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。
##  imports-loader
重写模块内的this，默认CommonJS内的this 指向 module.exports
##  exports-loader
将一个全局变量作为一个普通的模块来导出（对于老的库很有用）。
<br/>
[loaders](https://www.webpackjs.com/loaders/)