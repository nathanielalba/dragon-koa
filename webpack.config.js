const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!bootstrap-sass/assets/javascripts/bootstrap.min.js',
    './src/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './src/components'
    ],
    alias: {
      applicationStyles: 'src/styles/app.scss'
    }
  },
  module: {
    loaders: [
      {
        loader: 'url-loader?limit=100000',
        test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/
      },
      {
        loader: 'babel-loader',
        query: {
          presets: [ 'react', 'es2015' ]
        },
        test: /\.jsx?$/,
        exlude: /node_modules/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/bootstrap-sass/assets/stylesheets'),
      path.resolve(__dirname, './node_modules/bootstrap-sass/assets/fonts')
    ]
  },
  postcss: function() {
    return [require('autoprefixer'), require('precss')]
  },
  devtool: 'inline-source-map'
};
