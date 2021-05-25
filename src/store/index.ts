import {createStore} from 'vuex'
import actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutations'

export default createStore({
  actions,
  getters,
  state,
  mutations
})