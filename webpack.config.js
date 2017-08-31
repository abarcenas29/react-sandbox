const Webpack = require('webpack')
const LessPluginAutoPrefix = require('less-plugin-autoprefix')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanCSSPlugin = require('less-plugin-clean-css')
const OfflinePlugin = require('offline-plugin')
const HappyPack = require('happypack')

const path = require('path')
const projectDir = require('./settings').PROJECT_DIR

var webpack = {}
let filename = ''
let chunkFilename = '[name]-[chunkhash].js'
if (process.env.NODE_ENV === 'production') {
  webpack = require('./internals/webpack.prod.js')
  // entry
  webpack.entry = {
    app: './src/main.js'
  }
  filename = 'bundle.[chunkhash].js'
} else {
  webpack = require('./internals/webpack.dev.js')
  webpack.entry = [
    './src/main.js'
  ]
  filename = '[name].bundle.js'
}

// entry
webpack.output = {
  path: path.resolve(__dirname, 'build'),
  publicPath: '/',
  filename,
  chunkFilename
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
      use: ExtractTextPlugin.extract({
        loader: 'happypack/loader?id=styles'
      })
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
      loader: 'happypack/loader?id=jsx'
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
  }),
  new Webpack.DllReferencePlugin({
    context: path.join(projectDir, 'src'),
    name: '[name]',
    manifest: path.join(projectDir, 'dlls', 'react.json')
  }),
  new Webpack.DllReferencePlugin({
    context: path.join(projectDir, 'src'),
    name: '[name]',
    manifest: path.join(projectDir, 'dlls', 'redux.json')
  }),
  new Webpack.DllReferencePlugin({
    context: path.join(projectDir, 'src'),
    name: '[name]',
    manifest: path.join(projectDir, 'dlls', 'styles.json')
  }),
  new HappyPack({
    id: 'jsx',
    loaders: ['babel-loader']
  }),
  new HappyPack({
    id: 'styles',
    loaders: [
      {loader: 'css-loader'},
      {
        loader: 'less-loader',
        options: {
          noIeCompat: true,
          sourceMap: true,
          plugins: [
            new LessPluginAutoPrefix(),
            new CleanCSSPlugin({
              advance: true,
              level: 2
            })
          ]
        }
      }
    ]
  })
)

webpack.plugins.push(
  new OfflinePlugin()
)

webpack.resolve = {
  extensions: ['.js'],
  alias: {
    'containers': path.resolve(__dirname, 'src', 'containers'),
    'components': path.resolve(__dirname, 'src', 'components')
  }
}

module.exports = webpack
