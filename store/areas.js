const AREAS_URL = 'https://api.hh.ru/areas'

export const state = () => ({
  areas: null,
  cities: null
})

export const mutations = {
  SET_AREAS (state, areas) {
    state.areas = areas
  },
  SET_CITIES (state, regiondId) {
    state.cities = null
    state.areas.forEach(el => {
      if (el.id === regiondId) {
        state.cities = el.areas
      }
    })
  }
}

export const actions = {
  async fetchAreas ({ commit }) {
    const { data } = await this.$axios.get(AREAS_URL)

    commit('SET_AREAS', data[1].areas)
  }
}

export const getters = {
  areas: state => state.areas,
  cities: state => state.cities
}
