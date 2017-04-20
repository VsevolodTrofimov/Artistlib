const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const commonConfig = require('./base.js')

module.exports = function() {
  return webpackMerge(commonConfig, {
    devtool: false,
    plugins: [
      new webpack.LoaderOptionsPlugin({minimize: true, debug: false}),
      new webpack.optimize.UglifyJsPlugin()
    ]
  })
}
