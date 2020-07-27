import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      displayName: "Jin Kuwata",
      email:"jmk2142@tc.columbia.edu",
      age: 21
    },
    hobbies: ["code","karate","cooking"],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ]
  },
  mutations: {
    INCREMENT_AGE(state, payload) {
      state.user.age += payload;
    },
    DECREMENT_AGE(state) {
      state.user.age--;
    },
    UPDATE_EMAIL(state, payload) {
      state.user.email = payload;
    }
  },
  actions: {
    changeEmail({commit}, payload) {
      commit('UPDATE_EMAIL', payload);
    }
  },
  modules: {
  },
  getters: {
    hobbiesLength: state => {
      return state.hobbies.length;
    },
    doneTodos: (state) => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosLength: (state, getters) => {
      return getters.doneTodos.length;
    },
    activeCount: (state, getters) => {
      return state.todos.length - getters.doneTodos.length
    },
    // getEventById: (state) => (id) => {
    //   return something;
    // }

  }
})
