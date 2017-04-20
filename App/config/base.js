const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const ROOT_PATH = path.resolve(__dirname, '../')
const SRC_PATH = path.resolve(ROOT_PATH, 'frontend/src')
const TEMPLATE_PATH = path.resolve(SRC_PATH, '../index.html')

const DIST_PATH = path.resolve(ROOT_PATH, 'dist')

module.exports = {
  entry: SRC_PATH,
  output: {
    path: DIST_PATH,
    filename: 'app.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [SRC_PATH],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react', 'es2015'
          ],
          plugins: [
            [
              'babel-plugin-root-import', {
                'rootPathSuffix': SRC_PATH
              }
            ]
          ]
        }
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({use: 'css-loader'})
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      title: 'artist-library',
      template: TEMPLATE_PATH,
      filename: 'index.html',
    })
  ]
}
