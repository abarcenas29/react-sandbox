const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const projectDir = require('./../settings').PROJECT_DIR

module.exports = {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    // More minification
    new webpack.optimize.AggressiveMergingPlugin(),
    // HTML optimize
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyURLs: true
      },
      inject: true
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new CopyWebpackPlugin([
      { from: './src/assets', to: './assets' }
    ]),
    new webpack.DllReferencePlugin({
      context: projectDir,
      manifest: path.join(projectDir, 'dlls', 'react.json')
    }),
    new webpack.DllReferencePlugin({
      context: projectDir,
      manifest: path.join(projectDir, 'dlls', 'redux.json')
    }),
    new webpack.DllReferencePlugin({
      context: projectDir,
      manifest: path.join(projectDir, 'dlls', 'styles.json')
    })
  ]
}
