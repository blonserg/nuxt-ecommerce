<template>
  <div v-if="productsFromCart.length > 0" >
    <div class="cart-head">
      <div class="cart-head-product">
        Товар
      </div>
      <div class="cart-head-price">
        Цена
      </div>
      <div class="cart-head-amount">
        Количество
      </div>
      <div class="cart-head-total">
        Итого
      </div>
    </div>
    <div
      v-for="product in productsFromCart"
      :key="product.productId"
      class="cart-product"
    >
      <template>
        <nuxt-link :to="`/product/${product.meta.pSlug}`">
          <img class="cart-product-image"
            v-lazy="product.meta.images.imgL"
          />
        </nuxt-link>
        <div class="cart-product-name">
          {{ product.meta.pName }}
        </div>
        <div class="cart-product-price">
          {{ product.meta.pPrice }}
          <!-- todo: refactor by using Product Price Component -->
          <ProductPrice />
        </div>
        <div class="cart-product-amount">
          <input
            :value="product.qty"
            type="number"
            :min="1"
            :max="1000"
            @input.prevent="onQuantityChangeHandler($event, product)"
          />
          <!-- <b-form-spinbutton 
            :value="product.qty"
            :min="1"
            :max="1000"
            @change.prevent="onQuantityChangeHandler($event, product)"
          ></b-form-spinbutton> -->
        </div>
        <div class="cart-product-total">
          {{ (product.meta.pPrice * product.qty) | round }}
        </div>
        <div class="cart-product-delete">
          <CloseOrDeleteButton
            button-type="delete"
            @click.native="onRemoveClickHandler(product)"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import CloseOrDeleteButton from '~~/components/common/input/CloseOrDeleteButton.vue'
import round from '~~/mixins/round'
import { mapActions } from 'vuex'
import debounce from 'lodash.debounce'
import ProductPrice from '~~/components/common/ProductPrice'

export default {
  components: {
    CloseOrDeleteButton,
    ProductPrice
  },
  mixins: [round],
  props: {
    productsFromCart: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapActions({
      setProductQuantity: 'cart/setProductQuantity',
      removeProduct: 'cart/removeProduct'
    }),
    onRemoveClickHandler (product) {
      this.removeProduct(product.productId)
    },
    onQuantityChangeHandler: debounce(function onQuantityChangeHandler (event, product) {
      const qty = event.target.value
      this.setProductQuantity({ productId: product.productId, qty })
    }, 400)

  }
}
</script>

<style lang="scss" module>
</style>
