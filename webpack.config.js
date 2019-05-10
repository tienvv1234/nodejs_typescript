const path = require('path');
const nodeExternals = require('webpack-node-externals'); // reslove the WARNING of express
const config = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  target: 'node', // need this to fix error 'fs'
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [{ test: /\.ts?$/, loader: 'ts-loader' }]
  }
};

module.exports = config;
