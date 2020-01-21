import Vue from 'vue'
import App from './App.vue'
import router from './routers'

Vue.config.productionTip = false

new Vue({
  //把router实例注入到vue实例中
  router,
  render: h => h(App)
}).$mount('#app')
