import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入重置css样式
import "./assets/style/resets.css"

//引入自定义图标文件
import "./assets/font/iconfont.css";

import fastClick from 'fastclick' //300毫秒点击延迟问题的解决方案（尤其是移动端）优化用户体验

fastClick.attach(document.body);//fastclick自带的一个方法

//vant
import { 
  Button,
  NavBar,
  Field,
  Checkbox,
  Tab,
  Tabs,
  Tabbar, 
  TabbarItem,
  Icon,
  Cell,
  Tag,
  Panel,
  Search,
  Popup,
  Divider,
  DropdownMenu,
  DropdownItem,
  ActionSheet,
  RadioGroup, 
  Radio,
  IndexBar, 
  IndexAnchor,
  Col, 
  Row,
  Swipe, 
  SwipeItem
} from 'vant';
Vue.use(Button)
   .use(NavBar)
   .use(Field)
   .use(Checkbox)
   .use(Tab)
   .use(Tabs)
   .use(Tabbar)
   .use(TabbarItem)
   .use(Icon)
   .use(Cell)
   .use(Tag)
   .use(Panel)
   .use(Search)
   .use(Popup)
   .use(Divider)
   .use(DropdownMenu)
   .use(DropdownItem)
   .use(ActionSheet)
   .use(RadioGroup)
   .use(Radio)
   .use(IndexBar)
   .use(IndexAnchor)
   .use(Col)
   .use(Row)
   .use(Swipe)
   .use(SwipeItem);




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
