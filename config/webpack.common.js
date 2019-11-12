const { resolve } = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");

module.exports = {
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [new CheckerPlugin()]
};
