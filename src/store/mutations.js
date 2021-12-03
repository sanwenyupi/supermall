export default {
  addCounter(state, payload){
    payload.count++
  },
  addToCart(state, payload){
    payload.checked = true
    state.cartList.push(payload)
  },
  changeState(state, payload){
    state.userInfo.user = payload.user
    state.userInfo.isLogin = !payload.isLogin
  }
}