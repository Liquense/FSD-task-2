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
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './[name].css',
        }),
    ].concat(pagesMap),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'webpack-bem-loader',
                        options: {
                            levels: [
                                './src/blocks'
                            ],
                            techs: ['js', 'css', 'html'],
                            techMap: {
                                js: ['js'],
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
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    'sass-loader',
                ]
            },
            {
                test: [/\.jpg$/, /\.jpeg$/, /\.png$/, /\.svg$/, /\.gif$/],
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
