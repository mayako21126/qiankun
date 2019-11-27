/*
 * @Description:
 * @Version: 2.0
 * @Autor: mayako
 * @Date: 2019-11-22 09:29:04
 * @LastEditors: mayako
 * @LastEditTime: 2019-11-22 22:29:05
 */
module.exports = {
  // 模块名
  name: 'app',
  // 是否是singleSpa
  singleSpa: true,
  // 需要分离的模块及对应地址
  importObj: {
    vue: {
      name: 'Vue',
      url: 'https://cdn.bootcss.com/vue/2.6.10/vue.min.js',
    },
    vuex: {
      name: 'Vuex',
      url: 'https://cdn.bootcss.com/vuex/3.1.1/vuex.min.js',
    },
    'vue-router': {
      name: 'VueRouter',
      url: 'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js',
    },
  },
};
