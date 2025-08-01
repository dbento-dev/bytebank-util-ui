const { ModuleFederationPlugin } = require('webpack').container
const { merge } = require('webpack-merge')
const { DefinePlugin } = require('webpack')
const commonConfig = require('./webpack.common')()

const deps = require('../package.json').dependencies

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8310/',
    filename: '[name].js'
    // clean: true,
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
    // static: {
    //   directory: path.join(__dirname, "../dist"),
    // },
    // compress: true,
    // open: true,
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
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom']
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
        }
      }
    })
  ]
}

module.exports = merge(commonConfig, devConfig)
