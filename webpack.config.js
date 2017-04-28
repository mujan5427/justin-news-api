/*
 * Webpack is installed at globally
 */

var path = require('path');

module.exports = {
  entry: './static/js/dist/babel/babel-test.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './static/js/dist/')
  }
};
