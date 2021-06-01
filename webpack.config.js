const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './Resources/Private/Javascript/app.js',
    mode: 'production',
    output: {
      path: `${__dirname}/Resources/Public/`,
      filename: 'bundle.js',
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new CopyPlugin({
        patterns: [
          { from: "Resources/Private/Images/", to: "Images/" }
        ],
      }),
    ],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              "sass-loader",
            ],
          },
          {
            test: /\.(svg|gif|png|eot|woff|ttf)$/,
            use: [
              'url-loader',
            ],
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
        ],
      },
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            extractComments: false,
          }),
          new OptimizeCssAssetsPlugin(),
        ],
      },
  };