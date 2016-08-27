const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    main: './main.js',
    renderer: './app/components/App/app.jsx'
  },
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
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.png$/, loader: "url?limit=100000" },
      { test: /\.jpg$/, loader: "file" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: ['components', 'node_modules']
  },
  plugins: [new HtmlWebpackPlugin({
    template: './app/index.html',
    chunks: ['renderer'],
    inject: 'body',
    hash: 'true'
  })]
};
