var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
        app: ['./app'],
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000
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
