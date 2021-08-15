<template>
  <div class="merch-btns-inner" v-if="product">
    <client-only>
      <button class="btn btn-primary"
        v-if="!isProductAdded"
        @click.prevent="buyClickHandler"
      >
        Купить
      </button>
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
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getProductsInCart: 'cart/getProductsInCart'
    }),
    isProductAdded () {
      return this.getProductsInCart.find(p => p.productId === this.product.id)
    }
  },
  methods: {
    ...mapActions({
      addProduct: 'cart/addProduct'
    }),
    buyClickHandler () {
      this.addProduct(this.product.id)
      // this.$modal.show('customer-cart', { addedProduct: this.product.id })
    }
  }
}
</script>

<style lang="scss" module>
</style>
