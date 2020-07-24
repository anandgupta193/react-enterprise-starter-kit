const { merge } = require('webpack-merge');
const Webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('../webpack.common.config');

const plugins = [

  new CompressionPlugin({
    algorithm: 'gzip',
    filename: '[path].gz[query]',
    test: /\.(js|jsx)$|\.css$|\.html$/,
  }),
  new OptimizeCssAssetsPlugin({
    cssProcessorPluginOptions: {
      preset: ['default', { discardComments: { removeAll: true } }],
    },
  }),
  new Webpack.DefinePlugin({
    __CLIENT__: true,
    __SERVER__: false,
    __DEVELOPMENT__: false,
    __DEVTOOLS__: false, // For disabling redux devtools on Production mode
  }),
];

module.exports = merge(common, {
  plugins,
});
