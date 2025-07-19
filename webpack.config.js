const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    mode: isProduction ? "production" : "development",
    entry: ["./src/index.js", "./src/styles/main.scss"],
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "./public/dist"),
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                api: "modern",
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 9001,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "bundle.css",
      }),
      new EslintWebpackPlugin(),
    ],
    optimization: {
      minimize: isProduction,
    },
  };
};
