import Vue from 'vue';
import './plugins/vuetify';
import * as _ from "lodash";
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

router.beforeEach((to: any, from: any, next: any):void => {
  store.state.pageName = to.name;
  next();
});


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
