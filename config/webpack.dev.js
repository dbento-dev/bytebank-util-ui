const { ModuleFederationPlugin } = require("webpack").container
const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common")

const deps = require("../package.json").dependencies

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:3001/",
    filename: "[name].js",
    // clean: true,
  },

  devServer: {
    port: 3001,
    historyApiFallback: {
      index: "/index.html",
    },
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    // static: {
    //   directory: path.join(__dirname, "../dist"),
    // },
    // compress: true,
    // open: true,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app_header",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/components/Header",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
          eager: false,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
          eager: false,
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: deps["react-router-dom"],
          eager: false,
        },
      },
    }),
  ],
}

module.exports = merge(commonConfig, devConfig)
