import Vue from 'vue'
import Vuex from 'vuex'
import { fetchItems } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // INFO should be disabled in production
  state: {
    spices: [],
    spice: '',
    inPreOrder: []
  },
  getters: {
    getAvailableSpices: state => state.spices.filter(spice => spice.isAvailable === true),
    getPreOrderList: state => state.inPreOrder,
    getItemById: state => id => state.spices.find(spice => spice.orderId === id)
  },
  actions: {
    async fetchSpices ({ state, commit }) {
      const spices = await fetchItems()
      commit('ADD_SPICES', spices)

      return spices
    },
    addSpiceInPreOrder: ({ commit }, payload) => {
      commit('addSpiceInPreOrder', payload)
    },
    removeSpiceFromPreOrder: ({ commit }, payload) => {
      commit('removeSpiceFromPreOrder', payload)
    }
  },
  mutations: {
    ADD_SPICES (state, spices) {
      state.spices = spices
    },
    addSpiceInPreOrder: (state, payload) => {
      state.inPreOrder.push(payload)
    },
    removeSpiceFromPreOrder: (state, element) => {
      const index = state.inPreOrder.indexOf(element)
      state.inPreOrder.splice(index, 1)
    }
  }
})
