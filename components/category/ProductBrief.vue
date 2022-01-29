<template>
  <div class="product-item product-item--list">
    <nuxt-link :to="`/product/${product.slug}`">
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
        <ProductPrice :price="{pPrice: product.price}" />
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
