const webpack = require('webpack');
const path = require('path');
const WebpackUserscript = require('webpack-userscript');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const headers = require('./src/headers.js');
const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'remove_annoying_popups.js'
  },
  devServer: {
    host: '0.0.0.0',
    port: 12345,
    static: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackUserscript({
      headers: headers
    })
  ]
};

module.exports = config;