import Vue from 'vue'
import App from './App.vue'
import VueDrupalEntity from '@'

Vue.use(VueDrupalEntity)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
