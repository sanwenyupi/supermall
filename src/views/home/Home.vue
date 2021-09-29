<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">商城</div></nav-bar>
    <home-carousel :banners="banners" />
    <recommend-view :recommends="recommends" />
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from '../../components/common/navbar/NavBar.vue'
import HomeCarousel from './childComps/HomeCarousel.vue'
import RecommendView from './childComps/RecommendView.vue'

import {getHomeMultidata} from '../../network/home'

  export default {
      components: {
        NavBar,
        HomeCarousel,
        RecommendView
      },
      data() {
        return {
          banners: [],
          recommends: []
        }
      },
      created(){
        // 1. 请求轮播图数据和推荐数据
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
