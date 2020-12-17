const path = require('path');
const chalk = require('chalk');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');

console.log('--mode',process.env.NODE_ENV)
let env = process.env.NODE_ENV

let plugins = [];
if(env == 'development'){
  plugins = []
}

module.exports = {
  entry: {
    app:'./src/index.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module:{
    rules:[
      {
        test:/\.css|\.less$/,
        use:[
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader'
        ]
      },{
        test: /\.xml$/,
        use:[
          'xml-loader'
        ]
      }
    ]
  },
  plugins:[
    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: false
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      titile:'测试一下webpack'
    }),
    ...plugins
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};