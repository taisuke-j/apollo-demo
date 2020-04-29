const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name]-[hash:8].js',
    publicPath: "/"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  plugins: new HtmlWebpackPlugin({
    template: 'src/html/index.html'
  }),
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: process.env.NODE_ENV === "development"
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  }
});