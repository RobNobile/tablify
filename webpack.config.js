const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // entry point from which webpack will build its dependency graph // or use path.resolve(__dirname, './clinet/index.js')
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    // consider filename: 'js/[name].[hash].js', for caching - https://www.sentinelstand.com/article/create-react-app-from-scratch-with-webpack-and-babel
    filename: './[name].[hash].js',
  },
  devServer: {
    // The dev server will serve content from this directory.
    contentBase: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist/',
    hot: true,
    // proxy example for Names list. Install 'concurrently' package and add to dev script:
    proxy: {
      '/api': 'http://localhost:3000',
    }
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        // rules for bundling .js/.jsx files
        test: /\.jsx?/,
        // exclude node modules
        exclude: /node_modules/,
        // use babel loader with react specific presets to transpile JSX/React/ES6+ code down to ES5
        use: { // use as an object if one loader
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        // rules for bundling .scss/.css files
        test: /\.s?css/,
        exclude: /node_modules/,
        use: [ // use as an array of multiple loaders
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // // Compiles Sass to CSS
          // 'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: 'url-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './client/index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
};
