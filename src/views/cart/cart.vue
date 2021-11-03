<template>
    <div class="cart">
      <!-- 导航 -->
      <nav-bar class="nav-bar">
        <div slot="center">购物车({{cartLength}})</div>
      </nav-bar>
      <!-- 商品列表 -->
      <scroll class="content" :probeType="3" ref="scroll">
        <cart-list />
      </scroll>
      <!-- 底部汇总 -->
      <cart-bottom-bar />
    </div>
</template>

<script type="text/ecmascript-6">
import NavBar from '././../../components/common/navbar/NavBar.vue'

import CartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'

import {mapGetters} from 'vuex'
import Scroll from '../../components/common/scroll/Scroll.vue'

    export default {
        components: {
          NavBar,
          CartList,
          Scroll,
          CartBottomBar
        },
        computed: {
          ...mapGetters(['cartLength'])
        },
        activated() {
          this.$refs.scroll.scroll.refresh()
        },
    }
</script>

<style scoped>
    .cart{
      height: 100vh;
    }
    .nav-bar{
      background-color: var(--color-tint);
      color: #fff;
      font-weight: bold;
      font-size: 17px;
    }
    .content{
      height: calc(100% - 44px - 49px - 40px);
      overflow: hidden;
    }
</style>
