<template>
    <div id="detail">
      <detail-nav-bar 
              ref="nav" 
              class="detail-nav" 
              @titleClick="titleClick"/>
      <scroll class="content" 
              ref="scroll" 
              @scroll="contentScroll" 
              :probe-type="3">
        <detail-carousel :top-images="topImages"/>
        <detail-base-info :goods="goods" />
        <detail-shop-info :shop="shop" />
        <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
        <detail-param-info ref="param" :param-info="paramInfo" />
        <detail-comment-info ref="comment" :comment-info="commentInfo" />
        <goods-list ref="recommend" :goods="recommends" />
      </scroll>
      
      <detail-bottom-bar @addCart="addToCart" />

    </div>
</template>

<script type="text/ecmascript-6">
import DetailNavBar from '../../views/detail/childComps/DetailNavBar.vue'
import DetailCarousel from './childComps/DetailCarousel.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import {getDetail, getRecommend, Goods, GoodsParam, Shop} from '../../network/detail'
import Scroll from '../../components/common/scroll/Scroll.vue'
import {debounce} from '../../common/utils'
import GoodsList from '../../components/content/goods/GoodsList.vue'

import {mapActions} from 'vuex'

    export default {
        name: 'Detail',
        data() {
          return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            paramInfo: {},
            commentInfo: {},
            recommends: [],
            themeTopYs: [],
            getThemeTopY: null,
            currentIndex: 0,
            }
        },
        components: {
          DetailNavBar,
          DetailCarousel,
          DetailBaseInfo,
          DetailShopInfo,
          Scroll,
          DetailGoodsInfo,
          DetailParamInfo,
          DetailCommentInfo,
          GoodsList,
          DetailBottomBar,
        },
        created() {
          // 1.保存传入的id
          this.iid = this.$route.params.id

          // 2.根据id请求数据
          getDetail(this.iid).then(res => {
            const data = res.result
            // 1.图片
            this.topImages = data.itemInfo.topImages
            // 2.商品信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
            // 3.店铺信息
            this.shop = new Shop(data.shopInfo)
            // 4.商品详细信息
            this.detailInfo = data.detailInfo
            // 5.商品参数信息
            this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
            // 6.评论信息
            if(data.rate.cRate !== 0){
              this.commentInfo = data.rate.list[0]
            }
          })

          // 3.请求推荐数据
          getRecommend().then(res => {
            this.recommends = res.data.list
          })

          // 4. 给getThemeTopY赋值
          this.getThemeTopY = debounce(() => {
            this.themeTopYs = []
              
            this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.param.$el.offsetTop)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
            this.themeTopYs.push(Number.MAX_VALUE)

            console.log(this.themeTopYs);
          })
        },
        mounted() {
          
        },
        updated() {
        },
        destroyed() {
          
        },
        methods: {
          // 图片加载，计算高度
          ...mapActions(['addCart']),
          imageLoad(){
            this.$refs.scroll.scroll.refresh()
            this.getThemeTopY()
          },
          // 点击nav-bar滚动到的对应位置
          titleClick(index){
            // console.log(index);
            this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
          },
          // 滚动到对应位置时nav-bar对应显示
          contentScroll(position){
            const y = -position.y
            
            // [0, 14269, 15029, 15363]
            // 分四段，做对比，index分别=0,1,2,3
            let length = this.themeTopYs.length
            for(let i=0;i<length-1;i++){
              if(this.currentIndex !== i && (y >= this.themeTopYs[i] && y < this.themeTopYs[i+1])){
                this.currentIndex = i
                this.$refs.nav.currentIndex = this.currentIndex
              }
            }
          },
          // 添加到购物车
          addToCart(){
            console.log(111);
            // 1.获取商品信息
            const product = {}
            product.image = this.topImages[0]
            product.title = this.goods.title
            product.desc = this.goods.desc
            product.price = this.goods.realPrice
            product.iid = this.iid 
            // 2.将商品添加到购物车中
            // this.$store.commit('addCart', product)
            this.addCart(product).then(res => {
              this.$toast.show(res, 2000)
            })

          }
        },
    }
</script>

<style scoped>
  #detail{
    height: 100vh;
  }
  .detail-nav{
    position: relative;
    z-index: 11;
    background-color: #fff;
  }
  .content{
    height: calc(100% - 44px - 49px);
  }
</style>
