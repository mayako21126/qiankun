/*
 * @Description:
 * @Version: 2.0
 * @Autor: mayako
 * @Date: 2019-11-26 15:48:32
 * @LastEditors: mayako
 * @LastEditTime: 2019-11-26 16:34:23
 */
const autoImport = require('babel-plugin-auto-import-externals');

const defaultSettings = require('./settings.js');

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 7101; // dev port

module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    plugins: [
      new autoImport({
        setting: defaultSettings,
      }),
    ],
    output: {
      // 把子应用打包成 umd 库格式
      library: '[name]',
      filename: '[name].js',
      libraryTarget: 'umd',
    },
  },
};
