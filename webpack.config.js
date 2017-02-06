var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require("webpack");

module.exports = {
	entry: {
		app: __dirname + '/static/js',
	},
	output: {
		filename: 'app.js',
		path: __dirname + '/dist/js',
	},

	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
            jquery: __dirname + '/node_modules/jquery/dist/jquery.min.js',
		}
	},

	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		],
	},

	plugins: [
		new CopyWebpackPlugin([
			{ from: __dirname + '/node_modules/materialize-css/dist/js', to: __dirname + '/dist/js' },
			{ from: __dirname + '/node_modules/materialize-css/dist/css', to: __dirname + '/dist/css' },
			{ from: __dirname + '/node_modules/materialize-css/dist/fonts', to: __dirname + '/dist/fonts' },
		]),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
	]
};
