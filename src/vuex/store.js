import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import types from './types'
// 相关模块管理
/**
 * 公共引用文件common
 */
import common from './modules/common/common'
const state = {
  USER_TOKEN_FACE: JSON.parse(localStorage.getItem('USER_TOKEN_FACE')) || ''
}
const mutations = {
  // 此处的事件为上方 actions 中的 commit(types.CTITLE)
  [types.USER_TOKEN_FACE] (state, data) {
    if (data) {
      localStorage.setItem(types.USER_TOKEN_FACE, JSON.stringify(data))
      state.USER_TOKEN_FACE = data
    } else {
      localStorage.removeItem('USER_TOKEN_FACE')
      state.USER_TOKEN_FACE = ''
    }
  }
}
/**
 * 模块引入文件
 */
Vue.use(Vuex)
// 创建 store 实例
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    common
  }
})
