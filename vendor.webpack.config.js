var webpack = require('webpack');
module.exports = {
  entry: {
    vendor: ['angular'],
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
