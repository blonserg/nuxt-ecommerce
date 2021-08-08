<template>
  <div class="product-item product-item--list">
    <nuxt-link :to="`/product/${product.pSlug}`">
      <img
        v-lazy="product.image.imgL"
        class="product-item-image product-item-image--list"
      />
    </nuxt-link>
    <div class="product-item-infolist">
      <div class="product-item-ttl">
        {{ product.pName }}
        <span>BiotexhUsa</span>
      </div>
      <div class="product-item-raiting">
        <b-form-rating></b-form-rating>
        <div class="product-item-feed">
          <a href="#">124 отзыва</a>
        </div>
      </div>
      <div class="product-item-price product-item-price--inline">
        <span>{{ product.pPrice }}</span>
        <span class="product-item-cur">$</span>
        <span class="product-item-price _old">1800$</span>
      </div>
    </div>
    <BuyButton :product="product" />
  </div>
</template>

<script>
import BuyButton from '~~/components/common/BuyButton'
export default {
  components: {
    BuyButton
  },
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  p {
        max-width: 270px;
    height: 35px;
  }
}
</style>
