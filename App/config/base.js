const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const ROOT_PATH = path.resolve(__dirname, '../')

const COMMON_PATH = path.resolve(ROOT_PATH, 'common')
const SRC_PATH = path.resolve(ROOT_PATH, 'frontend')

const ENTRY_PATH = path.resolve(SRC_PATH, 'UI/index.js')
const TEMPLATE_PATH = path.resolve(SRC_PATH, 'UI/index.html')

const DIST_PATH = path.resolve(ROOT_PATH, 'dist')

module.exports = {
  entry: ENTRY_PATH,
  output: {
    path: DIST_PATH,
    filename: 'app.js'
  },
  devtool: 'source-map',
  devServer: {
    port: 80
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: [
            'es2015', 'react'
          ],
          plugins: [
            [
              'babel-plugin-root-import',
              [
                {
                  "rootPathPrefix": "~",
                  "rootPathSuffix": SRC_PATH
                }, {
                  "rootPathPrefix": "@",
                  "rootPathSuffix": COMMON_PATH
                }
              ]
            ]
          ]
        }
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({use: 'css-loader'})
      }, {
        test: /\.svg$/,
        loaders: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015']
            }
          }, {
            loader: 'react-svg-loader',
            query: {
              svgo: {
                floatPrecision: 2
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new HtmlWebpackPlugin({title: 'artist-library', template: TEMPLATE_PATH, filename: 'index.html'})
  ]
}
