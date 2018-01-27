const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


// Webpack Development Configuration

const config = {
  plugins: [
    new UglifyJsPlugin(),
  ]
}

module.exports = config;