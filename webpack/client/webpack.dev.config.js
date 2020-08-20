const { merge } = require('webpack-merge');
const path = require('path');
const Webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const StylelintPlugin = require('stylelint-webpack-plugin');
const common = require('./webpack.common.config');

const plugins = [
  new Webpack.DefinePlugin({
    __CLIENT__: true,
    __SERVER__: false,
    __DEVELOPMENT__: true,
    __DEVTOOLS__: true,
  }),
  new StylelintPlugin(),
];

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
    hot: true,
  },
  plugins,
});
