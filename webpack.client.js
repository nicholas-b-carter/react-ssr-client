const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

// Wasn't using ExtractText yet, and it creashed webpack 4. 

// const ExtractTextPlugin = require("extract-text-webpack-plugin");
//
// const extractCss = new ExtractTextPlugin({
//     filename: "[name].[contenthash].css",
//     disable: process.env.NODE_ENV === "development"
// });

const config = {
  // Tell webpack the root file of our
  // server application.
  entry: './src/client/client.js',

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: [
            ['import', { 'libraryName': 'antd', 'style': true }]
          ]
        }
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },

  // Tell webpack where to put the output file
  // that is generated.
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  // plugins: [
  //   extractCss
  // ]
}

module.exports = merge(baseConfig, config)
