const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './public/js/app.js'),
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    filename: "[name].bundle.js"
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".css"]
  },
  plugins: [
    // clean dist folder
    new CleanWebpackPlugin({
      'verbose': true // write logs to console
    })
  ]
};
