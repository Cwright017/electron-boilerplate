const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const commonConfig = require('./webpack.config.common');

module.exports = Object.assign(
  commonConfig,
  {
    entry: {
      main: './main.js',
      renderer: './app/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].js"
    },
    target: 'electron',
    plugins: commonConfig.plugins.concat(
      new HtmlWebpackPlugin({
        template: './app/index.html',
        chunks: ['renderer'],
        inject: 'body',
        hash: 'true'
      })
    )
  }
);
