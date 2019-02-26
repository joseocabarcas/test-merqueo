const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: 'js/[name].[hash].js',
    path: __dirname + '/build',
    chunkFilename: '[name].[chunkhash].js',
  },
  devtool: 'source-map',
  module: {
  	rules: [
      {
    		test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          // use: ['css-loader', 'sass-loader']
          use: [
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } },
            { loader: 'sass-resources-loader',
              query: {
                resources: [
                  path.resolve(__dirname, './src/views/_variables.scss'),
                ]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css'
    })
  ],
}