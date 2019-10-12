/**
 * title:骨架屏文件
 * author:zmz
 * date:2019-8-20
 */
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
console.log(path.resolve(__dirname, '../examples/skeleton.entry.js'))
module.exports = {
  target: 'node',
  entry: {
    skeleton: path.resolve(__dirname, '../examples/skeleton.entry.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueSSRServerPlugin({
      filename: 'skeleton.json'
    })
  ]
}
