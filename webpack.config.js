const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const paths = {
  SRC: path.resolve(__dirname, 'src'),
  DIST: path.resolve(__dirname, 'dist'),
  PUBLIC: path.resolve(__dirname, 'public')
};

module.exports = {
  entry: path.join(paths.SRC, 'index.js'),
  output: {
    path: paths.PUBLIC,
    filename: IS_PRODUCTION ? '[name].[contenthash].js' : '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(.png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name() {
            return !IS_PRODUCTION
              ? '[path][name].[ext]'
              : '[contenthash].[ext]';
          },
          outputPath: 'assets'
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 5000,
    https: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000/',
        changeOrigin: true
      }
    },
    allowedHosts: ['localhost']
  },
  resolve: {
    alias: {
      User: path.resolve(paths.SRC, 'app/state/user')
    }
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: IS_PRODUCTION,
        cache: true
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.DIST, 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    })
  ]
};
