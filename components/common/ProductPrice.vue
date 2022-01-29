<template>
  <div class="product-price-wrap">
    <span
      class="product-price"
      :class="{ _promo: price.pPricePromo || price.pPriceOld}"
    >
      <span class="product-price-value">{{ price.pPrice || price.pPricePromo }}</span>
      <span class="product-price-cur">{{ currency }}</span>
    </span>
    <span v-if="price.pPriceOld" class="product-price _old">
      <span class="product-price-value">{{ price.pPriceOld }}</span>
      <span class="product-price-cur">{{ currency }}</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: Object,
      required: true
    },
    currency: {
      type: String,
      default: () => '₴'
    }
  }
}
</script>
