const path = require("path");
const cwd = process.cwd();
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: [path.join(cwd, "client", "index.js")],
  output: {
    path: path.join(cwd, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers"),
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './client/.env'
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true
      })
    ]
  }
};
