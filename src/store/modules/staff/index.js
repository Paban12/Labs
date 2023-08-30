import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

export const Staff = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}