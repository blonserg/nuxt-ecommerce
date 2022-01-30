import Vue from 'vue'

export const state = () => ({
  cart: [],
  cartCount: 0,
  totalPrice: 0,
  discount: 0,
  promocode: '',
  totalQuantity: 0
})
export const mutations = {
  ADD_TO_CART (state, item) {
    const found = state.cart.find(product => product.id === item.id)
    if (found) {
      found.quantity += item.quantity
      found.totalPrice.pPrice = found.quantity * found.price.pPrice
    } else {
      state.cart.push(item)
      const totalPrice = {
        ...item.price
      }
      totalPrice.pPrice *= item.quantity
      Vue.set(item, 'totalPrice', totalPrice)
      item.totalPrice.pPrice - item.quantity * item.price.pPrice
    }

    this.commit('cart/UPDATE_TOTAL_QUANTITY')
  },
  REMOVE_FROM_CART (state, productId) {
    state.cart = state.cart.filter(product => product.id !== productId)
    this.commit('cart/UPDATE_TOTAL_QUANTITY')
  },
  UPDATE_TOTAL_QUANTITY (state) {
    let totalQuantity = 0
    state.cart.forEach((product) => {
      totalQuantity += Number(product.quantity)
    })
    state.totalQuantity = totalQuantity
  },
  UPDATE_PROMOCODE (state, data) {
    state.discount = 0
    state.promocode = ''

    state.discount = data.discount
    state.promocode = data.value
  },
  UPDATE_TOTAL_PRODUCT_PRICE (state) {
    const products = state.cart.map((item) => {
      const product = item
      product.totalPrice.pPrice = product.totalPrice.pPrice ? product.price.pPrice * product.quantity : 0
      return product
    })
    state.cart = products
  },
  UPDATE_PRODUCT_QUANTITY (state, { id, quantity }) {
    const products = state.cart.map((item) => {
      const product = item
      if (product.id === id) {
        product.quantity = quantity
      }
      return product
    })

    state.cart = products
    this.commit('cart/UPDATE_TOTAL_QUANTITY', state.cart)
    this.commit('cart/UPDATE_TOTAL_PRODUCT_PRICE', state)
  },
  REMOVE_ITEMS (state) {
    state.cart = []
    state.cartCount = 0
    state.totalPrice = 0
    state.discount = 0
    state.promocode = ''
    state.totalQuantity = 0
  }
}
export const actions = {
}

export const getters = {
  totalQuantity: state => state.totalQuantity,
  cartProducts: state => state.cart,
  totalPrice: state => state.totalPrice,
  discount: state => state.discount,
  promocode: state => state.promocode
}
