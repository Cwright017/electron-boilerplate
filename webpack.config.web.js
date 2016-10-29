const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const commonConfig = require('./webpack.config.common');

module.exports = Object.assign(
  commonConfig,
  {
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './app/index.jsx'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js"
    },
    target: 'web',
    plugins: commonConfig.plugins.concat(
      new HtmlWebpackPlugin({
        template: './app/index.html',
        inject: 'body',
        hash: 'true'
      })
    ),
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
      hot: true,
      historyApiFallback: true
    }
  }
);
