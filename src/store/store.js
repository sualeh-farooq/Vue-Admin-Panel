// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   // State use as a global object with initial state that can be accesible through the app at any point
//   state: {
//     value: "Function Apply Through Mutuation",
//     number: 6,
//     API : 'H7dS82ND7286w79027dh278D'
//   },

//   mutations: {
//     updateNum(state,payload){
//         state.number = payload.multiple
//     }
//   },
//   actions: {
//     setNum(context){ 
//       context.commit('updateNum', this.state.number * 2)
//     }
//   },
//   getters: {
//     secretKey(state) {
//       return state.API
//     },
//     second(state,getters) {
//       return  getters.secretKey 
//     }
//   },
//   modules: {},
// });
