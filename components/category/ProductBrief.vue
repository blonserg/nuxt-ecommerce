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
        <b-form-rating variant="warning" :no-border="true" size="sm" class="rating-block" value="3.5" inline></b-form-rating>
        <div class="product-item-feed">
          (<a href="#">124 отзыва</a>)
        </div>
      </div>
      <div class="product-item-price">
        <!-- todo: refactor by using Product Price Component -->
        <ProductPrice :price="{pPrice: 1800}"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductPrice from '~~/components/common/ProductPrice'
export default {
  components: {
    ProductPrice
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
</style>
