<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
    export default {
        props: {
          goods: {
            type: Object,
            default(){
              return {}
            }
          }
        }
    }
</script>

<style scoped>
  .base-info{
    border-bottom: 5px solid #eee;
  }
  .info-title{
    padding: 5px;
    font-weight: 600;
  }
  .info-price{
    padding: 5px;
  }
  .n-price{
    color: salmon;
    font-size: 18px;
  }
  .o-price{
    color: #aaa;
    text-decoration: line-through;
    font-size: 13px;
    padding: 5px;
  }
  .discount{
    position: relative;
    display: inline-block;
    border-radius: 10px;
    background-color: rgb(243, 139, 157);
    color: #fff;
    font-weight: 600;
    padding: 3px;
    font-size: 12px;
    top: -8px;
  }
  .info-other{
    display: flex;
  }
  .info-other span {
    flex: 1;
    padding: 5px;
    font-size: 12px;
  }
  .info-other span:nth-child(2){
    text-align: center;
  }
  .info-other span:last-child{
    text-align: right;
  }
  .info-service{
    display: flex;
    flex-wrap: nowrap;
  }
  .info-service-item{
    flex: 1;
    font-size: 12px;
  }
  .info-service-item img{
    width: 15px;
  }
</style>
