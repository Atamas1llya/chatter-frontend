const path = require('path');
const OfflinePlugin = require('offline-plugin');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [{
      test: /.jsx?$/,
      exclude: /\/node_modules\//,
      loader: 'babel-loader',
    }, {
      test: /.less$/,
      loaders: ['style-loader', 'css-loader', 'less-loader'],
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less'],
  },
  plugins: [
    new OfflinePlugin(),
    new PrerenderSpaPlugin(
      path.join(__dirname, '../dist'),
      [ '/', '/login' ]
    ),
    new WebpackPwaManifest({
      name: 'Chatter',
      short_name: 'Chatter',
      description: 'Chatter pet project',
      background_color: '#ffffff',
    })
  ]
};
