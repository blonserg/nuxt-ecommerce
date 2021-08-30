<template>
  <div v-if="productsFromCart.length > 0">
    <div class="cart-head d-none d-md-flex">
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
        <nuxt-link class="cart-product-image_link" :to="`/product/${product.meta.pSlug}`">
          <div class="cart-product-image_wrap">
            <img
              v-lazy="product.meta.images.imgL"
              class="cart-product-image"
            />
          </div>
        </nuxt-link>
        <div class="cart-product-wrap">
          <div class="cart-product-name">
            {{ product.meta.pName }}
            <span class="cart-product-category">
              Biotech
            </span>
          </div>
          <div class="cart-product-price">
            <ProductPrice :price="{ pPrice: product.meta.pPrice }" />
          </div>
          <div class="cart-product-amount">
            <b-form-spinbutton
              id="selectQuantity"
              v-model="product.qty"
              class="product-quantity"
              min="1"
              max="10"
              @change="onQuantityChangeHandler($event, product)"
            >
              <svg
                slot="increment"
                hasFocus="true"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.0166 9.91667H13.8784C14.3274 9.91667 14.6914 10.2866 14.6914 10.75C14.6914 11.2102 14.3281 11.5833 13.8784 11.5833H11.0166V14.5037C11.0166 14.9619 10.6541 15.3333 10.2 15.3333C9.74894 15.3333 9.38332 14.9626 9.38332 14.5037V11.5833H6.5215C6.07249 11.5833 5.70849 11.2134 5.70849 10.75C5.70849 10.2898 6.07175 9.91667 6.5215 9.91667H9.38332V6.99631C9.38332 6.53811 9.74579 6.16667 10.2 6.16667C10.651 6.16667 11.0166 6.53736 11.0166 6.99631V9.91667ZM10.2 20.75C4.7878 20.75 0.400391 16.2728 0.400391 10.75C0.400391 5.22715 4.7878 0.75 10.2 0.75C15.6121 0.75 19.9995 5.22715 19.9995 10.75C19.9995 16.2728 15.6121 20.75 10.2 20.75ZM10.2 19.0833C14.7101 19.0833 18.3663 15.3524 18.3663 10.75C18.3663 6.14763 14.7101 2.41667 10.2 2.41667C5.68983 2.41667 2.03365 6.14763 2.03365 10.75C2.03365 15.3524 5.68983 19.0833 10.2 19.0833Z" fill="#257BF4" />
              </svg>
              <svg
                slot="decrement"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.79953 20.75C4.3874 20.75 0 16.2728 0 10.75C0 5.22715 4.3874 0.75 9.79953 0.75C15.2117 0.75 19.5991 5.22715 19.5991 10.75C19.5991 16.2728 15.2117 20.75 9.79953 20.75ZM9.79953 19.0833C14.3096 19.0833 17.9658 15.3524 17.9658 10.75C17.9658 6.14763 14.3096 2.41667 9.79953 2.41667C5.28942 2.41667 1.63326 6.14763 1.63326 10.75C1.63326 15.3524 5.28942 19.0833 9.79953 19.0833ZM13.478 9.91667C13.927 9.91667 14.291 10.2866 14.291 10.75C14.291 11.2102 13.9277 11.5833 13.478 11.5833H6.12109C5.67208 11.5833 5.30808 11.2134 5.30808 10.75C5.30808 10.2898 5.67134 9.91667 6.12109 9.91667H13.478Z" fill="#257BF4" />
              </svg>
            </b-form-spinbutton>
          </div>
          <div class="cart-product-total">
            <ProductPrice :price="{ pPrice: (product.meta.pPrice * product.qty) | round }" />
          </div>
          <div class="cart-product-delete">
            <CloseOrDeleteButton
              button-type="delete"
              @click.native="onRemoveClickHandler(product)"
            />
          </div>
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
    onQuantityChangeHandler: debounce(function onQuantityChangeHandler (value, product) {
      const qty = value
      this.setProductQuantity({ productId: product.productId, qty })
    }, 400)

  }
}
</script>

<style lang="scss" module>
</style>
