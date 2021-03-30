const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
    chunks: [name, 'jquery', 'fontawesome'],
  }));

module.exports = {
  resolve: {
    alias: {
      Assets: path.join(paths.source, 'assets'),
    },
  },

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
    new OptimizeCssAssetsPlugin(),
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
        jquery: {
          test: /[\\/]node_modules[\\/]jquery(-ui)?[\\/]/,
          name: 'jquery',
          chunks: 'all',
        },
        fontAwesome: {
          test: /[\\/]node_modules[\\/]@fortawesome[\\/]/,
          name: 'fontawesome',
          chunks: 'all',
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
            presets: [
              ['@babel/preset-env',
                { exclude: ['proposal-dynamic-import'] },
              ],
            ],
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              hoistUseStatements: true,
              resources: [
                `${paths.source}/shared/mixins.scss`,
                `${paths.source}/shared/constants.scss`,
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.join(paths.source, 'assets/images'),
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
        include: path.join(paths.source, 'assets/favicons'),
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
          path.join(paths.source, 'assets/fonts'),
          path.join(paths.node_modules, '@fortawesome'),
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
