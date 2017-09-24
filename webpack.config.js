var webpack = require("webpack");

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: __dirname + '/app/scripts',
    filename: 'bundle.js',
    publicPath: '/app/',
  },
	module: {
		loaders: [
		{
			test: /\.js$/,
			loader: "babel-loader",
			exclude: /node_modules/
		}
		]
	}
}
