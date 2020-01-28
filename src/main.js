import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import Vant from 'vant';
import axios from 'axios'
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$axios=axios
new Vue({
  //把router实例注入到vue实例中
  router,
  render: h => h(App)
}).$mount('#app')
