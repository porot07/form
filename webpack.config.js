const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html',
    filename: 'index.html',
  })],
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      { test: /\.jsx?$/, use: 'babel-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
