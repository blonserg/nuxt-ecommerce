<template>
  <div class="product-item product-item--list">
    <nuxt-link :to="`/product/${product.slug}`" :class="product.price && product.regular_price ? 'product-item-image-discounted': ''">
      <img
        v-lazy="product.image"
        :alt="product.title"
        class="product-item-image product-item-image--list"
      />
    </nuxt-link>
    <div class="product-item-infolist">
      <div class="product-item-ttl">
        {{ product.title }}
        <span>{{ product.brand }}</span>
      </div>
      <div class="product-item-raiting">
        <b-form-rating
          variant="warning"
          :no-border="true"
          size="sm"
          class="rating-block"
          :value="product.rating"
          inline
          readonly
        />
        <div v-if="product.product_reviews_qty" class="product-item-feed">
          (<a href="#">{{ product.product_reviews_qty }}</a>)
        </div>
      </div>
      <div class="product-item-price">
        <!-- todo: refactor by using Product Price Component -->
        <ProductPrice :price="{pPrice: product.price, pPriceOld: product.regular_price}" />
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

<style lang="scss" scoped>
.product-item-image--list {
  object-fit: cover;
  min-height: 320px;
  max-height: 320px;
}

.product-item-image-discounted {
  position: relative;
  &:after {
    position: absolute;
    content: url('../../assets/png/flame.png');
    width: 21px;
    height: 32px;
    display: block;
    z-index: 5;
    top: 10px;
    right: 26px;
  }
}
</style>
