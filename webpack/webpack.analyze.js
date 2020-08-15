const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.config');

module.exports = merge(common, {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});
