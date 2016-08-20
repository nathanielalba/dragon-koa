module.exports = {
  entry: ['./src/app.jsx'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: [ 'react', 'es2015' ]
        },
        test: /\.jsx?$/,
        exlude: /node_modules/
      }
    ]
  }
}
