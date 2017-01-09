

import HtmlWebpackPlugin from 'html-webpack-plugin';


export default {

  entry: './src/js/test.js',

  output: {
    path: './dist',
    filename: 'test.js',
  },

  module: {
    loaders: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
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

};
