// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

import $ from 'jquery'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import VueResource from 'vue-resource' 
import store from './store/index'
Vue.use(VueResource)

import Vuex from 'Vuex'
Vue.use(Vuex)

Vue.config.productionTip = false
Vue.vm={}
Vue.vm['router']=router;
Vue.vm['store']=store;


/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store:store,
  template: '<App/>',
  components: { App }
})
