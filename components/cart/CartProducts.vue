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
      :key="product.id"
      class="cart-product"
    >
    <CartItem :product="product" />
    </div>
  </div>
</template>

<script>
import CartItem from '~/components/cart/CartIem'

export default {
  components: {
    CartItem,
  },
  props: {
    productsFromCart: {
      type: Array,
      default: () => []
    }
  },
}
</script>