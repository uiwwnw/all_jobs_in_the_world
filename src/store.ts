import Vue from 'vue';
import Vuex from 'vuex';
import VueLodash from 'vue-lodash';
import router from './router';

Vue.use(VueLodash);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pages: ['home', 'about', 'history', 'settings'],
    pageName: 'home',
    profile: {
      myName: '',
      id: ''
    },
    favorite: [1],
    done: [],
    success: [],
    false: []
  },
  mutations: {
    paging(state, obj) {
      state.pageName = state.pages[obj.number];
      router.push({
        path: `/${state.pageName ? state.pageName : '404'}`,
      });
    },
    addFavorite(state, obj) {
      state.favorite.push(obj.id);
    },
    removeFavorite(state, obj) {
      state.favorite = Vue._.without(state.favorite, obj.id);
    },
  },
  actions: {
    paging(context, obj: object) {
      context.commit('paging', obj);
    },
    toggleFavorite(context, obj: object) {
      if(Vue._.includes(context.state.favorite, obj.id)) {
        context.commit('removeFavorite', obj);
      } else {
        context.commit('addFavorite', obj);
      }
    },
  },
});
