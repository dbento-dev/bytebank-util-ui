const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const deps = require('../package.json').dependencies

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3001/',
    filename: '[name].js'
  },

  devServer: {
    port: 3001,
    historyApiFallback: {
      index: '/index.html'
    },
    open: true,
    hot: true
  }
}

module.exports = merge(commonConfig, devConfig)
