import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    texto: '',
    tareas: [],
    currentCommunity: {}
  },
  mutations: {
      setCommunity(state, value){
        state.currentCommunity = value
      }
  },
  actions: {
      
  },
  modules: {
  }
})
