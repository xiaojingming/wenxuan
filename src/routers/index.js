//引入vuerouter
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Cart from '../pages/Cart.vue'
import Discover from '../pages/Discover.vue'
import Goods from '../pages/Goods.vue'
import List from '../pages/List.vue'
import Login from '../pages/Login.vue'
import Mine from '../pages/Mine.vue'
import Reg from '../pages/Reg.vue'
import Notfound from '../pages/NotFound.vue'

import Vue from 'vue'
//使用vue-router
Vue.use(VueRouter)
//实例化router并配置参数
let router=new VueRouter({
    routes:[{
        path:'/home',
        name:'home',
        component:Home
    },{
        path:'/',
        redirect:'/home'
    },{
        path:'/cart',
        name:'cart',
        component:Cart
    },{
        path:'/discover',
        name:'discover',
        component:Discover
    },{
        path:'/goods/:id',
        name:'goods',
        component:Goods
    },{
        path:'/list',
        name:'list',
        component:List
    },{
        path:'/login',
        name:'login',
        component:Login
    },{
        path:'/mine',
        name:'mine',
        component:Mine
    },{
        path:'/reg',
        name:'reg',
        component:Reg
    },{
        path:'*',
        component:Notfound
    }]
})
export default router
