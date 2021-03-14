const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = {
  source: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../dist'),
  node_modules: path.join(__dirname, '../node_modules'),
};

const pageNames = [
  'index', 'ui-kit', 'landing', 'login', 'registration', 'room-details', 'search-room',
];

const entries = pageNames.reduce(
  (accumulator, pageName) => (
    { ...accumulator, ...{ [pageName]: `${paths.source}/site-pages/${pageName}/${pageName}.js` } }
  ), {},
);

const sitePages = pageNames
  .map((name) => new HtmlWebpackPlugin({
    template: `./src/site-pages/${name}/${name}.pug`,
    filename: `${name}.html`,
    chunks: [`${name}`, 'vendors'],
  }));

module.exports = {
  entry: entries,

  output: {
    path: paths.build,
    filename: 'js/[name].bundle.js',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
      ignoreOrder: true,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
    }),
  ].concat(sitePages),

  optimization: {
    splitChunks: {
      name: false,

      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 1,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-optional-chaining'],
          },
        },
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: false,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
          },
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              hoistUseStatements: true,
              resources: [
                `${paths.source}/common/mixins.scss`,
                `${paths.source}/common/variables.scss`,
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(paths.source, 'assets/images'),
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(svg|png|ico|json|webmanifest|xml)$/,
        include: path.resolve(paths.source, 'assets/favicons'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(otf|ttf|svg|woff|woff2|eot)$/,
        include: [
          path.resolve(paths.source, 'assets/fonts'),
          path.resolve(paths.node_modules, '@fortawesome'),
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};
