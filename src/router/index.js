import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      footShow: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      footShow: true
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      footShow: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      footShow: true
    }
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router