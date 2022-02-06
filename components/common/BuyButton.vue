<template>
  <div v-if="product" class="merch-btns-inner">
    <client-only>
      <b-button
        v-if="!isProductAdded"
        variant="primary"
        @click.prevent="buyClickHandler"
      >
        Купить
      </b-button>
      <a
        v-else
        href="/cart"
      >
        Уже в корзине
      </a>
    </client-only>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      cartProducts: 'cart/cartProducts'
    }),
    isProductAdded () {
      return this.cartProducts.find(p => p.id === this.product.id)
    }
  },
  methods: {
    ...mapMutations({
      addToCart: 'cart/ADD_TO_CART'
    }),
    buyClickHandler () {
      this.addToCart(this.product)
      // this.$modal.show('customer-cart', { addedProduct: this.product.id })
    }
  }
}
</script>
