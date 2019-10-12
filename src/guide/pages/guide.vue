<template>
  <div class='zmz-guide'>
    <div class="zmz-guide__box">
      <div class="zmz-guide__img"><img src="../../assets/img/logo.png" alt=""></div>
      <div class="zmz-guide__title">欢迎使用zmz-vuecli脚手架!</div>
      <div class="zmz-guide__describe">一款适合新手小白学习的vue脚手架</div>
      <div class="zmz-guide__other">
        <router-link to="/demo">开始使用</router-link>
        <a href="http://ui.zhuimengzhu.com" target="_blank">官方网站</a>
        <a href="https://www.npmjs.com/package/zmz-ui" target="_blank">Npm</a>
        <a href="https://github.com/jiawenguang/zmz-ui" target="_blank">GitHub</a>
      </div>
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
      }
    },
    computed: {
    },
    mounted () {
    },
    methods: {
    },
    components: {
    },
    beforeDestroy () {
    }
  }
</script>

<style lang="less" type="text/less">
	.zmz-guide{
    width: 100%;
    height: 100vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .zmz-guide__box{
      width: 100%;
    }
    .zmz-guide__img{
      display: block;
      padding: 20px 0;
      img{
        width: 320px;
        opacity: .8;
      }
    }
    .zmz-guide__title{
      font-size: 40px;
      color:#d65561;
      padding: 20px 0;
      opacity: .6;
      letter-spacing: 2px;
    }
    .zmz-guide__describe{
      font-size: 20px;
      letter-spacing: 2px;
      color:#6caddd;
      padding: 20px 0;
    }
    .zmz-guide__other{
      padding: 20px 0;
      a{
          color: #fff;
          background-image: linear-gradient(150deg,#d65561,#ea96a5);
          -webkit-box-shadow: 0 2px 6px 0 rgba(51,105,231,.4);
          box-shadow: 0 2px 6px 0 rgba(51,105,231,.4);
          display: inline-block;
          width: 150px;
          height: 40px;
          margin: 10px;
          font-size: 18px;
          line-height: 40px;
          border-radius: 20px;
          -webkit-transition: all .3s;
          transition: all .3s;
          cursor: pointer;
      }
    }
  }
</style>
