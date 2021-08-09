<template>
  <div>
    <div :class="$style.page">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div :class="$style.inner">
              <h1 :class="$style.head">
                Hydro Whey Zero + Iso WhEy Zero 
              </h1>
              <p :class="$style.text">
                При покупке HYDRO WHEY ZERO получи 25% скидки на протеин ISO WHEY ZERO (акция действует до 21.06.21)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="group">
        <div class="group-ttl">
          Акционные товары
        </div>
        <div class="group-href">
          Смотреть все
        </div>
      </div>
      <VueSlickCarousel :arrows="true" :dots="true" :slidesToShow="3" :slidesToScroll="1">
        <div class="product-item">
          <div class="product-item-image">
            <img src="" alt="">
          </div>
          <div class="product-item-info">
            <div class="product-item-ttl">
              Iso zero whey plus
              <span>BiotexhUsa</span>
            </div>
            <div class="product-item-price">
              <span>1800</span>
              <span class="product-item-cur">$</span>
              <span class="product-item-price _old">1800$</span>
            </div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-item-image">
            <img src="" alt="">
          </div>
          <div class="product-item-info">
            <div class="product-item-ttl">
              Iso zero whey plus
              <span>BiotexhUsa</span>
            </div>
            <div class="product-item-price">
              <span>1800</span>
              <span class="product-item-cur">$</span>
              <span class="product-item-price _old">1800$</span>
            </div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-item-image">
            <img src="" alt="">
          </div>
          <div class="product-item-info">
            <div class="product-item-ttl">
              Iso zero whey plus
              <span>BiotexhUsa</span>
            </div>
            <div class="product-item-price">
              <span>1800</span>
              <span class="product-item-cur">$</span>
              <span class="product-item-price _old">1800$</span>
            </div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-item-image">
            <img src="" alt="">
          </div>
          <div class="product-item-info">
            <div class="product-item-ttl">
              Iso zero whey plus
              <span>BiotexhUsa</span>
            </div>
            <div class="product-item-price">
              <span>1800</span>
              <span class="product-item-cur">$</span>
              <span class="product-item-price _old">1800$</span>
            </div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-item-image">
            <img src="" alt="">
          </div>
          <div class="product-item-info">
            <div class="product-item-ttl">
              Iso zero whey plus
              <span>BiotexhUsa</span>
            </div>
            <div class="product-item-price">
              <span>1800</span>
              <span class="product-item-cur">$</span>
              <span class="product-item-price _old">1800$</span>
            </div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-item-image">
            <img src="" alt="">
          </div>
          <div class="product-item-info">
            <div class="product-item-ttl">
              Iso zero whey plus
              <span>BiotexhUsa</span>
            </div>
            <div class="product-item-price">
              <span>1800</span>
              <span class="product-item-cur">$</span>
              <span class="product-item-price _old">1800$</span>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  components: { VueSlickCarousel },
}
</script>

<style lang="scss" module>
  .inner {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .head {
    font-weight: 700;
    color: white;
    font-size: 56px;
    text-transform: uppercase;
    line-height: 60px;
  }
  .text {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.6); 
  }
  .page {
    background: linear-gradient(271.4deg, #0D1115 1.93%, #15262F 100%);
  }
</style>
