const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

// configure webpack to watch external theme-files for changes
const filewatcherPlugin = require("filewatcher-webpack-plugin");

// Webpack Development Configuration

const config = {
  entry: ['./livereload'],
  plugins: [
    new LiveReloadPlugin(),
    new filewatcherPlugin({
      watchFileRegex: [
        path.resolve(__dirname, 'src/theme'),
      ]
    }),
    new webpack.SourceMapDevToolPlugin(),    
    new webpack.EvalSourceMapDevToolPlugin(),
  ]
}

module.exports = config;