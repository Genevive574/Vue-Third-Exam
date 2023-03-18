import { createStore } from 'vuex'

export default createStore({
  state: {
    value : 0
  },
  getters: {
  },
  mutations: {
    setValue(state,payload){
      state.value = payload
    },
    increment(state){
      state.value++
    },

    decrement(state){
      state.value--
    },

    reset(state){
      state.value = 0
    }
  },
  actions: {
  },
  modules: {
  }
})
