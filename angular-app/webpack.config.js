const webpack = require('webpack');

const path = require('path');
//const PrettierPlugin = require('prettier-webpack-plugin');

const config = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },

  // Webpack peut voir les fichiers
  resolve: {
    extensions: ['.ts', '.js'],
  },

  //'awesome-typescript-loader', 'angular2-template-loader', 'raw-loader', 'file-loader', 'html-loader'
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      { // Transforme require('.html') en '<html>' avec les quotes dans les @Component/template
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'html-loader',
      }
    ],
  },

  plugins: [
    // Warning @angular/core
    new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './src'))
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
