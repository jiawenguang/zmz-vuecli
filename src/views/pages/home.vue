<template>
  <div class='zmz-width-standard'>
  	 <div class="zmz-demo--1__section">
  			<div :gutter="20">
  				 <div style="width: 60%;float: left;">
							 <div class="zmz-demo--1__left">
							 	 <router-view name="index"></router-view>
								 <router-view></router-view>
							 </div>
  				 </div>
					 <div style="width: 40%;float: right;">
					 		<div class="zmz-demo--1__right">
								 <right-list></right-list>
							</div>
					 </div>
           <div style="clear: both;"></div>
  			</div>
  	 </div>
  </div>
</template>

<script>
  import RightList from './component/rightComponent'
  export default {
    metaInfo: {
      title: 'zmz-vuecli - 追梦猪vue脚手架全家桶减少重复性工作,提高工作效率,为快捷开发而生!',
      meta: [
        {
          name: 'keyWords',
          content: '追梦猪vue脚手架,vuecli,zmz-vuecli,追梦猪vue全家桶脚手架'
        },
        {
          name: 'description',
          content: '追梦猪vue脚手架全家桶集成vue2.0、vuex、vue-router、axios,减少重复性工作,提高工作效率,为快捷开发而生!'
        }
      ]
    },
    data () {
      return {
      }
    },
    watch: {
      $route () {
      }
    },
    mounted () {
    },
    components: {
      RightList
    }
  }
</script>
