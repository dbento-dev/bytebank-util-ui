const { ModuleFederationPlugin } = require('webpack').container
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const deps = require('../package.json').dependencies

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8310/',
    filename: '[name].js'
  },

  devServer: {
    port: 8310,
    historyApiFallback: {
      index: '/index.html'
    },
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'utilUi',
      filename: 'remoteEntry.js',
      exposes: {
        './components': './src/components',
        './ThemeProvider': './src/ThemeProvider'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom']
        },
        '@emotion/react': {
          singleton: true,
          requiredVersion: deps['@emotion/react']
        },
        '@emotion/styled': {
          singleton: true,
          requiredVersion: deps['@emotion/styled']
        },
        '@mui/material': {
          singleton: true,
          requiredVersion: deps['@mui/material']
        },
        '@mui/icons-material': {
          singleton: true,
          requiredVersion: deps['@mui/icons-material']
        },
        'lodash.debounce': {
          singleton: true,
          requiredVersion: deps['lodash.debounce']
        },
        recharts: {
          singleton: true,
          requiredVersion: deps.recharts
        },
        'react-currency-input-field': {
          singleton: true,
          requiredVersion: deps['react-currency-input-field']
        }
      }
    })
  ]
}

module.exports = merge(commonConfig, devConfig)
