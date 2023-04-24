const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

const env = process.env.NODE_ENV;
const isDevEnv = env === 'development';

const plugins = [
  new MiniCssExtractPlugin({
    filename: isDevEnv ? 'css/[name].css' : 'css/[name].[contenthash].css',
    chunkFilename: isDevEnv ? 'css/[id].css' : 'css/[id].[contenthash].css',
  }),
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
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
          loader: 'postcss-loader',
            options: {
              sourceMap: isDevEnv,
            },
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevEnv,
              modules: {
                mode: 'local',
                exportGlobals: true,
                localIdentName: isDevEnv ? '[name]__[local]' : '[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevEnv,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevEnv,
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
