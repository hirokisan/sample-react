var webpack = require("webpack");
var eslint = require("eslint");

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: __dirname + '/app/scripts',
    filename: 'bundle.js',
    publicPath: '/app/',
	},
	module: {
		preLoaders: [
		{ test: /\.js?$/, loader: 'eslint-loader', exclude: /node_modules/ }
		],
    loaders: [
    { test: /\.js$/,  loader: "babel-loader", exclude: /node_modules/ }
    ]
	},
	eslint: {
		configFile: '.eslintrc',
		failOnWarning: false,
		failOnError: true
	}
}
