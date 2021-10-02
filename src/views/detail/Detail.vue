<template>
    <div id="detail">
      <detail-nav-bar></detail-nav-bar>
      <detail-carousel :top-images="topImages"/>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
    </div>
</template>

<script type="text/ecmascript-6">
import DetailNavBar from '../../views/detail/childComps/DetailNavBar.vue'
import DetailCarousel from './childComps/DetailCarousel.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'

import {getDetail, Goods, Shop} from '../../network/detail'

    export default {
        name: 'Detail',
        data() {
          return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {}
          }
        },
        components: {
          DetailNavBar,
          DetailCarousel,
          DetailBaseInfo,
          DetailShopInfo
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
          })
        },
    }
</script>

<style scoped>
    
</style>
