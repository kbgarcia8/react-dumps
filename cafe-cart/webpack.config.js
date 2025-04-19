import { fileURLToPath } from 'url';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/main.jsx',
  watch: true,
  mode: 'development',
  devtool: 'source-map', // Add source maps for easier debugging
  output: {
    clean: true,
    filename: '[name].[contenthash].js', // Use content hash for caching in production
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Kain at Kape',
      metaDesc: 'Kain at Kape offers handcrafted coffee, delicious meals, and cozy vibes. Enjoy a wide variety of food and drinks, now with online orders and rewards!',
      template: './index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets", to: "src/assets" }, // Copy static images
      ],
    }),
  ],
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/i,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
          },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: 'single',
  },
};
