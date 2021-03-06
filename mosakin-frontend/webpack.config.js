/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const file = (...args) => path.resolve(__dirname, ...args);
const merge = require("webpack-merge");
const base = require("./webpack.config.base");

const config = {
  mode: process.env.NODE_ENV,
  entry: {
    main: [file("src", "index.tsx")],
  },
  output: {
    path: file("dist"),
    filename: "[name].[hash].js",
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    open: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: file("src", "index.html"),
      filename: "index.html",
    }),
    new webpack.EnvironmentPlugin({
      BACKEND_SERVICE_BASE_URL: "https://mosakin-ktln-trial.herokuapp.com",
    }),
  ],
};

module.exports = merge(base, config);
