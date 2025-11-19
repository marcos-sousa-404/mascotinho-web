const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules|cdn_modules/
      },
      {
        test: /.(png|jpe?g|gif|mp4|webm)$/i,
        type: 'asset/resource'
      },
      {
        test: /.svg$/i,  // FIXED: Added backslash before dot
        issuer: /.[jt]sx?$/,  // FIXED: Added backslash before dot
        use: ['@svgr/webpack']
      },
      {
        test: /.css$/i,  // FIXED: Added backslash before dot
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolveLoader: {
    modules:[
      'node_modules',
      path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
    ]
  },
  resolve: {
    modules:[
      'node_modules',
      path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
    ],
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    historyApiFallback: true,
    port: 9950,
    static: {
      directory: './dist'
    }
  }
};

module.exports = config;