import Vue from 'vue';
import Vuex from 'vuex';
import * as _ from "lodash";
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pages: ['home', 'about', 'history', 'settings'],
    pageName: 'home',
    profile: {
      myName: '',
      id: '',
    },
    favorite: [1], // TODO DB
    done: [], // TODO DB
    success: [], // TODO DB
    false: [], // TODO DB
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
      state.favorite = _.without(state.favorite, obj.id);
    },
  },
  actions: {
    paging(context: any, obj: any) {
      context.commit('paging', obj);
    },
    toggleFavorite(context: any, obj: any) {
      if (_.includes(context.state.favorite, obj.id)) {
        context.commit('removeFavorite', obj);
      } else {
        context.commit('addFavorite', obj);
      }
    },
  },
});
