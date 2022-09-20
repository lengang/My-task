import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'  //静态导入

//路由懒加载
const Home = () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')



Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/My_header',
        name: 'my_header',
        component: () => import("../components/children/My_header.vue")
      },
      {
        path: '/subject',
        name: 'subject',
        component: () => import("../components/children/subject.vue")
      },
      {
        path: '/center',
        name: 'center',
        component: () => import("../components/children/center.vue")
      },
      {
        path: '/commodity',
        name: 'commodity',
        component: () => import("../components/children/commodity.vue")
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    redirect: '/login'
  },
]
const router = new VueRouter({
  routes
})
//路由守卫-进行全局路由拦截




export default router
