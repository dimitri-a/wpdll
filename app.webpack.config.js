var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
        app: path.join(__dirname, "client", "app.js")
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
    })],
    module: {
        loaders: [
          {
            test: /\.js?$/,
            loader: "babel-loader",
            include: [
              path.join(__dirname, "client") //important for performance!
            ],
            exclude: [
              path.join(__dirname, "node_modules")
            ],
            query: {
              cacheDirectory: true, //important for performance
              plugins: ["transform-regenerator"],
              presets: ["es2015", "stage-0"]
            }
          },
    
          { test: /\.(scss|sass)$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
          { test: /\.html$/, loader: 'raw-loader' },
          { test: /\.css$/, loader: 'css-loader' }
        ]
      }
};
