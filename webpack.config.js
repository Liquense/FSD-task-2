const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist')
};

//Отдельные странички
const pagesMap = ['index', 'second'].map(name => {
    return new HtmlWebpackPlugin({
        template: `./src/${name}.pug`,
        filename: `${name}.html`,
        chunks: [`${name}`],
    })
});

module.exports = {
    entry: {
        index: paths.source + '/index.js',
        second: paths.source + '/second.js',
    },
    output: {
        path: paths.build,
        filename: "js/[name].bundle.js",
        chunkFilename: "[name].js",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './[id].css',
        }),
        //  new webpack.ProvidePlugin({
        //      $: "jquery",
        //      jQuery: "jquery",
        //      "window.$": "jquery",
        //      "window.jQuery": "jquery"
        // }),
    ].concat(pagesMap),
    // resolve: {
    //     alias: {
    //         "jquery-ui": "jquery-ui/build/release.js",
    //         modules: path.join(__dirname, "node_modules"),
    //     }
    // },

    module: {
        rules: [
            // {
            //     test: /vendor\/.+\.(jsx|js)$/,
            //     loader: "imports-loader?jQuery=jquery,$=jquery,this=>window"
            // },
            {
                test: /[\/\\]src[\/\\]common\.js$/,
                use: [
                    {
                        loader: 'webpack-bem-loader',
                        options: {
                            levels: [
                                './src/blocks'
                            ],
                            techs: [/*'js', */'css', 'html'],
                            techMap: {
                                // js: ['js'],
                                css: ['scss'],
                                html: ['pug']
                            }
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: true,
                            plugins: ['react-hot-loader/babel']
                        }
                    },
                ],
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'pug-loader',
                        options: {
                            pretty: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                    },
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                paths.source + '/globals/mixins.scss',
                                paths.source + '/globals/variables.scss',
                            ],
                        }
                    },
                ]
            },
            {
                test: [/\.jpg$/, /\.jpeg$/, /\.png$/, /\.gif$/],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name].[ext]',
                        }
                    }
                ]
            },
            {
                test: [/\.otf$/, /\.ttf$/, /\.svg$/,],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                            name: '[name].[ext]',
                            publicPath: "fonts",
                        }
                    }
                ]
            },
        ]
    }
};
