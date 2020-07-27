<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>From VUEX: {{ $store.state.user.displayName }}</h1>
    <p>From VUEX: {{ $store.state.user.email }}</p>
    <hr>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
