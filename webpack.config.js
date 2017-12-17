const path = require('path');
const OfflinePlugin = require('offline-plugin');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const config = {
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
  plugins: [],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new OfflinePlugin(),
    new PrerenderSpaPlugin(
      path.join(__dirname, '../dist'),
      ['/', '/login'],
    ),
  );
}

module.exports = config;
