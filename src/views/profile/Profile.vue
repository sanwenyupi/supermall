<template>
    <div id="profile">
      <nav-bar class="nav"><div slot="center">我的</div></nav-bar>
      <div class="user">
        <img src="../../assets/img/profile/avatar.svg" alt="">
        <span class="login">登录 / 注册</span>
        <i class="el-icon-arrow-right right"></i>
      </div>
      <div class="my">
        <div class="my-item">
          <div>
            <span class="number">0.00 </span>元
          </div>
          <div>
            我的余额
          </div>
        </div>
        <div class="my-item">
          <div>
            <span class="number">0 </span>个
          </div>
          <div>
            我的红包
          </div>
        </div>
        <div class="my-item">
          <div>
            <span class="number">0 </span>个
          </div>
          <div>
            我的收藏
          </div>
        </div>
      </div>
      <div class="vip">
        <div>
          <img src="../../assets/img/profile/vip.svg" alt="">
          会员卡</div>
        <div>
          <img src="../../assets/img/profile/shopping.svg" alt="">
          积分商城</div>
        <div>
          <img src="../../assets/img/profile/message.svg" alt="">
          我的消息</div>
      </div>
      <div class="cart">
        <div @click="toCart">
          <img src="../../assets/img/profile/cart.svg" alt="">
          我的购物车</div>
        <div>
          <img src="../../assets/img/profile/pointer.svg" alt="">
          下载APP</div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import NavBar from '../../components/common/navbar/NavBar.vue'
    export default {
        components: {
          NavBar
        },
        methods: {
          toCart(){
            this.$router.push('/cart')
          }
        }
    }
</script>

<style scoped>
    #profile{
      background-color: #f6f6f6;
      height: 100vh;
    }
    .nav{
      background-color: var(--color-tint);
      color: #fff;
    }
    .user{
      position: relative;
      background-color: var(--color-tint);
      color: #fff;
    }
    .user img{
      width: 20%;
      vertical-align: middle;
      margin: 3%;
    }
    .right{
      position: absolute;
      right: 3%;
      top: 50%;
      transform: translateY(-50%);
      font-size: 18px;
    }
    .my{
      display: flex;
      height: 10%;
      background-color: #fff;
    }
    .number{
      color: #ff5f3e;
      font-weight: bold;
      font-size: 18px;
    }
    .my-item{
      flex: 1;
      height: 100%;
      text-align: center;
      padding: 16px;
      border: 1px solid #f6f6f6;
    }
    .vip{
      background-color: #fff;
      margin-top: 4%;

    }
    .vip div{
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #f6f6f6;
    }
    img{
      width: 20px;
      vertical-align: middle;
      margin-left: 2%;
      margin-right: 2%;
    }
    .cart{
      height: 100%;
      background-color: #fff;
      margin-top: 4%;
    }
    .cart div{
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #f6f6f6;
    }
</style>
