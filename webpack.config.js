let env = process.env.NODE_ENV || 'development';

const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeJsPlugin = require("optimize-js-plugin");  

console.log('NODE_ENV:', env);

let plugins = [];

if (env === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin(), 
    new OptimizeJsPlugin({
      sourceMap: false
    })
  );
}

module.exports = {
  entry: ["react-hot-loader/patch", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js"
  },
  plugins: [
    ...plugins,
    new HTMLWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      inject: "body"
    })
  ],

  
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
};
