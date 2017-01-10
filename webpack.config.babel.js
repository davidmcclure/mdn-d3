

import HtmlWebpackPlugin from 'html-webpack-plugin';


export default {

  entry: './src/js/index.js',

  output: {
    path: './dist',
    filename: 'mdn.js',
  },

  module: {
    loaders: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-decorators-legacy'],
        }
      },

      {
        test: /\.pug$/,
        loader: 'pug',
      },

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    })
  ],

  devtool: 'source-map',

  devServer: {
    inline: true
  },

};
