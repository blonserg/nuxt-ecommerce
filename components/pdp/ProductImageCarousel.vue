<template>
  <div class="product-image-carousel" v-if="imagesSet">
    <div class="product-image-carousel_main">
      <VueSlickCarousel
        ref="imageCarousel"
        :dots="true"
        :focus-on-select="true"
      >
        <div
          v-for="slide in imagesSet"
          :key="slide.id"
          class="merch-main_image-item d-flex justify-content-center"
        >
          <div class="product-images">
            <img :src="slide.url" :alt="slide.title" />
          </div>
        </div>
      </VueSlickCarousel>
    </div>
    <div class="product-image-carousel_nav image-carousel-nav d-none d-md-block">
      <a
        v-for="item in imagesSet"
        :key="item.id"
        href=""
        class="image-carousel-nav_item active"
        @click.prevent="goToSlide"
      >
        <img :src="item.url" :alt="item.title" />
      </a>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel
  },
  props: {
    imagesSet: {
      type: Array,
      required: true
    }
  },
  methods: {
    goToSlide: function (event) {
      const imageIndex = Array.from(event.currentTarget.parentElement.children).indexOf(event.currentTarget)
      this.$refs.imageCarousel.goTo(imageIndex)
    }
  }
}
</script>
