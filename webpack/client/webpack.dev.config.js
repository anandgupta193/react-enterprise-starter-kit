const { merge } = require('webpack-merge');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('../webpack.common.config');

const plugins = [];

if (process.env.analyze) {
  plugins.push(
    new BundleAnalyzerPlugin({
      openAnalyzer: true,
      reportFilename: 'bundleReport.html',
      analyzerMode: 'static',
      token: 'c3e980d3ec23ddd626fecc110501e76a9a469461',
    }),
  );
}

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../../dist'),
    port: 3000,
  },
  plugins,
});
