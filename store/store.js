import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import * as data from './data'

Vue.use(Vuex)

export const store = new Vuex.Store({
  actions,
  mutations,
  getters,
  data,
})
