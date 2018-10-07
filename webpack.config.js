const path = require('path');
const webpack = require('webpack');
// const BabiliPlugin = require('babel-preset-minify');
// const BabiliPlugin = require('babili-webpack-plugin');

module.exports = env => {
  return {
    context: __dirname,
    entry: './client/ClientApp.jsx',
    // devtool: 'eval',
    devtool: env.prod ? 'source-map' : 'eval',
    output: {
      path: path.join(__dirname, '/public'),
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          include: [
            path.resolve(__dirname, 'client'),
            path.resolve(__dirname, 'components'),
            path.resolve(__dirname, 'containers'),
          ],
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                url: false,
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
            }, {
              loader: 'css-loader',
            }, {
              loader: 'sass-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      // new BabiliPlugin(),
    ],
  };
};
