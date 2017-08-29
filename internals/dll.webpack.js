const webpack = require('webpack')
const projectDir = require('./../settings').PROJECT_DIR
const path = require('path')

module.exports = {
  entry: {
    react: [
      'react',
      'react-dom',
      'react-helmet',
      'react-redux',
      'react-router-dom',
      'react-router-redux'
    ],
    redux: [
      'redux',
      'redux-thunk',
      'reselect'
    ],
    styles: ['semantic-ui-react', 'styled-components']
  },
  output: {
    filename: '[name].dll.js',
    path: path.join(projectDir, 'dlls'),
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(projectDir, 'dlls', '[name].json')
    })
  ]
}
