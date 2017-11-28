var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js'
  },
  module: {
      loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules\/(?!(stardust))/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
        plugins: [
          'transform-decorators-legacy',
        ],
        presets: ['es2015'],
      },
    }
  ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
