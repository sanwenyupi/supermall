<template>
    <div id="category-content">
      <category-left 
      :categoryList="categoryList" 
      @leftItem="leftItem"/>
      <category-right 
      :itemName="itemName"
      :currentIndex="currentIndex"
      />
    </div>
</template>

<script type="text/ecmascript-6">
import CategoryLeft from './CategoryLeft.vue'
import CategoryRight from './CategoryRight.vue'
    export default {
        components: {
          CategoryLeft,
          CategoryRight
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
            itemName: '',
            currentIndex: 0
          }
        },
        methods: {
          leftItem(item, index){
            console.log(item.title, index);
            this.itemName = item.title
            this.currentIndex = index
          }
        },
    }
</script>

<style scoped>
    #category-content{
      display: flex;
      background-color: #fff;
    }

</style>
