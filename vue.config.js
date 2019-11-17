module.exports = {
  devServer: {
    disableHostCheck: true,
  },

  configureWebpack: {
    resolve: {
      symlinks: false,
    },
  },

  transpileDependencies: ['vuetify'],
}

module.exports = {
  chainWebpack: config => {
      config.module.rules.delete('eslint');
  }
}