<template>
  <div class="main">
    <nav-bar>
      <div slot="left" class="back" @click="back">
        <img src="../../assets/img/login/chevron-left.svg" alt="">
      </div>
    </nav-bar>
    <div class="login-page" v-if="showLogin">
      <div class="logo">
        <img src="../../assets/img/login/twitter.svg">
      </div>
      <h1>登录</h1>
      <van-form>
        <van-field 
        v-model="username" 
        label="用户名：" 
        placeholder="用户名" 
        key="username"
        clearable
        />
        <van-field 
        v-model="password" 
        label="密码：" 
        placeholder="密码" 
        type="password"
        key="password"
        clearable
        />
        <div style="margin: 16px;">
          <van-button class="button" round block type="info" @click="login">登录</van-button>
        </div>
      </van-form>
      <div class="change-page">
        <span v-if="showLogin" @click="togglePage">没有账号？立即注册</span>
      </div>
    </div>
    <div class="login-page" v-else>
      <div class="logo">
        <img src="../../assets/img/login/twitter.svg">
      </div>
      <h1>注册</h1>
      <van-form>
        <van-field 
        v-model="username" 
        label="用户名：" 
        placeholder="用户名" 
        />
        <van-field 
        v-model="password" 
        label="密码：" 
        placeholder="密码" 
        type="password"
        />
      <div style="margin: 16px;">
        <van-button class="button" round block type="info" @click="register" >注册</van-button>
      </div>
      </van-form>
      <div class="change-page">
        <span v-if="showRegister" @click="togglePage">已有账号？立即登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
  export default {
    components: {
      NavBar
    },
    props: {
      
    },
    data() {
      return {
        showLogin: true,
        showRegister: false,
        username: '',
        password: '',
        isCorrect: false,
      }
    },
    computed: {
      formData(){
        return {
          username: this.username,
          password: this.password
        }
      }
    },
    methods: {
      back(){
        this.$router.push('/profile')
      },
      togglePage(){
        this.showLogin = !this.showLogin
        this.showRegister = !this.showRegister
        this.username = ''
        this.password = ''
      },
      login(){
        if(!this.username || !this.password){
          this.$toast.show('请输入用户名或密码',1500)
          return 
        }
        this.$axios.post(this.HOST + '/api/login', this.formData).then(res => {
          console.log(res.data);
          console.log(res.data.msg)
          if(res.data.status == 1){
            this.$store.commit('changeState',{
              isLogin: false,
              user: res.data.user
            })
            this.$toast.show('登录成功', 1000)
            setTimeout(() => {
              this.$router.go(-1)
            }, 1000)
          }else if(res.data.status == -1){
            this.$toast.show('密码错误',2000)
          }else if(res.data.status == 0){
            this.$toast.show('用户名不存在，请先注册',2000)
          }
        }).catch(err => {
          console.log('出错了', err);
        })
        // 初始化输入框
        this.username = ''
        this.password = ''
      },
      register(){
        if(!this.username || !this.password){
          this.$toast.show('请输入用户名或密码',1500)
          return 
        }
        this.$axios.post(this.HOST + '/api/register', this.formData).then(res => {
          console.log(res.data);
          console.log(res.data.msg)
          if(res.data.status == 1){
            this.$toast.show(res.data.msg, 200)
            this.togglePage()
          }else if(res.data.status == 0){
            this.$toast.show(res.data.msg, 2000)
            this.togglePage()
          }
        })
      }
    }
  }
</script>
<style scoped>
/* @import url(); 引入css类 */
.back img{
  margin-top: 10px;
}
.main{
  height: 100vh;
  background-color: #f6f6f6;
  overflow: scroll;
}
.logo{
  text-align: center;
  margin-top: 10%;
}
.logo img{
  width: 40%;
}
h1{
  text-align: center;
  margin-top: 5%;
  color: #000;
}
p{
  text-align: center;
  color: red;
}
.van-form{
  padding-top: 5%;
}
.van-button{
  margin-top: 10%;
  background-color: #ff5777;
  border: 1px solid #ff5777;
}
.change-page{
  text-align: center;
}

</style>