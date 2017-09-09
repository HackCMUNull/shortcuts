
const types = {
  COMMIT_DIRECTIONS: 'COMMIT_DIRECTIONS'
}

const state = {
  directions: []
}

const mutations = {
  [types.COMMIT_DIRECTIONS] (state, directions) {
    state.directions = directions
  }
}

const getters = {
  directions (state) {
    return state.directions
  }
}

const actions = {
  async setDirections ({commit}, directions) {
    commit(types.COMMIT_DIRECTIONS, directions)
  }
}

const plugins = [
]

export default {
  state,
  getters,
  actions,
  mutations,
  plugins
}
