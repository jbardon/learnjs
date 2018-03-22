const path = require('path');
const PrettierPlugin = require('prettier-webpack-plugin');

const config = {
  // Le point d'entrée pour créer le bundle
  entry: './src/index.jsx',

  // Emplacement du bundle
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },

  // Utiliser babel avant de générer le bundle
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
    new PrettierPlugin({
      singleQuote: true,
      trailingComma: 'all',
      jsxBracketSameLine: true,
    }),
  ],

  // Déploiement en local avec webpack-dev-server
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 2094,

    // Renvoie à la racine en cas de 404 (toutes les URLs gérées par React)
    historyApiFallback: true,
  },
};

module.exports = config;
