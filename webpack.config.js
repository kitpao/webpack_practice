const path = require('path');
const ConsoleLogOnBuildWebpackPlugin = require("./ConsoleLogOnBuildWebpackPlugin.js")

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.jpeg$/,
        use: [
          {loader: "url-loader", options: {
            limit: 10000
          }},
          {loader: "image-webpack-loader", options: {}}
        ],
      }
    ]
  },
  plugins: [
    new ConsoleLogOnBuildWebpackPlugin()
  ]
};
