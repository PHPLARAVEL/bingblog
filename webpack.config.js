var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {
  "entry": "./src/index.js",
  "output": {
    "filename": "bundle.js",
    "path": path.join(__dirname, "built")
  },
  "module":{
      "loaders":[
          { test:/\.js$/,   loader: "babel-loader" },
          { test:/\.css$/,    loader:"style!css!" },
          { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
          { test: /\.ttf$/,    loader: "file-loader" },
          { test: /\.eot$/,    loader: "file-loader" },
          { test: /\.svg$/,    loader: "file-loader" }
      ]
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./built directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['built'] }
    })
  ]
}