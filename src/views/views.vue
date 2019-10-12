<template>
  <div>
			<div class="zmz-demo--1__header">
				<div class="zmz-width-standard">
					<div class="zmz-header-container">
						<div class="zmz-header-left zmz-lt"><router-link :to="{name:'guide'}" title="追梦猪ui组件库-BUG首页"><img src="../assets/img/logo.png"></router-link></div>
						<div class="zmz-header-right zmz-rt">
								 <div class="zmz-demo--nav">
										 <ul class="zmz-nav__demo">
                        <li class="nav-item"><router-link to="/demo/index">首页</router-link></li>
												<li class="nav-item"><a href="https://www.zhuimengzhu.com" target="_blank">追梦猪官网</a></li>
										 </ul>
                     <div class="zmz-nav__login">
                        <span>
                          <a href="http://ui.zhuimengzhu.com" target="_blank">UI文档</a>
                        </span>
                     </div>
								 </div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<router-view></router-view>
			</div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    watch: {
    },
    mounted () {
    },
    created () {
    },
    methods: {
    },
    components: {
    },
    computed: {
    }
  }
</script>

<style lang="less" type="text/less">
  @import '../assets/less/index.less';
</style>
