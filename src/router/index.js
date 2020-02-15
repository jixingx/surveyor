import Vue from 'vue'
import VueRouter from 'vue-router'

import OneLogin from "../views/Login/OneLogin.vue";//手机一键登录
import Login from "../views/Login/Login.vue";//登录
import Register from "../views/Login/Register.vue";//注册
import NickName from "../views/Login/NickName.vue";//设置昵称
import ForgetPsd from "../views/Login/ForgetPsd.vue";//忘记密码
import RebuildPsd from "../views/Login/RebuildPsd.vue";//重设密码
import Home from "../views/home/Home.vue";//消息首页
import NoticeDetails from "../views/home/NoticeDetails.vue";//消息详情
import Search from "../views/home/Search.vue";//搜索
import Task from "../views/task/Task.vue";//任务
import TaskDetails from "../views/task/TaskDetails.vue";//任务详情
import MeasData from "../views/task/MeasData.vue";//测量数据
import Reward from "../views/reward/Reward.vue";//测量数据
import My from "../views/my/My.vue";//我的
import MyNickName from "../views/my/MyNickName.vue";//昵称
import MySex from "../views/my/MySex.vue";//性别
import MyCity from "../views/my/MyCity.vue";//地区
import AccountBind from "../views/my/AccountBind.vue";//账号绑定
import MyQr from "../views/my/MyQr.vue";//我的二维码
import ApplyCash from "../views/my/ApplyCash.vue";//申请提现
import StartUp from "../views/startup/StartUp.vue";//启动页


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {path:'/',redirect: '/onelogin'},
  { path: '/onelogin',name:'onelogin' ,component: OneLogin },
  { path: '/login',name:'login' ,component: Login },
  { path: '/register',name:'register' ,component: Register },
  { path: '/nickname',name:'nickname' ,component: NickName },
  { path: '/forgetpsd',name:'forgetpsd' ,component: ForgetPsd },
  { path: '/rebuildpsd',name:'rebuildpsd' ,component: RebuildPsd },
  { path: '/home',name:'home' ,component: Home },
  { path: '/noticedetails',name:'noticedetails' ,component: NoticeDetails },
  { path: '/search',name:'search' ,component: Search },
  { path: '/task',name:'task' ,component: Task },
  { path: '/taskdetails',name:'taskdetails' ,component: TaskDetails },
  { path: '/measdata',name:'measdata' ,component: MeasData },
  { path: '/reward',name:'reward' ,component: Reward },
  { path: '/my',name:'my' ,component: My },
  { path: '/mynickname',name:'mynickname' ,component: MyNickName },
  { path: '/mysex',name:'mysex' ,component: MySex },
  { path: '/mycity',name:'mycity' ,component: MyCity },
  { path: '/accountbind',name:'accountbind' ,component: AccountBind },
  { path: '/myqr',name:'myqr' ,component: MyQr },
  { path: '/applycash',name:'applycash' ,component: ApplyCash },
  { path: '/startup',name:'startup' ,component: StartUp },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to) => // 到哪个页面去？
  // console.log(from) => // 从哪个页面来？
  // next() => // 一个回调函数
  //console.log(to.path=="/onelogin")
  if(to.path=="/onelogin"){
    //console.log(localStorage.getItem('Isqd')=="true")
    if(localStorage.getItem('Isqd')=="true"){
      next()
    }else{
      next('/startup')
    }
  }else{
    next()
  }
})

export default router
