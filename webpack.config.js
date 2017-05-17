var Webpack = require('webpack')
var LessPluginAutoPrefix = require('less-plugin-autoprefix')
var CleanCSSPlugin = require('less-plugin-clean-css')

var webpack = {}
if (process.env.NODE_ENV === 'production') {
  webpack = require('./internals/webpack.dev.js')
} else {
  webpack = require('./webpack/webpack.prod.js')
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
  rules: [
    {
      test: /\.html$/,
      loader: 'html-loader'
    },
    {
      test: /\.less$/,
      use: [
        {loader: 'file-loader'},
        {loader: 'css-loader'},
        {
          loader: 'less-loader',
          options: {
            noIeCompat: true,
            sourceMap: true,
            plugins: [
              new LessPluginAutoPrefix(),
              new CleanCSSPlugin({ advance: true })
            ]
          }
        }
      ]
    },
    {
      test: /\.js$/,
      exclude: path.resolve(__dirname, 'src'),
      enforce: 'pre',
      loader: 'source-map-loader'
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.json/,
      loader: 'json-loader'
    },
    {
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?.*)?$/,
      loader: 'file-loader?name=[path]/[name].[ext]?[hash]'
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
