// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueQuillEditor from 'vue-quill-editor'
import MetaInfo from 'vue-meta-info'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import './assets/demo/css/demo.css'
Vue.use(MetaInfo)
Vue.config.productionTip = false
Vue.use(VueQuillEditor)
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  // console.log(next)
  next()
})
new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    // 预编译
    document.dispatchEvent(new Event('render-event'))
  },
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')
