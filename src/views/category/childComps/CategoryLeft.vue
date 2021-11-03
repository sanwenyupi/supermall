<template>
    <div class="left">
      <scroll class="content">
        <div 
        v-for="(item, index) in categoryList"
        class="left-item"
        :class="{active: currentIndex === index}"
        @click="itemClick(item, index)"
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
          categoryList: {
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
          itemClick(item, index){
            this.currentIndex =index
            this.$emit('leftItem',item, index)
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
    width: 4px;
    height: 20px;
    background-color: var(--color-tint);
    top: 15px;
    left: 3px;
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
