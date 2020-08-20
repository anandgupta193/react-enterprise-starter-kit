const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const env = process.env.NODE_ENV;

const plugins = [

  new CleanWebpackPlugin(),
];

module.exports = {
  entry: {
    server: [path.resolve(__dirname, '../../src/server/server.jsx')],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: env === 'development',
              modules: {
                mode: 'local',
                exportGlobals: true,
                localIdentName: env === 'development' ? '[name]__[local]__[hash:base64:5]' : '[hash:base64:5]',
                context: path.resolve(__dirname, '../../src'),
                hashPrefix: 'React Enterprice kit',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: env === 'development',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: env === 'development',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/images',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: process.env.NODE_ENV,
  plugins,
  externals: [nodeExternals()],
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../server-build'),
  },
};
