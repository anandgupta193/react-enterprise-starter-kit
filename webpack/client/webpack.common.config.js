const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');

const env = process?.env?.NODE_ENV || 'development';
const isDevEnv = env === 'development'

const plugins = [
  new StylelintPlugin(),
  new CleanWebpackPlugin(),
  new WebpackManifestPlugin({
    fileName: 'asset-manifest.json',
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../../public/template.html'),
    filename: 'index.html'
  }),
  new MiniCssExtractPlugin({
    filename: isDevEnv ? 'css/[name].css' : 'css/[name].[contenthash].css',
    chunkFilename: isDevEnv ? 'css/[id].css' : 'css/[id].[contenthash].css',
  }),
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, '../../public'),
      },
    ],
  }),
];

module.exports = {
  entry: {
    app: [path.resolve(__dirname, '../../src/index.jsx')],
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
  mode: env,
  plugins,
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
      minSize: 20000,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      maxSize: 250000,
      minChunks: 1,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: '[name].[contenthash].js',
        },
      },
    },
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    minimizer: [
      new CssMinimizerPlugin()
    ]
  },
  output: {
    filename: isDevEnv ? 'scripts/[name].js' : 'scripts/[name].[hash].js',
    path: path.resolve(__dirname, '../../dist'),
    chunkFilename: isDevEnv ? 'scripts/[name].js' : 'scripts/[name].[hash].js'
  },
};
