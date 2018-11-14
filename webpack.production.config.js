var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ["babel-polyfill", __dirname + "/src/index.js"],
	output: {
		path: __dirname + "/build",
		filename: "client.min.js"
	},

	module: {
		rules: [ // Changed name from loaders
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'sass-loader'}
				]
			}

		]

	},

	plugins: [
		new webpack.BannerPlugin("Spotify NLG\n"), // Puts a string at the top of the bundled file.
		new HtmlWebpackPlugin({template: __dirname + "/src/index.tmpl.html"}), // Generates the final html file.
	],
}
