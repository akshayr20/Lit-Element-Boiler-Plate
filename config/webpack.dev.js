const { resolve } = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: resolve(__dirname, "../public"),
    compress: false,
    port: 3000
  }
});
