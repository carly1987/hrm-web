
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
// var globby = require('globby');
var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');
// var cwd = process.cwd();

var srcPath = path.resolve(__dirname + '/src');
var outputPath = path.resolve(__dirname + '/build');

// var files = globby.sync(['**/pages/*'], { cwd: cwd + '/src' });
// var entry = {};
// files.forEach((item) => {
//   entry[item + '/index'] = ['./src/' + item + '/index.jsx'];
// });

module.exports = {
	context: srcPath,
	entry: {
		index: ['./pages/index/index.js']
	},
	output: {
		filename: '[name].js',
		path: outputPath,
		publicPath: '/build/'
	},
	resolve: {
		root: srcPath,
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
		        exclude: /node_modules/,
		        loader: 'babel'
			},
			{
				test: /\.scss/,
				loader: ExtractTextPlugin.extract('style', 'css!sass')
			}
		]
	},
	plugins: [
		// 进度插件
	    new webpack.ProgressPlugin((percentage, msg) => {
	      const stream = process.stderr;
	      if (stream.isTTY && percentage < 0.71) {
	        stream.cursorTo(0);
	        stream.write(`📦   ${msg}`);
	        stream.clearLine(1);
	      }
	    }),

	    new LiveReloadPlugin(),

	    new ExtractTextPlugin('[name].css', { allChunks: true })
	]
}