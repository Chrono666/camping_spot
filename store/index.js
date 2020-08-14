export const state = () => ({
  login: false,
  securityCode: '1234',
  overlay: false,
  numberOfPeople: [],
})

export const mutations = {
  login(state, payload) {
    state.login = payload
  },
  changeSecurityCode(state, payload) {
    state.securityCode = payload
  },
  changeOverlay(state, payload) {
    state.overlay = payload
  },
  numberOfPeopleArray(state) {
    const number = []
    for (let i = 0; i <= 20; i++) {
      number.push(i)
    }
    state.numberOfPeople = number
  },
}

export const actions = {
  changeLogin(context, payload) {
    context.commit('login', payload)
  },
  changeSecurityCode(context, payload) {
    context.commit('changeSecurityCode', payload)
  },
  changeOverlay(context, payload) {
    context.commit('changeOverlay', payload)
  },
  numberOfPeopleArray(context) {
    context.commit('numberOfPeopleArray')
  },
}

export const getters = {
  getLogin(state) {
    return state.login
  },
  getSecurityCode(state) {
    return state.securityCode
  },
  getOverlay(state) {
    return state.overlay
  },
  numberOfPeopleArray(state) {
    return state.numberOfPeople
  },
}
