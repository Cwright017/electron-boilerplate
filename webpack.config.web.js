const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
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
  node: {
    __dirname: false,
    __filename: false
  },
  devtool: 'cheap-eval-source-map',
  target: 'web',
  module: {
    loaders: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /(node_modules|dist)/,
        loader: 'babel'
      },
      { test: /\.scss$/, loader: "style!css?modules!sass" },
      { test: /\.png$/, loader: "url?limit=100000" },
      { test: /\.jpg$/, loader: "file" }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [path.resolve('./app'), 'node_modules']
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: './app/index.html',
    inject: 'body',
    hash: 'true'
  }),
  new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"dev"'
      }
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
    historyApiFallback: true
  },
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};