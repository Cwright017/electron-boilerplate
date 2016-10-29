const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  node: {
    __dirname: false,
    __filename: false
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /(node_modules|dist)/,
        loader: 'babel'
      },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.png$/, loader: "url?limit=100000" },
      { test: /\.jpg$/, loader: "file" }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json'],
    modules: [path.resolve('./app'), 'node_modules']
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': '"dev"'
        }
    })
  ],
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
