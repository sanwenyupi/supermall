<template>
    <div class="recommend">
      <div v-for="item in recommends" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image" alt="">  
          <div>{{item.title}}</div>
        </a>   
      </div> 
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
          recommends: {
            type: Array,
            default(){
              return []
            }
          }
        }
    }
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 85%;
    margin-bottom: 5px;
  }
</style>
