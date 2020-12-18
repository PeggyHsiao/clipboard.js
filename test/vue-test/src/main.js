import Vue from 'vue'
import App from './App.vue'
import VueClipboards from 'vue-clipboards';
import router from '@/router/index'

Vue.config.productionTip = false
Vue.use(VueClipboards);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
