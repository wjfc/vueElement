<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <p>{{count}}</p>
    <el-button @click.native="startHacking">Let's do it</el-button>
    <el-button @click.native="add">add</el-button>
    <el-button @click.native="addAsync">add1000</el-button>
  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!'
    }
  },
  computed: mapState({
    count: state => state.count
  }),
  methods: {
    add() {
      this.$store.commit('add', {num: 10})
    },
    addAsync() {
      this.$store.dispatch('addAsync')
    },
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
