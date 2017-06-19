const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const commonConfig = require('./base.js')

module.exports = function() {
  return webpackMerge(commonConfig, {
    devtool: false,
    plugins: [
      new webpack.LoaderOptionsPlugin({minimize: true, debug: false}),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
        VERSION: JSON.stringify(process.env.VERSION)
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new BundleAnalyzerPlugin()
    ]
  })
}
