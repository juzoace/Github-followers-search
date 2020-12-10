// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: "./src/index.js",
// devtool: 'source-map',
//     mode: "production",
//     output: {
//       path: path.join(__dirname, '/dist'),
//       filename: "index_bundle.js"  
//     },
//     module: {
//         rules: [
//             {
//                test: /\.js$/, 
//                exclude: /node_modules/,
//                use: {
//                    loader: "babel-loader"
//                }
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: "./src/index.html"
//         })
//     ]
// }

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js'],
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        title: 'Hello Webpack bundled JavaScript Project',
        template: path.resolve(__dirname, './src/index.html'),
        }
        
    )],
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
    },
  };