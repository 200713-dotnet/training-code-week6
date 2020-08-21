const path = require('path');

module.exports = {
  entry: './out/index.js',
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};