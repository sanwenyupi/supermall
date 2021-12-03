export default{
  cartLength(state){
    return state.cartList.length
  },
  cartList(state){
    return state.cartList
  },
  isLogin(state){
    return state.userInfo.isLogin
  },
  user(state){
    return state.userInfo.user
  }
}