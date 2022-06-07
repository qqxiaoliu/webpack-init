const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = str => path.resolve(__dirname, str);
const plugins = [new HtmlWebpackPlugin({
  template: resolve('index.html')
})]
module.exports = {
  mode: 'development',
  entry: "./entry.ts",
  output: {
    clean: true, // 在生成文件之前清空 output 目录
    path: resolve('dist'),
    filename: '[name].[contenthash].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      "@": resolve('./src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        }, 'ts-loader'],
        exclude: /node_modules/,
      }
    ]
  },
  plugins,
}