var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    script: "./process/js/script.js",
    vendor: "./process/js/vendor.js"
  },
  output: {
    path: path.resolve(__dirname, './builds/development/js'),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}