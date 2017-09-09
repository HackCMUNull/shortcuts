
const types = {
  COMMIT_DIRECTIONS: 'COMMIT_DIRECTIONS',
  COMMIT_TITLE: 'COMMIT_TITLE'
}

const state = {
  directions: [],
  title: ''
}

const mutations = {
  [types.COMMIT_DIRECTIONS] (state, directions) {
    state.directions = directions
  },
  [types.COMMIT_TITLE] (state, title) {
    state.title = title
  }
}

const getters = {
  directions (state) {
    return state.directions
  },
  title (state) {
    return state.title
  }
}

const actions = {
  async setDirections ({commit}, directions) {
    commit(types.COMMIT_DIRECTIONS, directions)
  },
  async setTitle ({commit}, title) {
    commit(types.COMMIT_TITLE, title)
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
