import Vue from 'vue'
import Router from 'vue-router'
import navConf from '../nav.config.json'

Vue.use(Router)

let routes = []
// index下标
// navConf项目数组
// navConf[index]每个项目
// indexs项目所属
// indexs>indexss的key
Object.keys(navConf).forEach((index) => {
  // console.log(navConf[index])
  Object.keys(navConf[index]).forEach((indexs) => {
    // console.log(navConf[index][indexs][0])
    navConf[index][indexs][0].folder = navConf[index][indexs][1]
    routes = routes.concat(navConf[index][indexs][0])
  })
})
let addComponent = (router) => {
  router.forEach((route, index) => {
    if (route.children) {
      route.children.forEach((item) => {
        item.folder = route.folder
      })
      addComponent(route.children)
    }
    if ((route.redirect !== '' && route.redirect !== undefined) || (router.entrance !== '' && route.entrance !== undefined)) {
      route.component = () => import(/* webpackChunkName: "uiz" */ `../${route.folder}/${route.entrance}`)
      return
    }
    // console.log(route.name)
    // console.log('文件名称', route.template)
    // console.log('文件夹', route.folder)
    if (route.path === '*') {

    } else {

    }
    route.component = () => import(/* webpackChunkName: "ui" */ `../${route.folder}/pages/${route.template}`)
  })
}
// let addComponent = (router) => {
//   router.forEach((route, index) => {
//     if (route.children) {
//       route.children.forEach((item) => {
//         item.folder = route.folder
//       })
//       addComponent(route.children)
//     }
//     if ((route.redirect !== '' && route.redirect !== undefined) || (router.entrance !== '' && route.entrance !== undefined)) {
//       route.component = r => require.ensure([], () =>
//         r(require(`../${route.folder}/${route.entrance}`)))
//       return
//     }
//     // console.log(route.name)
//     // console.log('文件名称', route.template)
//     // console.log('文件夹', route.folder)
//     if (route.path === '*') {
//
//     } else {
//
//     }
//     route.component = r => require.ensure([], () =>
//       r(require(`../${route.folder}/pages/${route.template}`)))
//   })
// }
addComponent(routes)
export default new Router({
  // mode: 'history', // SSR必须使用history模式
  routes: routes
})
