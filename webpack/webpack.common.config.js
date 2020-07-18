const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const env = process.env.NODE_ENV;

const plugins = [

  new CopyPlugin({
    patterns: [{ from: './public/' }],
  }),

  new ExtractCssChunks({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),

];

module.exports = {
  entry: {
    app: [path.resolve(__dirname, '../src/index.jsx')],
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
            loader: ExtractCssChunks.loader,
            options: {
              reloadAll: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: env === 'development',
              modules: {
                mode: 'local',
                exportGlobals: true,
                localIdentName: env === 'development' ? '[name]__[local]__[hash:base64:5]' : '[hash:base64:5]',
                context: path.resolve(__dirname, '../src'),
                hashPrefix: 'React Enterprice kit',
              },
            },
          },
          {
            loader: '@americanexpress/purgecss-loader',
            options: {
              paths: [path.join(__dirname, '../src/**/*.{js,jsx}')],
              whitelistPatternsChildren: [/:global$/],
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
        test: /\.(png|jpe?g|gif|webp)$/i,
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
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
      minChunks: 1,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
};
