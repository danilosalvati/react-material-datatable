const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, 'renderer.js'),
  output: {
    path: __dirname + "/build",
    filename: "demo.build.js"
  },
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },
  devServer: {
    contentBase: path.resolve(__dirname)
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};
