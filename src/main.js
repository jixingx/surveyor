import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入重置css样式
import "./assets/style/resets.css"

import fastClick from 'fastclick' //300毫秒点击延迟问题的解决方案（尤其是移动端）优化用户体验

fastClick.attach(document.body);//fastclick自带的一个方法

//vant
import { Button } from 'vant';
Vue.use(Button);




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
