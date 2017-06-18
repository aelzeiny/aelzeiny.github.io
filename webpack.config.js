const webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },

  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '*'],
  },

  // plugins: process.argv.indexOf('-p') === -1 ? [] : [
  //   new webpack.optimize.UglifyJsPlugin({
  //     output: {
  //       comments: false,
  //     },
  //   }),
  // ],
};
