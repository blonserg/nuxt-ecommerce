import prepareBreadcrumbsData from '~/utils/prepareBreadcrumbsData'
const CATEGORY_PRODUCTS_URL = 'https://aminostore.com.ua/api/category/'

export const state = () => ({
  currentCategory: {},
  categoryProducts: []
})

export const mutations = {
  SET_CATEGORY_PRODUCTS (state, data) {
    const products = data.map((product) => {
      return {
        ...product,
        image: product.image ? `https://aminostore.com.ua/media/${product.image}` : ''
      }
    })
    state.categoryProducts = products
  },
  SET_CURRENT_CATEGORY (state, categoryData) {
    state.currentCategory = {
      id: categoryData.id,
      title: categoryData.title,
      slug: categoryData.slug
    }
  }
}

export const actions = {
  async getCategoryProducts ({ commit, dispatch }, { category }) {
    try {
      // const url = CATEGORY_PRODUCTS_URL + route.params.CategorySlug
      const response = await this.$axios.$get(CATEGORY_PRODUCTS_URL + category)
      // const crumbs = prepareBreadcrumbsData('category', route, response)
      // const pagination = {
      //   currentPage: page || 1,
      //   count: response.count ? response.count : null,
      //   next: response.next ? response.next : null,
      //   previous: response.previous ? response.previous : null
      // }
      // commit('SET_PAGE_PAGINATION', pagination, { root: true })
      // commit('SET_CATEGORY_PRODUCTS', response.products)
      commit('SET_CURRENT_CATEGORY', response)
      // dispatch('setBreadcrumbs', crumbs, { root: true })
    } catch (e) {
      throw new Error(e)
    }
  }
}

export const getters = {
  category: state => state.currentCategory,
  categoryProducts: state => state.categoryProducts,
  pagination: state => state.pagination
}
