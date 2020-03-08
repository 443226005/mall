import Vue from 'vue'
import VueRouter from 'vue-router'

//安装插件
Vue.use(VueRouter)

const Home = ()=>import('../views/home/Home')
const Cart = ()=>import('../views/cart/Cart')
const Profile = ()=>import('../views/profile/Profile')
const Category = ()=>import('../views/category/Category')


//创建对象
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/category',
    component:Category,
  },
  {
    path:'/cart',
    component:Cart,
  },
  {
    path:'/profile',
    component:Profile,
  },
]
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router;