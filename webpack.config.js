var path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  module: {
      loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
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
  }
}
