require('swiper/dist/css/swiper.css')

import Vue from 'vue'
import router from './router'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)



Vue.config.productionTip = false

new Vue({
  router,
  VueAwesomeSwiper,
  render: h => h(App)
}).$mount('#app')

