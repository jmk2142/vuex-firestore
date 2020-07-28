import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import { db } from "@/fire";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    todos: []
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    UNSET_USER(state) {
      state.user = null;
    },
    ...vuexfireMutations
  },
  actions: {
    signIn({ commit }, user) {
      commit("SET_USER", user);
    },
    signOut({ commit }) {
      commit("UNSET_USER");
    },
    bindTodos: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('todos', db.collection('todos'));
    }),
    unbindTodos: firestoreAction(({ unbindFirestoreRef }) => {
      return unbindFirestoreRef('todos');
    })
  },
  modules: {
  },
  getters: {
    todosCount: state => {
      return state.todos.length;
    }
  }
})
