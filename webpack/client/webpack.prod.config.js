const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('../webpack.common.config');

const plugins = [
  new CompressionPlugin({
    algorithm: 'gzip',
    filename: '[path].gz[query]',
    test: /\.(js|jsx)$|\.css$|\.html$/
    ,
  }),
  new OptimizeCssAssetsPlugin({
    cssProcessorPluginOptions: {
      preset: ['default', { discardComments: { removeAll: true } }],
    },
  }),
];

module.exports = merge(common, {
  plugins,
});
