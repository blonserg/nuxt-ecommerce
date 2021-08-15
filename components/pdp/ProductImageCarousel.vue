<template>
    <div class="product-image-carousel">
        <div class="product-image-carousel_main">
          <VueSlickCarousel
            ref="imageCarousel"
            :dots="true"
            :focusOnSelect="true">
            <div class="merch-main_image-item d-flex justify-content-center"
                v-for="slide in imagesSet"
                :key="slide.id">
              <div class="product-images"><img src="@/assets/png/product-image.png" :alt="slide.title"></div>
            </div>
          </VueSlickCarousel>
        </div>
        <div class="product-image-carousel_nav image-carousel-nav">
            <a href=""
               class="image-carousel-nav_item active"
               v-on:click.prevent="goToSlide"
               v-for="item in imagesSet"
               :key="item.id">
                    <img src="@/assets/png/product-image.png" alt="">
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
        goToSlide: function(event) {
            const imageIndex = [...event.currentTarget.parentElement.children].indexOf(event.currentTarget);
            this.$refs.imageCarousel.goTo(imageIndex);
        },
    }
}
</script>
