/**
 * title@骨架屏入口文件
 * path@examples/skeleton.entry.js
 */

import Vue from 'vue'
import skeleton from './main.skeleton.vue'
export default new Vue({
  components: {
    skeleton
  },
  template: '<skeleton id="zmz-loading" />'
})
