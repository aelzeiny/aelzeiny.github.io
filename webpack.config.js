const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./lib/entry.jsx",
  output: {
    path: path.join(__dirname),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};