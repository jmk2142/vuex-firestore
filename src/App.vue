<template>
  <div id="app">
    <button v-if="user" @click="logout">LOGOUT</button>
    <button v-else @click="login">LOGIN</button>

    <span v-if="user">
      <img :src="user.photoURL">
      Hello {{ user.displayName }}
      <button @click="printUser">PRINT USER</button>
    </span>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todos">Todos</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { firebase } from "./fire";

export default {
  name: "App",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    login() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    logout() {
      firebase.auth().signOut();
    },
    printUser() {
      console.log(this.$store.state.user);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
img {
  width: 50px;
  border-radius: 50px;
}
</style>
