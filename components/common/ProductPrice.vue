<template>
    <div class="product-price-wrap">
        <span class="product-price"
        v-bind:class="{ _promo: price.pPricePromo || price.pPriceOld}">
        <span class="product-price-value">{{ price.pPrice }}</span>
        <span class="product-price-cur">{{ price.currency }}</span>
        </span>
        <span class="product-price _old" v-if="price.pPriceOld">
        <span class="product-price-value">{{price.pPriceOld}}</span>
        <span class="product-price-cur">{{ price.currency }}</span>
        </span>
    </div>
</template>

<script>
export default {
  props: {
    price: {
      type: Object,
      // TODO: refactor and remove default params by using real data;
      default: {
        pPrice: 100,
        pPriceOld: 80,
        currency: '$'
      }
    },
  },
}
</script>