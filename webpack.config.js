import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { resolve } from 'path'

export default {
  entry: './src/main.jsx',
  mode: 'production',

  output: {
    clean: true,
    filename: 'main[contenthash].js',
    path: resolve('./build'),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(html|htm)$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|jpg|jpeg|png)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(mjs|js|jsx|cjs)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  resolve: {
    alias: {
      src: resolve('./src'),
    },
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),

    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
  ],
}
