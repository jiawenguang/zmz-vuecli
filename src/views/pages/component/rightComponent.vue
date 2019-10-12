<template>
  <div>
    <div v-if="false">
      <div slot="title">
        <span class="header-title">加急求助小贴士</span>
      </div>
      <div>
        <div class="card-item">
          <div class="zmz-help">
            加急bug愿意付费处理,请加qq(1028470211)
          </div>
        </div>
      </div>
    </div>
    <div>
      <div slot="title">
        <span class="header-title">交流方式</span>
      </div>
      <div>
        <div class="card-item">
          <div class="zmz-help">
            <span><i class="zmz-icon--qgroup"></i>Q群：581764678</span>
            <span><i class="zmz-icon--sina"></i>微博：追梦杂货铺分店</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div slot="title">
        <span class="header-title">捐赠墙</span>
      </div>
      <div>
        <div class="zmz-donation">
          <div class="zmz-donation__nav">
            <span class="zmz-wx" @click="donation(0)">微信</span>
            <span class="zmz-zfb" @click="donation(1)">支付宝</span>
          </div>
          <div class="zmz-donation__img">
            <div class="zmz-donation__img__wx" v-show="current==0"><img src="../../../assets/demo/img/wx.png"></div>
            <div class="zmz-donation__img__zfb" v-show="current==1"><img src="../../../assets/demo/img/zfb.png"></div>
          </div>
          <div class="zmz-donation__list">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        current: 0
      }
    },
    watch: {
    },
    methods: {
      donation (index) {
        this.current = index
      }
    },
    mounted () {
    },
    components: {
    },
    computed: {
    }
  }
</script>