'use strict'

const path = require('path')

const webpackConfig = {
  mode: "development",
  profile: true,
  context: path.src,
  entry: {
    build: './src/lib.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  // stats: 'detailed',
}

module.exports = webpackConfig
