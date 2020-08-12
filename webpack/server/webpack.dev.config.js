const { merge } = require('webpack-merge');
const Webpack = require('webpack');
const common = require('./webpack.common.config');

const plugins = [
  new Webpack.DefinePlugin({
    __CLIENT__: false,
    __SERVER__: true,
    __DEVELOPMENT__: true,
    __DEVTOOLS__: true,
  }),
];

module.exports = merge(common, {
  plugins,
});
