const path = require("path");
const nodeExternals = require("webpack-node-externals");
const TerserPlugin = require("terser-webpack-plugin");
const cwd = process.cwd();

module.exports = {
  name: "server",
  mode: "production",
  entry: [path.join(cwd, "server", "index.js")],
  target: "node",
  output: {
    path: path.join(cwd, "dist"),
    filename: "server.js",
    publicPath: "/dist/",
    libraryTarget: "commonjs2",
  },
  externals: nodeExternals(),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true
      })
    ]
  }
};
