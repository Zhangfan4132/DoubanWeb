var path = require('path')

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js'
  }
}