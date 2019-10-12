<template>
		<router-view></router-view>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        init: false,
        isIndex: true
      }
    },
    watch: {
      $route () {
      }
    },
    mounted () {
      //  这里模拟数据请求
      setTimeout(() => {
        this.init = true
      }, 250)
    },
    methods: {
      zmzButton () {
      }
    },
    components: {
    }
  }
</script>

<style lang="less" type="text/less">
</style>
