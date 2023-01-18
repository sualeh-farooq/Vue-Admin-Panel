<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="vuex-con">
      <p>VueX Data , {{ $store.state.value }}</p>
      <br>
      <p>
        Number : {{ $store.state.number }} 
      </p>
    </div>

    <button @click="changeVal">Click to change Number</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import store from '@/store/store'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods : {
    changeVal() {
        // this.$store.commit('updateNum' , {multiple : this.$store.state.number * 2})
        this.$store.dispatch('setNum')
    },
  }
}
</script>


<style>
.vuex-con {
  background-color: aqua ;
  color: black;
  font-size: large;
  width: max-content;
  margin: 10px auto;
  padding: 10px;

}
</style>