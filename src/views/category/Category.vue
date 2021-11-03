<template>
    <div id="category">
        <nav-bar class="category-nav-bar"><div slot="center">分类</div></nav-bar>
        <category-content :categoryList="categoryList" />
    </div>
</template>

<script type="text/ecmascript-6">
import NavBar from '../../components/common/navbar/NavBar.vue'
import CategoryContent from './childComps/CategoryContent.vue'
import {getCategory} from '../../network/category'

import Scroll from '../../components/common/scroll/Scroll.vue'

    export default {
      components: {
        NavBar,
        CategoryContent,
        
      },
      data() {
        return {
          categoryList: []
        }
      },
      created(){
        this.getLeftCategory()
      },
      methods: {
        getLeftCategory(){
          getCategory().then(res => {
            console.log(res.data.category.list)
            this.categoryList = res.data.category.list
          })
        }
      },
        
    }
</script>

<style scoped>
  .category-nav-bar{
    font-size: 17px;
    font-weight: bold;
    color: #fff;
    background-color: var(--color-tint);
    position: relative;
    z-index: 10;
  }
</style>
