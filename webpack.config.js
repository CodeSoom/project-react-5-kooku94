const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './index.html',
  })],
  devServer: {
    historyApiFallback: {
      index: 'index.html',
    },
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true,
    compress: true,
    port: 8080,
    client: {
      overlay: true,
      progress: true,
    },
  },
};
