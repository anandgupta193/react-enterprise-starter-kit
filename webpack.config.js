const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const env = process.env.NODE_ENV;

const commonPlugins = [

  new CopyPlugin({
    patterns: [{ from: './public/index.html' }],
  }),

  new ExtractCssChunks({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
];

if (process.env.analyze) {
  commonPlugins.push(
    new BundleAnalyzerPlugin({
      openAnalyzer: true,
      reportFilename: 'bundleReport.html',
      analyzerMode: 'static',
      token: 'c3e980d3ec23ddd626fecc110501e76a9a469461',
    }),
  );
}

if (process.env.NODE_ENV === 'production') {
  commonPlugins.push(
    new CompressionPlugin({
      algorithm: 'gzip',
      filename: '[path].gz[query]',
      test: /\.(js|jsx)$|\.css$|\.html$/
      ,
    }),
  );

  commonPlugins.push(
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
    }),
  );
}

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src/index.jsx')],
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
                context: path.resolve(__dirname, 'src'),
                hashPrefix: 'React Enterprice kit',
              },
            },
          },
          {
            loader: '@americanexpress/purgecss-loader',
            options: {
              paths: [path.join(__dirname, 'src/**/*.{js,jsx}')],
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
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
  },
  plugins: commonPlugins,
  mode: process.env.NODE_ENV,
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
