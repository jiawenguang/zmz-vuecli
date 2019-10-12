// 导入 types.js 文件
import types from '../../types'

const state = {
  ctitle: {}
}

// 定义 getters
var getters = {
  ctitle (state) {
    return state.ctitle
  }
}

const actions = {
  CTITLE ({
    commit,
    state
  }) {
    // 此处提交的事件与下方 mutations 中的 types.CTITLE 对应
    // 与原来 commit('ctitle') 的原理相同，只是把类型名换成了常量
    commit(types.CTITLE)
  }
}

const mutations = {
  // 此处的事件为上方 actions 中的 commit(types.CTITLE)
  [types.CTITLE] (state, data) {
    state.ctitle = data
  }
}
// 最后统一导出
export default {
  state,
  getters,
  actions,
  mutations
}
