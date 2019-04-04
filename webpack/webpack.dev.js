const webpack = require('webpack');
const path = require('path');
let rootPath = path.join(__dirname, '../');
const merge = require('webpack-merge');
const common = require(rootPath + '/webpack.config');

module.exports = merge(common, {
   mode: 'development',
   devServer: {
       hot: true,
       compress: true,
       port: 8080
   },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
});
