import { formatRating, globalRating } from '~/utils/formatRating'
import prepareBreadcrumbsData from '~/utils/prepareBreadcrumbsData'

const PRODUCT_URL = 'https://aminostore.com.ua/api/product/'
const REQUEST_CALL_URL = 'https://aminostore.com.ua/api/one-click/'
const ROOT_URL = 'https://aminostore.com.ua/'

export const state = () => ({
  product: {},
  customer: {
    phone: ''
  },
  reviewModal: false
})

export const mutations = {
  SET_PRODUCT (state, data) {
    const tasteOptions = [
      { text: 'Выберите вкус', value: '0' }
    ]
    const sizeOptions = [
      { text: 'Выберите размер', value: '0' }
    ]
    data.sizes.forEach((size) => {
      const formattedSize = { text: size, value: size }
      sizeOptions.push(formattedSize)
    })
    data.tastes.forEach((taste) => {
      const formattedTaste = { text: taste, value: taste }
      tasteOptions.push(formattedTaste)
    })
    let product_images = null
    if (data.product_images.length > 0) {
      product_images = data.product_images.map((image, idx) => {
        return {
          url: `${ROOT_URL}${image}`,
          title: data.title,
          id: idx
        }
      })
    }

    const product = {
      ...data,
      // product_reviews
      rating: globalRating(data.product_reviews) || 0,
      price: {
        pPrice: data.price,
        pPricePromo: data.is_promoted ? data.price : null,
        pPriceOld: data.priceOld || null
      },
      product_images,
      sizeAttr: {
        selected: 0,
        options: sizeOptions
      },
      tasteAttr: {
        selected: 0,
        options: tasteOptions
      },
      recommended: data.recommended.length > 0 ? data.recommended : null,
      properties: [
        { name: 'Размер порции', value: data.serving_size, unit: 'г' },
        { name: 'Калории', value: data.calories, unit: false },
        { name: 'Жиры', value: data.fat, unit: 'г' },
        { name: 'Углеводы', value: data.carbohydrates, unit: 'г' },
        { name: 'Белки', value: data.proteins, unit: 'г' },
        { name: 'Соль', value: data.salt, unit: 'г' }
      ],
      quantity: 1
    }
    state.product = product
  },
  UPDATE_PRODUCT_ATTRIBUTE (state, { attr, value }) {
    state.product[attr].selected = value
  },
  UPDATE_PRODUCT_QUANTITY (state, value) {
    state.product.quantity = value
  },
  UPDATE_CUSTOMER_PHONE (state, value) {
    state.customer.phone = value
  },
  OPEN_MODAL (state) {
    state.reviewModal = true
  },
  CLOSE_MODAL (state) {
    state.reviewModal = false
  }
}

export const actions = {
  async getProduct ({ commit, dispatch }, { route }) {
    try {
      const url = PRODUCT_URL + route.params.ProductSlug
      const response = await this.$axios.$get(url)
      const crumbs = prepareBreadcrumbsData('product', route, response)

      commit('SET_PRODUCT', response)
      dispatch('setBreadcrumbs', crumbs, { root: true })
    } catch (err) {
      throw new Error(err)
    }
  },
  async requestOneClickOrder ({ commit, dispatch }, payload) {
    const { product, customer } = payload
    const data = {
      product_id: product.id,
      page_url: `${ROOT_URL}product/${product.slug}`,
      phone: customer.phone
    }
    this.$axios.$post(REQUEST_CALL_URL, data)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        throw new Error(err)
      })
  }
}

export const getters = {
  product: state => state.product,
  quantity: state => state.product.quantity,
  customerPhone: state => state.customer.phone,
  reviewModal: state => state.reviewModal
}
