import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
var VueScrollTo = require('vue-scrollto');
import "aos/dist/aos.css";  
import AOS from 'aos';
import i18n from './i18n';
import VueMarqueeSlider from 'vue-marquee-slider';


Vue.use(VueMarqueeSlider)

AOS.init({
  duration:1200,
  once:false
})
// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: -60,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: true,
     y: true
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
