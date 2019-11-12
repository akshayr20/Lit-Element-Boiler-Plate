const { resolve } = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    })
  ],
  devServer: {
    contentBase: resolve(__dirname, "../public"),
    compress: false,
    port: 3000
  }
});
