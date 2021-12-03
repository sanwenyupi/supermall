<template>
    <div id="profile">
      <nav-bar class="nav"><div slot="center">我的</div></nav-bar>
      <div class="user" @click="userClick">
        <img src="../../assets/img/profile/avatar.svg" alt="">
        <span class="login" v-if="!this.isLogin">登录 / 注册</span>
        <span class="login" v-else> {{this.user}} </span>
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
          <!-- v-if="this.$store.state.isLogin" -->
          <van-button class="quit" type="danger" @click="quit" v-if="isLogin" >退出登录</van-button>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import NavBar from '../../components/common/navbar/NavBar.vue'
import { Dialog } from 'vant'
import { mapGetters } from 'vuex';
    export default {
        components: {
          NavBar
        },
        computed: {
          ...mapGetters(['isLogin','user'])
        },
        methods: {
          toCart(){
            this.$router.push('/cart')
          },
          userClick(){
            if(this.user !== ''){
              this.$toast.show('已经登录！',1500)
              return
            }
            setTimeout(() => {
              this.$router.push('/login')
            }, 300);
          },
          quit(){
            Dialog.confirm({
              title: '',
              message: '是否退出？',
            }).then(() => {
                this.$store.commit('changeState', {
                  isLogin: true,
                  user: ''
                })
              })

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
      position: relative;
      height: 50%;
      width: 100%;
      background-color: #fff;
      margin-top: 4%;
    }
    .cart div{
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #f6f6f6;
    }
    .quit{
      position: absolute;
      left: 50%;
      top: 40%;
      width: 100%;
      transform: translateX(-50%);
      background-color: var(--color-tint);
      border: 1px solid var(--color-tint);
      height: 50px
    }
</style>
