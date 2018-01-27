const path = require('path');
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Detect Node Environment Variable and load corresponing webpack config-extras
const prod = process.argv.indexOf('-p') !== -1;
const ENV_CONF = prod ? require('./webpack.config.prod') : require('./webpack.config.dev')

// Webpack Base Configuration

const config = {
  entry: ['./src/app/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'assets/app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      { 
        test: /\.tsx?$/, 
        use: {
          loader: 'ts-loader'
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { importLoaders: 1 }, },
          { loader: "postcss-loader" }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { importLoaders: 1 }, },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/theme' },
      { from: './package.json' }
    ],
    {
      copyUnmodified: true
    }
  ),
  ],
}

// Export a merge of base- and dev/prod- config 
module.exports = env => {
  return merge(config, ENV_CONF)
}
