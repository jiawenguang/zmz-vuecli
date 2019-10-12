<template>
	<div>
		<div class="zmz-mb-20">
			<div class="zmz-demo--1__notice">
				<div type="fill-horn">
            似乎没有通知哦
				</div>
			</div>
		</div>
    <div v-if="buglist.length==0" class="zmz-media">
      <div class="zmz-zwnr"><router-link to="/demo/details">列表页</router-link></div>
    </div>
	</div>
</template>
<script>
  export default{
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
        buglist: []
      }
    },
    computed: {
    },
    mounted () {
    },
    filters: {
    },
    methods: {
    },
    components: {
    }
  }
</script>
