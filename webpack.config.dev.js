const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        // loader: 'style-loader!css-loader!sass-loader?sourceMap'
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
          { loader: 'sass-resources-loader',
            options: {
              sourceMap: true,
              resources: [
                path.resolve(__dirname, './src/views/_variables.scss'),
              ]
            }
          }
        ]
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader!sass-loader?sourceMap'
      // },
    ]
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  plugins: [
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 8080,
    historyApiFallback: true
  }
}