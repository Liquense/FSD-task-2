const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = {
	source: path.join(__dirname, '../src'),
	build: path.join(__dirname, '../dist')
};

//Отдельные странички
const mainPages = ['index', 'second'].map(name => {
	return new HtmlWebpackPlugin({
		template: `./src/${name}.pug`,
		filename: `${name}.html`,
		chunks: [`${name}`],
	})
});
const sitePages = [
	'landingPage', 'registrationLogin', 'roomDetails', 'searchRoom'].map(name => {
	return new HtmlWebpackPlugin({
		template: `./src/sitePages/${name}.pug`,
		filename: `${name}.html`,
		chunks: [`${name}`],
	})
});

module.exports = {
	node: {
		fs: "empty"
	},
	entry: {
		index: paths.source + '/index.js',
		second: paths.source + '/second.js',
		landingPage: paths.source + '/sitePages/landingPage.js',
		registrationLogin: paths.source + '/sitePages/registrationLogin.js',
		roomDetails: paths.source + '/sitePages/roomDetails.js',
		searchRoom: paths.source + '/sitePages/searchRoom.js',
	},
	output: {
		path: paths.build,
		filename: "js/[name].bundle.js",
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: './[id].css',
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.$": "jquery",
			"window.jQuery": "jquery",
		}),
	].concat(mainPages, sitePages),

	module: {
		rules: [
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
							pretty: false
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
								paths.source + '/common/mixins.scss',
								paths.source + '/common/variables.scss',
							],
						}
					},
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				include: [
					path.resolve(paths.source, "assets/images")
				],
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'images',
							name: '[name].[ext]',
							publicPath: "images",
						}
					}
				]
			},
			{
				test: /\.(otf|ttf|svg|woff|woff2|eot)$/,
				exclude: [
					path.resolve(paths.source, "assets/images")
				],
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
