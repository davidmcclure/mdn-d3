

export default {

  entry: './src/js/test.js',

  output: {
    path: './_site',
    filename: 'test.js',
  },

  module: {
    loaders: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

    ]
  },

  devtool: 'source-map',

};
