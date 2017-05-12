const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '/src'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    inline: true,
    port: 3333
  },
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
