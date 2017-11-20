const defaultState = {
  open: false,
  address: null,
  publicKey: null,
  delegate: null
}

const state = defaultState

// getters
const getters = {
  wallet: state => state
}

// actions
const actions = {
  openWallet ({ commit, state }, data) {
    commit('openWallet', data)
  },
  closeWallet ({ commit, state }) {
    commit('closeWallet')
  },
  setDelegate ({commit, state}, delegate) {
    commit('setDelegate', delegate)
  }
}

// mutations
const mutations = {
  openWallet (state, data) {
    state.open = true
    state.address = data.address
    state.publicKey = data.publicKey
  },
  closeWallet (state) {
    state.open = false
    state.address = state.publicKey = null
  },
  setDelegate (state, delegate) {
    state.delegate = delegate
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
