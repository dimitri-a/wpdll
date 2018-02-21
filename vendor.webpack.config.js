var webpack = require('webpack');
var pkg     = require('./package.json')
module.exports = {
  entry: {
    vendor: Object.keys(pkg.dependencies),
  },
  output: {
    filename: 'vendor.bundle.js',
    path: '/Users/dimitri/Downloads/wpdll/build/',
    library: 'vendor_lib',
  },
  plugins: [new webpack.DllPlugin({
    name: 'vendor_lib',
    path: '/Users/dimitri/Downloads/wpdll/build/vendor-manifest.json',
  })]
};
