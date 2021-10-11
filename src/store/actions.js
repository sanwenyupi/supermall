export default {
  addCart(context, payload){
    return new Promise((resolve, reject) => {
      // 判断添加的商品是否重复
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      if(oldProduct){
        // oldProduct.count ++
        context.commit('addCounter', oldProduct)
        resolve('当前商品数量+1！')
      }else{
        payload.count = 1
        // state.cartList.push(payload)
        context.commit('addToCart', payload)
        resolve('添加到购物车成功！')
      }
    })
  }
}