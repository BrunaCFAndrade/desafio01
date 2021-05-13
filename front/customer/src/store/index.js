import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = {
  customers: []
}
const getters = {
  allCustomers: (state) => state.customers
}
const actions = {
  getCustomers({ commit }) {
    axios.get('http://localhost:3001/api/customer')
      .then(response => {
        commit('SET_CUSTOMERS', response.data)
      })
  },
  getAdimplentesCustomers({ commit }) {
    axios.get('http://localhost:3001/api/customer/Adimplentes')
      .then(response => {
        commit('SET_CUSTOMERS', response.data)
      })
  },
  getInadimplentesCustomers({ commit }) {
    axios.get('http://localhost:3001/api/customer/Inadimplentes')
      .then(response => {
        commit('SET_CUSTOMERS', response.data)
      })
  }
}

const mutations = {
  SET_CUSTOMERS(state, customers) {
    state.customers = customers
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})