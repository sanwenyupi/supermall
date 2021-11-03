<template>
    <div class="left">
      <scroll class="content">
        <div 
        v-for="(item, index) in categories"
        class="left-item"
        :class="{active: currentIndex === index}"
        @click="itemClick(index)"
        :key="index"
        >
          <span>{{item.title}}</span>
        </div>
      </scroll>
    </div>
</template>

<script type="text/ecmascript-6">
import Scroll from '../../../components/common/scroll/Scroll.vue'
    export default {
        components: { 
          Scroll 
        },
        props: {
          categories: {
            type: Array,
            default(){
              return []
            }
          }
        },
        data() {
          return {
            currentIndex: 0
          }
        },
        methods: {
          itemClick(index){
            this.currentIndex =index
            this.$emit('selectItem',index)
          }
        },
    }
</script>

<style scoped>
  .left{
    width: 25%;
    height: 100%;
    background-color: #f6f6f6;
  } 
  .active{
    color: var(--color-high-text);
    background-color: #fff;
    position: relative;
  }
  .active::before{
    content:'';
    position: absolute;
    width: 6px;
    height: 50px;
    background-color: var(--color-tint);
    top: 0;
    left: 0;
  }
  .left-item{
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .content{
    height: calc(100vh - 40px - 49px);
    touch-action: none;
  }
</style>
