const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
            loader: "babel-loader"
          }
      ],
        },
        {
          test: /\.(sass|css|less)$/,
          use: [
              {
                  loader: 'style-loader'
              },
              {
                  loader: 'css-loader'
              },
              {
                  loader: 'less-loader',
                  options: {
                      lessOptions: {
                          javascriptEnabled: true,
                      },
                  }
              }
          ]
      }
      ],
    },
    resolve: {
      extensions: ['*', '.js'],
      alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        }
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
    },
  };