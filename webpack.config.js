/* eslint-disable no-console */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const commonPlugins = [
  new CopyPlugin({
    patterns: [
      { from: './public/index.html' },
    ],
  }),
];

if (process.env.analyze) {
  commonPlugins.push(new BundleAnalyzerPlugin({
    openAnalyzer: true,
    reportFilename: 'bundleReport.html',
    analyzerMode: 'static',
    token: 'c3e980d3ec23ddd626fecc110501e76a9a469461',
  }));
}

if (process.env.NODE_ENV === 'production') {
  commonPlugins.push(new CompressionPlugin({
    algorithm: 'gzip',
    filename: '[path].gz[query]',
    test: /\.(js|jsx)$|\.css$|\.html$/,
  }));

  commonPlugins.push(new UglifyJsPlugin({
    test: /\.(js|jsx)$/,
    sourceMap: true,
    uglifyOptions: {
      output: {
        comments: false,
      },
    },
  }));
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
  mode: process.env.NODE_ENV || 'production',
};
