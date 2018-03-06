const path = require('path')

module.exports = {
  // Tell webpack to run babel on every file
  // it runs through.
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf|woff2)$/,
        loader: 'url-loader?limit=1024&name=[name]-[hash:8].[ext]'
      }
    ]
  }
}
