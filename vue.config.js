const webpack = require('webpack')

module.exports = {
  parallel: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        cash: 'cash-dom',
        Popper: '@popperjs/core'
      })
    ]
  }
}
