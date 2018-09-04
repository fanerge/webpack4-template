const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
// service worker
// const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    polyfills: './src/js/polyfills.js',
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
        test:/\.scss$/,
        use:[
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test:/\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
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
        test: require.resolve('./src/js/global.js'),
        use: 'exports-loader?file,parse=helpers.parse'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'PWA'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css"
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