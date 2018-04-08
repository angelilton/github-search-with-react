'use strict'

const webpack = require('webpack')
const config  = require('./webpack.config')
const webpackDevServer = require('webpack-dev-server')

new webpackDevServer( webpack(config),{
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen( 3000, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('lestening on http://localhost:3000/');

})
