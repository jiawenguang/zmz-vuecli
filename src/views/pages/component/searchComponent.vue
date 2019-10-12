<template>
  <div class="zmz-search">
		  <div class="search-icon"><i class="zmz-icon--search" @click="searchInput"></i></div>
			<div class="search-input"><input type="text" v-model="keyword" @keyup.enter="searchInput" placeholder="请输入"></div>
	</div>
</template>

<script>
  export default {
    name: 'SearchBox',
    data () {
      return {
        keyword: ''
      }
    },
    watch: {
      $route () {
      }
    },
    methods: {
      searchInput () {
        this.$router.push({
          path: '/bug/search'
        })
        this.$root.eventHub.$emit('searchInput', this.keyword)
        // eventHub触发事件
      }
    },
    mounted () {
      //  这里模拟数据请求
      setTimeout(() => {
        this.init = true
      }, 250)
    },
    components: {
    }
  }
</script>

<style lang="less" type="text/less">
 .zmz-search{
	 width: 100%;
	 height: 45px;
	 background: #fff;
	 border: 1px solid #f4f5f9;
	 box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
	 margin-bottom: 20px;
	 position: relative;
	 .search-icon{
		 float: right;
		 text-align: center;
		 line-height: 45px;
		 width: 45px;
		 font-size: 30px;
		 position:absolute;
		 right:0;
		 i{
			 font-size: 30px;
			 color: #6e8aaf;
		 }
	 }
	 .search-input{
		   input{
				 line-height: 45px;
				 border: 0;
				 background: none;
				 outline: none;
				 width: 100%;
				 padding-right: 45px;
				 padding-left: 15px;
				 box-sizing: border-box;
			 }
		}
 }
</style>
