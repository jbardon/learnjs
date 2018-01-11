const webpack = require('webpack');

const path = require('path');
//const PrettierPlugin = require('prettier-webpack-plugin');

const config = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },

  plugins: [
    // Warning @angular/core
    new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './public'))
/*
    new PrettierPlugin({
      singleQuote: true,
      trailingComma: 'all',
    }),
*/
  ],

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 6868,
  },
};

module.exports = config;
