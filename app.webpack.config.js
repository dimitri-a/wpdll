var webpack = require('webpack');
module.exports = {
  entry: {
    app: ['./app'],
  },
  output: {
    filename: 'app.bundle.js',
    path: '/Users/dimitri/Downloads/wpdll/build/',
  },
  plugins: [new webpack.DllReferencePlugin({
    context: '.',
    manifest: require('./build/vendor-manifest.json'),
  })]
};
