<template>
    <div class="cart-list">
      <cart-list-item 
          v-for="(item, index) in cartList" 
          :item-info="item" 
          :key="index" />
    </div>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'

import CartListItem from './CartListItem.vue'

  export default {
      components: { 
        CartListItem
      },
      computed: {
        ...mapGetters(['cartList'])
      }
  }
</script>

<style scoped>
</style>
