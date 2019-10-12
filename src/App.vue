<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    filters: {
      // 过滤器
    },
    watch: {
      // 事件监听
    },
    methods: {
      // 用于存储各种方法
    },
    computed: {
      // 计算属性
    },
    components: {
      // 定义组件
    },
    beforeCreate () {
      // 实例创建完成前
    },
    created () {
      // 实例创建完成
    },
    beforeMount () {
      // 在挂载开始之前被调用
    },
    mounted () {
      // 实例挂载到DOM上
    },
    beforeupdate () {
      // 响应式数据更新时调用
    },
    updated () {
      // 修改后调用
    },
    beforeDestroy () {
      // 实例销毁之前调用
    },
    destroyed () {
      // 实例销毁后调用
    }
  }
</script>
<style lang="less" type="text/less">
  body.scrollname{
    overflow: hidden;
    overflow-y: auto;
    /* 设置滚动条的样式 */
    &::-webkit-scrollbar {
      width:5px;
      background-color: #f4f5f9;
    }
    /* 滚动槽 */
    &::-webkit-scrollbar-track {
      border-radius:5px;
    }
    /* 滚动条滑块 */
    &::-webkit-scrollbar-thumb {
      border-radius:5px;
      background:#8dabc4;
    }
  }
</style>
