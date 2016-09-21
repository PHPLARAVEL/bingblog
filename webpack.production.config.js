var path = require('path');
var webpack = require('webpack');
module.exports = {
  "entry": "./src/index.js",
  "output": {
    "filename": "bundle.js",
    "path": path.join(__dirname, "built")
  },
  "module":{
      "loaders":[
          { "test":/\.js$/,
            "loader": "babel-loader"
          },
          {
            "test":/\.css$/,
            "loader":"style!css!"
          }
      ]
  },
  plugins: [
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            screw_ie8: true,
            drop_console: true,
            drop_debugger: true
        }
    }),
  ]
}
