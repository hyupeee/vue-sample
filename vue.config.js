const { defineConfig, } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify",],
  lintOnSave: true,
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
});
