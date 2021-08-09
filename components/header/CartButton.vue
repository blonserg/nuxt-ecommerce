<template>
  <div>
    <client-only>
      <a
        :href="'/cart'"
        :disabled="!productsQuantity > 0 "
        class="header-cart-wrap"
      >
        <div class="header-cart-count" v-if="productsQuantity > 0">
          {{ productsQuantity }}
        </div>
        <b-button>
          Корзина
        </b-button>
      </a>
    </client-only>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      products: state => state.cart.products
    }),
    productsQuantity () {
      if (this.products) {
        return this.products.length
      } else return 0
    }
  }
}
</script>

<style lang="scss" module>

</style>
