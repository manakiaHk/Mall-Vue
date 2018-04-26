// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Router from './router/index'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Store from './vuex/store'
import Vuex from 'vuex'

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(Router);
Vue.use(ElementUI);
Vue.use(Vuex);


new Vue({
  el: '#app',
  router:Router,
  store:Store,
  template: '<App/>',
  components: { App }
});
