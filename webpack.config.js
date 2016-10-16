const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    main: './main.js',
    renderer: './app/index.jsx'
  },
  debug: true,
  devtool: 'inline-source-map',
  output: {
      path: path.resolve(__dirname, './dist'),
      filename: "[name].js"
  },
  node: {
    __dirname: false,
    __filename: false
  },
  target: 'electron',
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
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: ['app', 'node_modules']
  },
  plugins: [new HtmlWebpackPlugin({
    template: './app/index.html',
    chunks: ['renderer'],
    inject: 'body',
    hash: 'true'
  }),
  new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"dev"'
      }
    })
  ],
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
