<template>
    <div class="goods-list">
      <goods-list-item v-for="item in goods" :goods-item="item"/>
    </div>
</template>

<script type="text/ecmascript-6">
import GoodsListItem from './GoodsListItem.vue'
    export default {
      components: {
        GoodsListItem
      },
      props: {
        goods: {
          type: Array,
          default(){
            return []
          }
        }
      }
    }
</script>

<style scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }  
</style>
