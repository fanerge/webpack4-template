const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js',
    polyfills: './src/polyfills.js',
    // 把库分离出来
    vendor: [
      'lodash',
      'jquery'
    ]
  },
  output: {
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
           'csv-loader'
         ]
       },
       {
         test: /\.xml$/,
         use: [
          'xml-loader'
        ]
      },
      {
        test: require.resolve('./src/global.js'),
        use: 'exports-loader?file,parse=helpers.parse'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    // 在模块内可以使用lodash 或 jquery 了
    new webpack.ProvidePlugin({
      _: 'lodash',
      $: 'jquery'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
     }
  },
};