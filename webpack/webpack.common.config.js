const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const env = process.env.NODE_ENV;

const plugins = [
  new CleanWebpackPlugin(),
  new ManifestPlugin(),
  new ExtractCssChunks({
    filename: env === 'development' ? '[name].css' : '[name].[hash].css',
    chunkFilename: 'css/[name].[hash].css',
  }),

  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/index.html'),
  }),
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, '../public'),
      },
    ],
  }),
  new GenerateSW({
    cacheId: 'React Enterprise Starter Kit',
    navigateFallback: 'index.html',
    maximumFileSizeToCacheInBytes: 5000000,
    clientsClaim: true,
    cleanupOutdatedCaches: true,
  }),
  new WebpackPwaManifest({
    name: 'React Enterprise Starter Kit',
    short_name: 'Application',
    description: 'Description!',
    background_color: '#01579b',
    theme_color: '#01579b',
    start_url: '/',
    prefer_related_applications: true,
    icons: [
      {
        src: 'public/react.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
        destination: path.join('assets', 'icons'),
      },
      {
        src: path.resolve('public/react.png'),
        sizes: [96, 128, 192, 256, 384],
        destination: path.join('assets', 'icons'),
      },
    ],
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
              hmr: true,
              esModule: true,
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
    moduleIds: 'hashed',
    runtimeChunk: 'single',
  },
  output: {
    filename: env === 'development' ? '[name].js' : '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: 'scripts/[name].[hash].js',
  },
};
