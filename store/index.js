export const state = () => ({
  login: false,
})

export const mutations = {
  login(state) {
    state.login = !state.login
  },
}

export const actions = {
  changeLogin(context) {
    context.commit('login')
  },
}

export const getters = {
  getLogin(state) {
    return state.login
  },
}
