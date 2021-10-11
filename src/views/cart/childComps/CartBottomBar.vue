<template>
    <div class="bottom-bar">
      <!-- 左边选择框 -->
      <div class="check-box">
        <check-button class="check-button" :is-checked="isSelectAll" @click.native="selectAll"/>
        <span>全选</span>
      </div>

      <!-- 中间总价格 -->
      <div>
        合计：{{totalPrice}}
      </div>

      <!-- 右侧结算 -->
      <div class="calculate" @click="calcClick">
        去结算({{checkedLength}})
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import CheckButton from "../../../components/content/checkButton/CheckButton.vue"
import {mapGetters} from 'vuex'

    export default{
      components: { CheckButton },
      computed: {
        ...mapGetters(['cartList']),
        totalPrice(){
          return '￥' + this.cartList.filter(item => item.checked).reduce((preVal, item) => {
            return preVal + item.price * item.count
          },0).toFixed(2)
        },
        checkedLength(){
          return this.cartList.filter(item => item.checked).reduce((preVal, item) => {
            return preVal + item.count
          },0)
        },
        isSelectAll(){
          return this.cartList.length === 0 ? false : this.cartList.every((item, index) => item.checked)
        }
      },
      methods: {
        selectAll(){
          if(this.isSelectAll){
            this.cartList.forEach(item => item.checked = false)
          }else{
            this.cartList.forEach(item => item.checked = true)
          }
        },
        calcClick(){
          if(!this.isSelectAll){
            
          }
        }
      },

    }
</script>

<style scoped>
    .bottom-bar{
      height: 40px;
      line-height: 40px;
      position: relative;
      background-color: #eee;
      display: flex;
      justify-content: space-between;
    }
    .check-box{
      display: flex;
      align-items: center;
      margin-left: 10px;
    }
    .check-button{
      width: 20px;
      height: 20px;
      line-height: 20px;
      margin-right: 5px;
    }
    .calculate{
      width: 90px;
      background-color: red;
      color: #fff;
      text-align: center;
    }
</style>
