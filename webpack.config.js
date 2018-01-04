const webpack = require('webpack');
const path = require('path');
const OfflinePlugin = require('offline-plugin');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    // new OfflinePlugin(),
    new PrerenderSpaPlugin(
      path.join(__dirname, './dist'),
      ['/', '/login'],
    ),
  );
} else if (process.env.NODE_ENV === 'test') {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
