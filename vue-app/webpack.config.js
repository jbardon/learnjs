const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: 'vue-loader'
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },   
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js',
            minChunks: function (module) {
              return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true          
        })
    ],
    devtool: 'eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 7070      
      //historyApiFallback: true
    },
    resolve: {
      alias: {
        'vue': 'vue/dist/vue.js'
      }
   }
};

module.exports = config;
