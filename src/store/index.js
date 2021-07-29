import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    texto: '',
    tareas: [],
    currentCommunity: {},
    communities: [
      { id: 'anime', icon: 'face-recognition', text: 'Anime'},
      { id: 'gaming', icon: 'poker-chip', text: 'Gaming'},
      { id: 'tecnologia', icon: 'laptop', text: 'Tecnología'},
      { id: 'programacion', icon: 'xml', text: 'Programación'},
      { id: 'ia', icon: 'state-machine', text: 'Inteligencia Artificial'},
      { id: 'deportes', icon: 'trophy-variant', text: 'Deportes'},
      { id: 'ciberseguridad', icon: 'security', text: 'Ciberseguridad'},
      { id: 'sw&hw', icon: 'monitor-edit', text: 'Software & Hardware'},
      { id: 'electronica', icon: 'memory', text: 'Electrónica'},
      { id: 'musica', icon: 'music', text: 'Música'},
      { id: 'itm', icon: 'card-account-details-star-outline', text: 'Instituto Tecnológico'}
    ]
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
