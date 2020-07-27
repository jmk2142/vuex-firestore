<template>
  <div class="hello">
    <p>CHILD COMPONENT - from VUEX: {{ email }}</p>
    <p>Nums: {{ double }} {{ triple }}</p>

    <input type="text" v-model.lazy="inputEmail">

    <ul>
      <li v-for="hobby in hobbies" :key="hobby">{{ hobby }}</li>
    </ul>
    <p>LENGTH: {{ $store.getters.hobbiesLength }}</p>

    <hr>

    <p>AGE: {{ $store.state.user.age }}</p>
    <button @click="increaseAge">INCREMENT</button>
    <button @click="decreaseAge">DECREMENT</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    num: 1
  }),
  computed: {
    inputEmail: {
      get() {
        return this.$store.state.user.email;
      },
      set(val) {
        this.$store.dispatch('changeEmail', val);
      }
    },
    double() {
      return this.num * 2;
    },
    triple() {
      return this.num * 3;
    },
    ...mapState({
      email: state => state.user.email,
      hobbies: "hobbies"
    })
  },
  methods: {
    increaseAge() {
      this.$store.commit('INCREMENT_AGE', 3);
    },
    decreaseAge() {
      this.$store.commit('DECREMENT_AGE');
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
