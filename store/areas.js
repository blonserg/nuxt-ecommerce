const AREAS_URL = 'https://api.hh.ru/areas'

export const state = () => ({
  areas: null,
  cities: null
})

export const mutations = {
  SET_AREAS (state, areas) {
    state.areas = areas
  },
  SET_CITIES (state, cityId) {
    state.cities = null
    state.areas.forEach(el => {
      if (el.id === cityId) {
        state.cities = el.areas
        state.cities.push({
          id: '2000',
          name: 'Киев',
          parent_id: '115'
        })
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
