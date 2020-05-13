/* eslint-disable */
const webpack = require('webpack');
const path = require('path');

const rootPath = path.join(__dirname, '../');
const merge = require('webpack-merge');

const common = require(`${rootPath}/webpack/webpack.config`);
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});
