<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">商城</div></nav-bar>
    <tab-control class="tab-control" 
                  :titles="['流行','新款','精选']" 
                  @tabClick="tabClick"
                  ref="tabControl1"
                  v-show="isTabFixed"
                  />

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore"
            >
      <home-carousel :banners="banners" @carouselImageLoaded="carouselImageLoaded"/>
      <recommend-view :recommends="recommends" />
      <pop-view />
      <tab-control class="tab-control" 
                  :titles="['流行','新款','精选']" 
                  @tabClick="tabClick"
                  ref="tabControl2"
                  />
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script type="text/ecmascript-6">
// 主页组件
import HomeCarousel from './childComps/HomeCarousel.vue'
import RecommendView from './childComps/RecommendView.vue'
import PopView from './childComps/PopView.vue'

// 公共组件
import NavBar from '../../components/common/navbar/NavBar.vue'
import TabControl from '../../components/content/tabControl/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'

import {getHomeMultidata, getHomeGoods} from '../../network/home'

  export default {
      components: {
        NavBar,
        HomeCarousel,
        RecommendView,
        PopView,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
      },
      data() {
        return {
          banners: [],
          recommends: [],
          goods: {
            'pop': {page: 0, list: []},
            'new': {page: 0, list: []},
            'sell': {page: 0, list: []}
          },
          currentType: 'pop',
          isShowBackTop: false,
          tabOffsetTop: 0,
          isTabFixed: false,
          saveY: 0
        }
      },
      computed: {
        showGoods(){
          return this.goods[this.currentType].list
        }
      },
      activated() {
        this.$refs.scroll.scrollTo(0, this.saveY, 0)
        this.$refs.scroll.scroll.refresh()
      },
      deactivated() {
        this.saveY = this.$refs.scroll.scroll.y
      },
      created(){
        // 1. 请求轮播图数据和推荐数据
        this.getHomeMultidata()

        // 2. 请求下方三类商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
      },
      updated() {
        this.$refs.scroll.scroll.refresh()
      },
      methods: {
        // 事件监听
        tabClick(index){
          switch(index){
            case 0:
              this.currentType = 'pop'
              break
            case 1:
              this.currentType = 'new'
              break
            case 2:
              this.currentType = 'sell'
          }
          this.$refs.tabControl1.currentIndex = index
          this.$refs.tabControl2.currentIndex = index
        },
        backClick(){
          this.$refs.scroll.scroll.scrollTo(0, 0, 1000)
        },
        contentScroll(position){
          // 1.决定backtop是否显示
          this.isShowBackTop = -position.y > 1000
          // 2.决定tabControl是否吸顶
          this.isTabFixed = (-position.y) > this.tabOffsetTop
        },
        loadMore(){
          this.getHomeGoods(this.currentType)
          this.$refs.scroll.scroll.refresh()
        },
        carouselImageLoaded(){
          // tabbarcontrol的吸顶
          // 通过$refs获取定义了ref属性的组件，
          // this.$refs.tabControl代表了定义了ref="tabControl"的<tab-control>组件，
          // 组件没有属性，因此需要使用this.$refs.tabControl.$el.offsetTop来获取组件的DOM元素的属性
          this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        },


        // 网络请求
        getHomeMultidata(){
          getHomeMultidata().then(res => {
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
          })        
        },
        getHomeGoods(type){
          const page = this.goods[type].page + 1
          getHomeGoods(type, page).then(res => {
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1

            this.$refs.scroll.finishPullUp()
          })
        }
      },
  }
</script>

<style scoped>
  #home{
    height: 100vh;
  }
  .home-nav{
    position: relative;
    z-index: 9;
    background-color: var(--color-tint);
    color: #fff;
  }

  .content{
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>
