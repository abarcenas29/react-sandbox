var Webpack = require('webpack')
var webpack = {}
if (process.env.NODE_ENV === 'production') {
  webpack = require('./webpack/dev.js')
} else {
  webpack = require('./webpack/prod.js')
}

var path = require('path')

// entry
webpack.entry = {
  app: './src/main.js',
  vendor: [ 'preact' ]
}

webpack.output = {
  path: path.resolve(__dirname, 'build'),
  publicPath: '/',
  filename: 'bundle.[chunkhash].js'
}

// general loaders
webpack.module = {
  loaders: [
    {
      test: /\.html$/,
      loader: 'html-loader'
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }
  ]
}

// general plugin
webpack.plugins.push(
  new Webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
)

// resolve for preact
webpack.resolve = {
  alias: {
    'react': 'preact-compat',
    'react-dom': 'preact-compat'
  }
}

module.exports = webpack
