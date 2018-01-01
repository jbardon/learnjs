const webpack = require('webpack');
const path = require('path');
const PrettierPlugin = require('prettier-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader',
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.js',
      minChunks(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new PrettierPlugin({
      singleQuote: true,
      trailingComma: 'all',
      jsxBracketSameLine: true,
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 7070,
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
};

module.exports = config;
