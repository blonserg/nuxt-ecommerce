// function for Mock API
import mock from '../utils/mockServer'

const sleep = m => new Promise(r => setTimeout(r, m))
export const state = () => ({
  categoriesList: [],
  currentCategory: {},
  currentProduct: {
    alsoBuyProducts: [],
    interestingProducts: []
  },
  breadcrumbs: [],
  pagination: [],
})
export const mutations = {
  SET_CATEGORIES_LIST (state, categories) {
    state.categoriesList = categories
  },
  SET_CURRENT_CATEGORY (state, category) {
    state.currentCategory = category
  },
  SET_CURRENT_PRODUCT (state, product) {
    state.currentProduct = product
  },
  SET_BREADCRUMBS (state, crumbs) {
    state.breadcrumbs = crumbs
  },
  RESET_BREADCRUMBS (state) {
    state.breadcrumbs = []
  },
  SET_PAGE_PAGINATION(state, data) {
    const pagination = {
        currentPage: data.currentPage,
        rows: data.count,
        next: data.next,
        previous: data.previous,
        perPage: 3,
    }
    state.pagination = pagination;
  },
  RESET_PAGINATION(state) {
    state.pagination = []
  },
  UPDATE_CURRENT_PAGE(state, currentPage) {
    state.pagination.currentPage = currentPage
  },
}
export const actions = {
  async getProductsListRandom ({ commit }) {
    // simulate api work
    await sleep(50)
    const [products, productsImages] = await Promise.all(
      [
        this.$axios.$get('/mock/products.json'),
        this.$axios.$get('/mock/products-images.json')
      ]

    )
    const idsArray = (mock.sampleSize(products, 5)).map(p => p.id)
    return mock.getProductsByIds(products, productsImages, idsArray)
  },

  async setBreadcrumbs ({ commit }, data) {
    await commit('SET_BREADCRUMBS', data)
  },
  async getCategoriesList ({ commit }) {
    try {
      await sleep(50)
      await commit('SET_CATEGORIES_LIST', mock.categories)
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },

}
export const getters = {
  breadcrumbs: state => state.breadcrumbs,
  pagination: state => state.pagination
}