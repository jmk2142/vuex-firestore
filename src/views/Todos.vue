<template lang="html">
  <div>
    <button @click="start">BIND TODOS</button>
    <button @click="stop">UNBIND TODOS</button>
    <hr>
    <transition name="fade">
      <div v-if="count">
        <h1>{{ count }} TODOS</h1>
        <ul>
          <li v-for="todo in todos" :key="todo.id">
            {{ todo.task }}
          </li>
        </ul>
      </div>
      <!-- <Loading v-else></Loading> -->
    </transition>

  </div>
</template>

<script>
// import Loading from './Loading';

export default {
  name: "Todos",
  components: {
    // Loading
  },
  computed: {
    todos() {
      return this.$store.state.todos
    },
    count() {
      return this.$store.getters.todosCount
    }
  },
  methods: {
    start() {
      // QUESTION: Is best practice to dispatch inspect
      // methods, lifecycle hooks, or router?
      this.$store.dispatch("bindTodos");
    },
    stop() {
      this.$store.dispatch("unbindTodos");
    }
  },
  // https://jsfiddle.net/posva/6w3ks04x/ shows it using lifecycle hooks
  created() {
    this.$store.dispatch("bindTodos");
  },
  unmounted() {
    this.$store.dispatch("unbindTodos");
  }
}
</script>

<style lang="css" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
