const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        test: /\.hbs$/,
        loader: "handlebars-loader",
        options: {
          partialDirs: [path.resolve(__dirname, './templates/partials')],
        }
      },
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
    extensions: ["*", ".js", ".css", ".hbs"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: "./index.html"
    }),
    // clean dist folder
    new CleanWebpackPlugin({
      'verbose': true // write logs to console
    })
  ]
};
