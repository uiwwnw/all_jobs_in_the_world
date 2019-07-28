import Vue from 'vue';
import './plugins/vuetify';
import VueLodash from 'vue-lodash';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
Vue.use(VueLodash);

router.beforeEach(function (to, from, next) {
  store.state.pageName = to.name;
  next();
});


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
